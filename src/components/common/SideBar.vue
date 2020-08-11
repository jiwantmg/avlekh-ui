<template>
  <div class="side-nav bg-secondary" v-if="isDrawerOpen">
    <div v-for="menu in sidemenus" :key="menu.id">
      <a class="side-nav-link no-select" @click="menuClicked(menu)">{{ menu.title }}</a>
      <div class="child-menu" v-if="menu.hasChild">
        <template v-if="menu.id === menuOpened">
          <div v-for="child in menu.children" :key="child.id">
            <router-link class="side-nav-link" :to="child.url">{{ child.title }}</router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuOpened: 0,
    sidemenus: [
      {
        id: 1,
        title: "Dashboard",
        url: "/",
        hasChild: false,
      },
      {
        id: 2,
        title: "My Tasks",
        url: "/mytasks",
        hasChild: false,
      },
      {
        id: 3,
        title: "Tasks",
        url: "/tasks",
        hasChild: true,
        children: [
          { id: 1, title: "Registers", url: "/tasks/register" },
          { id: 2, title: "View All", url: "/tasks/all" },
          { id: 3, title: "Canceled Tasks", url: "/tasks/canceled" },
        ],
      },
      {
        id: 4,
        title: "Staff",
        url: "/staffs",
        hasChild: true,
        children: [
          { id: 1, title: "New Staff", url: "/staffs/register" },
          { id: 2, title: "View All", url: "/staffs/all" }          
        ],
      },
      { id: 5, title: "Customers", url: "/customers", hasChild: false },
      { id: 6, title: "Billing", url: "/billings", hasChild: false },
    ],
  }),
  computed: {
    isDrawerOpen() {
      return this.$store.state.isDrawerOpen;
    },
  },
  methods: {
    menuClicked(menu) {
      this.menuOpened === menu.id
        ? (this.menuOpened = 0)
        : (this.menuOpened = menu.id);
      if (!menu.hasChild) this.$router.push(menu.url);
    },
  },
};
</script>

<style>
.side-nav {
  height: 100%;
  width: 300px;
}

.side-nav-link {
  padding: 15px 0;
  display: block;
  color: white !important;
  padding-left: 10%;
  user-select: none;
}

.child-menu .side-nav-link {
  font-size: 13px;
}

.side-nav-link:hover {
  color: lightgray;
  text-decoration: none;
}

.child-menu {
  background-color: #5f5b5b;
  padding-left: 10px;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>