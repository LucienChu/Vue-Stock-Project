<template>
  <div class="col-md-4 pb-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">
          {{stock.name}}
          <small>{{stock.price}} | quantity: {{stock.quantity}}</small>
        </h4>
        <br>
        <form class="form-inline">
          <div class="form-group">
            <input type="number" class="form-control" min="1" v-model="quantity">
            <button
              type="button"
              class="btn btn-success"
              @click="sellStock"
              :disabled="quantity < 1 || !Number.isInteger(Number(quantity)) || Number(quantity) > stock.quantity"
            >Sell</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    ...mapActions({
      placeStockOrder: "sellStock"
    }),
    sellStock() {
      let order = {
        stockId: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.placeStockOrder(order);
    }
  }
};
</script>