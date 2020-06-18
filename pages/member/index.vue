<template>
  <div>
    <header>
      <Nav />
      <h2 class="text-4xl">Hi, I'm James Lee! Your Personal VueJS <u>Mentor</u></h2>
      <p>
        I'm taking on 2 qualified mentees to expedite the process of learning
        VueJS
      </p>
    </header>
    <pricing />
  </div>
</template>

<script>
import stripeProductCard from '@/components/stripeProductCard';
import products from '../../data/products.json';
import nav from '@/components/nav';
import pricing from '@/components/pricing'

export default {
  components: { stripeProductCard, pricing },

  fetch () {
    console.log('fetch')
  },

  middleware(ctx) {
    console.log('hi', this, ctx)
  },

  data() {
    return {
      loaded: false,
      showLogin: false,
      loggedIn: false,
      email: '',
      subscriptions: [],
    };
  },

  computed: {
    products() {
      return products
        .filter((p) => p.active)
        .map((p) => ({
          ...p,
          subscribed: this.checkSubscribed(p.id)
        }));
    },

    hasActiveSubscription () {
      return this.products.some(p => p.subscribed)
    }
  },

  async mounted() {
    this.loggedIn = await this.$magic.user.isLoggedIn();
    this.subscriptions = this.loggedIn ? await this.getSubscriptions() : []
    this.loaded = true;
    
  },

  methods: {
    async login(email) {
      await this.$magic.auth.loginWithMagicLink({ email });
      this.loggedIn = this.$magic.user.isLoggedIn();
    },

    async logout() {
      await this.$magic.user.logout();
      this.loggedIn = await this.$magic.user.isLoggedIn();
    },

    async getSubscriptions() {
      const token = await this.$magic.user.getIdToken();

      const res = await this.$axios.post(
        '/.netlify/functions/stripe-customer',
        {
          token
        }
      );

      return res.data.subscriptions;
    },

    checkSubscribed(productId) {
      return this.subscriptions.some((s) => s.plan.product.id === productId);
    },
  },
};
</script>
