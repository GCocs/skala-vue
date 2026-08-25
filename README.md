# skala-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 실습 1 실습 결과 (2026.08.24)

이번 실습에서는 Node.js와 VS Code를 준비한 뒤 Vue 3와 Vite를 이용해 skala-vue 프로젝트를 생성했습니다. 필요한 패키지를 설치하고 개발 서버를 실행해 브라우저에 초기 화면이 정상적으로 나타나는 것을 확인했습니다.

프로젝트가 만들어진 후에는 src 폴더 안에 있는 components, views, router, stores 등을 살펴보았습니다. Vue 프로젝트를 처음 만들어 보았기 때문에 여러 파일과 생성 과정이 낯설었지만, 기본 구조가 미리 만들어져 있어 각 파일이 어디에 사용되는지 찾아보기는 편했습니다. Router 설정을 통해 Home 화면과 About 화면이 각각의 경로에 연결되어 있는 것도 확인했습니다.

이후 교수님께서 안내해 주신 실습 내용에 따라 About 페이지와 Vue Devtools를 열고 AboutView 컴포넌트를 확인했습니다. VS Code에서 AboutView.vue의 화면 내용에 평소 좋아하는 CORTIS의 REDRED 문구를 추가한 뒤 저장하자, 브라우저를 새로고침하지 않았는데도 내용이 바로 바뀌었습니다. Vue Devtools의 Components 탭에서도 AboutView가 다시 렌더링되는 것을 보면서 HMR이 실제로 어떻게 동작하는지 확인할 수 있었습니다.

Vue Devtools에서는 Components 탭뿐만 아니라 Router 탭에서 현재 화면과 연결된 컴포넌트를 확인했으며, Pinia와 Timeline, Assets, Graph 메뉴도 차례로 살펴보았습니다. 아직 모든 기능을 직접 사용해 보지는 못했지만, 컴포넌트의 상태나 이벤트 흐름, 라우팅 정보를 확인할 때 사용하는 도구라는 점을 알게 되었습니다.

이번 실습을 통해 Vue 프로젝트를 생성하고 실행하는 기본 과정을 따라 해 보았고, 소스를 수정한 결과가 HMR을 통해 즉시 반영되는 것도 확인했습니다. 특히 화면만 확인하고 끝낸 것이 아니라 Vue Devtools에서 실제 컴포넌트와 라우팅 상태까지 함께 살펴본 점이 이번 실습의 주요 결과였습니다.
