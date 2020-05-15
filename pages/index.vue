<template>
  <div>
    <header>
      <h1>Get paid for your services</h1>

      <button>Schedule a Consultation call</button>
    </header>
    <section>
      <stripe-product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </section>
  </div>
</template>

<script>
import stripeProductCard from '@/components/stripeProductCard';
import products from '../data/products.json';

export default {
  components: { stripeProductCard },

  data() {
    return {
      products,
    };
  },
};
</script>
