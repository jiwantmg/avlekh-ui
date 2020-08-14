<template>
  <div class="staff-wrapper">
    <form>
    <div class="border p-2">
      <h5 class="font-weight-bold">Register Staff</h5>
        <div class="form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="font-weight-bold" for="task">Full Name</label>
              <input class="form-control" id="fullName" v-model="form.fullName"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="font-weight-bold" for="priority">Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="font-weight-bold" for="registeredon">Phone</label>
              <input type="text" class="form-control" id="phone" v-model="form.phone"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="font-weight-bold" for="deadline">Specialization</label>
              <input type="text" class="form-control" id="specialization" v-model="form.specialization"/>
            </div>
          </div>
        </div>
    </div>

      

    <div class="border p-2 " style="margin-top:40px;">
    <h5 class="font-weight-bold">Identity</h5>
     <div class="form-group">
        <div class="col-md-6">
          <label class="font-weight-bold" for="ps">Username</label>
           <input type="text" class="form-control" id="registeredon" v-model="form.username"/>
        </div>
      </div>
    <div class="form-group">
        <div class="col-md-6">
          <label class="font-weight-bold" for="ps">Password</label>
           <input type="text" class="form-control" id="password" v-model="form.password"/>
        </div>
      </div>
      <div class="button-group">
        <a class="btn btn-primary" @click="saveStaff()">Save</a>
      </div>
    </div>
  </form>

  </div>
</template>


<script>
import { saveStaff } from '@/api/staff.service';
export default {
  data: () => ({
    form: {
        fullName: '',
        email: '',
        phone: '',
        specialization: '',
        username: '',
        password: '',
    },
  }),
  methods: {
    saveStaff() {     
      saveStaff(this.form);
    },
  },
};
</script>

<style>
</style> 