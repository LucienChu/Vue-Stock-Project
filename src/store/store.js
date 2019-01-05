import Vue from 'vue'
import Vuex from 'vuex'
import stocks from "@/store/modules/stocks.js";
import profolio from "@/store/modules/profolio.js"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stocks,
    profolio
  }
})
