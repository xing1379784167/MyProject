<template>
    <div class="work-context">
        <project-title></project-title>
        <el-card class="box-card">
            <div v-for="(item,index) in work" :key="index" class="text item">
                <div class="date">{{item.date}}</div>
                <div class="company">{{item.company}}</div>
                <div class="job">{{item.job}}</div>
            </div>
          </el-card>
    </div>
</template>

<script>
    import ProjectTitle from '../../components/common/ProjectTitle.vue'
  export default {
    name:'WorkContext',
    components:{
        ProjectTitle
    },
    data() {
        return {
            work:[
                {date:'时间',company:'公司名称',job:'职位名称'},
                {date:'2019/04-2020/06',company:'深圳市中升润丰汽车销售服务有限公司',job:'机修技师'},
                {date:'2018/09-2019/02',company:'中山市创世纪汽车有限公司（快车道）',job:'副店长'},
                {date:'2013/08-2018/09',company:'中山市创世纪汽车有限公司（北京现代车间）',job:'机电中大工'} 
            ]
        }
    },

  }

</script>
<style scoped>
.work-context {
    height: 100vh;
    background-image: url('../../assets/img/under3.jpg');
    background-size: cover;
    position: relative;
}
.text {
    font-size: 14px;
    display: flex;
}
.text .date, .company, .job {
    margin-left: 10px;
    text-align: center;
}
.text .date {
    width: 150px;
}
.text .company {
    width: 330px;
}
.item {
    padding: 18px 0;
}

.box-card {
    width: 750px;
    background-color: rgba(0, 0, 0, .4);
    color: #fff;
    position: absolute;
    top: 150px;
    left: 130px;
}
</style>