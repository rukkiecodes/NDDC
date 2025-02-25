<template>
  <v-container>
    <v-row class="mt-16">
      <v-col
        cols="12"
        sm="9"
      >
        <v-sheet>
          <p class="text-body-1 text-green-darken-3 my-5 font-weight-bold">
            NDDC Publications
          </p>
          <p class="text-h4 font-weight-bold">
            Discover the Heart of Development
          </p>
          <p class="text-body-1 text-grey-darken-3 my-5">
            Welcome to the NDDC Publications Hub, where knowledge meets
            action. Our publications provide an in-depth look at the transformative work being done across the Niger
            Delta.
          </p>
        </v-sheet>

        <div>
          <v-row>
            <v-col
              cols="12"
              sm="3"
            >
              <p class="text-green-darken-3 mb-1 font-weight-bold">
                Filter
              </p>
              <v-sheet
                border="sm"
                rounded="md"
                height="50"
                class="d-flex align-center px-2"
              >
                <v-icon class="mx-2">
                  mdi-filter-variant
                </v-icon>

                <span class="text-body-2 text-grey-darken-2">Select Filter</span>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="9"
            >
              <p class="text-green-darken-3 mb-1 font-weight-bold">
                Search
              </p>
              <v-sheet
                v-bind="activatorProps"
                border="sm"
                rounded="md"
                height="50"
                class="d-flex align-center px-2"
              >
                <v-icon class="mx-2">
                  mdi-magnify
                </v-icon>

                <input
                  type="text"
                  placeholder="Search for names, articles, references etc"
                  style="flex: 1; height: 100%; outline: none"
                >
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <v-sheet
          v-for="(book, index) in books"
          :key="index"
          color="#F6F6F6"
          class="mt-10 pb-5 pb-sm-0"
          style="border-bottom: 4px solid #021E8B;"
        >
          <v-row>
            <v-col
              cols="12"
              sm="2"
            >
              <v-img :src="book.image" />
            </v-col>
            <v-col
              cols="12"
              sm="10"
              class="d-flex align-end justify-space-between"
            >
              <div
                class="d-flex flex-column justify-center ga-2"
                style="height: 100%"
              >
                <p class="main-text text-body-2 text-sm-body-1 text-grey-darken-3">
                  NDDC Magazine
                </p>
                <p class="block-text text-h6 text-sm-h5 text-blue-darken-4 font-weight-bold">
                  Delta Renaissance: Showcasing Development and
                  Progress in the Niger Delta
                </p>
                <p class="main-text text-body-2 text-sm-body-1 text-grey-darken-2">
                  <span class="font-weight-bold">Published:</span> <span>5th January,
                    2024</span>
                </p>

                <div class="d-flex">
                  <v-btn
                    color="green-darken-3"
                    rounded="0"
                    :elevation="0"
                    prepend-icon="mdi-cloud-download-outline"
                    class="main-text text-body-2 text-sm-body-1 text-capitalize"
                  >
                    Download file
                  </v-btn>

                  <v-btn
                    color="green-darken-3"
                    rounded="0"
                    :elevation="0"
                    prepend-icon="mdi-cloud-download-outline"
                    variant="outlined"
                    class="main-text text-body-2 text-sm-body-1 text-capitalize ml-5"
                  >
                    Open file
                  </v-btn>
                </div>
              </div>

              <v-btn
                icon
                :elevation="0"
                color="#F6F6F6"
              >
                <v-icon>mdi-share-variant-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>

        <v-pagination
          :length="4"
          class="mt-16"
          active-color="#263238"
          variant="flat"
        />
      </v-col>

      <v-col
        cols="12"
        sm="3"
      >
        <SideList />
      </v-col>
    </v-row>

    <v-row class="my-16">
      <v-col cols="12">
        <v-sheet class="d-flex justify-space-between align-center">
          <v-sheet width="500">
            <p class="main-text text-body-2 text-sm-body-1 text-green-darken-3 font-weight-bold">
              Our Current Releases
            </p>
            <p class="block-text text-h5 text-sm-h4 font-weight-black my-3">
              Latest NDDC Highlights
            </p>
          </v-sheet>

          <v-btn
            class="main-text text-body-2 text-sm-body-1 text-capitalize text-green-darken-3 font-weight-bold"
            variant="outlined"
            rounded="0"
            style="border-color: #038735;"
          >
            See All
          </v-btn>
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        sm="7"
      >
        <v-img
          src="@/assets/ftnbm.jpeg"
          gradient="transparent, rgba(0,0,0,0.9)"
          cover
          class="pa-5 d-flex align-end"
          height="500"
        >
          <div>
            <div class="d-flex mb-5">
              <div class="d-flex align-center mr-5">
                <v-icon
                  color="white"
                  class="mr-2"
                >
                  mdi-account
                </v-icon>
                <p class="main-text text-body-2 text-sm-body-1 text-white">
                  Infrastructural Development
                </p>
              </div>
              <p class="main-text text-body-2 text-sm-body-1 text-white">
                17th July, 2024
              </p>
            </div>

            <p class="block-text text-h6 text-sm-h5 text-white font-weight-bold my-2">
              Flood Threat: NDDC Builds Multi-Purpose Emergency
              Shelters
            </p>

            <p class="main-text text-body-2 text-sm-body-1 text-white">
              The Managing Director of the Niger Delta Development Commission, The
              Managing Director of the Niger Delta Development Commission, NDDC, Dr. Samuel Ogbuku says...
            </p>

            <v-btn
              class="main-text text-body-2 text-sm-body-1 text-capitalize text-green-lighten-2 font-weight-bold mt-2"
              append-icon="mdi-arrow-right"
              variant="text"
            >
              Read More
            </v-btn>
          </div>
        </v-img>
      </v-col>

      <v-col
        cols="12"
        sm="5"
      >
        <v-row>
          <v-col cols="12">
            <v-img
              src="@/assets/ftnbm2.jpeg"
              gradient="transparent, rgba(0,0,0,0.9)"
              cover
              class="pa-5 d-flex align-end"
              height="238"
            >
              <div>
                <div class="d-flex mb-5">
                  <div class="d-flex align-center mr-5">
                    <v-icon
                      color="white"
                      class="mr-2"
                    >
                      mdi-account
                    </v-icon>
                    <p class="main-text text-body-2 text-sm-body-1 text-white">
                      Infrastructural Development
                    </p>
                  </div>
                  <p class="main-text text-body-2 text-sm-body-1 text-white">
                    17th July, 2024
                  </p>
                </div>

                <p class="block-text text-h6 text-sm-h5 text-white font-weight-bold my-2">
                  Flood Threat: NDDC Builds Multi-Purpose
                  Emergency
                  Shelters
                </p>

                <p class="main-text text-body-2 text-sm-body-1 text-white">
                  The Managing Director of the Niger Delta Development Commission,
                  The...
                </p>

                <v-btn
                  class="main-text text-body-2 text-sm-body-1 text-capitalize text-green-lighten-2 font-weight-bold mt-2"
                  append-icon="mdi-arrow-right"
                  variant="text"
                >
                  Read
                  More
                </v-btn>
              </div>
            </v-img>
          </v-col>
          <v-col cols="12">
            <v-img
              src="@/assets/ftnbm3.jpeg"
              gradient="transparent, rgba(0,0,0,0.9)"
              cover
              class="pa-5 d-flex align-end"
              height="238"
            >
              <div>
                <div class="d-flex mb-5">
                  <div class="d-flex align-center mr-5">
                    <v-icon
                      color="white"
                      class="mr-2"
                    >
                      mdi-account
                    </v-icon>
                    <p class="main-text text-body-2 text-sm-body-1 text-white">
                      Infrastructural Development
                    </p>
                  </div>
                  <p class="main-text text-body-2 text-sm-body-1 text-white">
                    17th July, 2024
                  </p>
                </div>

                <p class="block-text text-h6 text-sm-h5 text-white font-weight-bold my-2">
                  Flood Threat: NDDC Builds Multi-Purpose
                  Emergency
                  Shelters
                </p>

                <p class="main-text text-body-2 text-sm-body-1 text-white">
                  The Managing Director of the Niger Delta Development Commission,
                  The...
                </p>

                <v-btn
                  class="main-text text-body-2 text-sm-body-1 text-capitalize text-green-lighten-2 font-weight-bold mt-2"
                  append-icon="mdi-arrow-right"
                  variant="text"
                >
                  Read
                  More
                </v-btn>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import book1 from '@/assets/book1.jpeg'
import book2 from '@/assets/book2.png'
import book3 from '@/assets/book3.png'
import book4 from '@/assets/book4.jpeg'
import book5 from '@/assets/book5.jpeg'
import book6 from '@/assets/book6.jpeg'

export default {
  data: () => ({
    books: [
      { image: book1 },
      { image: book2 },
      { image: book3 },
      { image: book4 },
      { image: book5 },
      { image: book6 },
    ],
  }),
}
</script>

<style></style>