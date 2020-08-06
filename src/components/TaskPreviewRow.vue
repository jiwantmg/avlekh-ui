<template>
  <div class="task-preview-card round-2">
      <div class="task-title">
          <div class="pull-left font-weight-bold">{{ mytask.title }}</div>
          <div class="pull-right">{{ mytask.status }}</div>
      </div>
      <div class="task-desc d-block ml-2 font-italic">{{ mytask.description }}</div>
      <div class="task-action">
          <p> Deadline : {{ mytask.deadline }}</p>
          <p class="mx-2"> Track No : {{ mytask.track_no }}</p>
          <p class="ml-auto"> Created At : {{ mytask.created_at }}</p>          
      </div>
  </div>
</template>

<script>
export default {
    props: {
        mytask: {
            type: Object,
            required: true
        }       
    }
}
</script>

<style>
.task-preview-card {
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    padding: 5px;
}
.task-action {
    display: flex;
    flex-direction: row;
}
</style>