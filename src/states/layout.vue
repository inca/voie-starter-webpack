<template>
  <div class="layout">
    <h1>Welcome to Vue + Voie!</h1>
    <topnav>
    </topnav>
    <v-view class="layout-view">
    </v-view>
  </div>
</template>

<script>
import Topnav from './topnav.vue';

export default {
  components: {
    Topnav
  }
}
</script>

<style>
  @import '../stylesheets/main.css';

  .layout h1 {
    margin: 0;
    padding: 16px 32px;
    background: #eee;
  }

  .layout-view {
    padding: 0 32px;
  }
</style>
