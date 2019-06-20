<template>
  <div>
    <ion-app>
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title padding>About</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle padding>A melhor loja de vídeo jogos.</ion-card-subtitle>
          </ion-card-header>
          <img src="../assets/img/logo.jpg" class="img-portada">
          <ion-card-content>Encontre aqui os seus jogos favouritos aos melhores preços!</ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle padding>Conheça os nossos trabalhadores</ion-card-subtitle>
          </ion-card-header>
          <img src="../assets/img/worker.jpg" class="img-portada">
          <ion-card-subtitle padding>Gonçalo - 24 anos</ion-card-subtitle>
          <ion-card-content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit tempore a ratione asperiores neque vitae quo ipsum at, impedit suscipit quos nemo.</ion-card-content>
        </ion-card>
        <ion-card>
          <img src="../assets/img/worker2.jpg" class="img-portada">
          <ion-card-subtitle padding>Sara - 22 anos</ion-card-subtitle>
          <ion-card-content>Lorem ipsum dolor. Nihil sit tempore a ratione asperiores neque vitae quo ipsum at, impedit suscipit quos nemo.</ion-card-content>
        </ion-card>
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
.img-portada {
  padding: 10px;
}
</style>
