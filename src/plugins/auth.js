export default async ({app, store}) => {
  const loggedIn = await store.dispatch('user/checkLogin')
  
  if (!loggedIn) return
}   