<template>
  <div class="wrapper">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <router-link
                tag="li"
                class="nav-item"
                :to="'/'"
                active-class="active"
              >
                <a class="nav-link">Menu</a>
              </router-link>

            </ul>
            <router-link
              tag="button"
              class="nav-item "
              :to="'/basket'"
              active-class="active"
            >
              <a class="nav-link">
                Product Basket<br />
                {{ productsAmount > 0 ? productsAmount : "" }}</a
              >
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>


import store from "./../store";
export default {
  name: "Header",
  computed: {
    productsAmount() {
      return store.getters.addedProducts.length;
    },
  },
};
</script>

<style scoped>
.nav-link {
  color: grey;
}
.btn {
  padding: 0;
}
.wrapper {
  width: 100%;
  height: 250px;
  min-height: 250px;
  position: relative;
  background-image: url(./../assets/food.jpg);
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 56%;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
}
.navbar {
  margin-top: 10px;
}
</style>
