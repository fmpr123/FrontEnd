<template>
  <div>
    <ion-app>
      <!-- HEADER -->
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title padding>GameStop</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- FIM DO HEADER -->
      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-title padding>Reserva agora o novo Call Of Duty: Modern Warfare</ion-card-title>
            <ion-card-subtitle padding>Até 10/10/2019</ion-card-subtitle>
          </ion-card-header>
          <img src="../assets/img/cod-mw.png" class="img-portada">
          <ion-card-content>Mergulhe-te num ambiente de guerra completamente moderno e catastrófico onde tudo é levado a outro nível. Nesta entrega voltam os principais protagonistas da saga "Modern Warfare" em uma forma de "Reboot", o que significa que a história será um completamente diferente, mas mantendo as raízes da saga Call of Duty.</ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title padding>Fortnite Battle Pass Season 9</ion-card-title>
            <ion-card-subtitle padding>Até 25/06/2019</ion-card-subtitle>
          </ion-card-header>
          <img src="../assets/img/fortnite.jpg" class="img-portada">
          <ion-card-content>Aproveita e com a compra do pacote de inicialização de Fortnite poderás obter o pase de batalha mais outras novidades que tem esta nova temporada para ti.</ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title padding>FIFA 19</ion-card-title>
          </ion-card-header>
          <img src="../assets/img/fifa-19.jpg" class="img-portada">
          <ion-card-content>Experimenta jogar a Liga dos Campeões no novo Fifa 19.</ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-content>
            Para disfrutar dos serviços que fornece a GameStop, inicia sessão ou cria uma conta.
            <ion-button color="primary" href="/acount" start>Primary</ion-button>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-item href="#" class="activated">
            <ion-icon name="wifi" slot="start"></ion-icon>
            <ion-label>Card Link Item 1 .activated</ion-label>
          </ion-item>

          <ion-item href="#">
            <ion-icon name="wine" slot="start"></ion-icon>
            <ion-label>Card Link Item 2</ion-label>
          </ion-item>

          <ion-item class="activated">
            <ion-icon name="warning" slot="start"></ion-icon>
            <ion-label>Card Button Item 1 .activated</ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="walk" slot="start"></ion-icon>
            <ion-label>Card Button Item 2</ion-label>
          </ion-item>
        </ion-card>
      </ion-content>

      <!-- <div class="container-navbar"> -->
      <!-- <app-iontabs></app-iontabs> -->
      <!-- </div> -->
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
.img-portada {
  padding: 10px;
}
.container-navbar {
  position: fixed;
}
</style>
