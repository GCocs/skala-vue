<script setup>
import SampleOne from './components/practices/sample/SampleOne.vue'
import SampleTwo from './components/practices/sample/SampleTwo.vue'
import VHtml from './components/practices/vue_directive/VHtml.vue'
import VHtml2 from './components/practices/vue_directive/VHtml2.vue'
import VText from './components/practices/vue_directive/VText.vue'
import VBind from './components/practices/vue_directive/VBind.vue'
import VBind2 from './components/practices/vue_directive/VBind2.vue'
import VBind3 from './components/practices/vue_directive/VBind3.vue'
import VBind4 from './components/practices/vue_directive/VBind4.vue'
import VIf from './components/practices/vue_directive/VIf.vue'
import VShow from './components/practices/vue_directive/VShow.vue'
import VFor from './components/practices/vue_directive/VFor.vue'
import VPre from './components/practices/vue_directive/VPre.vue'
import VCloak from './components/practices/vue_directive/VCloak.vue'
import VOnce from './components/practices/vue_directive/VOnce.vue'
import VMemo from './components/practices/vue_directive/VMemo.vue'
import InlineHandler from './components/practices/vue_event_handling/InlineHandler.vue'
import MethodHandler from './components/practices/vue_event_handling/MethodHandler.vue'
import VOn from './components/practices/vue_event_handling/VOn.vue'
import EventObject from './components/practices/vue_event_handling/EventObject.vue'
import EventModifier from './components/practices/vue_event_handling/EventModifier.vue'
</script>

<template>
  <div class="wrapper">
    <SampleOne />
    <hr />
    <SampleTwo />
    <hr />
    <VHtml />
    <hr />
    <VHtml2 />
    <hr />
    <VText />
    <hr />
    <VBind />
    <hr />
    <VBind2 />
    <hr />
    <VBind3 />
    <hr />
    <VBind4 />
    <hr />
    <VIf />
    <hr />
    <VShow />
    <hr />
    <VFor />
    <hr />
    <VPre />
    <hr />
    <VCloak />
    <hr />
    <VOnce />
    <hr />
    <VMemo />
    <hr />
    <InlineHandler />
    <hr />
    <MethodHandler />
    <hr />
    <VOn />
    <hr />
    <EventObject />
    <hr />
    <EventModifier />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
