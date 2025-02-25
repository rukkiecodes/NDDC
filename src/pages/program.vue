<template>
  <div>
    <v-sheet
      color="#F1F4FF"
      class="mb-16"
    >
      <v-container class="py-16">
        <v-row>
          <v-col
            cols="12"
            sm="5"
            order="1"
            order-sm="0"
          >
            <v-sheet
              color="transparent"
              max-width="700"
            >
              <p
                class="block-text text-green-darken-3 font-weight-black text-body-1 text-sm-h6 text-md-h5 text-lg-h4 mb-4"
                v-text="currentProject?.heading"
              />

              <p
                class="main-text text-grey-darken-3 text-caption text-sm-body-2 text-md-body-1 my-5"
                v-text="currentProject?.about"
              />

              <div class="right d-flex flex-column flex-sm-row">
                <v-sheet
                  class="pa-2 d-flex flex-fill align-center"
                  border="sm"
                  height="50"
                >
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    class="contact-input main-text text-grey-darken-3 text-caption text-sm-body-2 text-md-body-1"
                    style="flex: 1"
                  >
                </v-sheet>
                <v-btn
                  class="main-text text-capitalize text-caption text-sm-body-2 text-md-body-1"
                  rounded="0"
                  color="green-darken-4"
                  height="50"
                  :elevation="0"
                >
                  Register Now
                </v-btn>
              </div>

              <div class="d-flex mt-5">
                <!-- <div class="d-flex mr-5 align-center">
                  <p
                    class="main-text text-h4 font-weight-bold mr-2"
                    v-text="currentProject?.t1"
                  />
                  <p
                    class="main-text text-grey-darken-2"
                    v-text="currentProject?.t2"
                  />
                </div> -->
                <!-- <div class="d-flex align-center">
                  <p
                    class="main-text text-h4 font-weight-bold mr-2"
                    v-text="currentProject?.t3"
                  />
                  <p
                    class="main-text text-grey-darken-2"
                    v-text="currentProject?.t4"
                  />
                </div> -->
              </div>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="7"
          >
            <v-img
              :src="currentProject?.image?.uri"
              cover
              class="rounded-lg"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet
      class="my-16 py-16"
      style="position: relative;"
    >
      <v-img
        src="@/assets/smallSpots.png"
        width="100"
        height="100"
        cover
        style="position: absolute; top: 0; right: 0;"
      />
      <v-img
        src="@/assets/bigSpots.png"
        width="100"
        height="100"
        cover
        style="position: absolute; bottom: 0; left: 0;"
      />

      <v-row no-gutters>
        <v-col
          cols="12"
          sm="3"
        />
        <v-col
          cols="12"
          sm="6"
        >
          <v-sheet class="text-center mx-auto pa-2 pa-sm-0">
            <p
              class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-bold"
              v-text="currentProject?.subheading"
            />
            <p
              class="main-text text-caption text-sm-body-2 text-md-body-1 text-grey-darken-3 mt-5"
              v-text="currentProject?.subheadingContext"
            />
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="3"
        />
      </v-row>
    </v-sheet>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="3"
        />
        <v-col
          cols="12"
          sm="6"
        >
          <v-sheet class="text-center mx-auto">
            <p
              class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-bold"
              v-text="currentProject?.t5"
            />
            <p
              class="main-text text-caption text-sm-body-2 text-md-body-1 text-grey-darken-3 mt-5"
              v-text="currentProject?.t6"
            />
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="3"
        />
      </v-row>

      <v-pagination
        v-model="currentPage"
        :length="programs.length"
        class="my-16"
        active-color="#263238"
        variant="flat"
        @input="changePage"
      />

      <v-row class="mt-16">
        <v-col
          v-for="story in storries"
          :key="story.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-sheet border="sm">
            <v-img
              :src="story.image"
              cover
              height="300"
              position="top"
            />

            <div class="pa-2 pa-sm-5">
              <p class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-black mb-5">
                {{ story.title }}
              </p>
              <p class="main-text text-caption text-sm-body-2 text-md-body-1 text-grey-darken-3 mb-2">
                {{ story.host }}
              </p>

              <v-btn
                class="main-text text-green-darken-3 text-caption text-sm-body-2 text-md-body-1 font-weight-bold"
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
          class="d-flex justify-center mt-5"
        >
          <v-btn
            append-icon="mdi-arrow-right"
            color="green-darken-3"
            rounded="0"
            class="main-text text-body-2 text-sm-body-1"
          >
            Read More
          </v-btn>
        </v-col>
      </v-row>

      <Newsletter class="my-16" />
    </v-container>
  </div>
</template>

<script>
import {db} from '@/firebase';
import {collection, onSnapshot, query, where} from 'firebase/firestore';

import bgpt from '@/assets/bgpt.jpeg'
import woman from '@/assets/woman.png'
import bfi from '@/assets/bfi.jpeg'
import bgggt from '@/assets/bgggt.jpeg'
import pwl from '@/assets/pwl.jpeg'
import bfifw from '@/assets/bfifw.jpeg'

export default {
  data: () => ({
    model: null,
    dialog: false,
    dialogProps: {
      text: '',
      link: '',
      field: '',
      isLink: false
    },
    storries: [
      {
        id: 0,
        image: bgpt,
        title: `Bridging the Gender Gap Through Education and Skill Development`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 1,
        image: woman,
        title: `Promoting Women’s Leadership and Decision-Making in the Niger Delta`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 2,
        image: bfi,
        title: `Building Financial Independence for Women in the Niger Delta`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 3,
        image: bgggt,
        title: `Bridging the Gender Gap Through Education and Skill Development`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 4,
        image: pwl,
        title: `Promoting Women’s Leadership and Decision-Making in the Niger Delta`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 5,
        image: bfifw,
        title: `Building Financial Independence for Women in the Niger Delta`,
        host: `Crystalline Nwachukwu`,
      },
    ],
    programs: [],
    currentPage: 1,
  }),

  computed: {
    currentProject () {
      return this.programs[this.currentPage - 1] || {};
    },
  },

  mounted() {
    this.getRealTimeUpdate()
  },

  updated() {
    this.getRealTimeUpdate()
  },

  methods: {
    async getRealTimeUpdate() {
      const q = query(collection(db, "programs"), where("title", "==", this.$route.params.program));

      const unsub = onSnapshot(q, (doc) => {
        this.programs =
          doc.docs.map(document => ({
            id: document.id,
            ...document.data()
          }))
      });

      return unsub
    },

    changePage () {
      // Update the displayed project when the page changes
      window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: Scroll to the top
    },
  }
}
</script>
