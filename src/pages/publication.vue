<template>
  <v-container>
    <v-row class="mt-16">
      <v-col cols="12" sm="9">
        <v-sheet width="600">
          <p class="text-body-1 text-green-darken-3 my-5 font-weight-bold">NDDC Publications</p>
          <p class="text-h4 font-weight-bold">Discover the Heart of Development</p>
          <p class="text-body-1 text-grey-darken-3 my-5">Welcome to the NDDC Publications Hub, where knowledge meets
            action. Our publications provide an in-depth look at the transformative work being done across the Niger
            Delta.</p>
        </v-sheet>

        <div>
          <v-row>
            <v-col cols="12" sm="3">
              <p class="text-green-darken-3 mb-1 font-weight-bold">Filter</p>
              <v-sheet border="sm" rounded="md" height="50" class="d-flex align-center px-2">
                <v-icon class="mx-2">mdi-filter-variant</v-icon>

                <span class="text-body-2 text-grey-darken-2">Select Filter</span>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="9">
              <p class="text-green-darken-3 mb-1 font-weight-bold">Search</p>
              <v-sheet v-bind="activatorProps" border="sm" rounded="md" height="50" class="d-flex align-center px-2">
                <v-icon class="mx-2">mdi-magnify</v-icon>

                <input
type="text" placeholder="Search for names, articles, references etc"
                  style="flex: 1; height: 100%; outline: none">
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <v-sheet
v-for="(book, index) in books" :key="index" color="#F6F6F6" class="mt-10"
          style="border-bottom: 6px solid #021E8B;">
          <v-row>
            <v-col cols="12" sm="2">
              <v-img :src="book.image" />
            </v-col>
            <v-col cols="12" sm="10" class="d-flex align-end justify-space-between">
              <div class="d-flex flex-column justify-center ga-2" style="height: 100%">
                <p class="text-grey-darken-3">NDDC Magazine</p>
                <p class="text-blue-darken-4 font-weight-bold text-h5">Delta Renaissance: Showcasing Development and
                  Progress in the Niger Delta</p>
                <p class="text-grey-darken-2"><span class="font-weight-bold">Published:</span> <span>5th January,
                    2024</span></p>

                <div class="d-flex">
                  <v-btn
color="green-darken-3" rounded="0" :elevation="0" prepend-icon="mdi-cloud-download-outline"
                    class="text-capitalize">Download file</v-btn>

                  <v-btn
color="green-darken-3" rounded="0" :elevation="0" prepend-icon="mdi-cloud-download-outline"
                    variant="outlined" class="text-capitalize ml-5">Open file</v-btn>
                </div>
              </div>

              <v-btn icon :elevation="0" color="#F6F6F6">
                <v-icon>mdi-share-variant-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>

        <v-pagination :length="4" class="mt-16" />
      </v-col>

      <v-col cols="12" sm="3">
        <v-list :items="importantLinks" />
        <v-list :items="newsArchive" class="mt-5" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet class="d-flex justify-space-between align-center">
          <v-sheet width="500">
            <p class="text-green-darken-3 font-weight-bold text-body-1">Our Current Releases</p>
            <p class="text-h4 font-weight-black my-3">Latest NDDC Highlights</p>
          </v-sheet>

          <v-btn
class="text-capitalize text-green-darken-3 font-weight-bold" variant="outlined" rounded="0"
            style="border-color: #038735;">See All</v-btn>
        </v-sheet>
      </v-col>

      <v-col cols="7">
        <v-img
src="@/assets/ftnbm.jpeg" gradient="transparent, rgba(0,0,0,0.9)" cover class="pa-5 d-flex align-end"
          height="500">
          <div>
            <div class="d-flex mb-5">
              <div class="d-flex align-center mr-5">
                <v-icon color="white" class="mr-2">mdi-account</v-icon>
                <p class="text-body-1 text-white">Infrastructural Development</p>
              </div>
              <p class="text-white text-body-1">17th July, 2024</p>
            </div>

            <p class="text-h5 text-white font-weight-bold mt-5 mb-2">Flood Threat: NDDC Builds Multi-Purpose Emergency
              Shelters</p>

            <p class="text-white text-body-1 mt-2">The Managing Director of the Niger Delta Development Commission, The
              Managing Director of the Niger Delta Development Commission, NDDC, Dr. Samuel Ogbuku says...</p>

            <v-btn
