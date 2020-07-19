<template>
  <div class="login-wrapper">
      <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/auth/Login';
export default {
    components: {
        LoginForm
    }
}
</script>

<style>
.login-wrapper {
    height: 100vh;
    width: 100vw;
}
</style>