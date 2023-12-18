<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink id="home" class="link" to="/">Home</RouterLink>
        <br>
        <RouterLink id="about" class="link" to="/about">About</RouterLink>
      </nav>
  </header>
  <br>
  <div class="center">
    <RouterView />
  </div>
</template>

<style>


.center {
  border: 5px;
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
}

nav {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0, 10, 10, 0;
  padding: 0;
  position: -webkit-sticky;
  background-color: whitesmoke;
  border: solid;
  border-width: 1px;
}

link {
  margin: 100px;
  display: inline;
}


#home{
  margin-left: auto;
  margin-right: auto;
}

#about{
  margin-left: auto;
  margin-right: auto;
}



</style>