<template>
  <div>
    <header>
      <Nav />
      <h1>Hi, I'm James Lee! Your Personal VueJS <u>Mentor</u></h1>
      <p>
        I'm taking on 2 qualified mentees to expedite the process of learning
        VueJS
      </p>
      <client-only>
        <p>
          <a v-if="loaded && !loggedIn" href="" @click.prevent="showLogin = true"
            ><i>Apply for Mentorship</i>
          </a>
          <button v-else @click="logout">Logout</button>
        </p>
      </client-only>
    </header>
    <section>
      <form v-if="showLogin && !loggedIn" @submit.prevent="login(email)">
        <input v-model="email" placeholder="email" />
        <button>Sign-up / Login</button>
      </form>
    </section>
    <section v-if="loggedIn">
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
import nav from '@/components/nav'

export default {
  components: { stripeProductCard },

  data() {
    return {
      loaded: false,
      showLogin: false,
      products: products.filter(p => p.active),
      loggedIn: false,
      email: '',
    };
  },

  async mounted() {
    this.loggedIn = await this.$magic.user.isLoggedIn();
    this.loaded = true
    this.$axios.get('/.netlify/functions/test')
  },

  methods: {
    async login(email) {
      await this.$magic.auth.loginWithMagicLink({ email });
      this.loggedIn = this.$magic.user.isLoggedIn();
    },

    async logout() {
      await this.$magic.user.logout();
      this.loggedIn = await this.$magic.user.isLoggedIn();
      console.log(this.loggedIn);
    },
  },
};
</script>
