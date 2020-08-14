<template>
  <div>
    <TaskRegister />
  </div>
</template>

<script>
import TaskRegister from "@/components/modules/tasks/TaskRegister";
export default {
  components: {
    TaskRegister,
  },
  mounted() {
    this.$store.dispatch("customers/getAllCustomersAsync");
    this.$store.dispatch("staffs/getAllStaffsAsync");
  }
};
</script>

<style>
</style>