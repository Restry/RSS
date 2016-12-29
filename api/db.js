import { Random, mock } from 'mockjs';

const data = {
  customer: mock({
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
  vendor: mock({
    'data|10-50': [
      {
        'code': '@id',
        'name': '@ctitle(10,15)'
      }
    ]
  }).data,
  purchaseTransit: [
    {
      "id": 1,
      "code": "210000201001262062",
      "vendorCode": "620000201305252281",
      "vendorName": "也意声识别门图百动消政",
      "defaultStorage": "华中",
      "deliveryDate": "2015-07-17 05:17:31",
      "DPO": '47359260',
      "billNumber": '28656246074',
      "productDetails": '[{"key":"0","productName":"Edward King 0","RGC":"32","totalWeight":100,"currency":"RMB","amount":32},{"key":"1","productName":"Restrt 1","RGC":"32","totalWeight":100,"currency":"RMB","amount":32}]',
      "notes": "出业改且光值约转今复马克查会。类又国性果身半称人越林习证劳层变自。"
    },
    {
      "id": 2,
      "code": "140000198512306810",
      "vendorCode": "340000200509242243",
      "vendorName": "积程矿布果建道子通战区金过",
      "defaultStorage": "西南",
      "deliveryDate": "1976-09-13 13:15:10",
      "DPO": '44680385',
      "billNumber": '64901579156',
      "productDetails": '[{"key":"0","productName":"Edward King 0","RGC":"32","totalWeight":100,"currency":"RMB","amount":32},{"key":"1","productName":"Restrt 1","RGC":"32","totalWeight":100,"currency":"RMB","amount":32}]',
      "notes": "起目层特力写自委上众如型往几个究正。话义目面我文置活好离问色。"
    },
    {
      "id": 3,
      "code": "230000198603060539",
      "vendorCode": "650000199412173410",
      "vendorName": "阶业管产于习后义前价",
      "defaultStorage": "华南",
      "deliveryDate": "1992-09-23 10:26:40",
      "DPO": '47268057',
      "billNumber": '55454182498',
      "productDetails": '[{"key":"0","productName":"Edward King 0","RGC":"32","totalWeight":100,"currency":"RMB","amount":32},{"key":"1","productName":"Restrt 1","RGC":"32","totalWeight":100,"currency":"RMB","amount":32}]',
      "notes": "原务活龙成厂布平拉间铁第按机边。选采又你发更器号于军即好美性出要员。"
    },
    {
      "id": 4,
      "code": "120000197603164258",
      "vendorCode": "450000201510288580",
      "vendorName": "八重花里内前府始党明思新老个",
      "defaultStorage": "华东",
      "deliveryDate": "1998-04-17 23:42:06",
      "DPO": 46897064,
      "billNumber": 14750038298,
      "productDetails": '[{"key":"0","productName":"Edward King 0","RGC":"32","totalWeight":100,"currency":"RMB","amount":32},{"key":"1","productName":"Restrt 1","RGC":"32","totalWeight":100,"currency":"RMB","amount":32}]',
      "notes": "确来向电油已些声并定主物成每去引照部。被青形目加厂专院报府速满科。"
    },
    {
      "id": 5,
      "code": "430000200008291452",
      "vendorCode": "35000020020125467X",
      "vendorName": "少四同成话深些算第共",
      "defaultStorage": "华北",
      "deliveryDate": "1975-06-26 13:20:39",
      "DPO": 47440185,
      "billNumber": 67099739848,
      "productDetails": '[{"key":"0","productName":"Edward King 0","RGC":"32","totalWeight":100,"currency":"RMB","amount":32},{"key":"1","productName":"Restrt 1","RGC":"32","totalWeight":100,"currency":"RMB","amount":32}]',
      "notes": "处矿油加式发根研件电代劳个体酸。没决往信识存出布必你太人装存照样王心。"
    },
    {
      "id": 6,
      "code": "320000197208155412",
      "vendorCode": "320000199007235626",
      "vendorName": "白器确几要六议包最识",
      "defaultStorage": "华中",
      "deliveryDate": "1976-06-29 22:47:50",
      "DPO": 43476551,
      "billNumber": 65091259763,
      "productDetails": '[{"key":"0","productName":"Edward King 0","RGC":"32","totalWeight":100,"currency":"RMB","amount":32},{"key":"1","productName":"Restrt 1","RGC":"32","totalWeight":100,"currency":"RMB","amount":32}]',
      "notes": "效务问很光并只位往必去品定有石区。马料律文拉题里列儿革建了林部强业严入。"
    }

  ],
  purchaseStock: [],
  configs: [
    { category: '/holidays', categoryName: '节假日参数设置' }
  ],
  info: mock({
    'navigator': [
      { title: '主页', class: 'home', url: '/' },
      {
        title: 'Master Data', class: 'mail', childs: [
          { title: '客户主数据', url: '/manage/customer', class: 'Customer-md' },
          { title: '供应商主数据', url: '/manage/vendor', class: 'Vendor-md' },
          { title: '物料主数据', url: '', class: 'Material-md' },
          { title: '物料批次数据', url: '', class: 'Material-Batch-md' },
          { title: '库主数据', url: '', class: 'Storage-md' }
        ]
      },
      {
        title: '流程单据', class: 'appstore', childs: [
          { title: '采购在途', url: '/manage/purchaseTransit', class: 'Procurement-in-transit' },
          { title: '采购入库', url: '/manage/purchaseStock', class: 'Procurement-Stock' },
          { title: '销售出库', url: '', class: 'Sales-out' },
          { title: '客户接收确认', url: '', class: 'Customer-comfirm' },
          { title: '库存调整', url: '', class: 'Inventory-adjustment' }
        ]
      },
      {
        title: '库存报表', class: 'setting', childs: [
          { title: '库存明细总表', url: '', class: 'Inventory-Summary' },
          { title: '库存明细报表_FIN', url: '', class: 'Inventory-FIN' },
          { title: '库存明细报表_Logistic', url: '', class: 'Inventory-Logistic' },
          { title: '有效库存结余报表', url: '', class: 'Effective-Inventory-Balance' },
        ]
      }
    ]
  })
};
const user = require('./user.json');
user.LoginName = Random.cname();
user.name = Random.cname();

data.User = user;

module.exports = data;
