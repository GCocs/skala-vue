import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('../views/PracticeView.vue'),
    },
    {
      path: '/practice/sample',
      name: 'practice-sample',
      component: () => import('../views/practice/SamplePracticeView.vue'),
    },
    {
      path: '/practice/directive',
      name: 'practice-directive',
      component: () => import('../views/practice/DirectivePracticeView.vue'),
    },
    {
      path: '/practice/event',
      name: 'practice-event',
      component: () => import('../views/practice/EventPracticeView.vue'),
    },
    {
      path: '/practice/form',
      name: 'practice-form',
      component: () => import('../views/practice/FormPracticeView.vue'),
    },
    {
      path: '/practice/style',
      name: 'practice-style',
      component: () => import('../views/practice/StylePracticeView.vue'),
    },
    {
      path: '/practice/reactive-state',
      name: 'practice-reactive-state',
      component: () => import('../views/practice/ReactiveStatePracticeView.vue'),
    },
    {
      path: '/practice/computed-watchers',
      name: 'practice-computed-watchers',
      component: () => import('../views/practice/ComputedWatchersPracticeView.vue'),
    },
    {
      path: '/practice/component-lifecycle',
      name: 'practice-component-lifecycle',
      component: () => import('../views/practice/ComponentLifecyclePracticeView.vue'),
    },
    {
      path: '/practice/props-emits',
      name: 'practice-props-emits',
      component: () => import('../views/practice/PropsEmitsPracticeView.vue'),
    },
    {
      path: '/practice/component-slot',
      name: 'practice-component-slot',
      component: () => import('../views/practice/ComponentSlotPracticeView.vue'),
    },
    {
      path: '/hands-on',
      alias: '/handsup',
      name: 'hands-on',
      component: () => import('../views/HandsOnView.vue'),
    },
    {
      path: '/hands-on/2',
      alias: '/handsup/2',
      name: 'hands-on-2',
      component: () => import('../views/hands_on/HandsOn2View.vue'),
    },
    {
      path: '/hands-on/3',
      alias: '/handsup/3',
      name: 'hands-on-3',
      component: () => import('../views/hands_on/HandsOn3View.vue'),
    },
    {
      path: '/hands-on/4',
      alias: '/handsup/4',
      name: 'hands-on-4',
      component: () => import('../views/hands_on/HandsOn4View.vue'),
    },
    {
      path: '/hands-on/5',
      alias: '/handsup/5',
      name: 'hands-on-5-weather-home',
      component: () => import('../views/hands_on5/WeatherHomeView.vue'),
    },
    {
      path: '/hands-on/5/weather/:cityId',
      name: 'hands-on-5-weather-detail',
      component: () => import('../views/hands_on5/WeatherDetailView.vue'),
    },
    {
      path: '/hands-on/5/about',
      name: 'hands-on-5-weather-about',
      component: () => import('../views/hands_on5/WeatherAboutView.vue'),
    },
    {
      path: '/hands-on/5/guide',
      name: 'hands-on-5-weather-guide',
      component: () => import('../views/hands_on5/WeatherGuideView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/hands_on5/NotFoundView.vue'),
    },
  ],
})

export default router
