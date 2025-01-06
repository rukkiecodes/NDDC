<template>
  <v-footer
    color="#003414"
    class="pa-5 pa-sm-16"
  >
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
            <div>
              <v-img
                cover
                src="@/assets/NDDCNewLogo_nobg.jpg"
                :width="250"
              />

              <p class="main-text mt-5 text-body-2 text-sm-body-1">
                To offer a lasting solution to the socio-economic difficulties of the Niger Delta region
              </p>
            </div>

            <v-divider class="my-5" />

            <p class="text-h6 text-sm-h5 font-weight-bold">
              Follow Us
            </p>

            <div class="d-flex mt-5">
              <v-btn
                icon
                :elevation="0"
                class="mr-5"
                color="transparent"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                icon
                :elevation="0"
                class="mr-5"
                color="transparent"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                icon
                :elevation="0"
                class="mr-5"
                color="transparent"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn
                icon
                :elevation="0"
                color="transparent"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="9"
          >
            <v-row no-gutters>
              <v-col
                cols="6"
                sm="3"
              >
                <p class="block-text text-h6 text-sm-h5 text-green-lighten-3 font-weight-bold mb-5">
                  About Us
                </p>

                <div class="d-flex flex-column">
                  <div class="mb-2">
                    <router-link
                      class="main-text text-body-2 text-sm-body-1 text-white text-decoration-none"
                      to="/whoWeAre"
                    >
                      Who we are
                    </router-link>
                  </div>
                  <router-link
                    to="/missionStatement"
                    class="main-text text-body-2 text-sm-body-1 text-white text-decoration-none"
                  >
                    Mission Statement
                  </router-link>
                  <router-link
                    to="/theBoard"
                    class="main-text text-body-2 text-sm-body-1 text-white text-decoration-none"
                  >
                    The Board
                  </router-link>
                  <router-link
                    to="/ourPeople"
                    class="main-text text-body-2 text-sm-body-1 text-white text-decoration-none"
                  >
                    Our People
                  </router-link>
                </div>
              </v-col>

              <v-col
                cols="6"
                sm="3"
              >
                <p class="block-text text-h6 text-sm-h5 text-green-lighten-3 font-weight-bold mb-5">
                  Projects
                </p>

                <div>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    Your Empowerment
                  </p>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    Women Development
                  </p>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    Environment Initiatives
                  </p>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    Ongoing Projects
                  </p>
                </div>
              </v-col>

              <v-col
                cols="6"
                sm="3"
                class="mt-10 mt-sm-0"
              >
                <p class="block-text text-h6 text-sm-h5 text-green-lighten-3 font-weight-bold mb-5">
                  Releases
                </p>

                <div>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    News and Updates
                  </p>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    Media Gallery
                  </p>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    Press Releases
                  </p>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    Publications
                  </p>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    Impact Reports
                  </p>
                </div>
              </v-col>

              <v-col
                cols="6"
                sm="3"
                class="mt-10 mt-sm-0"
              >
                <p class="block-text text-h6 text-sm-h5 text-green-lighten-3 font-weight-bold mb-5">
                  Contact Us
                </p>

                <div>
                  <p class="main-text text-body-2 text-sm-body-1 mb-2">
                    NDDC Headquarters
                  </p>

                  <div class="d-flex mb-2">
                    <v-icon class="mr-2">
                      mdi-map-marker
                    </v-icon>
                    <span class="main-text text-body-2 text-sm-body-1">info@nddc.gov.ng</span>
                  </div>

                  <div class="d-flex mb-2">
                    <v-icon class="mr-2">
                      mdi-phone
                    </v-icon>
                    <div>
                      <p class="main-text text-body-2 text-sm-body-1">
                        +234 708 923 4567
                      </p>
                      <p class="main-text text-body-2 text-sm-body-1">
                        +234 902 765 8731
                      </p>
                    </div>
                  </div>

                  <div class="d-flex mb-2">
                    <v-icon class="mr-2">
                      mdi-email
                    </v-icon>
                    <span class="main-text text-body-2 text-sm-body-1">info@nddc.gov.ng</span>
                  </div>

                  <p class="main-text text-body-2 text-sm-body-1">
                    Regional Offices
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-divider />
      </v-col>

      <v-col cols="12">
        <div class="d-flex flex-column flex-sm-row justify-center justify-sm-space-between">
          <span class="main-text text-body-2 text-sm-body-1 text-center text-sm-start">Copyright {{ new
            Date().getFullYear() }} Niger Delta
            Development Commission</span>

          <div class="d-flex flex-column flex-sm-row mt-5 mt-sm-0">
            <span class="mr-5 main-text text-body-2 text-sm-body-1 text-center text-sm-end">Terms and Conditions</span>
            <span class="mr-5 main-text text-body-2 text-sm-body-1 text-center text-sm-end">Privacy Policy</span>
            <span class="main-text text-body-2 text-sm-body-1 text-center text-sm-end">Freedom of Information</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>
