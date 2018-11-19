<template>
    <div class="back">
      <div class="columns hd">
        <section class="p-5 column  is-12 has-text-centered center-align">
          <img src="../assets/logo.png" width="150px">
          <h1 class="title is-1">SpaceX</h1>
        </section>
      </div>

      <div class="columns hd">
        <nav class="is-transparent column" role="navigation" aria-label="main navigation">
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item"><router-link to="/">Home</router-link></a>
                <a class="navbar-item"><router-link to="/about">About</router-link></a>
                <a class="navbar-item"><router-link to="/launches">Launches</router-link></a>
                <a class="navbar-item"><router-link to="/rockets">Rockets</router-link></a>
            </div>
            <div class="navbar-end">
              <a class="navbar-item"><router-link to="/">Home</router-link></a>
              <a class="navbar-item"><router-link to="/about">About</router-link></a>
            </div>
          </div>
        </nav>
      </div>
      <router-view/>
    </div>
</template>

<style>

.p-5 { padding: 5% 0 }

section .title {
  font-size: 100px !important;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serifS;
  color: aliceblue
}

a {
  color: rgba(236, 237, 238, 0.74) !important; 
}

a:hover {
  color: white !important;
  background-color: rgb(0, 0, 0,0.2) !important
}

nav {
  margin: auto !important;
  width: 50% !important;
}

.is-transparent {
  background: transparent
}

.hd {
  background-image: url("../assets/background-header.jpg") !important;
}

</style>

<script>
export default {}
</script>
