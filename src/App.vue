<template>
  <div id="app">
    <app-header/>
    <div id="nav">
      <router-link :to="{name: 'buyStock'}">Home</router-link>|
      <router-link :to="{name: 'stockDetails'}">About</router-link>
    </div>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
    <app-footer/>
  </div>
</template>
<script>
import header from "@/components/Header.vue";
import footer from "@/components/Footer.vue";
export default {
  components: {
    appHeader: header,
    appFooter: footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-in forwards;
}
.slid-leave-active {
  animation: slide-out 0.5s ease-in forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
