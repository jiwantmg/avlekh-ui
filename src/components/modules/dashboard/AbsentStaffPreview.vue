<template>
  <div class="card text-white bg-success">
    <div class="card-header">{{"Absent Staff"}}</div>
    <div class="card-body">
      <template v-if="summary">
        <table>
          <tr v-for=" data in summary.datas" :key="data.id">            
            <th>{{data.title}}</th>
            <th>{{data.value}}</th>
          </tr>
        </table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    summary() {
      return this.$store.state.absent.summary;
    },
  },
};
</script>

<style>
</style>