<template>
  <div class="wrapper">
    <div class="container">
      <div class="totalCost" v-if="totalPrice === 0">Basket is empty</div>
      <div class="totalCost" v-else>Total Cost: {{ totalPrice }} USD</div>
      <div class="row">
        <ProductCard
          v-for="product in productsInBasket"
          :key="product.id"
          :product="product"
          :closeBtn="true"
          @deleteProduct="deleteProduct"
        />
      </div>
    </div>
    <div class="link">
      <router-link tag="div" class="backToMain" :to="'/'">
        <a class="nav-link link">Go to Main</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from "./../store";
import ProductCard from "../components/ProductCard";

export default {
  name: "Basket",
  components: {
    ProductCard,
  },
  data: () => ({}),
  methods: {
    deleteProduct(productId) {
      store.dispatch("deleteProduct", { productId });
    },

  },
  computed: {
    productsInBasket() {
      let product = store.getters.addedProducts;
      const entryAmount = {};

      product = product.filter((el) => {
        if (entryAmount[el.id] !== undefined) {
          entryAmount[el.id]++;
          return false;
        } else {
          entryAmount[el.id] = 1;
          return true;
        }
      });

      product = product.map((el) => {
        el.amount = entryAmount[el.id];
        return el;
      });

      return product;
    },
    totalPrice() {
      return store.getters.totalPrice;
    },
  },
};
</script>

<style scoped>
.totalCost {
  width: 25%;
  height: 10%;
  color: red;
  font-family: "Lexend Mega", sans-serif;
  margin-left: 50px;
  font-size: 26px;
  margin-top: 70px;
}
.link {
  position: absolute;
  right: 31px;
}
.array {
  color: black;
}

.wrapper {
  width: 100%;
  height: 100%;
  background-image: url(./../assets/food4.jpg);
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100%;
}

.container2 {
  width: 100%;
  height: 100%;
}
.backToMain {
  top: 100px;
  right: 5%;
  position: absolute;
  width: 250px;
  height: 50px;
}

a {
  text-decoration: none;
  outline: none;
  font-size: 24px;
  color: white;
  font-family: "Lexend Mega", sans-serif;
}
</style>
