<script setup>
import VHtml from '../../components/practices/vue_directive/VHtml.vue'
import VHtml2 from '../../components/practices/vue_directive/VHtml2.vue'
import VText from '../../components/practices/vue_directive/VText.vue'
import VBind from '../../components/practices/vue_directive/VBind.vue'
import VBind2 from '../../components/practices/vue_directive/VBind2.vue'
import VBind3 from '../../components/practices/vue_directive/VBind3.vue'
import VBind4 from '../../components/practices/vue_directive/VBind4.vue'
import VIf from '../../components/practices/vue_directive/VIf.vue'
import VShow from '../../components/practices/vue_directive/VShow.vue'
import VFor from '../../components/practices/vue_directive/VFor.vue'
import VPre from '../../components/practices/vue_directive/VPre.vue'
import VCloak from '../../components/practices/vue_directive/VCloak.vue'
import VOnce from '../../components/practices/vue_directive/VOnce.vue'
import VMemo from '../../components/practices/vue_directive/VMemo.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Vue Directive</h1>

    <div class="practice-list">
      <div class="practice-block"><VHtml /></div>
      <div class="practice-block"><VHtml2 /></div>
      <div class="practice-block"><VText /></div>
      <div class="practice-block"><VBind /></div>
      <div class="practice-block"><VBind2 /></div>
      <div class="practice-block"><VBind3 /></div>
      <div class="practice-block"><VBind4 /></div>
      <div class="practice-block"><VIf /></div>
      <div class="practice-block"><VShow /></div>
      <div class="practice-block"><VFor /></div>
      <div class="practice-block"><VPre /></div>
      <div class="practice-block"><VCloak /></div>
      <div class="practice-block"><VOnce /></div>
      <div class="practice-block"><VMemo /></div>
    </div>
  </section>
</template>
