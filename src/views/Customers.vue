<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      @click="toggleCustomerForm()"
    >New Customer</button>

    <AModal 
      v-if="showModal" 
      :showModal="showModal" 
      v-on:onClose="toggleCustomerForm()"
      :options="options"
      >
      <CustomerForm v-on:onClose="toggleCustomerForm()"/>
    </AModal>
    <Customers />
  </div>
</template>

<script>
import CustomerForm from "@/components/modules/customers/CustomerForm";
import Customers from "@/components/modules/customers/Customers";
import AModal from '@/components/shared/AModal';
export default {
  data: () => ({
    showModal: false,
    options: {
      width: '800px',
      height: '',
      minWidth: '',
      minHeight: ''
    }
  }),

  components: {
    CustomerForm,
    Customers,
    AModal
  },
  methods: {
    toggleCustomerForm() {
      this.showModal = !this.showModal;
    }
  },

  mounted() {
    this.$store.dispatch("customers/getAllCustomersAsync");
  },
};
</script>

<style>
</style>