const connection = require('./elasticsearch');
const mongoConnection = require('../db/connect');
const versionModel = require('../model/SearchVersion');

/**
 * fetch current index name from database
 */
const currentIndexVersion = async () => {
    return versionModel.findOne({})
        .then(data => {
        return data;
    }).catch(err => {
            return err;
        });
};


/**
 * index name template in elasticsearch
 */
function generateIndexName(version) {
    var prefix = 'node_js_indexing_';
    return prefix + 'version_' + version;
}


/**
 * after reindex remove old versions in elastic
 */
function removeOldVersion(newVersion) {
    try {
        versionModel.deleteMany({}, () => {
        });
        const version = new versionModel({version: newVersion});
        version.save();
        if (newVersion >= 1) {
            var old = Number(newVersion) - 1;
            return connection.indices.delete({
                index: generateIndexName(old),
                ignore: [404]
            }).then();
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports.currentIndexVersion = currentIndexVersion;
module.exports.generateIndexName = generateIndexName;
module.exports.removeOldVersion = removeOldVersion;

