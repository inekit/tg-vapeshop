<template>
  <CButton color="primary" @click="addNewPost">Добавить товар</CButton>
  <CModal size="xl" backdrop="static" alignment="center" :visible="visible" @close="closeModal">
    <CForm novalidate :validated="formValid" ref="add-file-form" @change="wregert"
      @submit.prevent="mode === 'new' ? addNewing() : editNewing()" class="add-user" style="display: 'none'">
      <CModalHeader>
        <CModalTitle>{{
          mode === 'new' ? 'Добавить товар' : 'Редактировать товар'
        }}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput class="mb-3" v-model="formData.title" placeholder="Заголовок" id="inputHeader"
          aria-describedby="inputGroupPrepend" feedbackValid="Все ок" feedbackInvalid="Введите корректный заголовок"
          required />
        <CFormInput type="number" class="mb-3" label="Количество затяжек" placeholder="Введите количество затяжек"
          v-model="formData.puffs_count" />
        <CFormInput type="number" class="mb-3" label="Крепость" placeholder="Введите крепость"
          v-model="formData.taste_strength" />
        <CFormInput type="file" accept="image/*" ref="file" @change="previewImage" class="mb-3" label="Превью"
          placeholder="Превью" />
        <div class="border p-2 mt-3 preview-container">
          <template v-if="preview">
            <img :src="preview" class="img-fluid w-25" />
          </template>
        </div>
        <div class="projects-list">
          <span>Категория</span>
          <CFormCheck v-for="project in projects" :key="project.name" :id="project.name"
            :checked="project.name === formData.category_name" @change="changeP" type="radio" name="project-name"
            :value="project.name" :label="project.name" />
          <CFormCheck id="null-name" :checked="!formData.category_name" @change="changeP" type="radio" name="project-name"
            value="" label="Без категорий" />
        </div>
        <CFormInput type="number" class="mb-3" label="Цена" placeholder="Введите цену" v-model.number="formData.price" />
        <label class="form-label">Оптовые скидки</label>
        <div v-if="formData.sale_count || formData.sale_price">
          <CFormInput type="number" class="mb-3" placeholder="Введите необходимое количество товара для опта"
            v-model.number="formData.sale_count" />
          <CFormInput type="number" class="mb-3" placeholder="Введите оптовую цену"
            v-model.number="formData.sale_price" />
          <CButton color="danger" type="button" @click="formData.sale_count = null; formData.sale_price = null">
            Убрать скидку
          </CButton>
        </div>
        <CButton v-else color="primary" type="button" style="display: block;"
          @click="formData.sale_count = 5; formData.sale_price = formData.price">
          Добавить скидку
        </CButton>

        <div class="options-shedle">
          <span>Опции</span>
          <CFormCheck id="select-taste" @change="formData.select_name = 'Вкус'" type="radio" name="select-name"
            value="Вкус" label="Вкус" :checked="formData.select_name === 'Вкус'" />
          <CFormCheck id="select-color" @change="formData.select_name = 'Цвет'" type="radio" name="select-name"
            value="Цвет" label="Цвет" :checked="formData.select_name === 'Цвет'" />
          <CFormCheck id="select-none" @input="selectNone" @change="formData.select_name = null" type="radio"
            name="select-name" value="" label="Без опций" :checked="!formData.select_name" />
          <div class="option-item" v-for="option, id in formData.options_array" :key="option.id">
            <CFormInput type="text" class="mb-3" label="Название" placeholder="Введите название"
              v-model="formData.options_array[id].name" />
            <CFormInput type="text" class="mb-3" label="Полное название в таблице" placeholder="Введите название"
              v-model="formData.options_array[id].table_name" />
            <CFormInput type="number" class="mb-3" label="Остаток" placeholder="Введите остаток"
              v-model="formData.options_array[id].stock" />
            <CFormInput type="file" accept="image/*" multiple="multiple" ref="file"
              @change="previewMultiImage(id, $event)" class="mb-3" label="Превью" placeholder="Превью" />
            <div class="border p-2 mt-3 preview-container">
              <template v-if="preview_list?.[id]?.length">
                <div v-for="item, index in preview_list?.[id]" :key="index">
                  <img :src="item" class="img-fluid" />
                  <button @click.prevent="dropFile(id, index)">Х</button>
                </div>
              </template>
            </div>
            <CButton v-if="id > 0" color="danger" type="button" @click="dropOption(id)">Удалить
              опцию
            </CButton>
          </div>
          <CButton v-if="!!formData.select_name" color="primary" type="button" @click="addOption">Добавить опцию
          </CButton>
        </div>



        <QuillEditor theme="snow" toolbar="essential" ref="postTextEditor" id="postTextEditor"
          placeholder="Краткое описание" />
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="closeModal"> Отменить </CButton>
        <CButton v-show="mode === 'new'" color="primary" type="submit">Добавить</CButton>
        <CButton v-show="mode === 'edit'" color="primary" type="submit">Редактировать</CButton>
      </CModalFooter>
    </CForm>
  </CModal>
</template>

<script>
import axios from 'axios'
const myApi = axios.create({
  withCredentials: true,
})
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import TurndownService from 'turndown'
import { marked } from 'marked'
//import * as DOMPurify from 'dompurify'
import eventBus from '../eventBus'

