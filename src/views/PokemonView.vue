<template>
    <main>
        <div class="main-info">
            <img :src="pokeInfo.spriteUrl">
            <h1 v-if="pokeInfo.name">
                {{ upperFirstLetter(pokeInfo.name) }}
            </h1>
            <span v-for="t in pokeInfo.types">{{ upperFirstLetter(t.type.name) }}</span>
        </div>
        <div class="stats">
            <h3>Stats:</h3>
            <p v-for="stat in pokeInfo.stats">{{ upperFirstLetter(stat.stat.name) }}: {{ stat.base_stat }}</p>
        </div>
        <div>
            <div class="moves-toggle">
                <h3>Moves:</h3>
                <button @click="pageStatus.showMoves = !pageStatus.showMoves">
                    <Icon v-if="!pageStatus.showMoves" icon="mingcute:down-fill" />
                    <Icon v-if="pageStatus.showMoves" icon="mingcute:up-fill" />
                </button>
            </div>
            <div v-if="pageStatus.showMoves">
                <input type="text" v-model="searchMove" placeholder="Pesquisar um move">
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Forma</th>
                    </thead>
                    <tbody>
                        <tr v-for="move in pageStatus.movesToShow">
                            <td>{{ upperFirstLetter(move.move.name) }}</td>
                            <td>{{ move.version_group_details[0].level_learned_at }}</td>
                            <td>{{ move.version_group_details[0].move_learn_method.name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

const route = useRoute();
const name = route.params.name;

const pokeInfo = reactive({
    name: '',
    spriteUrl: '',
    types: [],
    stats: [],
    moves: []
});

const searchMove = ref('');

const pageStatus = reactive({
    showMoves: false,
    movesToShow: [],
})

function sortLevelReverse(a, b) {
  const nomeA = a.version_group_details[0].level_learned_at;
  const nomeB = b.version_group_details[0].level_learned_at;

  if (nomeA < nomeB) {
    return 1;
  }
  if (nomeA > nomeB) {
    return -1;
  }
  return 0;
}

fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
.then(res => res.json())
.then(res => {
    pokeInfo.name = res.name;
    pokeInfo.spriteUrl = res.sprites.front_default;
    pokeInfo.types = res.types;
    pokeInfo.stats = res.stats;
    pokeInfo.moves = res.moves.sort(sortLevelReverse);
    pageStatus.movesToShow = pokeInfo.moves
})

const upperFirstLetter = str => str[0].toLocaleUpperCase() + str.slice(1);

watch(searchMove, () => {
    pageStatus.movesToShow = pokeInfo.moves.filter(move => move.move.name.includes(searchMove.value.toLocaleLowerCase()));
},
{
    deep: true
})

</script>

<style scoped>
span{margin: 0 5px;}
img{width: 180px;}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.stats {
    margin-left: 60px;
}
.main-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.moves-toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
}
th, td{
    padding: 3px 15px;
}
</style>