<template>
    <div class="no">
        <el-tag type="danger">未办</el-tag>
        <div v-for="(v,i) in list" :key="i" class="xx">
            <div class="one">
                <p>公司名称：{{v.name}}</p>
                <p>面试时间：{{v.time}}</p>
                <p>地点：{{v.dizhi}}</p>
                <p>联系方式：{{v.tel}}</p>
            </div>
            <div class="btn">
                <el-button type="danger" round @click="del(i)">删除</el-button>
                <el-button type="primary" round @click="ok(i)">已办</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    del(i) {
      this.$store.commit("del", i);
    },
    ok(i) {
      this.$store.commit('ok',i);
    }
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  }
};
</script>

<style scoped>
.no {
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
.btn {
  width: 80px;
  display: flex;
  flex-direction: column;
}
.el-button + .el-button {
  margin-left: 0;
}
</style>