<template>
  <!-- Modal -->
  <div>
    <div
      class="modal fade show"      
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"      
    >
      <div class="modal-dialog modal-xl" role="document" ref="avDialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <slot />
          </div>          
        </div>
      </div>
    </div>
    <div v-if="showModal" class="modal-backdrop"></div>
  </div>
</template>

<script>
export default {
   props: ["showModal","options"],
   methods: {
       closeModal() {
           this.$emit('onClose');
       }
   },
   mounted() {
       if(this.options) {           
           if(this.options.width)
            this.$refs.avDialog.style.width= this.options.width;            
           if(this.options.minWidth)
            this.$refs.avDialog.style.minWidth= this.options.minWidth;   
           if(this.options.height)
            this.$refs.avDialog.style.height= this.options.height;   
           if(this.options.minHeight)           
            this.$refs.avDialog.style.minHeight= this.options.minHeight;   
       }       
   }
};
</script>

<style>
.modal-backdrop {
    position: fixed;
    display: block;
    background-color: black;
    opacity: 0.6;
}

@media (min-width: 576px) {
    .modal-dialog {
        max-width: auto !important;
    }
}
</style>