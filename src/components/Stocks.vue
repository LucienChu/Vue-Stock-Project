<template>
  <div class="container">
    <div class="row">
      <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </div>
  </div>
</template>
<script>
import stock from "@/components/Stock.vue";
export default {
  data() {
    return {};
  },

  components: {
    "app-stock": stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>
