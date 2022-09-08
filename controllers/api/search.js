const search = require('../../connection/search');
const doSearch = (req,res) => {
    if (req.query.query_search && req.query.query_search !== ''){
        search.doSearch(req.query.query_search)
            .then(function(result) {
            res.status(200).send({items: result});
        });
    }
};
module.exports.doSearch = doSearch;
