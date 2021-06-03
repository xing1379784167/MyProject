<template>
  <div>
       <tab-bar>
        <tab-bar-item path="/home">
           <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/edution"> 
          <div slot="item-text">教育背景</div>
        </tab-bar-item>
        <tab-bar-item path="/workcontext">
           <div slot="item-text">工作经验</div> </tab-bar-item>
        <tab-bar-item path="/workexperience"> 
           <div slot="item-text">项目经历</div>
        </tab-bar-item>
     </tab-bar>
  </div>
</template>

<script>
    import TabBar from './TabBar.vue'
    import TabBarItem from './TabBarItem.vue'
  export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }

  }

</script>
<style  scoped>

</style>