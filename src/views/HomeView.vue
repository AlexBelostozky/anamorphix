<template lang="pug">
section.home
  .container
    .home__container
      h2.home__heading Pixel aspect ratio editing tool

      VFileUpload(
        v-model="rawFilesModel"
        multiple=true
        webkitdirectory="true"
        clearable=true
        :filter-by-type="COMPATIBLE_FILE_FORMATS"
        @rejected="onRejectFiles"
      )

      .home__rejected-files(v-if="rejectedFilesModel.length")
        span Some files was rejected:

        VList(density="comfortable")
          VListItem(
            class="border-sm"
            v-for="file in rejectedFilesModel"
            :key="file.name"
            :title="file.name"
            :subtitle="file.type"
            prepend-icon="mdi-image"
          )

</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useFilesStore } from '../store/index'
import { COMPATIBLE_FILE_FORMATS } from '../constants/fileFormats';

const filesStore = useFilesStore();


// Computed
const rawFilesModel = computed<File[]>({
  get: () => filesStore.rawFiles,
  set: (files) => filesStore.setRawFiles(files),
});

const rejectedFilesModel = computed<File[]>({
  get: () => filesStore.rejectedFiles,
  set: (files) => filesStore.setRejectedFiles(files),
});


// Methods
function onRejectFiles(evt: File[]) {
  rejectedFilesModel.value = evt;
}
</script>

<style lang="sass">
  .home__container
    display: flex
    flex-direction: column
    gap: 20px
    max-width: 460px
    margin: 0 auto

  .home__heading
    text-align: center
</style>