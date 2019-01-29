<template>
  <div id="app">
    <Header/>
    <Body class="body"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'

export default {
  name: 'app',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo_img {
  height: 200px;
  width: 200px;
}
.body{
  margin-top: 15%;
}

</style>
