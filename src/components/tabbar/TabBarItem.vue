<template>
      <div class="tab-bar-item" @click="itemClick">
         <div :style=" activeStyle"><slot name="item-text"></slot></div>
    </div> 
</template>

<script>

  export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red',

        }
    },
   
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
          
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor}: {}
        }
    },
    methods: {
        itemClick(){
           
            this.$route.path !== this.path ? this.$router.replace(this.path) : null;
        }   
    }
  }

</script>
<style  scoped>
.tab-bar-item {
    flex:1;
    text-align: center;
    font-size: 14px;
    height: 49px;
    line-height: 49px;
}

.active {
    color: red;
}
</style>