const doSearch = (req,res) => {
    const items = [];
    //items.push(req.body.query_search);
    /*const items = [];
    items.push({name:"John", sku:"Doe",url:"blue"});
    items.push({name:"John", sku:"Doe",url:"blue"});
    items.push({name:"John", sku:"Doe",url:"blue"});*/
    if (req.query.query_search && req.query.query_search !== ''){

    }
    res.status(200).send({items: items});
};
module.exports.doSearch = doSearch;
