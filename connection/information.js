const connection = require('./elasticsearch');
const mongoConnection = require('../db/connect');
const versionModel = require('../model/SearchVersion');

async function currentIndexVersionTest() {
    var versionM =  await versionModel.findOne().sort('-_id');
    console.log(versionM)
}

function currentIndexVersion() {

    versionModel.findOne({})
        .then(function (version) {
            /*if (!version) {
                console.log(0)
            } else {
                console.log(version.version)
            }*/
           // return version.version;
        })
        .catch(function (err) {
        });
   return 22;
}

function generateIndexName(version) {
    var prefix = 'node_js_indexing_';
    return prefix + 'version_' + version;
}

function removeOldVersion(newVersion) {
    try {
        versionModel.deleteMany({}, () => {});
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

module.exports.currentIndexVersionTest = currentIndexVersionTest;
module.exports.currentIndexVersion = currentIndexVersion;
module.exports.generateIndexName = generateIndexName;
module.exports.removeOldVersion = removeOldVersion;

