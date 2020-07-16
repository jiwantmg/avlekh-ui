<template>
  <div class="home">
    changes by jiwan
    {{ appName }}    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    appName: process.env.VUE_APP_SERVER_URL
  }),
  components: {
    HelloWorld
  },
  mounted() {    
    this.$logger.info('Home page is initiated');
  }
}
</script>
