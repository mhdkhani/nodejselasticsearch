const connection = require('./elasticsearch');
const information = require('./information');
const test = require('./test');

function createIndex() {
    var version = newIndexVersion();
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '1',
            'id': '1',
            'url': '127.0.0.1:3000/product/galaxy_s22',
            'name': 'گوشی موبایل سامسونگ مدل Galaxy S22 Ultra 5G دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت مشکی\n',
            'sku': 'galaxy_s22',
            'price': '20000',
            'brand': 'samsung'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '2',
            'id': '2',
            'url': '127.0.0.1:3000/product/galaxy_s22_red',
            'name': 'گوشی موبایل سامسونگ مدل Galaxy S22 Ultra 5G دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت قرمز تیره\n',
            'sku': 'galaxy_s22_red',
            'price': '30000',
            'brand': 'samsung'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '3',
            'id': '3',
            'url': '127.0.0.1:3000/product/galaxy_a52',
            'name': 'گوشی موبایل سامسونگ Galaxy A52 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت سفید \n',
            'sku': 'galaxy_a52',
            'price': '30000',
            'brand': 'samsung'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '4',
            'id': '4',
            'url': '127.0.0.1:3000/product/galaxy_m32',
            'name': 'گوشی موبایل سامسونگ مدل Galaxy M32 دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت مشکی \n',
            'sku': 'galaxy_m32',
            'price': '30000',
            'brand': 'samsung'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '5',
            'id': '5',
            'url': '127.0.0.1:3000/product/galaxy_a22',
            'name': 'گوشی موبایل سامسونگ Galaxy A22 دو سیم کارت ظرفیت 128 گیگابایت و 6 گیگابایت رم سفید\n',
            'sku': 'galaxy_a22',
            'price': '30000',
            'brand': 'samsung'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '6',
            'id': '6',
            'url': '127.0.0.1:3000/product/11t_pro',
            'name': 'گوشی موبایل شیائومی مدل Xiaomi 11T Pro 5G دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت خاکستری\n',
            'sku': '11t_pro',
            'price': '30000',
            'brand': 'xiaomi'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '7',
            'id': '7',
            'url': '127.0.0.1:3000/product/10x_4g',
            'name': 'گوشی موبایل شیائومی مدل Redmi 10X 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت خاکستری\n',
            'sku': '10x_4g',
            'price': '30000',
            'brand': 'Xiaomi'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '8',
            'id': '8',
            'url': '127.0.0.1:3000/product/redmi_note_9',
            'name': 'گوشی موبایل شیائومی مدل Redmi Note 9 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت آبی \n',
            'sku': 'redmi_note_9',
            'price': '30000',
            'brand': 'Xiaomi'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '9',
            'id': '9',
            'url': '127.0.0.1:3000/product/gwm-k945s',
            'name': 'ماشین لباسشویی اتوماتیک 9 کیلویی جی پلاس​ مدل GWM-K945S نقره ای\n',
            'sku': 'gwm-k945s',
            'price': '30000',
            'brand': 'gplus'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '10',
            'id': '10',
            'url': '127.0.0.1:3000/product/gwm-k945w',
            'name': 'ماشین لباسشویی اتوماتیک 9 کیلویی جی پلاس​ مدل GWM-K945W سفید\n',
            'sku': 'gwm-k945w',
            'price': '30000',
            'brand': 'gplus'
        }
    });
    connection.index({
        'index': indexName(version),
        'body': {
            'entity_id': '11',
            'id': '11',
            'url': '127.0.0.1:3000/product/gwm-k947w',
            'name': 'ماشین لباسشویی اتوماتیک 9 کیلویی جی پلاس​ مدل GWM-K947W سفید\n',
            'sku': 'gwm-k947w',
            'price': '30000',
            'brand': 'gplus'
        }
    });
    /*connection.index({
        'index' : indexName(),
        'body': {
            'url':'127.0.0.1:3000/product/',
            'name':'' ,
            'sku': '',
            'price': '30000',
            'brand': ''
        }
    });
    connection.index({
        'index' : indexName(),
        'body': {
            'url':'127.0.0.1:3000/product/',
            'name':'' ,
            'sku': '',
            'price': '30000',
            'brand': ''
        }
    });
    connection.index({
        'index' : indexName(),
        'body': {
            'url':'127.0.0.1:3000/product/',
            'name':'' ,
            'sku': '',
            'price': '30000',
            'brand': ''
        }
    });
    connection.index({
        'index' : indexName(),
        'body': {
            'url':'127.0.0.1:3000/product/',
            'name':'' ,
            'sku': '',
            'price': '30000',
            'brand': ''
        }
    });
    connection.index({
        'index' : indexName(),
        'body': {
            'url':'127.0.0.1:3000/product/',
            'name':'' ,
            'sku': '',
            'price': '30000',
            'brand': ''
        }
    });
    connection.index({
        'index' : indexName(),
        'body': {
            'url':'127.0.0.1:3000/product/',
            'name':'' ,
            'sku': '',
            'price': '30000',
            'brand': ''
        }
    });
    connection.index({
        'index' : indexName(),
        'body': {
            'url':'127.0.0.1:3000/product/',
            'name':'' ,
            'sku': '',
            'price': '30000',
            'brand': ''
        }
    });
    connection.index({
        'index' : indexName(),
        'body': {
            'url':'127.0.0.1:3000/product/',
            'name':'' ,
            'sku': '',
            'price': '30000',
            'brand': ''
        }
    });*/
    removeOldVersion(version);
}

function indexName(version) {
    return information.generateIndexName(version);
}

function newIndexVersion() {
    //var test = information.currentIndexVersionTest();
    return information.currentIndexVersion() + 1;
}

function removeOldVersion(newVersion) {
    information.removeOldVersion(newVersion);
}

module.exports.createIndex = createIndex;
