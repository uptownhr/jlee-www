<script>
import autocode from '@/services/autocode'

export default {
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
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-3xl mx-auto">
      <ContactMeForm ref="form" @submit="contactRequestNotification" />
    </div></div
></template>
