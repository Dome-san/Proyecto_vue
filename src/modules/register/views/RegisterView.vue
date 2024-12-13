<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <Field
          v-model="nombre"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="ingresar nombre"
        />
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="email">Email:</label>
        <Field v-model="email" type="email" name="email" id="email" placeholder="ingresar email" />
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema'
import { useRegisterStore } from '../stores/registerStore'
import { ref } from 'vue'

const registerStore = useRegisterStore()
const nombre = ref('')
const email = ref('')

const onSubmit = () => {
  registerStore.guardarRegistro(nombre.value, email.value)
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
