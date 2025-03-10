<template>
  <div>
    <!-- Add About Us Button -->
    <UButton icon="i-heroicons-plus" color="blue" @click="isAddModalOpen = true">
      Add Permission
    </UButton>

    <!-- Add About Us Modal -->
    <Modal v-model:show="isAddModalOpen" title="Add About Us">
      <UForm @submit="AddUser">
        <div class="space-y-4 p-4 overflow-auto">
          <h3 class="text-lg font-semibold">Add Permission</h3>
          <hr>

          <!-- Image Upload -->
          <!-- Title -->
          <UFormGroup label="Name">
            <UInput v-model="form.permission_name" placeholder="Enter Name" />
          </UFormGroup>

          <UFormGroup label="Type">
            <UInput type="text" v-model="form.permission_type" placeholder="Enter Email" />
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
import { BearToken, handleApiError, Alerto, FormDx, replaceSpaceWithUnderScore } from "@/utility/Helper";
import { VUE_APP_API_URL } from "@/utility/Global";
import TinyEditor from "~/components/TinyEditor.vue";
import Modal from "~/components/Modal.vue"; // Ensure this is the correct Nuxt UI modal component

const emits = defineEmits(["transaction_id"]);
const isAddModalOpen = ref(false);

const form = ref({
  permission_name: "",
  permission_type: "",
});

// Add About Us Function
const AddUser = async () => {
  try {
    form.value.permission_name = replaceSpaceWithUnderScore(form.value.permission_name);
    const formData = FormDx(form.value);
    const response = await axios.post(`${VUE_APP_API_URL}permissions/add`, formData, BearToken());

    Alerto("success", "Success", response.data.message);
    isAddModalOpen.value = false;
    emits("transaction_id", Math.random());
  } catch (error) {
    console.error(error);
    handleApiError(error);
  }
};
</script>
