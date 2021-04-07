export const state = () => ({
  loggedIn: false
})

export const getters = {
  loggedIn (state) { 
    return state.loggedIn
  }
}

export const mutations = {
  setLoggedIn (state, boolean) {
    state.loggedIn = boolean
  }
}

export const actions = {
  async auth ({commit}, {email}) {
    await this.$magic.auth.loginWithMagicLink({ email });

    commit('setLoggedIn', true)
  },

  async checkLogin ({commit}) {
    const loggedIn = await this.$magic.user.isLoggedIn();

    commit('setLoggedIn', loggedIn)

    return loggedIn
  }
}