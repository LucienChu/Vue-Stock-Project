<template>
  <div class="container">
    <div class="row">
      <profolio-stock v-for="(stock,index)  in stocks" :key="index" :stock="stock"></profolio-stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import stock from "@/components/ProfolioStock.vue";
export default {
  computed: {
    ...mapGetters({
      stocks: "getProfolioStocks"
    })
  },
  components: {
    "profolio-stock": stock
  }
};
</script>
