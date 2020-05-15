<template>
  <aside>
    <!-- <pre><code>{{product}}</code></pre>
    <pre><code>{{getProductPlans(product.id)}}</code></pre> -->
    <!-- <img alt="HTML only" src="./img/html.svg" height="150" /> -->
    <h3>{{ product.name }}</h3>
    <p>
      {{ product.description }}
    </p>
    <p v-for="plan in getProductPlans(product.id)" :key="plan.id">
      <a 
        @click="checkoutRedirect(plan.id)"
        href="#"
        ><i
          >{{intervalConversion(plan.interval)}} {{ product.unit_label }}
          {{ (plan.amount / 100) | currency }}&nearr;</i
        ></a
      >
    </p>
  </aside>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/pure';
import plans from '../data/plans.json';

export default {
  props: {
    product: {
      type: Object,
      default: {},
    },
  },

  computed: {
    plans: () => plans,
  },

  methods: {
    getProductPlans(productId) {
      return this.plans.filter((p) => p.product === productId);
    },

    async checkoutRedirect(planId) {
      console.log('wtf')
      const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY);
      stripe
        .redirectToCheckout({
          items: [
            {
              plan: planId,
              quantity: 1,
            },
          ],

          successUrl: 'http://localhost:3000',
          cancelUrl: 'http://localhost:3000',
        })
        .then((result) => {
          console.log('result', result);
        });
    },

    intervalConversion (interval) {
      switch (interval) {
        case 'month': return 'Monthly'
        case 'year': return 'Yearly'
        default: return interval
      }
    }
  },
};
</script>
