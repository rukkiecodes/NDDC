<template>
  <div>
    <v-img
      src="@/assets/delta-roads.png"
      class="d-flex justify-center align-center"
      :height="600"
      cover
    >
      <v-sheet
        height="600"
        color="rgba(0,0,0,0.6)"
        class="d-flex align-center"
      >
        <v-sheet
          color="transparent"
          width="700"
          class="mx-auto text-center"
        >
          <p class="text-white font-weight-black text-h2 mb-2">
            Transforming the region through
          </p>
          <p class="text-white font-weight-black text-h2">
            Road Construction
          </p>

          <p class="text-white text-h6 my-5">
            Every road paved, bridge built is a step towards unlocking the vast
            potential
            of the Niger Delta.
          </p>

          <v-btn
            class="text-capitalize"
            :elevation="0"
            prepend-icon="mdi-play-circle-outline"
            variants="outlined"
            rounded="0"
            color="green-darken-3"
          >
            Watch our video
          </v-btn>
        </v-sheet>
      </v-sheet>
    </v-img>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>