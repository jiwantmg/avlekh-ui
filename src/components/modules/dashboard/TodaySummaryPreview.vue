<template>
  <div class="card text-white bg-success">
    <div class="card-header">{{ todaySummary.title }}</div>
    <div class="card-body">
      <table>
        <tr v-for="data in todaySummary.datas" :key="data.id">
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
    todaySummary: state => state.dashboard.todaySummary
  })
};
</script>

<style>
</style>