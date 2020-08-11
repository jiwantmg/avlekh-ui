
``<template>
  <div class="border p-2">
    <h5 class="font-weight-bold">Register Tasks</h5>
    <form>
      <div class="form-group">
        <label class="font-weight-bold" for="customername">Customer Name</label>
        <input class="form-control" id="customername" v-model="form.customer_name"/>
      </div>
      <div class="form-row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="font-weight-bold" for="task">Task</label>
            <input class="form-control" id="task" v-model="form.task"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="font-weight-bold" for="priority">Priority</label>
            <input type="text" class="form-control" id="priority" v-model="form.priority"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="font-weight-bold" for="registeredon">Registered On</label>
            <input type="date" class="form-control" id="registeredon" v-model="form.registered_on"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="font-weight-bold" for="deadline">Deadline</label>
            <input type="date" class="form-control" id="deadline" v-model="form.deadline"/>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="font-weight-bold" for="assignedto">Assigned To (Optional)</label>
        <select class="form-control" v-model="form.assigned_to">
          <option value="1">Jiwan Kumar Tamang</option>
          <option value="2">Mithun karmacharya</option>
          <option value="3">Mohan mohan</option>
        </select>
      </div>

      <div class="form-group">
        <label class="font-weight-bold" for="ps">Possible Solution</label>
        <textarea class="form-control" rows="6" v-model="form.possible_solution"/>
      </div>

      <div class="button-group">
        <a class="btn btn-primary" @click="saveTask()">Save</a>
      </div>
    </form>
  </div>
</template>

<script>
import { saveTasks } from '@/api/task.service';
export default {
  data: () => ({
    form: {
        customer_name: '',
        task: '',
        priority: '',
        registered_on: '',
        deadline: '',
        assigned_to: '',
        possible_solution: ''
    },
  }),
  methods: {
    saveTask() {
      saveTasks(this.form);
    },
  },
};
</script>

<style>


</style> 