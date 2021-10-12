<template>
  <div class="container">
      <LogoComponent />
      <NavComponent class="nav" />
      <ButtonComponent class="btn" value="Click" />
  </div>
</template>

<script>
  import LogoComponent from './LogoComponent.vue'
  import ButtonComponent from './ButtonComponent.vue'
  import NavComponent from './NavComponent.vue'

export default {
  components: {
    ButtonComponent,
    NavComponent,
    LogoComponent
  },
  
}

</script>

<style scoped>
  .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1246px;
      padding: 0 15px;
      margin: 0 auto;
      padding-bottom: 16px;
  }

  @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }
      .nav{
        margin-top: 32px;
      }
      .btn{
        margin-top: 32px;
      }
  }

</style>