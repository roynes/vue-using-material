<template>
  <div class="home">
    <md-app md-mode="fixed" >
      <!-- toolbar -->
      <md-app-toolbar class="md-primary">
        <!-- toolbar row -->
        <div class="md-toolbar-row">
          <!-- left -->
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button">
              <md-icon>menu</md-icon>
            </md-button>
          </div>
          <!-- right -->
          <div class="md-toolbar-section-end">
            <!-- avatar -->
            <md-avatar class="md-avatar-icon">
              <md-ripple><img src="https://vuematerial.io/assets/examples/avatar.png" alt="Avatar"></md-ripple>
            </md-avatar>
          </div>
        </div>
      </md-app-toolbar>
      <!-- toolbar end -->
    </md-app>
    
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  }
};
</script>

<style lang="scss" scoped>
  .md-avatar-icon {
    margin: 0;  
  }
</style>

