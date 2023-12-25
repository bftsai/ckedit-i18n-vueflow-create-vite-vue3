<template>
    <h1>This is vue-flow page.</h1>
      <div class="container">
        <button @click="switchToEnglish">English</button>
        <button @click="switchToChinese">中文</button>
      </div>
      <div class="container">
        <h2>{{ $t('menu.aboutUs') }}</h2>
        <h2>{{ $t('menu.productContent') }}</h2>
        <h2>{{ $t('menu.blog') }}</h2>
        <h2>{{ $t('menu.faq') }}</h2>
      </div>
      <div class="container vue-flow">
        <VueFlow v-model="elements"></VueFlow>
        </div>
  </template>
  <script>
  /* import the required styles */
import '@vue-flow/core/dist/style.css';
/* import the default theme (optional) */
import '@vue-flow/core/dist/theme-default.css';
  import { VueFlow } from '@vue-flow/core'
//   import SpecialNode from './components/SpecialNode.vue'
//   import SpecialEdge from './components/SpecialEdge.vue'
  export default {
    methods: {
      switchToEnglish () {
        this.$i18n.locale = 'en'
      },
      switchToChinese () {
        this.$i18n.locale = 'zh-TW'
      }
    },
    data(){
        return {
            elements: [
  {
    id: '1',
    label: 'node 1',
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    label: 'node 2',
    position: { x: 100, y: 200 },
  },
  {
    id: 'e1-2',
    target: '2',
    source: '1',
  },
],
        }
    },
    components: {
        VueFlow
    }
  }
  </script>
  
  <style scoped>
  h1{
    display: flex;
    align-items: center;
  }
  .container{
    grid-row: span 2;
    grid-column: span 2;
    text-align: center;
  }
  .container.vue-flow{
    height: 600px;
  }
  </style>
  