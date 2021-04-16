<script>
import Hero from '@/components/Hero/Hero'
import CurrentWork from '@/components/CurrentWork/CurrentWork'
import {htmlHead} from "@/lib/helpers";

const head = htmlHead({
  title: 'James Lee - Software Engineer',
  description: `Software Engineer, a husband, and a father of two kids. I enjoy tackling issues related to
              SMBs and enabling entrepreneurs. My mission is to remove the
              friction of one becoming an entrepreneur and increase the amount
              of Small Business in the world.`
})

export default {
  head,
  components: {
    Hero,
    CurrentWork,
  },

  data() {
    return {
      loginForm: {
        email: '',
      },
    }
  },

  computed: {
    loggedIn() {
      return this.$store.getters['user/loggedIn']
    },
  },

  methods: {
    async handleAuth(email) {
      let success = false
      if (!this.loggedIn) {
        success = await this.$store.dispatch('user/auth', {email})

        if (!success) return
      }

      this.handleRedirect()
    },

    handleRedirect() {
      this.$router.push('/contact-me')
    },
  },
}
</script>
<template>
  <div>
    <Hero :loggedIn="loggedIn">
      <template slot="heading-text">
        Hi! I'm James Lee, <br/>
        <span class="text-indigo-600">a Software Engineer</span>
      </template>
      <template slot="sub-text">
        a husband, and a father of two kids. I enjoy tackling issues
        related to SMBs and enabling entrepreneurs. My mission is to
        remove the friction of one becoming an entrepreneur and increase
        the amount of Small Business in the world.
      </template>
      <LoginForm @auth="handleAuth"/>
    </Hero>
    <SectionText
        title="Current Work"
        heading="Bambee - New Product Development"
        description="Working within a newly formed team to tackle Payroll. My primary role
          is to provide architectural support for interfacing with the Core
          platform. Payroll is our first new product that is running as an
          independent service and will be paving the patterns towards
          microservice architecture."
    />
    <hr class="mx-auto w-16" />
    <SectionText
        title="Mentorship"
        heading="VueJS Mentorship"
        description="I'm looking to work with another engineer to develop a mastery with VueJS. I can share my past 4+ years of experience and looking for a partner to tackle challenges together."
    >
      <nuxt-link
          to="mentorship"
          class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out mt-4 block"
      >Learn More</nuxt-link>
    </SectionText>

    <PageCTABreak>
      <template slot="heading-text">
        Want to talk?
        <br/>
        <span class="text-indigo-600">Reach out today. </span>
      </template>
      <LoginForm slot="cta" :inline-btn="true" @auth="handleAuth"/>
    </PageCTABreak>


  </div>
</template>
