<template>
  <div>
      <TaskList />
  </div>
</template>

<script>
 import TaskList from '@/components/modules/tasks/TaskList';

export default {
  components : {
    TaskList
  },
  mounted() {
     this.$store.dispatch("tasks/getAllTaskSummaryAsync");
  }
}
</script>

<style>

</style>