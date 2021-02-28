<template>
  <div class="col-3">
    <div class="cardStore">
      <div class="cardImage">
        <img :src="product.imageSrc" />
      </div>
      <div class="cardDescription">
        {{ product.name }}<br />
        <span class="price">{{ product.price }}</span>
      </div>
      <div class="btn">
        <button v-if="product.amount" @click="deleteProductFromBasket" class="close"></button>
        <button v-else @click="addItem" class="add">Add to Basket</button>
      </div>
      <div class="quantity" v-if="product.amount"> quantity : {{product.amount}}</div>
    </div>
  </div>
</template>

<script>
import store from "./../store";
export default {
  name: "ProductCard",
  props: {
    product: Object,
    closeBtn: Boolean
  },

  data: () => ({}),
  computed: {},
  methods: {
    deleteProductFromBasket() {
      this.$emit("deleteProduct", this.product.id);
    },
    addItem() {
      const product = this.product;
      store.dispatch("addProduct", { product });
    },
  },
};
</script>

<style scoped>

.quantity{
background-color: wheat;
text-align: center;
font-family: "Lexend Mega", sans-serif;
position: absolute;
bottom: 5%;
left: 0;
right: 0;
margin: auto;

}
.wrapper {
  width: 100%;
  height: 100%;
}
.cardStore {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 1;
  border-radius: 12px;
  height: 350px;
  margin-top: 100px;
  background-color: white;
  border: 1px solid grey;
}

.cardImage {
  width: 100%;
  height: 50%;
  border-bottom: 1px solid grey;
  background-repeat: no-repeat;
  background-size: contain;
}
.cardDescription {
  background-color: wheat;
  width: 100%;
  height: 25%;
  border-bottom: 1px solid grey;
  font-size: 18px;
  padding-top: 5px;
  text-align: center;
  font-family: "Lexend Mega", sans-serif;
}
.btn {
  width: 100%;
  height: 25%;
  background-color: wheat;
  
  
}

.close {
     background-color: wheat;
    position: absolute;
    left: 3%;
    width: 8%;
    height: 8%;
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    border:none;
    outline: none;
}
.price {
  color: teal;
}

.add {
  outline: none;
  border: none;
  margin-top: 15px;
  border-radius: 15px;
  font-size: 14px;
  text-align: center;
  align-content: center;
  font-family: "Lexend Mega", sans-serif;
}

button:hover {
  transition: 0.3s;
  background-color: yellow;
}
</style>
