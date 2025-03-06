<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
        <img class="center-component fadeIn rounded-full animate-pulse" :src="logo" :width="width"/>
        <!-- <font-awesome :icon="faSpinner" class="fa-3x text-emeralld-900" /> -->
        <!-- Randomized Loading Message -->
   </div>
</template>

<script setup>
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ref, onMounted } from 'vue';

const loadingMessages = [
    'Please wait, fetching data...',
    'Loading content, please hold on...',
    'We are retrieving the information...',
    'Processing your request, hang tight...',
    'Gathering details, one moment please...',
    'Working on it, almost there...',
    'Fetching the latest updates...',
    'Just a moment, loading your data...',
    'Setting things up for you...',
    'Eyy! sa eyy! para sa ekonomiya!',
    'Almost ready, please be patient...'
];
const logo = "/images/logo.jpg";
const width = "80px";
const loadingMessage = ref(loadingMessages[0]);

// Function to update the loading message at random intervals
const updateLoadingMessage = () => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    loadingMessage.value = loadingMessages[randomIndex];
};

// Call updateLoadingMessage when component is mounted
onMounted(() => {
    updateLoadingMessage();
});
</script>

<style scoped>
/* Optional: Style the loading spinner and message */
.fa-spinner {
    color: #3490dc; /* Customize color as needed */
}
p {
    font-size: 1.125rem; /* Increase font size for better readability */
}
</style>
