<template lang="pug">
section.home
  .container
    .home__container
      h2.home__heading Pixel aspect ratio editing tool

      VFileUpload(
        v-model="rawFiles"
        multiple=true
        webkitdirectory="true"
        clearable=true
        :filter-by-type="COMPATIBLE_FILE_FORMATS"
        @rejected="onRejectFiles"
      )

      .home__rejected-files(v-if="rejectedFiles.length")
        span Some files was rejected:

        VList(density="compact")
          VListItem(
            v-for="file in rejectedFiles"
            :key="file.name"
            :title="file.name"
            :subtitle="file.type"
            prepend-icon="mdi-image"
          )

</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { COMPATIBLE_FILE_FORMATS } from '../constants/fileFormats';

const rawFiles = ref<File[]>([]);
const rejectedFiles = ref<File[]>([]);

watch(rawFiles, (newRawFiles) => {
  console.log(newRawFiles);
});

function onRejectFiles(evt: File[]) {
  console.log('On R', evt);
  rejectedFiles.value = evt;
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