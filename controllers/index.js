const create = require('../connection/create');
/**
* search form
*/
const ShowForm = (req,res,next) => {
    res.render('search' , { title: 'Search Engine',base_url:req.get('host'),layout:'layout'} );
};

const CreateIndex = (req,res,next) => {
    create.createIndex();
    res.render('search' , { title: 'Search Engine',layout:'layout'} );
};

module.exports.ShowForm = ShowForm;
module.exports.CreateIndex = CreateIndex;
