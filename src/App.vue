<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">Blog</router-link>
  </div>
  <main role="main" class="container">
    <router-view />
  </main>
</template>

<style>
#app::after{
  content: '';
  background-image: url(https://picsum.photos/650);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: -40%;
  z-index: -2;
}
#nav {
  text-align: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

</style>
