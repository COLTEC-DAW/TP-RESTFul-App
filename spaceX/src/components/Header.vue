<template>
    <div class="back">
      <div class="columns">
        <aside class="p-10 is-transparent column is-1" id="menu-lateral">
            <ul class="menu-list center-align">
              <li><a><router-link to="/">Home</router-link></a></li>
              <li><a><router-link to="/about">About</router-link></a></li>
              <li><a><router-link to="/launches">Launches</router-link></a></li>
              <li><a><router-link to="/rockets">Rockets</router-link></a></li>
            </ul>
        </aside>

        <section class="p-10 column  is-four-fifth has-text-centered center-align">
          <img src="../assets/logo.png" width="150px">
          <h1 class="title is-1">SpaceX</h1>
        </section>
      </div>
      <router-view/>
    </div>
</template>

<style>

.p-10 { padding: 5% 0 }

section .title {
  font-size: 100px !important;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serifS;
  color: aliceblue
}

.menu-list a {
  color: rgba(236, 237, 238, 0.74);
}

.menu-list a:hover {
  color: rgb(212, 212, 212);
  background-color: rgb(0, 0, 0,0.2)
}

.is-transparent {
  background: transparent
}

.columns {
  background-image: url("../assets/background-header.jpg") !important;
}

</style>

<script>
export default {}
</script>
