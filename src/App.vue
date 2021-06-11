<template>
  <div id="app" class="d-flex">
    <Sidebar />
    <div class="d-flex flex-1 flex-direction-col">
      <Header />
      <router-view/>
        <FormDetails v-if="$store.state.isOpen" @keypress.enter="$store.commit('changeFormState')"/>
    </div>
  </div>
  
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import FormDetails from './components/FormDetails.vue'
import './assets/css/main.css'

export default {
  data(){
    return{
      isOpen: false
    }
  },
  components:{
    Header,
    Sidebar,
    FormDetails,
  },
  methods:{
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
*{
  padding: 0;
  margin: 0;
}
</style>
