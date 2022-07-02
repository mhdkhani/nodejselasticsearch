const doSearch = (req,res) => {
    var items = [];
    //items.push(req.body.query_search);
    res.status(200).send({id: items});
};
module.exports.doSearch = doSearch;
