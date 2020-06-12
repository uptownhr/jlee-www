<template>
  <div ref="stripeCard">stripe</div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/pure';

export default {
  async mounted() {
    const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY);
    /* stripe.redirectToCheckout({
      items: [
        {
          plan: 'plan_HGk9D5xUDMxPDj',
          quantity: 1
        }
      ],

      successUrl: 'http://localhost:3000',
      cancelUrl: 'http://localhost:3000'
    })
    .then(result => {
      console.log('result', result)
    }) */

    const elements = stripe.elements();
    const cardElement = elements.create('card');
    console.log('refs', this.$refs)
    cardElement.mount(this.$refs.stripeCard)
  },
};
</script>
