<template>
  <div>
    <ion-footer>
      <ion-toolbar>
        <!-- NAVBAR BOTOES -->
        <ion-tabs>
          <ion-tab tab="home">Home Content</ion-tab>
          <ion-tab tab="settings">Settings Content</ion-tab>

          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="produtos">
              <ion-icon name="calendar"></ion-icon>
              <ion-label>Produtos</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="acount">
              <ion-icon name="contacts"></ion-icon>
              <ion-label>Conta</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="/">
              <ion-label>Home</ion-label>
              <ion-icon name="home"></ion-icon>
              <!-- <ion-badge>0</ion-badge> -->
            </ion-tab-button>

            <ion-tab-button tab="ubicacao">
              <ion-icon name="map"></ion-icon>
              <ion-label>Ubicação</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="about">
              <ion-icon name="information-circle"></ion-icon>
              <ion-label>About</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </ion-toolbar>
    </ion-footer>
    <!-- FIM CONTAINER DOS BOTÕES -->
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
</style>
