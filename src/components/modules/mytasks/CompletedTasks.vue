<template>
  <div class="card-container p-2 bg-white full-height">
    <table class="mytask-table full-width">
      <tr v-for="(mytask, i) in mytasks" :key="i">
        <td class="sn-no">
          {{ i + 1 }}
        </td>
        <td>
          <TaskPreviewRow :mytask="mytask"/>   
        </td>
      </tr>
    </table>    
  </div>
</template>

<script>
import TaskPreviewRow from "@/components/TaskPreviewRow";
import { mapState } from 'vuex';
export default {
  components: {
    TaskPreviewRow,
  },
   computed: mapState({
    mytasks: state => state.tasks.list.completedTasks
  })
};
</script>

<style>
.card-container {
  flex-grow: 1;
}

.mytask-table tr > td:first-child {
  width: 5%;
}
</style>