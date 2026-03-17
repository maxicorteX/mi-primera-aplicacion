<template>
  <ion-app>
    <ion-content class="ion-padding">
      <div style="max-width: 450px; margin: 40px auto; text-align: center;">
        <ion-icon name="hardware-chip-outline" style="font-size: 60px; color: #3880ff;"></ion-icon>
        <h1>Prueba de Hardware</h1>
        <p>GPS y Cámara - Proyecto TESA</p>

        <ion-button expand="block" color="primary" @click="tomarFoto" class="ion-margin-top">
          <ion-icon slot="start" name="camera"></ion-icon>
          PROBAR CÁMARA
        </ion-button>

        <ion-button expand="block" color="secondary" class="ion-margin-top" @click="obtenerGPS">
          <ion-icon slot="start" name="location"></ion-icon>
          PROBAR GPS
        </ion-button>

        <div v-if="coords" style="margin-top: 25px; padding: 15px; border: 2px dashed #3880ff; border-radius: 10px; background: #f4f5f8;">
          <p style="color: #3880ff;"><b>📍 Ubicación Detectada:</b></p>
          <p><b>Latitud:</b> {{ coords.lat }}</p>
          <p><b>Longitud:</b> {{ coords.lng }}</p>
        </div>
      </div>
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonApp, IonContent, IonButton, IonIcon } from '@ionic/vue';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

const coords = ref<{lat: number, lng: number} | null>(null);

const tomarFoto = async () => {
  try {
    await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    alert("¡Cámara activada correctamente!");
  } catch (e) {
    console.log("Cámara cerrada o cancelada");
  }
};

const obtenerGPS = async () => {
  try {
    const position = await Geolocation.getCurrentPosition();
    coords.value = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
  } catch (e) {
    alert("Error al obtener GPS. Asegúrate de dar permisos en el navegador.");
  }
};
</script>

<style scoped>
h1 { font-weight: bold; color: #1e1e1e; }
</style>