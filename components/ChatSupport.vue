<template>
  <div class="fixed bottom-4 right-4 z-50">
    <div class="relative">
      <!-- Glowing Ring -->
      <div class="absolute inset-0 rounded-full animate-glow-ring pointer-events-none"></div>

      <!-- Chat Button -->
      <button
        class="relative z-10 bg-pink-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out 
               hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-400 hover:to-fuchsia-500 
               hover:shadow-pink-400/50 hover:shadow-lg 
               focus:outline-none focus:ring-2 focus:ring-pink-300 
               flex items-center justify-center"
        @mouseenter="isMouseOver = true"
        @mouseleave="isMouseOver = false"
        @click="toggleChat"
      >
        <span v-if="!isMouseOver" class="text-2xl">💌</span>
        <span v-else class="ml-2 font-semibold">お話ししましょう | Chat</span>
      </button>
    </div>

    <!-- Chat Box -->
    <div
      v-if="isChatOpen"
      class="absolute bottom-16 right-0 w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-200"
    >
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">チャットサポート | Chat Support</h3>
        <button
          class="text-gray-500 hover:text-gray-700 focus:outline-none"
          @click="toggleChat"
        >
          ✖
        </button>
      </div>
      <div class="chat-messages h-40 overflow-y-auto border-t border-b border-gray-200 py-2 mb-4">
        <div class="message">
          <p class="text-sm text-gray-600 bg-gray-100 p-2 rounded-lg mb-2">こんにちは！どのようにお手伝いできますか？ | Hello! How can we assist you?</p>
        </div>
        <div class="message self">
          <p class="text-sm text-white bg-pink-500 p-2 rounded-lg mb-2">お部屋の予約について教えてください。 | Can you tell me about room reservations?</p>
        </div>
        <div class="message">
          <p class="text-sm text-gray-600 bg-gray-100 p-2 rounded-lg mb-2">もちろんです！どの日付をご希望ですか？ | Of course! What dates are you looking for?</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="メッセージを入力してください... | Type your message..."
        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isChatOpen = ref(false);
const isMouseOver = ref(false);

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
};
</script>

<style scoped>
.chat-messages {
  max-height: 200px;
}

.message {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.message.self {
  align-items: flex-end;
}

.message p {
  max-width: 75%;
  word-wrap: break-word;
}

@keyframes glow-ring {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.0); /* transparent */
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(236, 72, 153, 0.4); /* glowing pink */
  }
}

.animate-glow-ring {
  animation: glow-ring 2s infinite;
}

</style>