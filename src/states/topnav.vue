<template>
  <div class="topnav">
    <a v-link="{ name: 'home' }">
      Home
    </a>
    <a v-link="{ name: 'a' }">
      A
    </a>
    <a v-link="{ name: 'b' }">
      B
    </a>
  </div>
</template>

<style>
  .topnav {
    background: #f5f5f5;
  }

  .topnav a {
    display: inline-block;
    padding: 8px 32px;

    text-decoration: none;
    color: #778;
  }

  .topnav a.active {
    background: #eee;
  }
</style>
