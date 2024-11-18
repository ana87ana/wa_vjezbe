<template>
    <div>
      <h1>{{ product.name }}</h1>
      <p>Price: {{ product.price }} EUR</p>
      <p>Available Colors: {{ product.available_colors.join(', ') }}</p>
      <p>Material: {{ product.characteristics.material }}</p>
      <p>Weight: {{ product.characteristics.weight }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        product: {},
      };
    },
    async mounted() {
      const id = this.$route.params.id;
      const response = await axios.get(`http://localhost:3000/proizvodi/${id}`);
      this.product = response.data;
    },
    methods: {
      addToCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(this.product);
        localStorage.setItem('cart', JSON.stringify(cart));
        this.$router.push('/proizvodi');
      },
    },
  };
  </script>
  