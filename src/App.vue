<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <main role="main" class="container">
    <router-view />
  </main>
</template>

<style>
#app {
  background-image: url(https://picsum.photos/650);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  min-height: 100%;
}

#nav {
  text-align: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

</style>
