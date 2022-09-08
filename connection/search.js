const connection = require('./elasticsearch');

/**
 * search query
 **/
const getValueFormElastic = async (query) => {
    return connection.search({
        body: {
            from:0,
            size:12,
            query: {
                match: {
                    sku: {
                        query: query
                    }
                }
            }
        }
    }).then(data => {
            return data;
        })
        .catch(err => {
            return err;
        });
}



const doSearch = async (query) => {
    const items = [];
    var myData = await getValueFormElastic(query);
    var products = myData.hits.hits;
    var i ;
    for (i = 0; i < products.length; ++i) {
        items.push({name:products[i]._source.name, sku:products[i]._source.sku,url:products[i]._source.url});
    }
    return items;
}
module.exports.doSearch = doSearch;
