<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          cols="12"
          sm="4"
        >
          <v-card
            :elevation="5"
            rounded="xl"
            min-height="370"
          >
            <v-img
              :src="item.image"
              height="250"
              cover
            />

            <v-card-text class="pb-0 block-text font-weight-bold text-h6 text-sm-h5">
              {{ item.title }}
            </v-card-text>
            <v-card-text class="main-text text-body-2 text-sm-body-1">
              {{ item.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row
        class="mt-16"
        no-gutters
      >
        <v-col
          cols="12"
          sm="6"
          class="bg-teal-lighten-5"
          order="1"
          order-sm="0"
        >
          <v-sheet
            class="pa-5 pa-sm-10"
            color="transparent"
          >
            <p class="block-text text-h6 text-sm-h5 text-teal">
              Sustainable Development
            </p>
            <p class="main-text mt-2 text-body-2 text-sm-body-1 text-grey-darken-4">
              Creating a future where the delta's natural resources are preserved for future generations, while also
              improving the quality of life for its residents. This will require commitment, collaboration, and
              innovative solutions that the NDDC is willing and ready to achieve.
            </p>
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-img
            src="@/assets/mission-2.png"
            height="300"
            cover
          />
        </v-col>
      </v-row>
      <v-row
        class="mt-0"
        no-gutters
      >
        <v-col
          cols="12"
          sm="6"
          class="bg-teal-lighten-5"
          order="0"
        >
          <v-img
            src="@/assets/project.png"
            height="300"
            cover
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-sheet
            class="pa-5 pa-sm-10"
            color="transparent"
          >
            <p class="block-text text-h6 text-sm-h5 text-teal">
              Project Management
            </p>
            <p class="main-text mt-2 text-body-2 text-sm-body-1 text-grey-darken-4">
              Quality Management that provides methodical planning with agile execution, empowering teams to deliver
              high-quality outcomes while maximizing efficiency and minimizing disruptions.
            </p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import mision from '@/assets/mision.png'
import vision from '@/assets/vision.png'
import values from '@/assets/values.jpg'

export default {
  data: () => ({
    items: [
      {
        id: 1,
        image: mision,
        title: 'Mision',
        text: 'To offer a lasting solution to the socio-economic difficulties in the Niger Delta region.',
      },
      {
        id: 2,
        image: vision,
        title: 'Vision',
        text: `To facilitate the rapid and sustainable development of the Niger Delta into a region that is economically prosperous, socially stable, ecologically regenerative and and politically peaceful.`
      },
      {
        id: 3,
        image: values,
        title: 'Values',
        text: `Patriotism, Passion, Professionalism, Integrity, Creativity and Team Spirit`
      },
    ],
  }),
}
</script>