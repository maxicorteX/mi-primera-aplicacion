import { defineStore } from 'pinia';

export const useDataStore = defineStore('miStore', {
  state: () => ({
    usuarios: [] as any[],
    token: '', // 
    cargando: false
  }),
  actions: {
    // Funciones p para el Login de la Actividad 3 :,3
    async login(credenciales: any) {
      this.cargando = true;
      try {
        const res = await fetch('https://reqres.in', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credenciales)
        });
        const data = await res.json();
        if (data.token) {
          this.token = data.token; 
          return { success: true };
        } else {
          return { success: false, error: data.error };
        }
      } finally {
        this.cargando = false;
      }
    }
  }
});
