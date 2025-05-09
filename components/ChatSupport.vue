<template>
  <div class="fixed bottom-4 right-4 z-50">
    <button
      class="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 flex items-center justify-center"
      @click="toggleChat"
    >
      <span class="text-2xl">💌</span>
      <span class="ml-2 font-semibold">お話ししましょう</span>
    </button>

    <div
      v-if="isChatOpen"
      class="absolute bottom-16 right-0 w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-200"
    >
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">チャットサポート</h3>
        <button
          class="text-gray-500 hover:text-gray-700 focus:outline-none"
          @click="toggleChat"
        >
          ✖
        </button>
      </div>
      <div class="chat-messages h-40 overflow-y-auto border-t border-b border-gray-200 py-2 mb-4">
        <p class="text-sm text-gray-600">こんにちは！どのようにお手伝いできますか？</p>
      </div>
      <input
        type="text"
        placeholder="メッセージを入力してください..."
        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isChatOpen = ref(false);

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
};
</script>

<style scoped>
.chat-messages {
  max-height: 200px;
}
</style>