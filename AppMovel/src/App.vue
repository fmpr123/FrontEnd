<template>
  <div>
    <ion-app>
      <ion-content>
        <router-view/>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
          <app-iontabs></app-iontabs>
        </ion-toolbar>
      </ion-footer>
    </ion-app>
  </div>
</template>

<script>
import iontabs from "@/components/templates/ion-tabs.vue";
export default {
  components: {
    "app-iontabs": iontabs
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.container-navbar {
  position: fixed;
}
</style>
