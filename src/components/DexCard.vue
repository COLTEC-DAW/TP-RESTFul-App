<!-- TODO: Fazer ser responsivo -->
<template>
    <div class="wrapper">
        <img :src="cardStatus.sprite" alt="Sprite não encontrado">
        <div class="info">
            <h2>{{ props.pokemonName }}</h2>
            <div class="secundary-info">
                <span v-for="t in cardStatus.types">{{ t.type.name }}</span>
            </div>
        </div>
        <RouterLink :to="'/pokemon/' + props.pokemonName">
            <button>
                <Icon icon="ph:eye-fill" />
            </button>
        </RouterLink>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { reactive, watch } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    endpoint: {
        type: String,
        required: true
    },
    pokemonName: {
        type: String,
        required: true
    }
})

const cardStatus = reactive({
    sprite: '',
    types: {},
})

watch(props, async () => {
    fetch(props.endpoint)
    .then(res => res.json())
    .then(res => {
        cardStatus.sprite = res.sprites.front_default
        cardStatus.types = res.types;
    })
},
{
    immediate: true,
    deep: true
});


</script>

<style scoped>
.wrapper{
    border: 1px black solid;
    margin: 10px 10px;
    padding: 8px 14px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.info{
    width: 80%;
}

button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
}

.secundary-info > *{
    margin: 0 5px;
}
</style>