<template>
    <div class="projecttitle">
           <span>个人简历</span>
    </div>
</template>

<script>

  export default {
    name:'ProjectTitle'
  }

</script>
<style scoped>
.projecttitle {
    height: 100px;
    background-color:rgba(0, 0, 0, .05);
    text-align: center;
    z-index: 9;
        
}
.projecttitle span {
        
    line-height: 100px;
    font-size: 22px;
    font-weight: 700;
    color: red;
}
</style>