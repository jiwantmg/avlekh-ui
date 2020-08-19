<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">S.N.</th>
          <th scope="col">Cutomer Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone No</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="customer in customers" :key="customer.id">
              <td>{{ customer.id }}</td>
              <td>{{ customer.fullName }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.phoneNo }}</td>
              <td>{{ customer.address }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {  
    computed: {
        customers() {
            return this.$store.state.customers.list
        }
    }
};
</script>

<style>
</style>