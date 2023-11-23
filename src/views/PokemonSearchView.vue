<template>
    <DexBanner />
    <main>
        <DexSearch
            :endpoint="'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'"
            @search="setResponse"
        >
            Pokemon
        </DexSearch>
        
        <DexCard 
            v-for="pokemon in pageStatus.response"
            :pokemonName="pokemon.name"
            :endpoint="pokemon.url" 
        />
    </main>
</template>

<script setup>
import DexBanner from '../components/DexBanner.vue';
import { reactive } from 'vue';
import DexCard from '../components/DexCard.vue';
import DexSearch from '../components/DexSearch.vue';

const pageStatus = reactive({
    response: null
});

const setResponse = res => {
    pageStatus.response = res;
};

</script>

<style scoped>
main {
    margin: 0 20px;
}
</style>