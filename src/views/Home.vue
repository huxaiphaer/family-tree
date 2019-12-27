<template>
  <div class="home">
    <Header/>
    <Parents/>
  </div>
</template>

<script>
// @ is an alias to /src
import Parents from "../components/FirstPhase";
import Header from '../views/Header'

export default {
  name: 'home',
  components: {
    Parents,
    Header,
  }
}
</script>
