<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">S.N.</th>
          <th scope="col">Cutomer Name</th>
          <th scope="col">Task</th>
          <th scope="col">Priority</th>
          <th scope="col">RegisteredOn</th>
          <th scope="col">Deadline</th>
          <th scope="col">AssignTo</th>
          <th scope="col">PSolution</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="task in tasks" :key="task.id">
              <td>{{ task.id }}</td>
              <td>{{ task.customer }}</td>
              <td>{{ task.task }}</td>
              <td>{{ task.priority }}</td>
              <td>{{ task.registered_on }}</td>
              <td>{{ task.deadline }}</td>
              <td>{{ task.assigned_to }}</td>
              <td>{{ task.possible_solution }}</td>


          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    computed: {
        tasks() {
          // console.log(this.$store.state.customers.list);
          //   console.log(this.$store.state.staffs.list);
            return this.$store.state.tasks.list;
            
        },
        // customer(){
        //   return (id)=>this.$store.state.tasks.list.filte
        // }
    }
};

</script>

<style>
</style>