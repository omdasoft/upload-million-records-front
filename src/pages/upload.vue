<script setup>
import { ref } from "vue";
import axios from "axios";

const file = ref(null);

const API_URL = "http://upload-million-records.test/api";

const uploadFile = (e) => {
  file.value = e.target.files[0];
};

const submit = () => {
  let formData = new FormData();
  formData.append("mycsv", file.value);
  axios
    .post(`${API_URL}/upload`, formData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.getMessage());
    });
};
</script>
<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <h1 class="text-xl text-gray-800 text-center mb-5">
        Chose a file to upload
      </h1>
      <form @submit.prevent="submit" class="border rounded p-4">
        <input type="file" @change="uploadFile" />
        <input
          type="submit"
          value="Upload"
          class="px-4 py-2 bg-gray-700 rounded text-white cursor-pointer"
        />
      </form>
    </div>
  </div>
</template>