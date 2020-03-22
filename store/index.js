import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    oklist:[]
  },
  mutations: {
    add(state,form){
      state.list.push(form);
    },
    del(state,i){
      state.list.splice(i,1)
    },
    ok(state,i){
      var x=JSON.stringify(this.state.list[i])
      state.oklist.push(JSON.parse(x))
      state.list.splice(i,1)
    },
  beizhu(state,x){
      state.oklist[x.i].bz=x.beizhu
    } 
  },
  actions: {
  },
  modules: {
  }
})
