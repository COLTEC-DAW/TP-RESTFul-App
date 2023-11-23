<template>
    <header>
        <h1>Dexpedia</h1>
        <ul>
            <RouterLink to="/">Inicial</RouterLink>
            <RouterLink to="/pokemonsearch">Pokemon</RouterLink>
            <RouterLink to="/about">Sobre</RouterLink>
        </ul>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
header {
    background-color: var(--main-blue);
    color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}

ul {
    list-style-type: none;
    display: flex;
}

ul > * {
    color: white;
    text-decoration: none;
    margin: 0 12px;
}

ul > *:hover{
    color: aqua;
}

@media (max-width: 600px) {
    header{
        flex-direction: column;
        align-items: start;
    }
    ul {
        padding: 0;
    }
    ul > * {
        margin: 0 10px;
    }
}

@media (max-width: 350px) {
    ul {
        flex-direction: column;
        margin: 0;
    }
    ul > * {
        padding: 2px 0;
    }
    ul > *:last-child{
        padding-bottom: 10px;
    }
}

</style>