class="text-capitalize text-green-lighten-2 font-weight-bold mt-2" append-icon="mdi-arrow-right"
              variant="text">Read
              More</v-btn>
          </div>
        </v-img>
      </v-col>

      <v-col cols="5">
        <v-row>
          <v-col cols="12">
            <v-img
src="@/assets/ftnbm2.jpeg" gradient="transparent, rgba(0,0,0,0.9)" cover
              class="pa-5 d-flex align-end" height="238">
              <div>
                <div class="d-flex mb-5">
                  <div class="d-flex align-center mr-5">
                    <v-icon color="white" class="mr-2">mdi-account</v-icon>
                    <p class="text-body-1 text-white">Infrastructural Development</p>
                  </div>
                  <p class="text-white text-body-1">17th July, 2024</p>
                </div>

                <p class="text-h5 text-white font-weight-bold mt-5 mb-2">Flood Threat: NDDC Builds Multi-Purpose
                  Emergency
                  Shelters</p>

                <p class="text-white text-body-1 mt-2">The Managing Director of the Niger Delta Development Commission,
                  The...</p>

                <v-btn
class="text-capitalize text-green-lighten-2 font-weight-bold mt-2" append-icon="mdi-arrow-right"
                  variant="text">Read
                  More</v-btn>
              </div>
            </v-img>
          </v-col>
          <v-col cols="12">
            <v-img
src="@/assets/ftnbm3.jpeg" gradient="transparent, rgba(0,0,0,0.9)" cover
              class="pa-5 d-flex align-end" height="238">
              <div>
                <div class="d-flex mb-5">
                  <div class="d-flex align-center mr-5">
                    <v-icon color="white" class="mr-2">mdi-account</v-icon>
                    <p class="text-body-1 text-white">Infrastructural Development</p>
                  </div>
                  <p class="text-white text-body-1">17th July, 2024</p>
                </div>

                <p class="text-h5 text-white font-weight-bold mt-5 mb-2">Flood Threat: NDDC Builds Multi-Purpose
                  Emergency
                  Shelters</p>

                <p class="text-white text-body-1 mt-2">The Managing Director of the Niger Delta Development Commission,
                  The...</p>

                <v-btn
class="text-capitalize text-green-lighten-2 font-weight-bold mt-2" append-icon="mdi-arrow-right"
                  variant="text">Read
                  More</v-btn>
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

    importantLinks: [
      {
        title: 'Important Links',
        value: 'Important Links',
        props: {
          class: 'bg-green-darken-4',
          variant: 'tonal'
        },
      },
      {
        title: 'Our Board',
        value: 'Our Board'
      },
      {
        title: 'Scholarships 2024',
        value: 'Scholarships 2024'
      },
      {
        title: 'Youth Empowerment Scheme 2024',
        value: 'Youth Empowerment Scheme 2024'
      },
      {
        title: 'Women Development Program',
        value: 'Women Development Program'
      },
      {
        title: 'Medical Outreach Program',
        value: 'Medical Outreach Program'
      },
      {
        title: 'Publications',
        value: 'Publications'
      },
    ],

    newsArchive: [
      {
        title: 'News Archive',
        value: 'News Archive',
        props: {
          class: 'bg-green-darken-4',
          variant: 'tonal'
        }
      },
      {
        title: '2021',
        value: '2021'
      },
      {
        title: '2022',
        value: '2022'
      },
      {
        title: '2023',
        value: '2023'
      },
      {
        title: 'Ongoing -2024',
        value: 'Ongoing -2024'
      }
    ],
  }),
}
</script>

<style></style>