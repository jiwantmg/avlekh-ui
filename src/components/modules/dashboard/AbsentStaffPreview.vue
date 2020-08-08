<template>
  <div class="card text-white bg-success">
    <div class="card-header">{{"Absent Staff"}}</div>
    <div class="card-body">
<table>
  <tr v-for=" data in datas" :key="data.id">
    <th>{{data.title}}</th>
    <th>{{data.value}}</th>
   
  </tr>
</table>
  </div>
  </div>
</template>

<script>
export default {
  computed : {
    datas() {
      return this.$store.state.absent.absent.datas;
    }
  }
};
</script>

<style>

</style>