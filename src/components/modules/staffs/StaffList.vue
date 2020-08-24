<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">S.N.</th>
          <th scope="col">Staff Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone No</th>
          <th scope="col">Specialization</th>
          <th scope="col">UerName</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="customer in customers" :key="customer.id">
              <td>{{ customer.id }}</td>
              <td>{{ customer.name }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.phone }}</td>
              <td>{{ customer.specialization }}</td>
              <td>{{ customer.username }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    computed: {
        customers() {
            return this.$store.state.staffs.list
        }
    }
};
</script>

<style>
</style>