<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    mounted() {
        this.$store.commit('setTheme', 'green');
    },
    computed:{
      theme(){
        return this.$store.getters.getTheme
      }
    },
    watch: {
      theme(val){
        window.document.documentElement.setAttribute( "data-theme", val );
      }
    }
  }
</script>
<style lang="scss">
html,body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
