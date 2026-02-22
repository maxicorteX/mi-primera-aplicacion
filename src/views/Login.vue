<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Inicio de Sesión</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div style="margin-top: 40px;">
        <ion-item fill="outline" mode="md" class="ion-margin-bottom">
          <ion-label position="floating">Usuario</ion-label>
          <ion-input type="text" placeholder="Tu nombre"></ion-input>
        </ion-item>

        <ion-item fill="outline" mode="md" class="ion-margin-bottom">
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input type="password" placeholder="********"></ion-input>
        </ion-item>

        <ion-button expand="block" router-link="/tabs/tab1" mode="ios">
          Ingresar
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, 
  IonContent, IonItem, IonLabel, IonInput, IonButton 
} from '@ionic/vue';
</script>