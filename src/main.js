import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CKEditor from '@ckeditor/ckeditor5-vue';
import { createI18n } from 'vue-i18n'

import zh from './languages/zh-TW.json'
import en from './languages/en.json'

import App from './App.vue'
import router from './router'
const i18n = createI18n({
    legacy: false, // 啟用新的 Vue3 選項
    locale: 'en', // 設置默認語言
    messages: {
      en,
      'zh-TW': zh // 引入 zh-TW.json 文件
    }
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use( CKEditor )
app.use(i18n)

app.mount('#app')




