<template>
  <div id="app">
    <nav id="nav" class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">Home</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/about">About</router-link>
          </a>

          <div class="navbar-item">
            <router-link to="/launches">Launches</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
