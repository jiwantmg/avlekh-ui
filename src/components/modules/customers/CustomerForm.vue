<template>
  <div class="border p-2">
    <h5 class="font-weight-bold">New Customer</h5>
    <form>
      <fieldset class="border p-2">
        <legend class="w-auto">Personal details</legend>

        <div class="form-group">
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="fullname">Full Name</label>
                <input
                  class="form-control"
                  placeholder="Customer Name"
                  id="fullName"
                  v-model="form.fullName"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="email">E-mail Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E-mail"
                  id="email"
                  v-model="form.email"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="phone-no">Phone No</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Phone number"
                  id="phone-no"
                  v-model="form.phoneNo"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  id="address"
                  v-model="form.address"
                />
              </div>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="border p-2">
        <legend class="w-auto">Identity</legend>
        <div class="col-md-6">
          <div class="form-group">
            <label class="font-weight-bold" for="user-name">User Name</label>
            <br />
            <input class="text" placeholder="User Name" id="user-name" v-model="form.user.username" />
          </div>
          <div class="form-group">
            <label class="font-weight-bold" for="password">password</label>
            <br />
            <input class="password" placeholder="Password" id="password" v-model="form.user.password" />
          </div>
        </div>
      </fieldset>

      <div class="button-group">
        <a class="btn btn-primary" @click="saveCustomer()">Save</a>
      </div>      
    </form>
  </div>
</template>

<script>
import { saveCustomerAsync } from "@/api/customer.service";
export default {
  data: () => ({
    form: {
      fullName: "",
      email: "",
      phoneNo: "",
      address: "",
      user: {
        username: '',
        password: ''
      }      
    },
  }),
  methods: {
    saveCustomer() {
      saveCustomerAsync(this.form).then(
        res => {
          console.log("Customer is successfully added");
          this.$store.dispatch("customers/getAllCustomersAsync");
          this.closeModal();
        }
      )
    },
    closeModal() {
      this.$emit('onClose');
    }
  },
};
</script>

<style>
</style> 