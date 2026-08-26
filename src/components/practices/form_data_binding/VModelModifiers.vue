<script setup>
import { ref, computed } from 'vue'

const lazyText = ref('')
const age = ref('')
const userEmail = ref('')
const price = ref('')

const ageStatus = computed(() => {
  if (!age.value) return '아직 값이 없습니다.'
  return Number(age.value) >= 18 ? '성인 기준 통과' : '미성년자 기준'
})

const emailStatus = computed(() => {
  if (!userEmail.value) return '이메일 입력 전'
  return userEmail.value.trim().length > 0 ? '공백 정리 완료' : '공백만 입력됨'
})
</script>

<template>
  <div class="practice-section">
    <h2>v-model 수식어 (Modifiers) 활용</h2>

    <section style="margin-bottom: 20px">
      <h3>1) .lazy 수식어 (change 이벤트 시점 반영)</h3>
      <input type="text" v-model.lazy="lazyText" placeholder="입력 후 Enter 또는 외부 클릭" />
      <p>
        실시간이 아닌 확정된 값: <strong>{{ lazyText || '아직 없음' }}</strong>
      </p>
    </section>

    <section style="margin-bottom: 20px">
      <h3>2) .number 수식어 (Number 타입 자동 형변환)</h3>
      <input type="text" v-model.number="age" placeholder="나이를 입력하세요" />
      <p>
        입력된 값: <strong>{{ age }}</strong>
      </p>
      <p>
        데이터 타입: <strong>{{ typeof age }}</strong>
      </p>
      <p>{{ ageStatus }}</p>
    </section>

    <section style="margin-bottom: 20px">
      <h3>3) .trim 수식어 (양끝 공백 자동 제거)</h3>
      <input type="text" v-model.trim="userEmail" placeholder="앞뒤 공백을 포함해 입력해 보세요" />
      <p>
        공백 제거된 값: <strong>"{{ userEmail }}"</strong>
      </p>
      <p>
        문자열 길이: <strong>{{ userEmail.length }}</strong>
      </p>
      <p>{{ emailStatus }}</p>
    </section>

    <section>
      <h3>4) Chaining (수식어 체이닝: .trim.number)</h3>
      <input
        type="text"
        v-model.trim.number="price"
        placeholder="공백과 숫자를 섞어 입력해 보세요"
      />
      <p>
        처리된 값: <strong>"{{ price }}"</strong>
      </p>
      <p>
        데이터 타입: <strong>{{ typeof price }}</strong>
      </p>
    </section>
  </div>
</template>
