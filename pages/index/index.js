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
    qualifications: '本科',
    campus: '江西理工大学',
    profession: '软件工程',
    englishAblity: 'CET-6',
    age: 25,
    email: 'jsmond2016@gmail.com',
    graduateTime: '2019年6月',
    showPage: false,
    skills: [
      {name: 'HTML5/CSS3/Less/Scss', percent: 80},
      {name: 'JavaScript/ES5/ES6/jQuery', percent: 70},
      {name: 'Git/Git-Flow工作流', percent: 70},
      {name: 'Webpack/模块化', percent: 70},
      {name: 'React/React-Router/Redux/Dva', percent: 80},
      {name: 'Vue/Vue-Router/Vuex', percent: 50},
      {name: '微信小程序/Taro', percent: 50},
      {name: 'TypeScript/Nodejs', percent: 50}
    ],
    work: [
      {
        company: '上海汉得信息科技有限公司',
        job: '前端开发工程师',
        year: '2019/7--2020/4',
        desc: `本人在汉得信息科技有限公司主要负责SRM项目门户页的维护，负责 Sass 系统平台功能开发，负责项目二开功能开发`
      },
    ],
    projects: [
      {
        name: 'SRM 供应链管理系统开发',
        desc: '该系统为供应商和采购商提供了便利高效的解决方案，让客户从需求征集，商品采购，订单追踪，招投标管理等通过系统实全面掌控。',
        stack1: '使用 React/React-Router/Dvajs/AntDesign/Redux-saga技术开发',
        stack2: '编写基础的可复用组件 Search, List, DisplayFormItem等，提高开发效率',
      },
      {
        name: 'SRM 供应链管理系统开发',
        desc: '该系统为供应商和采购商提供了便利高效的解决方案，让客户从需求征集，商品采购，订单追踪，招投标管理等通过系统实全面掌控。',
        stack1: '使用 React/React-Router/Dvajs/AntDesign/Redux-saga技术开发',
        stack2: '编写基础的可复用组件 Search, List, DisplayFormItem等，提高开发效率',
      },
      {
        name: 'SRM 供应链管理系统开发',
        desc: '该系统为供应商和采购商提供了便利高效的解决方案，让客户从需求征集，商品采购，订单追踪，招投标管理等通过系统实全面掌控。',
        stack1: '使用 React/React-Router/Dvajs/AntDesign/Redux-saga技术开发',
        stack2: '编写基础的可复用组件 Search, List, DisplayFormItem等，提高开发效率',
      },
    ],
    remarks: '本人熟练掌握word邮件合并，excel数据透视表，VBA，全动态ppt制作等中高阶office操作技巧\
              有一定编程基础，可使用python与R进行较复杂的数据分析工作，在github上获得了xxx。\
              文笔优异，曾在xxx报刊上发表作品xxx字。\
              有着丰富的新媒体运营经验，先后运营过xxx个微信公众号，运营期间公众号DUAxxx，关注量增长率xxx。\
              热爱xxx，曾在xxx获得了xxx奖项。'
  },
  onShow: function () {
    this.setClient();
  },

  onShareAppMessage: function(e){
    if(e.from == 'menu'){
        // 此处是用户点击了小程序右上角的转发按钮触发的
        return {
          title: '黄锦的简历',
          path: 'pages/index/index',
          success: function (res) {
            console.log('分享成功')
          }
        }
    }else if(e.from == 'button'){
        // 此处是用户点击了页面的转发按钮
        console.log('button------');
    }
  },

  setClient(e) {
    const width = wx.getSystemInfoSync().windowWidth;
    const height = wx.getSystemInfoSync().windowHeight;
    this.setData({
      width: width,
      height: height,
    })
  },

  // 防抖函数
  throttle(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }
      }
  },

  changePage(e) {
    const height = wx.getSystemInfoSync().windowHeight;
    // 当从底部上滑超过 20 px 时触发
    if (+e.detail.scrollTop < +(e.detail.scrollHeight - height - 20)) {
      if (this.data.showPage) {
        this.setData({
          showPage: false,
        });
      }
    } else {
      if (!this.data.showPage) {
        this.setData({
          showPage: true,
        });
      }
    }
  }
})
