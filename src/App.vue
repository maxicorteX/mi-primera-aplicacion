<template>
  <ion-app>
    <ion-content class="ion-padding">
      <h1>Consumo de APIs con Pinia</h1>
      
      <ion-button @click="store.obtenerDatos()" :disabled="store.cargando">
        {{ store.cargando ? 'Cargando...' : 'Cargar Datos de APIs' }}
      </ion-button>

      <div v-if="store.usuarios.length > 0">
        <h2>Usuarios ({{ store.usuarios.length }})</h2>
        <ul>
          <li v-for="user in store.usuarios.slice(0, 5)" :key="user.id">
            {{ user.name }}
          </li >
        </ul>
      </div>

      <div v-if="store.posts.length > 0">
        <h2>Posts ({{ store.posts.length }})</h2>
        <ul>
          <li v-for="post in store.posts.slice(0, 5)" :key="post.id">
            {{ post.title }}
          </li>
        </ul>
      </div>
    </ion-content>
  </ion-app>
</template>
<script setup lang="ts">

import { useDataStore } from './features/data/dataStore';


const store = useDataStore();
store.obtenerDatos();
</script>

