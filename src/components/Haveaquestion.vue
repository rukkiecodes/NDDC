<template>
  <v-row class="mt-16 justify-space-between">
    <v-col
      cols="12"
      sm="7"
      order="1"
      order-sm="0"
    >
      <p class="block-text text-green-darken-3 font-weight-bold text-h6 text-sm-h4">
        Have a question?
      </p>
      <p class="block-text text-green-darken-3 font-weight-bold text-h6 text-sm-h4 mb-5">
        Out team is always happy to assist you
      </p>
      <p class="main-text text-body-2 text-sm-body-1 text-grey-3">
        Ask about NDDC projects, programs, interventions or anything else that
        might
        interest you. Our help center
        are
        staning by and ready to help.
      </p>

      <div class="d-flex mt-5">
        <v-btn
          class="main-text text-body-2 text-sm-body-1 text-capitalize mr-5 font-weight-bold"
          color="green-darken-4"
          append-icon="mdi-arrow-right"
          :elevation="0"
          rounded="0"
        >
          Contact Us
        </v-btn>
        <v-btn
          class="main-text text-body-2 text-sm-body-1 text-capitalize font-weight-bold"
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

    <v-col
      cols="12"
      sm="3"
    >
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