<template>
  <v-row>
    <v-col cols="12">
      <div class="d-flex align-center justify-space-between mb-5">
        <v-sheet width="600">
          <p class="text-green-darken-3 font-weight-bold text-h6 mb-10">
            Current News
          </p>
          <p class="text-h4 font-weight-bold mb-2">
            Latest NDDC News
          </p>
        </v-sheet>

        <v-btn
          class="text-capitalize text-green-darken-3 font-weight-bold"
          variant="outlined"
          rounded="0"
          style="border-color: #038735;"
        >
          See All
        </v-btn>
      </div>
    </v-col>

    <v-col
      cols="12"
      sm="7"
    >
      <v-sheet border="sm">
        <v-img
          src="@/assets/wdp.jpeg"
          cover
          height="500"
        />

        <div class="pa-5">
          <div class="d-flex mb-5">
            <div class="d-flex align-center mr-5">
              <v-icon
                color="green-darken-3"
                class="mr-2"
              >
                mdi-account
              </v-icon>
              <p class="text-body-1 text-green-darken-3">
                Infrastructural Development
              </p>
            </div>
            <p class="text-grey-darken-3 text-body-1">
              17th July, 2024
            </p>
          </div>

          <p class="text-h6 font-weight-black mb-5 text-decoration-underline">
            NDDC Program: Building Financial
            Independence for Women in
            the Niger Delta
          </p>
          <p class="text-grey-darken-3 text-body-2 mb-2">
            Crystalline Nwachukwu
          </p>

          <v-btn
            class="text-green-darken-3"
            variant="text"
            append-icon="mdi-arrow-right"
            style="text-transform: none;"
          >
            Read More
          </v-btn>
        </div>
      </v-sheet>
    </v-col>

    <v-col
      cols="12"
      sm="5"
    >
      <v-row>
        <v-col cols="12">
          <v-sheet border="sm">
            <v-img
              src="@/assets/road3.png"
              cover
              height="172"
              position="center"
            />

            <div class="pa-5">
              <p class="text-h6 font-weight-black mb-5 text-decoration-underline">
                NDDC Program: Building
                Financial Independence for Women in
                the Niger Delta
              </p>
              <p class="text-grey-darken-3 text-body-2 mb-2">
                Crystalline Nwachukwu
              </p>

              <v-btn
                class="text-green-darken-3"
                variant="text"
                append-icon="mdi-arrow-right"
                style="text-transform: none;"
              >
                Read More
              </v-btn>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12">
          <v-sheet border="sm">
            <v-img
              src="@/assets/bfi.jpeg"
              cover
              height="172"
              position="center"
            />

            <div class="pa-5">
              <p class="text-h6 font-weight-black mb-5 text-decoration-underline">
                NDDC Program: Building
                Financial Independence for Women in
                the Niger Delta
              </p>
              <p class="text-grey-darken-3 text-body-2 mb-2">
                Crystalline Nwachukwu
              </p>

              <v-btn
                class="text-green-darken-3"
                variant="text"
                append-icon="mdi-arrow-right"
                style="text-transform: none;"
              >
                Read More
              </v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>