<template lang="pug">
section.home
  .container
    .home__container
      h2.home__heading Pixel aspect ratio editing tool

      .home__step.home__step--loading
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

      .home__step.home__step--processing(v-if="rawFilesModel.length")
        span Set preferred desqueeze factor or select value from most popular ones:

        VNumberInput(
          v-model="desqueezeFactor"
          :min="0"
          :max="50"
          :step="0.1"
          :precision="null"
          :reverse="false"
          controlVariant="split"
          label="Desqueeze factor"
          :hideInput="false"
          :hide-details="true"
          :inset="false"
          variant="outlined"
        )

        .home__factors
          VBtn(
            class="home__factor-button"
            v-for="factor in POPULAP_DESQUEEZE_FACTORS"
            :key="factor"
            variant="tonal"
            @click="desqueezeFactor = factor"
          ) {{ factor }}

        VBtn(
          variant="tonal"
          size="x-large"
          :disabled="!desqueezeFactor || isProcessing"
          :loading="isProcessing"
          @click="desqueezePhotos"
          :block="true"
          base-color="blue"
        ) Desqueeze photos

      .home__step.home__step--downloading
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  computed
} from 'vue';
import { useFilesStore } from '../store/index'
import {
  COMPATIBLE_FILE_FORMATS,
  POPULAP_DESQUEEZE_FACTORS
} from '../constants';

const filesStore = useFilesStore();
const desqueezeFactor = ref<number | null>(null);
const isProcessing = ref<boolean>(false);

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

function desqueezePhotos() {
  console.log('On Desqueeze');
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

  .home__step
    display: flex
    flex-direction: column
    gap: 20px

  .home__factors
    display: flex
    justify-content: center
    flex-wrap: wrap
    gap: 10px
    width: 100%

  .home__factor-button
    flex-grow: 1
    min-width: 36px

</style>