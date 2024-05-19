<template>
  <div class="app-container">
    <div class="navbar">
      <div class="text-logo-nav">LOGO</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

.app-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.navbar {
  text-align: center;
  font-size: 3em;
  height: 70px;
  background-color: #09A6A3;
  display: flex;
  justify-content: center;
  text-align: center;
}

.text-logo-nav {
  color: #fff;
}

</style>
