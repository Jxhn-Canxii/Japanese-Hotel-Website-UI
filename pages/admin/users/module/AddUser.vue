<template>
  <div>
    <!-- Add About Us Button -->
    <UButton icon="i-heroicons-plus" color="blue" @click="isAddModalOpen = true">
      Add User
    </UButton>

    <!-- Add About Us Modal -->
    <Modal v-model:show="isAddModalOpen" title="Add About Us">
      <UForm @submit="AddUser">
        <div class="space-y-4 p-4 overflow-auto">
          <h3 class="text-lg font-semibold">Add User</h3>
          <hr>

          <!-- Image Upload -->
          <!-- Title -->
          <UFormGroup label="Name">
            <UInput v-model="form.name" placeholder="Enter Name" />
          </UFormGroup>

          <UFormGroup label="Email">
            <UInput type="email" v-model="form.email" placeholder="Enter Email" />
          </UFormGroup>

          <UFormGroup label="Password">
            <UInput type="password" v-model="form.password" placeholder="Enter Password" />
          </UFormGroup>
          <!-- Submit Button -->
          <div class="flex justify-end mt-6">
            <UButton type="submit" color="blue">
              Submit
            </UButton>
          </div>
        </div>
      </UForm>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { BearToken, handleApiError, Alerto, FormDx } from "@/utility/Helper";
import { VUE_APP_API_URL } from "@/utility/Global";
import TinyEditor from "~/components/TinyEditor.vue";
import Modal from "~/components/Modal.vue"; // Ensure this is the correct Nuxt UI modal component

const emits = defineEmits(["transaction_id"]);
const isAddModalOpen = ref(false);

const form = ref({
  user_id: 0,
  username: '',
  email: '',
  role_id: 0,
});

// Add About Us Function
const AddUser = async () => {
  try {
    const formData = FormDx(form.value);
    const response = await axios.post(`${VUE_APP_API_URL}users/add`, formData, BearToken());

    Alerto("success", "Success", response.data.message);
    isAddModalOpen.value = false;
    emits("transaction_id", Math.random());
  } catch (error) {
    console.error(error);
    handleApiError(error);
  }
};
</script>
