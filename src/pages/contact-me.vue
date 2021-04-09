<script>
import autocode from '@/services/autocode'

export default {
  async middleware ({store, redirect}) {
    const loggedIn = await store.dispatch('user/checkLogin')

    if (!loggedIn) redirect('/')
  },
  methods: {
    async contactRequestNotification({reason, about}) {
      const token = await this.$magic.user.getIdToken()
      const {email} = await this.$magic.user.getMetadata()

      await autocode.post('/contact-request-notification/', {
        reason,
        email,
        token,
        message: about
      })

      this.$refs.form.resetForm()
      alert('submitted')
    }
  }
}
</script>
<template>
  <client-only>
    <div class="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <ContactMeForm ref="form" @submit="contactRequestNotification" />
      </div>
    </div>
  </client-only>
</template>
