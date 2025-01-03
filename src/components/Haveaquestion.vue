<template>
  <v-row class="mt-16 justify-space-between">
    <v-col cols="7">
      <v-sheet width="500">
        <p class="text-green-darken-3 font-weight-bold text-h4">
          Have a question?
        </p>
        <p class="text-green-darken-3 font-weight-bold text-h4 mb-5">
          Out team is always happy to assist you
        </p>
        <p class="text-body-1 text-grey-3">
          Ask about NDDC projects, programs, interventions or anything else that
          might
          interest you. Our help center
          are
          staning by and ready to help.
        </p>
      </v-sheet>

      <div class="d-flex mt-5">
        <v-btn
          class="text-capitalize mr-5 font-weight-bold"
          color="green-darken-4"
          append-icon="mdi-arrow-right"
          :elevation="0"
          rounded="0"
        >
          Contact Us
        </v-btn>
        <v-btn
          class="text-capitalize font-weight-bold"
          color="green-darken-4"
          append-icon="mdi-play-circle-outline"
          variant="outlined"
          :elevation="0"
          rounded="0"
        >
          Contact
          Us
        </v-btn>
      </div>
    </v-col>
    <v-col cols="3">
      <v-img
        src="@/assets/5.png"
        cover
      />
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>