<template>
  <div> 
      <Header />
      <div class="drawer-layout"> 
        <SideBar />     
        <div class="main-content">
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

</style>