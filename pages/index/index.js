//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    width: 0,
    height: 0,
    name: '黄锦',
    spell: 'Huang Jin',
    job: '前端开发工程师',
    exp: '1年工作经验',
    tel: '1597909****',
    gender: '男',
    age: 25,
    email: 'jsmond2016@gmail.com',
    address: '上海青浦',
    skills: [
      {name: 'HTML/CSS/ES6', percent: 85},
      {name: 'HTML5/CSS3/Less/Scss', percent: 80},
      {name: 'jQuery', percent: 50},
      {name: 'Git/Git-Flow工作流', percent: 70},
      {name: 'Webpack/模块化', percent: 70},
      {name: 'React/React-Router/Redux/Dva', percent: 80},
      {name: 'Vue/Vue-Router/Vuex', percent: 50},
      {name: '微信小程序/Taro', percent: 50},
      {name: 'TypeScript/Nodejs', percent: 50}
    ],
    education: [
      {
        name: '江西理工大学',
        major: '软件工程(本科)',
        year: '2015-2019',
        desc: '本专业培养掌握计算机软件基本理论知识，熟悉软件开发和管理技术，能够在计算机软件领域中从事软件设计，软件开发，软件管理的高级人才'
      },
      {
        name: '江西理工大学',
        major: '软件工程(本科)',
        year: '2015-2019',
        desc: '本专业培养掌握计算机软件基本理论知识，熟悉软件开发和管理技术，能够在计算机软件领域中从事软件设计，软件开发，软件管理的高级人才'
      }
    ],
    work: [
      {
        company: '上海 xx 公司',
        job: '实习生',
        year: '2019/7--2020/7',
        desc: `1.大兴区农保电子档案系统项目开发，并负责项目上线后的代码二次修改与维护。
        2.海淀区劳动仲裁电子档案系统项目开发，并负责项目上线后的代码二次修改与维护。
        3.海淀区社保中心办公应用系统以上线项目的代码二次开发以及维护工作。`
      },
      {
        company: '上海 xx 公司',
        job: '实习生',
        year: '2019/7--2020/7',
        desc: `1.大兴区农保电子档案系统项目开发，并负责项目上线后的代码二次修改与维护。
        2.海淀区劳动仲裁电子档案系统项目开发，并负责项目上线后的代码二次修改与维护。
        3.海淀区社保中心办公应用系统以上线项目的代码二次开发以及维护工作。`
      },
      {
        company: '上海 xx 公司',
        job: '实习生',
        year: '2019/7--2020/7',
        desc: `1.大兴区农保电子档案系统项目开发，并负责项目上线后的代码二次修改与维护。
        2.海淀区劳动仲裁电子档案系统项目开发，并负责项目上线后的代码二次修改与维护。
        3.海淀区社保中心办公应用系统以上线项目的代码二次开发以及维护工作。`
      }
    ],
    projects: [
      {
        name: '** 后台系统',
        desc: '** 后台系统采用 React，React-Router，Redux技术，服务端使用 Nodejs，\
        Express 技术开发而成，数据交互使用 Axios 技术完成；使用可视化技术 Echarts，\
        能够用于基本的用户管理，信息管理，用于查看相关图表信息等'
      },
      {
        name: '** 后台系统',
        desc: '** 后台系统采用 React，React-Router，Redux技术，服务端使用 Nodejs，\
        Express 技术开发而成，数据交互使用 Axios 技术完成；使用可视化技术 Echarts，\
        能够用于基本的用户管理，信息管理，用于查看相关图表信息等'
      },
      {
        name: '** 后台系统',
        desc: '** 后台系统采用 React，React-Router，Redux技术，服务端使用 Nodejs，\
        Express 技术开发而成，数据交互使用 Axios 技术完成；使用可视化技术 Echarts，\
        能够用于基本的用户管理，信息管理，用于查看相关图表信息等'
      },
    ],
    remarks: '本人熟练掌握word邮件合并，excel数据透视表，VBA，全动态ppt制作等中高阶office操作技巧\
              有一定编程基础，可使用python与R进行较复杂的数据分析工作，在github上获得了xxx。\
              文笔优异，曾在xxx报刊上发表作品xxx字。\
              有着丰富的新媒体运营经验，先后运营过xxx个微信公众号，运营期间公众号DUAxxx，关注量增长率xxx。\
              热爱xxx，曾在xxx获得了xxx奖项。'
  },
  onShow: function() {
    var width = wx.getSystemInfoSync().windowWidth;
    var height = wx.getSystemInfoSync().windowHeight;
    // 这里不是 this.setState，而是 setData
    this.setData({
      width: width,
      height: height,
    })
  }
})
