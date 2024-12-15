<template>
<div>
<div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4">PIZZE</h1>
</div>
<section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <div v-for="pizza in pizze" :key="pizza._id" class="col-md-4">
        <div class="w-72 bg-gray-400 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
            <img :src="pizza.slika" class="card-img-top" alt="Pizza slika">
                <div class="px-4 py-3 w-72">
                    <p class="text-lg font-bold text-black truncate block capitalize">{{ pizza.naziv }}</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">{{ pizza.cijena }} € </p>
                </div>
                <p>sastojci:</p>
                <div v-for="sastojak in pizza.sastojci" :key="sastojak.id" class="col-md-4">
                    <p class="text-sm font-regular text-black cursor-auto my-3">{{ sastojak }}</p>
                </div>
            </div>
            </a>
        </div>
    </div>
</section>
</div>

</template>

  
  <script setup>
  import { ref, onMounted } from 'vue';
import axios from 'axios';
let pizze = ref(null);

onMounted(async () => {
try {
const response = await axios.get('http://localhost:3000/pizze');
pizze.value = response.data; 
} catch (error) {
console.error('Greška u dohvatu podataka: ', error);
}
});
  </script>
  
  <style>
  .card img {
    height: 200px;
    object-fit: cover;
  }
  </style>
  

