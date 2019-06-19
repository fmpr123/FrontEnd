<template>
  <div>
    <ion-app>
      <!-- Header -->
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title padding>Localização</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- Fim Header -->
      <ion-content >
        <ion-card class="morada">
          <ion-card-header>
            <ion-card-title padding color="light">Morada</ion-card-title>
            <ion-card-subtitle padding class="morada_text">Gamestop, Games & Gaming</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content class="morada_text">Lda., Caminho da Azeitona nº 24<p></p>
          Fração A (Acima do Dolce Vita)<p></p>
          Santo António - Funchal</ion-card-content>
        </ion-card>

        <!-- GOOGLE MAPS HERE -->

      </ion-content>
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
.morada{
    background-image: url('../assets/img/morada.jpg')
}
.morada_text{
    color: white;
}
</style>