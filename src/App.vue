<template>
  <div id="app">
    <img alt="Vue logo" class="brand" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ticket-list">List of Active Tickets</router-link> |
      <router-link to="/set-total-slots">Set Total Slots</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.brand {
  max-width: 60px;
  transform: rotateX(180deg);
}
.container {
  max-width: 980px;
  margin: 0 auto;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
