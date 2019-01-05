<template>
  <div class="col-md-4 pb-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">
          {{stock.name}}
          <small>{{stock.price}}</small>
        </h4>
        <br>
        <form class="form-inline">
          <div class="form-group">
            <input type="number" class="form-control" min="0" step="1" v-model="quantity">
            <button
              type="button"
              class="btn btn-success"
              @click="buyStock"
              :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))"
            >Buy</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: {
    stock: {
      type: Object
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.quantity = 0;
      this.$store.dispatch("buyStock", order);
    }
  }
};
</script>