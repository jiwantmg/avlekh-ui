
``<template>
  <div class="border p-2">
    <h5 class="font-weight-bold">Register Tasks</h5>
    <form>
      <div class="form-group">
        <label class="font-weight-bold" for="customername">Customer Name</label>
        <select class="form-control" v-model="form.customerId">
          <option
            v-for="customer in customers"
            :key="customer.id"
            :value="customer.id"
          >
            {{ customer.fullName }}
          </option>
        </select>
      </div>
      <div class="form-row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="font-weight-bold" for="task">Task</label>
            <input class="form-control" id="task" v-model="form.task" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="font-weight-bold" for="priority">Priority</label>
            <select class="form-control" v-model="form.priority">
              <option v-for="priority in priorities" :key="priority">
                {{ priority }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="font-weight-bold" for="registeredon"
              >Registered On</label
            >
            <input
              type="date"
              class="form-control"
              id="registeredon"
              v-model="form.registered_on"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="font-weight-bold" for="deadline">Deadline</label>
            <input
              type="date"
              class="form-control"
              id="deadline"
              v-model="form.deadline"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="font-weight-bold" for="assignedto"
          >Assigned To (Optional)</label
        >
        <select class="form-control" v-model="form.userId">
          <option v-for="staff in staffs" :key="staff.id" :value="staff.id">
            {{ staff.fullName }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="font-weight-bold" for="ps">Possible Solution</label>
        <textarea
          class="form-control"
          rows="6"
          v-model="form.possible_solution"
        />
      </div>

      <div class="button-group">
        <a class="btn btn-primary" @click="saveTask()">Save</a>
      </div>
    </form>
  </div>
</template>

<script>
import * as taskService from "@/api/task.service";
import { mapState } from "vuex";
import Notification from "@/mixins/notification.js";
export default {
  data: () => ({
    form: {
      customerId: "",
      task: "",
      priority: "",
      registered_on: "",
      deadline: "",
      userId: "",
      possible_solution: "",
    },
    priorities: [1, 2, 3, 4, 5],
  }),
  mixins: [Notification],
  methods: {
    saveTask() {
      taskService.saveTasks(this.form).then(
        (res) => {
          this.showSuccessMsg({ message: "New task added successfully " });
          this.clearForm();
        },
        (err) => {
          this.showErrorMsg({ message: "Something went wrong" });
        }
      );
    },
    clearForm() {
      this.form.customerId = "";
      this.form.task = "";
      this.form.priority = "";
      this.form.registered_on = "";
      this.form.deadline = "";
      this.form.userId = "";
      this.form.possible_solution = "";
    },
  },
  computed: mapState({
    customers: (state) => state.customers.list,
    staffs: (state) => state.staffs.list,
  }),
};
</script>

<style>
</style> 