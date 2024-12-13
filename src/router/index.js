import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/contador',
      name: 'Contador',
      component: () => import('../modules/counter/components/CounterComponent.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../modules/tasksList/components/TasksListComponent.vue'),
    },
    {
      path: '/registrar',
      name: 'Registrar',
      component: () => import('../modules/register/views/RegisterView.vue'),
    },
  ],
})

export default router
