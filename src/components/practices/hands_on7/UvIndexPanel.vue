<script setup>
defineProps({
  uvIndex: {
    type: Object,
    default: null,
  },
  message: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="uv-panel">
    <h3>☀️ 자외선지수 정보</h3>
    <p v-if="message" class="panel-message">{{ message }}</p>

    <div v-if="uvIndex" class="uv-content">
      <div class="uv-value">
        <strong>{{ uvIndex.value }}</strong>
        <span>{{ uvIndex.grade }}</span>
      </div>

      <dl>
        <div>
          <dt>조회 지역</dt>
          <dd>{{ uvIndex.region }}</dd>
        </div>
        <div>
          <dt>발표 시각</dt>
          <dd>{{ uvIndex.measuredAt }}</dd>
        </div>
      </dl>
    </div>

    <small class="api-source">
      자외선 데이터:
      <a
        href="https://www.safemap.go.kr/opna/data/dataViewRenew.do?objtId=232"
        target="_blank"
        rel="noopener noreferrer"
      >
        생활안전지도
      </a>
    </small>
  </section>
</template>

<style scoped>
.uv-panel {
  padding-top: 18px;
  margin-top: 20px;
  border-top: 1px solid #ddd;
}

.uv-panel h3 {
  margin-bottom: 12px;
  font-size: 17px;
}

.panel-message {
  padding: 9px;
  margin-bottom: 12px;
  color: #9a6700;
  background-color: #fff8db;
  border-radius: 5px;
  font-size: 13px;
}

.uv-content {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  background-color: #fff7df;
  border-radius: 5px;
}

.uv-value {
  min-width: 90px;
  text-align: center;
}

.uv-value strong {
  display: block;
  color: #e67e22;
  font-size: 32px;
}

.uv-value span {
  font-weight: bold;
}

.uv-content dl {
  margin: 0;
}

.uv-content dl div {
  display: flex;
  gap: 10px;
  margin: 6px 0;
}

.uv-content dt {
  font-weight: bold;
}

.uv-content dd {
  margin: 0;
}

.api-source {
  display: block;
  margin-top: 10px;
  color: #777;
  text-align: right;
}

@media (max-width: 520px) {
  .uv-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
