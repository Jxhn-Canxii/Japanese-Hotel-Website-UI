<template>
  <div>
      <UButton color="red" @click="deactivateUser()">
        <UIcon name="i-heroicons-trash" class="mr-2" /> Delete
      </UButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { BearToken, handleApiError, FormDx, Alerto } from "@/utility/Helper";
import { VUE_APP_API_URL } from "@/utility/Global";

import TinyEditor from "~/components/TinyEditor.vue";
import Modal from "~/components/Modal.vue"; // ✅ Use the Nuxt UI modal component

const emits = defineEmits(["transaction_id"]);
const isAddModalOpen = ref(false);
const props = defineProps({
  data: { type: Object, required: true },
});

// Delete Room
const deactivateUser = async () => {
  const prompt = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  if (prompt.isConfirmed) {
    try {
      await axios.post(`${VUE_APP_API_URL}users/delete`, { user_id: props.data?.id }, BearToken());
      Alerto("success", "Success", "User deactivated successfully.");
      emits('transaction_id',Math.random());
    } catch (error) {
      handleApiError(error);
    }
  }
};

</script>
