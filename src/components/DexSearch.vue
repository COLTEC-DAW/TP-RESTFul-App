<!-- TODO: Fazer esse componente ser respansivo -->
<template>
    <h1>
        <slot></slot>
    </h1>
    <section class="wrapper">
        <div class="search-wrapper">
            <div class="search">
                <input type="text" v-model="searchOptions.search" @keydown="isToSearch">
                <button @click="search">
                    <Icon icon="tabler:search" />
                </button>
            </div>
            <div>
                <span v-if="searchOptions.response" class="search-count">{{ searchOptions.resultsCount }} resultados para "{{ searchOptions.searchDisplay }}"</span>
                <div class="search-options">
                    <div>
                        <span>Ordenar por </span>
                        <select v-model="searchOptions.orderBy">
                            <option value="0"></option>
                            <option value="1">A-Z</option>
                            <option value="2">Z-A</option>
                        </select>
                    </div>
                    <div>
                        <span>Mostrando por página </span>
                        <select v-model="searchOptions.maxResults" @change="search">
                            <option value="20">20</option>
                            <option value="40">40</option>
                            <option value="60">60</option>
                        </select>
                    </div>
                    <div  v-if="searchOptions.response">
                        <div class="choose-page" v-if="numPages <= 5">
                            <Icon v-if="searchOptions.actualPage !== 1" icon="mingcute:left-fill" @click="changePage(searchOptions.actualPage - 1)" />
                            <span @click="changePage(i)" v-for="i in numPages" :class="{ 'page-selected' : i == searchOptions.actualPage }">{{ i }}</span>
                            <Icon v-if="searchOptions.actualPage !== numPages" icon="mingcute:right-fill" @click="changePage(searchOptions.actualPage + 1)" />
                        </div>
                        <div class="choose-page" v-else-if="searchOptions.actualPage <= 3">
                            <Icon v-if="searchOptions.actualPage !== 1" icon="mingcute:left-fill" @click="changePage(searchOptions.actualPage - 1)" />
                            <span v-for="i in 5" @click="changePage(i)" :class="{ 'page-selected' : i == searchOptions.actualPage }">{{ i }}</span>
                            <span>...</span>
                            <span @click="changePage(numPages)">{{ numPages }}</span>
                            <Icon v-if="searchOptions.actualPage !== numPages" icon="mingcute:right-fill" @click="changePage(searchOptions.actualPage + 1)" />
                        </div>
                        <div class="choose-page" v-else-if="numPages - searchOptions.actualPage <= 3 ">
                            <Icon v-if="searchOptions.actualPage !== 1" icon="mingcute:left-fill" @click="changePage(searchOptions.actualPage - 1)" />
                            <span @click="changePage(1)">1</span>
                            <span>...</span>
                            <span 
                                v-for="i in (3 + (numPages - searchOptions.actualPage))"
                                v-if="!((i + (searchOptions.actualPage - 3)) >= numPages)" 
                                @click="changePage(i + (searchOptions.actualPage - 3))" 
                                :class="{ 'page-selected' : (i + (searchOptions.actualPage - 3)) == searchOptions.actualPage }"
                            >
                                    {{ i + (searchOptions.actualPage - 3) }}
                            </span>
                            <Icon v-if="searchOptions.actualPage !== numPages" icon="mingcute:right-fill" @click="changePage(searchOptions.actualPage + 1)" />
                        </div>
                        <div class="choose-page" v-else>
                            <Icon v-if="searchOptions.actualPage !== 1" icon="mingcute:left-fill" @click="changePage(searchOptions.actualPage - 1)" />
                            <span @click="changePage(1)">1</span>
                            <span>...</span>
                            <span 
                                v-for="i in 5" 
                                @click="changePage(i + (searchOptions.actualPage - 3))" 
                                :class="{ 'page-selected' : (i + (searchOptions.actualPage - 3)) == searchOptions.actualPage }"
                            >
                                {{ i + (searchOptions.actualPage - 3) }}
                            </span>
                            <span>...</span>
                            <span @click="changePage(numPages)">{{ numPages }}</span>
                            <Icon v-if="searchOptions.actualPage !== numPages" icon="mingcute:right-fill" @click="changePage(searchOptions.actualPage + 1)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { computed, nextTick, reactive } from 'vue';

const emit = defineEmits(['search']);

const props = defineProps({
    endpoint: {
        type: String,
        required: true
    }
})

const searchOptions = reactive({
    search: '',
    maxResults: 20,
    actualPage: 1,
    orderBy: '',
    resultsCount: '',
    searchDisplay: '',
    response: null
})

const numPages = computed(() => Math.ceil(parseInt(searchOptions.resultsCount) / parseInt(searchOptions.maxResults)))

function ordemAlfabetica(a, b) {
  const nomeA = a.name.toLowerCase();
  const nomeB = b.name.toLowerCase();

  if (nomeA < nomeB) {
    return -1;
  }
  if (nomeA > nomeB) {
    return 1;
  }
  return 0;
}

function ordemAlfabeticaReversa(a, b) {
  const nomeA = a.name.toLowerCase();
  const nomeB = b.name.toLowerCase();

  if (nomeA < nomeB) {
    return 1;
  }
  if (nomeA > nomeB) {
    return -1;
  }
  return 0;
}

const search = () => {
    searchOptions.actualPage = 1
    fetch(props.endpoint)
    .then(res => res.json())
    .then(res => {
        res.results = res.results.filter(poke => poke.name.includes(searchOptions.search.toLocaleLowerCase()));
        
        searchOptions.resultsCount = res.results.length;
        searchOptions.searchDisplay = searchOptions.search;
        searchOptions.response = res.results;
        
        searchOptions.orderBy === "1" ? res.results.sort(ordemAlfabetica) : searchOptions.orderBy === "2" ? res.results.sort(ordemAlfabeticaReversa) :  
        searchOptions.orderBy === "1" ? searchOptions.response.sort(ordemAlfabetica) : searchOptions.orderBy === "2" ? searchOptions.response.sort(ordemAlfabeticaReversa) :  

        res.results = res.results.slice(0, searchOptions.maxResults);

        return res.results;
    })
    .then(res => emit('search', res))
};

const isToSearch = key => {
    if(key.key == 'Enter')
        search();
}

const changePage = pageNumber => {
    let res = searchOptions.response.slice(((pageNumber-1) * searchOptions.maxResults), searchOptions.maxResults*pageNumber);

    emit('search', res);
    
    nextTick(() => {
        searchOptions.actualPage = pageNumber;
    })
}

</script>

<style scoped>
.search {
    display: flex;
    flex-direction: row;
    width: 70%;
    align-items: center;
}
.search>*{
    font-size: 18px;
    padding: 4px 8px;
}
.search>input{
    width: 80%;
}

.search-count{
    padding: 5px;
}

.search-options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
}

.choose-page{
    display: flex;
    align-items: center;
}
.choose-page>*{
    margin: 0 3px;
}
.choose-page>*:hover{
    cursor: pointer;
    color: lightgrey;
}
.page-selected{color: lightgray;}
</style>