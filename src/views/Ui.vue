<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h3>Ui</h3>
        <ul>
          <li>
            <router-link to="/ui/ui-button">UiButton</router-link>
          </li>
          <li>
            <router-link to="/ui/ui-input">UiInput</router-link>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>

</style>
