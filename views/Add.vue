<template>
    <div id="add">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="公司名称">
            <el-input v-model="form.name" ></el-input>
        </el-form-item>

        <el-form-item label="联系方式">
            <el-input v-model="form.tel"></el-input>
        </el-form-item>

        <el-form-item label="面试时间">
            <el-input v-model="form.time"></el-input>
        </el-form-item>
       
        <el-form-item label="地址">
            <el-input type="textarea" v-model="form.dizhi"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
        <p>不要留空，不然不会创建</p>
        <!-- 使用自定义指令 -->
        <input type="text" v-focus>
        <input type="text" v-focus2>
    </div>
</template>

<script>

export default {
  //自定义局部指令
  directives: {
    focus2: {
      inserted: function(el) {
        el.focus();
      }
    }
  },


  data() {
    return {
      form: {
        name: "",
        tel: "",
        time: "",
        dizhi: "",
        bz: ""
      }
    };
  },
  methods: {
    onSubmit() {
      if (
        this.form.name == "" ||
        this.form.tel == "" ||
        this.form.time == "" ||
        this.form.dizhi == ""
      ) {
        return false;
      } else {
        this.$store.commit("add", this.form);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style  scoped>
#add {
  padding: 20px;
}
</style>