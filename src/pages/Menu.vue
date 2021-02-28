<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";

export default {
  name: "Menu",
  components: {
    ProductCard,
  },
  data: () => ({
    products: [],
  }),
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      /**
       * Симулирует запрос на сервер
       */
      const response = [
        {
          id: 1,
          name: "Fried Potatoes",
          price: 25,
          imageSrc:
            "data:image/jpeg;base64,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",
        },
        {
          id: 2,
          name: "Chicken",
          price: 21,
          imageSrc:
            "https://eda.yandex/images/2761069/fbc824bcfcd6397cbc08749fbf4ce1de-450x300.jpeg",
        },
        {
          id: 3,
          name: "Biff",
          price: 23,
          imageSrc:
            "https://eda.yandex/images/3491582/9aa71628685d335c033081e1303a38c0-450x300.jpeg",
        },
        {
          id: 4,
          name: "Tomato",
          price: 2,
          imageSrc: "https://eda.yandex/images/3772831/97a4d165d0e80551e260d941586b18da-450x300.jpeg"

        },
        {
          id: 5,
          name: "curd",
          price: 5,
          imageSrc:
            "https://ayan-cafe.ru/assets/cache_image/templates/img/%D0%BC%D0%B5%D0%BD%D1%8E/dolma_340x192_a1d.jpg",
        },
      ];

      this.products = response;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-image: url(./../assets/food3.jpg);
  background-size: cover;
  background-position: 50% 50%;
}
</style>
