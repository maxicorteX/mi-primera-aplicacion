<template>
  <ion-app>
    <ion-content class="ion-padding">
      <div style="text-align: center; margin-top: 40px;">
        <ion-icon name="person-circle" style="font-size: 80px;"></ion-icon>
        <h1>Actividad 3: Login</h1>
      </div>

      <ion-item>
        <ion-label position="stacked">Correo (rafael20031920)</ion-label>
        <ion-input v-model="form.email" type="email"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Contraseña (maximilianocortez)</ion-label>
        <ion-input v-model="form.password" type="password"></ion-input>
      </ion-item>

      <ion-button expand="block" class="ion-margin-top" @click="handleLogin" :disabled="store.cargando">
        {{ store.cargando ? 'Verificando...' : 'Iniciar Sesión' }}
      </ion-button>

      <div v-if="store.token" style="margin-top: 20px; color: green; text-align: center;">
        <p><b>¡Login Exitoso!</b></p>
        <p>Token: {{ store.token }}</p>
      </div>
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonApp, IonContent, IonItem, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/vue';
import { useDataStore } from './features/data/dataStore';
const store = useDataStore();
const form = ref({ email: '', password: '' });

const handleLogin = async () => {
  const res = await store.login(form.value);
  if (!res.success) {
    alert("Error: " + res.error);
  }
};
</script>
