<template>
  <div> 
      <Header />
      <div class="drawer-layout"> 
        <SideBar />     
        <div class="main-content px-2 py-3">
         <slot />
        </div>
      </div>      
  </div>
</template>

<script>
import Header from '@/components/common/Header';
import SideBar from '@/components/common/SideBar';

export default {
    components: {
        Header,
        SideBar
    }
}
</script>

<style>
.drawer-layout {
    display: flex;
    height: 95vh;
}

.main-content {
  width: 100%;
}

</style>