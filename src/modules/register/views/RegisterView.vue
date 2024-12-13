<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <Field type="text" name="nombre" id="nombre" placeholder="ingresar nombre" />
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="email">Email:</label>
        <Field type="email" name="email" id="email" placeholder="ingresar email" />
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
import { schema } from './schemas/validationSchema'

const onSubmit = () => {
  console.log('Formulario enviado')
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
