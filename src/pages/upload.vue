<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const file = ref(null);

const API_URL = "http://upload-million-records.test/api";
const batchInfo = ref({});
const uploadFile = (e) => {
  file.value = e.target.files[0];
};

const submit = () => {
  let formData = new FormData();
  formData.append("mycsv", file.value);
  axios
    .post(`${API_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response.data.id);
      showFileUploadProgress(response.data.id);
    })
    .catch((error) => {
      console.log(error.getMessage());
    });
};

const showFileUploadProgress = (batchId) => {
    setInterval(() => {
        if(batchInfo.value.progress != 100) {
            batchDetails(batchId);
        }
      }, 2000);
}

const batchDetails = (batchId) => {
  axios.get(`${API_URL}/batch?id=${batchId}`).then((response) => {
    console.log(response.data);
    batchInfo.value = response.data;
  });
};

const inProgressBatch = () => {
    axios.get(`${API_URL}/batch/in-progress`)
    .then((response) => {
        if(response.data && response.data.id != undefined) {
            batchInfo.value = response.data;
            showFileUploadProgress(response.data.id);
        }
    })
}

onMounted(() => {
    inProgressBatch();
});

</script>

<template>
  <section v-if="Object.keys(batchInfo).length != 0">
    <h3>Uploading ({{ batchInfo.progress }}%)..</h3>
    <progress :value="batchInfo.progress" max="100"></progress>
    <div class="w-full h-4 rounded-lg shadow-inner border">
        <div class="bg-blue-700 w-full h-4 rounded-lg" :style="{width:batchInfo.progress+'%'}"></div>
    </div>
  </section>
  <section class="flex h-screen" v-if="Object.keys(batchInfo).length == 0">
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
  </section>
</template>