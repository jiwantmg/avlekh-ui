<template>
  <div>
      Billing
  
<div class = "border p-2">
<h5 class="font-weight-bold">Billing</h5>
<div class = "border p-2">
<form>
  <div class="form-group">
  
    <label class="font-weight-bold" for="email">Email</label>
    <input type="email"  class="form-control" id="email" >
   
  </div>
  <div class="form-group">
    <label class = "font-weight-bold" for="phone">Phone</label>
    <input type="number"  class="form-control" id="phone" >

  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
  
</div>
</div>
</template>

<script>
export default {
  components: {
    

  }

}
</script>

<style>
.form-group .form-control{
  width: 40%;
}


</style>