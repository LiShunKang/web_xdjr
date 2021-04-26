<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    mounted() {
      window.addEventListener('message', event => {
        let data = JSON.parse(event.data);
        if(data && data.color){
          let theme = data.color;
          this.saveMessage(theme)
        }else{
          this.saveMessage(' themea')
        }
      })
    },
    computed:{
      theme(){
        return this.$store.getters.getTheme
      },
    },
    watch: {
      theme(val){
        let themeType = ''
         if(val == ' themeb'){
          themeType = 'blue'
        } else {
          themeType = 'green'
        }
        window.document.documentElement.setAttribute( "data-theme", themeType );
      }
    },
    methods:{
      saveMessage(theme) {
          this.$store.commit('setTheme', theme);
      },
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
  background: #FFF !important;
}
</style>
