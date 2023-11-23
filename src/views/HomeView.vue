<script setup>
import DexBanner from '../components/DexBanner.vue';

</script>

<template>
  <DexBanner />
  <main>
    <section id="sec-1">
      <h1>Bem-vindo ao Dexpedia!</h1>
      <p>
        Explore a vastidão do universo Pokémon conosco. Nossa aplicação web, desenvolvida com a poderosa tecnologia Vue.js, 
        oferece a você a oportunidade única de mergulhar nas informações fascinantes sobre seus Pokémon favoritos. Com uma 
        interface intuitiva, pesquisar e descobrir detalhes sobre essas criaturas lendárias nunca foi tão fácil.
      </p>
    </section>
    <section id="sec-2">
      <h1>Descubra Pokémons como Nunca Antes</h1>
      <p>
        Graças à colaboração dedicada de Thales Davi, Gabrielle Maia e Kaio Fernandes, nossa plataforma proporciona uma experiência simples e otimizada. 
        Desfrute de uma visualização clara e amigável que torna a exploração do mundo Pokémon uma jornada emocionante.
      </p>
    </section>
    <section id="sec-3">
      <h1>Junte-se a Nós nesta Aventura Pokémon</h1>
      <p>
        Explore, pesquise, compartilhe e mergulhe mais fundo no fascinante universo Pokémon.
      </p>
    </section>
  </main>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
}
main > * {margin: 14px 0;}
#sec-1{
  text-align: left;
}
#sec-2{
  text-align: right;
}
#sec-3{
  text-align: left;
}
</style>