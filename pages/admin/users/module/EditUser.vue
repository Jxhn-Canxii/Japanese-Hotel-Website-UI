<template>
  <div>
    <!-- Add About Us Button -->
    <UButton icon="i-heroicons-pencil-square" color="yellow" @click="editBehavior()">
      Edit
    </UButton>

    <!-- Add About Us Modal -->
    <Modal v-model:show="isEditModalOpen" title="Add About Us">
      <UForm @submit="EditUser">
        <div class="space-y-4 p-4 overflow-auto">
          <h3 class="text-lg font-semibold">Edit User</h3>
          <hr>

          <!-- Image Upload -->
          <!-- Title -->
          <UFormGroup label="Name">
            <UInput v-model="form.username" disabled placeholder="Enter Name" class="bg-gray-200" />
          </UFormGroup>

          <UFormGroup label="Email">
            <UInput type="email" v-model="form.email" placeholder="Enter Email" />
          </UFormGroup>

          <UFormGroup label="Role">
            <USelect v-model="form.role_id" :options="roles" option-attribute="label" />
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
import { VUE_APP_API_URL, ROLE } from "@/utility/Global";
import TinyEditor from "~/components/TinyEditor.vue";
import Modal from "~/components/Modal.vue"; // Ensure this is the correct Nuxt UI modal component

const emits = defineEmits(["transaction_id"]);
const props = defineProps({
  data: { type: Object, required: true },
});
const isEditModalOpen = ref(false);
const roles = ref([]);
const form = ref({
  user_id: 0,
  username: '',
  email: '',
  role_id: 0,
});
const editBehavior = () => {
  fillForm();
  roleDropdown();
  
  isEditModalOpen.value = true;
};
const fillForm = () => {
  const data = props.data;

  form.value.user_id = data.id;
  form.value.username = data.name;
  form.value.email = data.email;
  form.value.role_id = data.roleId;
};
const roleDropdown = async () => {
    roles.value = await ROLE();

    console.log(roles.value);
} 
// Add About Us Function
const EditUser = async () => {
  try {
    const formData = FormDx(form.value);
    const response = await axios.post(`${VUE_APP_API_URL}users/add`, formData, BearToken());

    Alerto("success", "Success", response.data.message);
    isEditModalOpen.value = false;
    emits("transaction_id", Math.random());
  } catch (error) {
    console.error(error);
    handleApiError(error);
  }
};
</script>
