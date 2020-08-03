<template>
  <div class="side-nav bg-secondary" v-if="isDrawerOpen">
      <div v-for="menu in sidemenus" :key="menu.id">
          <a class="side-nav-link" href="#">{{ menu.title }}</a>
      </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        sidemenus: [
            { id: 1, title: 'Dashboard', url: '' },
            { id: 2, title: 'My Tasks', url: '' },
            { id: 3, title: 'Tasks', url: '' },
            { id: 4, title: 'Staff', url: '' },
            { id: 5, title: 'Customers', url: '' },
            { id: 6, title: 'Billing', url: '' },
        ]
    }),
    computed: {
        isDrawerOpen() {
            return this.$store.state.isDrawerOpen;
        }
    }
};
</script>

<style>
.side-nav {
  height: 100%;
  width: 300px;
}

.side-nav-link {
   padding:15px 0;
   display: block;
   color: white;
   padding-left: 10%;
}

.side-nav-link:hover {
    color: lightgray;
    text-decoration: none;
}
</style>