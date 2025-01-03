<template>
  <div>
    <v-sheet color="#F1F4FF" class="mb-16">
      <v-container class="py-16">
        <v-row>
          <v-col cols="12" sm="5">
            <v-sheet color="transparent" max-width="700">
              <p class="text-green-darken-3 font-weight-black text-h3 mb-4">The Women</p>
              <p class="text-green-darken-3 font-weight-black text-h3 mb-4">Development Program</p>
              <p class="text-green-darken-3 font-weight-black text-h3">2024 (WDP’24)</p>

              <p class="text-grey-darken-3 text-h6 my-5">Our projects are focused on creating sustainable solutions that
                directly benefit the people of the Niger Delta. Whether it's delivering clean water systems,
                rehabilitating
                schools, or developing health centers.</p>

              <div class="right d-flex">
                <v-sheet class="pa-2 d-flex align-center" border="sm" height="50" width="300">
                  <input type="text" placeholder="Enter your email address" class="contact-input" style="flex: 1">
                </v-sheet>
                <v-btn class="text-capitalize" rounded="0" color="green-darken-4" height="50" :elevation="0">Register
                  Now</v-btn>
              </div>

              <div class="d-flex mt-5">
                <div class="d-flex mr-5 align-center">
                  <p class="text-h4 font-weight-bold mr-2">3000+</p>
                  <p class="text-grey-darken-2">Registered Women</p>
                </div>
                <div class="d-flex align-center">
                  <p class="text-h4 font-weight-bold mr-2">20+</p>
                  <p class="text-grey-darken-2">Programs Held</p>
                </div>
              </div>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="7">
            <v-img src="@/assets/wdp.jpeg" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet class="my-16 py-16" style="position: relative;">
      <v-img
src="@/assets/smallSpots.png" width="100" height="100" cover
        style="position: absolute; top: 0; right: 0;" />
      <v-img
src="@/assets/bigSpots.png" width="100" height="100" cover
        style="position: absolute; bottom: 0; left: 0;" />

      <v-sheet class="text-center mx-auto" width="600">
        <p class="text-h4 font-weight-bold">What is the NDDC Women Development Program?</p>
        <p class="text-body-1 text-grey-darken-3 mt-5">Get current updates on our Projects and Programs cut accross the
          Nine States of the Niger Delta Region, gain
          deep insights and analysis of developmental trends within the region and the impact of our Projects and
          Programs on our people along developmental projections.</p>

        <v-btn
variant="outlined" color="green-darken-3" rounded="0" class="text-capitalize mt-5"
          append-icon="mdi-arrow-right">Fill the Online
          Form</v-btn>
      </v-sheet>
    </v-sheet>

    <v-container>
      <v-sheet class="text-center mx-auto" width="600">
        <p class="text-h4 font-weight-bold">The Success Stories Of The Past Few Years</p>
        <p class="text-body-1 text-grey-darken-3 mt-5">Our projects are focused on creating sustainable solutions that
          directly benefit the people of the Niger Delta. Whether it's delivering clean water systems, rehabilitating
          schools, or developing health centers.</p>
      </v-sheet>

      <v-row class="mt-10">
        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/bgpt.jpeg" height="300" cover />

            <div class="pa-5">
              <p class="font-weight-black text-h5">Bridging the Gender Gap Through Education and Skill Development</p>

              <p class="text-body-2 my-2">Crystalline Nwachukwu</p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Read More</v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/woman.png" height="300" cover />

            <div class="pa-5">
              <p class="font-weight-black text-h5">Promoting Women’s Leadership and Decision-Making in the Niger Delta
              </p>

              <p class="text-body-2 my-2">Crystalline Nwachukwu</p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Read More</v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/bfi.jpeg" height="300" cover />

            <div class="pa-5">
              <p class="font-weight-black text-h5">Building Financial Independence for Women in the Niger Delta</p>

              <p class="text-body-2 my-2">Crystalline Nwachukwu</p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Read More</v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/bgggt.jpeg" height="300" cover />

            <div class="pa-5">
              <p class="font-weight-black text-h5">Bridging the Gender Gap Through Education and Skill Development</p>

              <p class="text-body-2 my-2">Crystalline Nwachukwu</p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Read More</v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/pwl.jpeg" height="300" cover />

            <div class="pa-5">
              <p class="font-weight-black text-h5">Promoting Women’s Leadership and Decision-Making in the Niger Delta
              </p>

              <p class="text-body-2 my-2">Crystalline Nwachukwu</p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Read More</v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/bfifw.jpeg" height="300" cover />

            <div class="pa-5">
              <p class="font-weight-black text-h5">Building Financial Independence for Women in the Niger Delta</p>

              <p class="text-body-2 my-2">Crystalline Nwachukwu</p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Read More</v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" class="d-flex justify-center">
          <v-btn
class="text-capitalize mt-10" color="green-darken-4" rounded="0" :elevation="0"
            append-icon="mdi-arrow-right">Read More</v-btn>
        </v-col>
      </v-row>

      <div class="mt-16 d-flex justify-space-between">
        <div class="left d-flex justify-start align-center">
          <v-icon class="mr-5" size="90" color="green-darken-4">mdi-email</v-icon>
          <div>
            <p class="text-h5 font-weight-thin text-green-darken-3">Stay Connected</p>
            <p class="text-h4 font-weight-bold text-green-darken-3 mt-4">Join our Newsletter to stay updated</p>
          </div>
        </div>

        <div class="right d-flex">
          <v-sheet class="pa-2 d-flex align-center" border="sm" height="40">
            <input type="text" placeholder="Enter your email address" class="contact-input">
          </v-sheet>
          <v-btn rounded="0" color="green-darken-4" height="40" :elevation="0">Subscribe</v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>