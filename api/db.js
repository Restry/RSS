const Mock = require('mockjs');
const Random = Mock.Random;

var data = {
    todolist: require('./todolist.json'),
    donelist: require('./donelist.json'),
    Question: require('./question.json'),
    ReportData: require('./reportdata.json'),
    Experience: require('./experience.json'),
    reportlist: require('./reportlist.json'),
    Branch: require('./branchs.json'),
    configs:[
      {category:'/holidays',categoryName:'节假日参数设置'}
    ],
    ServerSearchResult:Mock.mock({
        'Value|100-500': [
            {
                'ID|+1': 2,
                'Title|+1':  ()=> { return Random.ctitle() },
                'Rank': ()=> { return Random.integer(1,20)},
                'TargetUrl': ()=> {return  Random.url()},
                'UpdateTime':()=> {return  Random.datetime()},
                'VisitCount':()=> {return  Random.integer(1,200)},
                'HitHighlightedSummary':()=>{return Random.cparagraph(10,30)}
            }
        ]
    }),
    QuestionReceiverData: Mock.mock({
        'data|10-100': [
            {
                'id|+1': 5000,
                'Title|+1': function () { return Random.csentence() },
                'ItemSeqCode': Random.integer()
            }
        ]
    }),
    Holiday: [
        {
            'title': '国庆',
            'startdate': '2016-10-06',
            'enddate': '2016-10-07',
            'start': 1475712000000,
            'end': 1475798400000,
            'class': 'event-info',
            'id': 1
        },
        {
            'title': '中秋',
            'startdate': '2016-10-13',
            'enddate': '2016-10-14',
            'isHoliday': true,
            'start': 1476316800000,
            'end': 1476403200000,
            'class': 'event-info',
            'id': 2
        },
        {
            'title': '元旦',
            'startdate': '2016-10-06',
            'enddate': '2016-10-07',
            'start': 1475712000000,
            'end': 1475798400000,
            'class': 'event-info',
            'id': 3
        }
    ]
}
var user=require('./user.json');
user.LoginName=Random.cname();
user.name=Random.cname();

data.User =user;

module.exports = data;
