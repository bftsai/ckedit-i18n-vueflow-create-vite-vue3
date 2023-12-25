<template>
    <h1>This is i18n page.</h1>
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
  </template>
  <script>
  export default {
    methods: {
      switchToEnglish () {
        this.$i18n.locale = 'en'
      },
      switchToChinese () {
        this.$i18n.locale = 'zh-TW'
      }
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
  </style>
  