import { defineStore } from 'pinia';

export const useDataStore = defineStore('miStore', {
  state: () => ({
    usuarios: [] as any[],
    posts: [] as any[],
    cargando: false
  }),
  actions: {
    async obtenerDatos() {
      this.cargando = true;
      try {
        const [resUsers, resPosts] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com'),
          fetch('https://jsonplaceholder.typicode.com')
        ]);
        this.usuarios = await resUsers.json();
        this.posts = await resPosts.json();
      } finally {
        this.cargando = false;
      }
    }
  }
});
