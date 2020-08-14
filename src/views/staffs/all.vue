<template>
  <div>
      <StaffList /> 
  </div>
</template>

<script>
 import StaffList from '@/components/modules/staffs/StaffList';

export default {
  components : {
    StaffList
  },
  mounted() {
     this.$store.dispatch("staffs/getAllStaffsAsync");
  }
}
</script>

<style>

</style>