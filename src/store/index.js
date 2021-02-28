import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addedProducts: [],
  },

  getters: {
    addedProducts(state) {
      return state.addedProducts;
    },
    totalPrice(state) {
      let totalPrice = 0;
      state.addedProducts.forEach((el) => {
        totalPrice += el.price;
      });
      return totalPrice;
    },
  },
  mutations: {
    addProductToStore(state, { product }) {
      state.addedProducts.push(product);
      saveInStorage(state.addedProducts);
    },

    updateProduct(state, {products}) {
      state.addedProducts = products;
      saveInStorage(state.addedProducts);
    },
  },

  actions: {
    addProduct(context, { product }) {
      context.commit("addProductToStore", { product });
    },

    deleteProduct(context, { productId }) {
      let products = this.state.addedProducts.filter(
        (el) => el.id !== productId
      );
      context.commit("updateProduct", { products });
    },

    dataFromStorage(context, { newData }) {
      context.commit("updateProduct", { products: newData });
    },
  },
});

const saveInStorage = (addedProducts) => {
  localStorage.setItem("addedProducts", JSON.stringify(addedProducts));
}
