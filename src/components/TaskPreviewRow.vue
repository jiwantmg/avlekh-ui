<template>
  <div class="task-preview-card round-2">
      <div class="task-title">          
          <div class="pull-left font-weight-bold">{{ mytask.title }}</div>
          <div class="pull-right">{{ mytask.status }}</div>
      </div>
      <div class="description">
          <a class="more-btn" @click="isExpanded = !isExpanded">
            <i class="fa fa-caret-right" aria-hidden="true" :class="{'rotate-down': isExpanded}"></i>
          </a>
          <div class="d-block ml-2 font-italic task-desc" :class="{'maximized-task': isExpanded}">{{ mytask.description }}</div>
      </div>      
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
    },
    data: () => ({
        isExpanded: false
    })
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

.description {
    display: flex;
}
.more-btn {    
    width: 10px;
    cursor: pointer;
}


.more-btn i {
    font-size: 1.3rem;
}

.task-desc {    
    height: 20px;
}

.maximized-task {
    height: 100px;
}

.rotate-down {
    transform: rotate(90deg);
}



</style>