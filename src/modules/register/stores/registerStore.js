import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegisterStore = defineStore('registrar', () => {
  const nombre = ref('')
  const email = ref('')
  const guardarRegistro = (nombreformulario, emailFormulario) => {
    nombre.value = nombreformulario
    email.value = emailFormulario
  }
  return { nombre, email, guardarRegistro }
})
