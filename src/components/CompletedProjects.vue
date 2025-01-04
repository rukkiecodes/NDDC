<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="10"
      >
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="7"
          >
            <p class="main-text text-green-darken-3 text-body-1 text-sm-h6 font-weight-bold mb-2 mb-sm-5">
              Our Projects
            </p>

            <p class="block-text text-h5 text-sm-h4 font-weight-bold">
              Completed NDDC Road Projects
            </p>
            <p class="main-text text-body-2 text-sm-body-1 mt-2 mt-sm-5">
              Get current updates on our Projects and Programs cut accross the Nine States of the Niger Delta Region,
              gain deep insights and analysis of developmental trends
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="5"
          />
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="2"
        class="d-flex justify-sm-end align-center"
      >
        <v-btn
          color="green-darken-3"
          variant="outlined"
          class="main-text text-body-2 text-sm-body-1"
          rounded="0"
        >
          See all
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col
        v-for="project in completedProjects"
        :key="project.id"
        cols="12"
        sm="6"
      >
        <v-sheet border="sm">
          <v-img
            :src="project.image"
            height="300"
            cover
          />

          <div class="mt-2 pa-4">
            <p class="block-text text-h6 text-sm-h5 font-weight-bold mb-2 mb-sm-5">
              {{ project.title }}
            </p>
            <p class="main-text text-body-2 text-sm-body-1">
              {{ project.body }}
            </p>

            <v-btn
              variant="text"
              class="main-text text-body-2 text-body-1 text-green-darken-3 font-weight-bold"
              append-icon="mdi-arrow-right"
            >
              Click here to read about the project
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import power from '@/assets/power.png'
import srs1 from '@/assets/srs1.png'
import crc2 from '@/assets/crc2.png'
import crc3 from '@/assets/crc3.png'
import crc4 from '@/assets/crc4.png'
import crc5 from '@/assets/crc5.png'
import crc6 from '@/assets/crc6.png'
import crc7 from '@/assets/crc7.png'

export default {
  props: ['projects'],
  data: () => ({
    completedProjects: [
      {
        id: 0,
        image: power,
        title: '132KV Transmission Line and Substation in Abia State',
        body: `The NDDC's state-of-the-art 132KV transmission line and substation project will transform energy f-the-art 132KV transmission line and substation project...`,
      },
      {
        id: 1,
        image: srs1,
        title: '132KV Transmission Line and Substation in Abia State',
        body: `The NDDC's state-of-the-art 132KV transmission line and substation project will transform energy f-the-art 132KV transmission line and substation project...`,
      },
      {
        id: 2,
        image: crc2,
        title: '132KV Transmission Line and Substation in Abia State',
        body: `The NDDC's state-of-the-art 132KV transmission line and substation project will transform energy f-the-art 132KV transmission line and substation project...`,
      },
      {
        id: 3,
        image: crc3,
        title: '132KV Transmission Line and Substation in Abia State',
        body: `The NDDC's state-of-the-art 132KV transmission line and substation project will transform energy f-the-art 132KV transmission line and substation project...`,
      },
      {
        id: 4,
        image: crc4,
        title: '132KV Transmission Line and Substation in Abia State',
        body: `The NDDC's state-of-the-art 132KV transmission line and substation project will transform energy f-the-art 132KV transmission line and substation project...`,
      },
      {
        id: 5,
        image: crc5,
        title: '132KV Transmission Line and Substation in Abia State',
        body: `The NDDC's state-of-the-art 132KV transmission line and substation project will transform energy f-the-art 132KV transmission line and substation project...`,
      },
      {
        id: 6,
        image: crc6,
        title: '132KV Transmission Line and Substation in Abia State',
        body: `The NDDC's state-of-the-art 132KV transmission line and substation project will transform energy f-the-art 132KV transmission line and substation project...`,
      },
      {
        id: 7,
        image: crc7,
        title: '132KV Transmission Line and Substation in Abia State',
        body: `The NDDC's state-of-the-art 132KV transmission line and substation project will transform energy f-the-art 132KV transmission line and substation project...`,
      },
    ]
  })
}
</script>

<style></style>