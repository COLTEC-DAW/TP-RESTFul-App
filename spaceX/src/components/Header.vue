<template>
    <div class="back">
      <div class="columns hd">
      <section id="header" class="p-5 column  is-12 has-text-centered center-align">
          <img src="../assets/logo.png" width="150px">
          <h1 class="title is-1">SpaceX</h1>
        </section>
      </div>

      <div class="columns hd">
        <nav class="is-transparent column" role="navigation" aria-label="main navigation">
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item link-white"><router-link to="/">HOME</router-link></a>
                <a class="navbar-item link-white "><router-link to="/launches">LAUNCHES</router-link></a>
            </div>
            <div class="navbar-end">
              <a href="http://www.spacex.com" class="navbar-item link-white">OFFICIAL SITE</a>
              <a href="https://api.spacexdata.com" class="navbar-item link-white">API</a>
            </div>
          </div>
        </nav>
      </div>
      <router-view/>
    </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat');

.p-5 { padding: 5% 0 }

#header .title {
  font-size: 100px !important;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serifS;
  color: aliceblue
}

a.link-white a {
  color: rgba(236, 237, 238, 0.74) !important;
}

a.link-white:hover {
  color: rgba(236, 237, 238, 0.74) !important;
  background-color: rgb(0, 0, 0,0.2) !important
}

nav {
  margin: auto !important;
  width: 50% !important;
  font-family: 'Montserrat', sans-serif;
}

.is-transparent {
  background: transparent
}

.hd {
  background-image: url("../assets/background-header.jpg") !important;
}

</style>

<script>
export default {
  name: 'header'
}
</script>
