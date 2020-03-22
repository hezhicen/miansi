<template>
  <div class="home">
      <router-view/>
      <div class="footer">
        <el-button type="primary" round><router-link to='add'> 添加</router-link> </el-button>
        <el-button type="primary" round><router-link to='/'> 未办</router-link></el-button>
        <el-button type="primary" round><router-link to='ok'> 已办</router-link> </el-button>
      </div>
  </div>
</template>

<script >
</script>

<style  scoped>
.footer {
  height: 60px;
  width: 100%;
  background: #409eff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}
</style>

