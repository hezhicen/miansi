<template>
    <div class="ok">
        <el-tag type="primary">已办</el-tag>
        <div v-for="(v,i) in oklist" :key="i" class="xx">
            <div class="one">
                <p>公司名称：{{v.name}}</p>
                <p>面试时间：{{v.time}}</p>
                <p>地点：{{v.dizhi}}</p>
                <p>联系方式：{{v.tel}}</p> 
                <p>备注详情：{{v.bz}}</p>
                <div v-show="indx==i?true:false">备注：<input type="text"  v-model="beizhu">
                    <button @click="queren(i)">确认</button> 
                </div>
            </div>
            <div class="btn">
                <el-button type="primary" round @click="ok(i)">备注</el-button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      beizhu: "",
      indx: ""
    };
  },
  methods: {
    ok(i) {
      this.indx = i;
    },
   queren(i){
      this.$store.commit("beizhu", {beizhu:this.beizhu,i:i});
    // console.log(i,this.beizhu);
    
   }
  },
  computed: {
    oklist() {
      return this.$store.state.oklist;
    }
  }
};
</script>

<style  scoped>
.ok {
  padding: 20px;
}
.xx {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 10px 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.one {
  width: 60%;
}
.tj {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.btn {
  width: 80px;
  display: flex;
  align-items: center;
}
.el-button + .el-button {
  margin-left: 0;
}
</style>