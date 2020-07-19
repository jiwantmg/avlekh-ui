<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>      
  </div>
</template>

<script>
import LoggedInLayout from '@/components/layout/Default'
import EmptyLayout from '@/components/layout/Empty'

export default { 
  components: {
    LoggedInLayout,
    EmptyLayout
  },
  computed: {
    layout() {
      return this.$store.state.auth.isLoggedIn ? 'logged-in-layout' : 'empty-layout';    
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
