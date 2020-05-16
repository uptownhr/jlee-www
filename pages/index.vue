<template>
  <div>
    <header>
      <h1>Get paid for your services</h1>
      <form v-if=!loggedIn @submit.prevent="login(email)">
        <input v-model="email" />
        <button>Login</button>
      </form>
      <h2 v-else>{{loggedIn ? 'LoggedIn' : 'notLoggedIn' }} <button @click="logout">Log out</button></h2>
      <!-- <button>Schedule a Consultation call</button> -->
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
      loggedIn: false,
      email: ''
    };
  },

  async mounted () {
    this.loggedIn = await this.$magic.user.isLoggedIn()
  },

  methods: {
    async login (email) {
      await this.$magic.auth.loginWithMagicLink({ email });
      this.loggedIn = this.$magic.user.isLoggedIn()
    },

    async logout () {
      await this.$magic.user.logout()
      this.loggedIn = await this.$magic.user.isLoggedIn()
      console.log(this.loggedIn)
    }
  }
};
</script>
