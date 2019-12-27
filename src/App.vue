<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {db} from './firebase/db'

let familyRoot = db.ref('001/Wives');

export default {
  name: 'App',

  components: {
  },

  data() {

    return{
      allData:[],
    }
  },

  firebase:{
    allData: familyRoot
  }
  ,
  mounted() {
    // eslint-disable-next-line no-console
    console.log('--->' + this.allData)
  }
  ,
  beforeMount() {
    // eslint-disable-next-line no-console
    console.log('--->' + this.allData)

  }

};
</script>
