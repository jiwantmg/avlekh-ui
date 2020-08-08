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

export default {
  components: {
    TaskPreviewRow,
  },
  data: () => ({
    mytasks: [
      { id: 1, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1' },
      { id: 2, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1' },
      { id: 3, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1' },
      { id: 4, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1' },
      { id: 5, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1' },
      { id: 6, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1' },
      { id: 7, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1' },
      { id: 7, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1' }
    ]
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