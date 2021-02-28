<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import store from "./store";
export default {
  name: "App",
  components: {
    Header,
  },
  mounted() {
    this.getProductsFromStorage();
  },
  methods: {
    getProductsFromStorage() {
      const data = localStorage.getItem("addedProducts");
      if (data !== undefined && data !== null) {
        store.dispatch("dataFromStorage", { newData: JSON.parse(data) });
      }
    },
  },
};
</script>
