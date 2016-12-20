import { Random, mock } from 'mockjs';

var data = {
    Customer: mock({
        'data|10-50': [
            {
                'code': '@id',
                'name': '@ctitle(5,10)',
                'address': '@region()-@county(true)-(@zip())',
                'created': '@datetime',
                'contacts': '@cname',
                'contact': '@integer(13686954877,13959874454)',
                'site': '@url'
            }
        ]
    }).data,
    Vendor: mock({
        'data|10-50': [
            {
                'code': '@id',
                'name': '@ctitle(10,15)'
            }
        ]
    }).data,
    configs: [
        { category: '/holidays', categoryName: '节假日参数设置' }
    ],
    info: mock({
        'data|10-50': [
            {
                'id|+1': 5000,
                'Title|+1': function() { return Random.csentence() },
                'ItemSeqCode': Random.integer()
            }
        ],
        'navigator': [
            { title: '主页', class: 'home', url: '/' },
            {
                title: 'Master Data', class: 'mail', childs: [
                    { title: '客户主数据', url:'/manage/customer', class: 'Customer-md' },
                    { title: '供应商主数据',url:'/manage/vendor', class: 'Vendor-md' },
                    { title: '物料主数据',url:'', class: 'Material-md' },
                    { title: '物料批次数据', url:'',class: 'Material-Batch-md' },
                    { title: '库主数据',url:'', class: 'Storage-md' }
                ]
            },
            {
                title: '流程单据', class: 'appstore', childs: [
                    { title: '采购在途', url:'',class: 'Procurement-in-transit' },
                    { title: '采购入库', url:'',class: 'Procurement-storage' },
                    { title: '销售出库', url:'',class: 'Sales-out' },
                    { title: '客户接收确认', url:'',class: 'Customer-comfirm' },
                    { title: '库存调整', url:'',class: 'Inventory-adjustment' }
                ]
            },
            {
                title: '库存报表', class: 'setting', childs: [
                    { title: '库存明细总表', url:'',class: 'Inventory-Summary' },
                    { title: '库存明细报表_FIN',url:'', class: 'Inventory-FIN' },
                    { title: '库存明细报表_Logistic', url:'',class: 'Inventory-Logistic' },
                    { title: '有效库存结余报表', url:'',class: 'Effective-Inventory-Balance' },
                ]
            },
        ]
    })
}
var user = require('./user.json');
user.LoginName = Random.cname();
user.name = Random.cname();

data.User = user;

module.exports = data;
