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
      path: '/practice/pinia-basic',
      name: 'practice-pinia-basic',
      component: () => import('../views/practice/PiniaBasicPracticeView.vue'),
    },
    {
      path: '/practice/axios',
      name: 'practice-axios',
      component: () => import('../views/practice/AxiosPracticeView.vue'),
    },
    {
      path: '/practice/element-plus',
      name: 'practice-element-plus',
      component: () => import('../views/practice/ElementPlusPracticeView.vue'),
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
      path: '/hands-on/6',
      alias: '/handsup/6',
      name: 'hands-on-6-weather-home',
      component: () => import('../views/hands_on6/WeatherHomeView.vue'),
    },
    {
      path: '/hands-on/6/weather/:cityId',
      name: 'hands-on-6-weather-detail',
      component: () => import('../views/hands_on6/WeatherDetailView.vue'),
    },
    {
      path: '/hands-on/6/about',
      name: 'hands-on-6-weather-about',
      component: () => import('../views/hands_on6/WeatherAboutView.vue'),
    },
    {
      path: '/hands-on/6/guide',
      name: 'hands-on-6-weather-guide',
      component: () => import('../views/hands_on6/WeatherGuideView.vue'),
    },
    {
      path: '/hands-on/7',
      alias: '/handsup/7',
      name: 'hands-on-7-weather-home',
      component: () => import('../views/hands_on7/WeatherHomeView.vue'),
    },
    {
      path: '/hands-on/7/weather/:cityId',
      name: 'hands-on-7-weather-detail',
      component: () => import('../views/hands_on7/WeatherDetailView.vue'),
    },
    {
      path: '/hands-on/7/about',
      name: 'hands-on-7-weather-about',
      component: () => import('../views/hands_on7/WeatherAboutView.vue'),
    },
    {
      path: '/hands-on/7/guide',
      name: 'hands-on-7-weather-guide',
      component: () => import('../views/hands_on7/WeatherGuideView.vue'),
    },
    {
      path: '/hands-on/8',
      alias: '/handsup/8',
      name: 'hands-on-8-weather-home',
      component: () => import('../views/hands_on8/WeatherHomeView.vue'),
    },
    {
      path: '/hands-on/8/weather/:cityId',
      name: 'hands-on-8-weather-detail',
      component: () => import('../views/hands_on8/WeatherDetailView.vue'),
    },
    {
      path: '/hands-on/8/about',
      name: 'hands-on-8-weather-about',
      component: () => import('../views/hands_on8/WeatherAboutView.vue'),
    },
    {
      path: '/hands-on/8/guide',
      name: 'hands-on-8-weather-guide',
      component: () => import('../views/hands_on8/WeatherGuideView.vue'),
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
