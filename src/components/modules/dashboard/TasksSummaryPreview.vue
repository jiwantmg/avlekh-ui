<template>
  <div class="card text-white bg-success">
    <div class="card-header">{{ taskSummary.title }}</div>
    <div class="card-body">
      <table>
        <tr v-for="data in taskSummary.datas" :key="data.id">
          <th>{{ data.title }}</th>
          <td>{{ data.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    taskSummary: state => state.tasks.taskSummary
  })
};
</script>

<style>
</style>