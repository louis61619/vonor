<template>
  <div class="chat">
    <BaseEditor v-model:value="htmlString" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: {
    BaseEditor
  },
  setup() {
    const htmlString = ref<string>(`
      <h2>Hello~</h2>
      <p>感謝你觀看我的項目</p>
      <p>請不要吝嗇你的star</p>
      <p>項目地址:</p>
      <p>
        <a href="https://github.com/louis61619/vue3-ts-cms" target="_blank">https://github.com/louis61619/vue3-ts-cms</a>
      </p>
    `)
    return {
      htmlString
    }
  }
})
</script>

<style scoped></style>
