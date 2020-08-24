<template>
  <div class="mytasks-container bg-whitesmoke p-2 full-height-m">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          :class="{'active': activeTab === 0}"
          @click="activeTab = 0"
        >Assigned Tasks</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="profile-tab"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
           :class="{'active': activeTab === 1}"
           @click="activeTab = 1"
        >Completed Tasks</a>
      </li>
    </ul>
    <component :is="selectedComponet" />
  </div>
</template>

<script>
import AssignedTasks from '@/components/modules/mytasks/AssignedTasks.vue';
import CompletedTasks from '@/components/modules/mytasks/CompletedTasks.vue';
export default {
    data: () => ({
        activeTab: 0,
        selectedComponet: 'assigned'
    }),
    components: {
        'assigned':AssignedTasks,
        'completed': CompletedTasks
    },
    watch: {
        activeTab: function(val) {
            this.selectedComponet = val == 0 ? 'assigned': 'completed';
        }
    },
    mounted() {
      this.$store.dispatch('tasks/getMyTasksAsync');
    }
};
</script>

<style>
.mytasks-container {
  display: flex;
  flex-direction: column;
}
</style>