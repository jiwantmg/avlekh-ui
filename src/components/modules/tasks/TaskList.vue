<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>          
          <th scope="col">Cutomer Name</th>
          <th scope="col">Task</th>
          <th scope="col">Priority</th>
          <th scope="col">Deadline</th>
          <th scope="col">Assign To</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">          
          <td>{{ task.Customer.fullName }}</td>
          <td>{{ task.task }}</td>
          <td>{{ task.priority }}</td>
          <td>{{ task.deadline }}</td>
          <td>{{ task.User.fullName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks.list;
    },
  },
};
</script>

<style>
</style>