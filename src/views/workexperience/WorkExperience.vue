<template>
  <div class="work-experience">
     <project-title></project-title>
      <el-tabs type="border-card" class="card">
        <el-tab-pane label="项目1：女装时装购物平台" class="pant"><div v-for="(item,index) in clothes" class="pant-clothes">{{item}}</div></el-tab-pane>
        <el-tab-pane label="项目2：sweet winter网上蛋糕店" class="pant"><div v-for="item in cakes" class="pant-cakes">{{item}}</div></el-tab-pane>
       
      </el-tabs>
  </div>
</template>

<script>
    import ProjectTitle from '../../components/common/ProjectTitle.vue'
  export default {
    name:'WorkExperience',
    components:{
        ProjectTitle
    },
    data() {
        return {
            clothes:[
                '项目描述：此项目主要是为了方便周边人群的生活而开发。该项目运用vue全家桶，webpack，html， css,JavaScript等技术',
                '工作内容',
                '1.利用vue cli创建项目框架，进行页面的搭建，划分目录结构，引入基础的css样式和normalize.css样式',
                '2.创建底部tabbar（底部公共栏）模块，利用vue-router确定各个组件之间的关系，然后用路由映射到各个页面，由此确定各个页面。',
                '3.使用swiper制作轮播图',
                '4.商品数据页的请求：1设计数据结构，用于保存数据。2. 封装aixos组件，利用aixos与后台实现数据交互，向后台请求数据',
                '5.用better-scroll插件对滚动条完成重构并完成上拉加载更多的功能',
                '6. 详情页的开发：1点击商品获取该商品的id，跳转详情页并传入商品id。2.页面布局，商品各种信息展示',
                '7.使用vueDevtools做调试开发',
                '8.使用webpack进行项目打包'
            ],
            cakes:[
                '项目内容：该项目是一个网上蛋糕店，主要用来展示蛋糕新品，登录注册功能，成为会员可以有积分换礼品。',
                '工作内容：',
                '1.HTML+CSS搭建静态页面，完成基本的网页跳转等。',
                '2.调整页面的css样式',
                '3.调整html网页布局'
            ]
        }
    },
  }

</script>
<style scoped>
.work-experience {
    height: 100vh;
    background-image: url('../../assets/img/under4.jpg');
    background-size: cover;
}
.work-experience .pant {
    padding: 10px;
}
.pant-clothes,.pant-cakes {
    margin-top: 10px;
}
</style>