<template>
  <div class="about">
    <h1>This is an Ckeditor5 page</h1>
  </div>
  <div class="container">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>
<script>
import axios from 'axios'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
    data() {
        return {
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                toolbar: [ 'heading', '|','bold', 'italic','|', 'numberedList', 'bulletedList' ,'|', 'undo', 'redo' , '|', 'link' ],
                dataProcessor: {
                  writer: {
                    enter: '<br>'
                  }
                },
            }
        };
    },
    mounted () {
    this.fetchProduct()
    },
    methods: {
      fetchProduct () {
        axios
          .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/-Nli5cxpeLVqrS-FQm9S`)
          .then(response => {
            if (response.data.success) {
              this.editorData = response.data.product.content.replace(/\n/g, '<br>')
            } else {
              console.error('找不到產品編號！')
            }
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
}
</script>
<style>
.container{
  grid-row: span 2;
  grid-column: span 2;
  color: #000;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
