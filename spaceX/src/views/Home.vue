<template>
  <div class="home">
    
    <!-- Adicionar seções: -->

    <!-- Next launch coming (contador) -->
    <Upcoming/>

    <!-- Carrossel de imagens de launches (ao clicar sobre um, vai para a page especifica) -->

  </div>
</template>

<script>
import Upcoming from '@/components/Upcoming.vue';


// @ is an alias to /src
export default {
  name: 'home',
  components: { 
    Upcoming
  }
}
</script>

<style>
.home {
  max-width: 100%;
}
</style>