export default {
  components: { QuillEditor },
  props: {
    mode: {
      required: true,
      type: String,
      validator: (value) => ['new', 'edit'].includes(value.toLowerCase()),
    },
    visible: false,
    formData: {
      title: '',
      text: '',
      description: '',
      preview: '',
      stock: 0,
      price: null,
      category_name: '',
      select_name: null,
      image_list: [],
      tags_array: new Set(),
      options_array: [{ name: "Опция" }],
    },

  },
  data() {
    return {
      formValid: false,
      preview_list: [],
      preview: null,
    }
  },
  updated() {
    this.formData.options_array = this.formData.options_array ?? [{ name: "Опция" }];

    this.formData.description && this.$refs.postTextEditor.pasteHTML(
      marked.parse(this.formData.description?.replaceAll("\r\n\r\n", "<span><br/><span/>\r\n\r\n")))

    this.preview = this.formData.preview ? `${this.$store.state.publicPath}/public/pics/${this.formData.preview}` : null;
    this.preview_list = [];
    for (let optionIndex in this.formData.options_array) {
      this.preview_list[optionIndex] = this.formData.options_array[optionIndex].photos?.map(preview_name => `${this.$store.state.publicPath}/public/pics/${preview_name}`)
    }
  },
  async mounted() {
    this.projects = await this.getProjects()
  },
  methods: {
    async getProjects() {
      return await myApi
        .get(this.$store.state.publicPath + '/api/categories/')
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          eventBus.$emit('noresponse', error)
        })
    },
    selectNone() {
      this.formData.options_array.length = this.preview_list.length = 1
    },
    addOption() {
      if (!this.formData.options_array) this.formData.options_array = []
      this.formData.options_array.push({})
      //this.preview_list[id] = []
    },
    dropOption(id) {
      this.formData.options_array.splice(id, 1);
      this.preview_list.splice(id, 1);
    },
    previewImage(event) {
      var input = event.target;
      this.formData.preview = input.files[0]

      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    },
    previewMultiImage(id, event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      //this.formData.preview = input.files[0]
      if (!this.preview_list) this.preview_list = []
      if (!this.preview_list[id]) this.preview_list[id] = []

      if (!this.formData.options_array[id].photos) this.formData.options_array[id].photos = []

      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list[id].push(e.target.result);
          }
          this.formData.options_array[id].photos.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    dropFile(id, index) {
      this.formData.options_array[id].photos?.splice(index, 1);
      this.preview_list[id]?.splice(index, 1);

    },
    addNewPost() {
      eventBus.$emit('addNewPost')
    },
    changeP(e) {
      this.formData.category_name = e.target.value
    },
    closeModal() {
      eventBus.$emit('closeModal')
    },
    constractFromData(isEdit) {
      if (!this.formData.title || !this.$refs.postTextEditor.getHTML())
        throw new Error()

      var formData = new FormData()

      formData.append('title', this.formData.title)
      formData.append('price', this.formData.price)
      this.formData.sale_count && formData.append('saleCount', this.formData.sale_count)
      this.formData.sale_price && formData.append('salePrice', this.formData.sale_price)

      this.formData.select_name && formData.append('select_name', this.formData.select_name)


      this.formData.preview && formData.append(`preview`, this.formData.preview);

      formData.append(`puffs_count`, this.formData.puffs_count);
      formData.append(`taste_strength`, this.formData.taste_strength);

      const turndownService = new TurndownService({
        headingStyle: "atx",
      })
      formData.append(
        'description',
        turndownService.turndown(this.$refs.postTextEditor.getHTML()),
      )

      this.formData.options_array?.forEach((option, index) => {
        option.photos?.forEach(photo => {
          formData.append(`photos[${index}][]`, photo);
        })

      });

      this.formData.category_name &&
        formData.append('categoryName', this.formData.category_name)

      formData.append('options_array', JSON.stringify(this.formData.options_array))

      isEdit && formData.append('id', this.formData.id)

      return formData
    },
    addNewing() {
      try {
        const formData = this.constractFromData()

        myApi
          .post(this.$store.state.publicPath + '/api/admin/items', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            eventBus.$emit('postAdded')
          })
          .catch((e) => {
            eventBus.$emit('noresponse', e)
          })
      } catch (e) {
        this.formValid = true
        //eventBus.$emit('wrongInputData', e)
      }
    },
    editNewing() {
      try {
        const formData = this.constractFromData(true)

        myApi
          .put(this.$store.state.publicPath + '/api/admin/items', formData, {
            headers: {
              'Content-Type': `multipart/form-data`,

            },
          })
          .then(() => {
            eventBus.$emit('postEdited')
          })
          .catch((e) => {
            eventBus.$emit('noresponse', e)
          })
      } catch (e) {
        console.log(e)
        this.formValid = true
        //eventBus.$emit('wrongInputData', e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .hidden {
  display: none;
}

::v-deep .ql-toolbar.ql-snow {
  display: block !important;
}

.table {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-collapse: collapse;
}

.table th {
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
}

.table td {
  border: 1px solid #dddddd;
  padding: 5px;
  position: relative;

  .btn.btn-secondary {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}

.add-button {
  margin: 0;
}

.preview-container {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  &>div {
    max-width: 24%;
    position: relative;

    button {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
}

.tags-cloud,
.projects-list {
  display: flex;
  flex-wrap: wrap;

  &>* {
    margin-right: 20px;
  }

  &>span {
    flex: 0 0 100%;
    margin-bottom: 10px;
  }
}
</style>
