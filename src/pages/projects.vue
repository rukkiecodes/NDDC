<template>
  <div>
    <v-carousel
      :show-arrows="false"
      hide-delimiters
      :height="height"
      cycle
      interval="10000"
    >
      <v-carousel-item
        v-if="projects.length >= 1"
        :src="currentProject?.images[0]?.downloadURL"
        cover
        eager
        position="center center"
      >
        <v-sheet
          :height="height"
          color="rgba(0,0,0,0.6)"
          class="d-flex align-center"
        >
          <v-row>
            <v-col
              cols="12"
              sm="3"
            />
            <v-col
              cols="12"
              sm="6"
            >
              <v-sheet
                color="transparent"
                class="mx-auto text-center pa-2 pa-sm-0"
              >
                <p
                  class="block-text text-white font-weight-black text-h4 text-sm-h3 text-md-h2 mb-2"
                  v-text="currentProject?.heading"
                />

                <p
                  class="main-text text-white text-body-1 text-ms-h6 my-5"
                  v-text="currentProject?.about"
                />

                <v-btn
                  class="main-text text-body-2 text-sm-body-1 text-capitalize"
                  :elevation="0"
                  prepend-icon="mdi-play-circle-outline"
                  variants="outlined"
                  rounded="0"
                  color="green-darken-3"
                  :href="currentProject?.videoLink"
                >
                  Watch our video
                </v-btn>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              sm="3"
            />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <Sort class="my-16" />

    <v-container class="mt-10">
      <v-tabs v-model="tab">
        <v-tab
          class="main-text text-caption text-sm-body-1"
          :class="{
            'text-green-darken-3 font-weight-bold': tab == 'Ongoing Project',
            'text-grey-darken-2 font-weight-bold': tab !== 'Ongoing Project',
          }"
          value="Ongoing Project"
        >
          Ongoing Project
        </v-tab>
        <v-tab
          class="main-text text-caption text-sm-body-1"
          :class="{
            'text-green-darken-3 font-weight-bold': tab == 'Completed Project',
            'text-grey-darken-2 font-weight-bold': tab !== 'Completed Project',
          }"
          value="Completed Project"
        >
          Completed Project
        </v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Ongoing Project">
          <div class="mt-10">
            <v-row
              v-if="projects.length >= 1"
              class="align-end"
            >
              <v-col
                cols="12"
                sm="7"
              >
                <p
                  class="block-text text-h6 text-sm-h5 text-md-h4 font-weight-bold mb-2 mb-sm-5"
                  v-text="currentProject?.t1"
                />
                <p
                  class="main-text text-body-2 text-sm-body-1 mb-2 mb-sm-5"
                  style="white-space:pre-wrap;"
                  v-text="currentProject?.t2"
                />

                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-img
                      :src="currentProject?.images[1]?.downloadURL"
                      height="300"
                      cover
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-img
                      :src="currentProject?.images[2]?.downloadURL"
                      height="300"
                      cover
                    />
                  </v-col>
                </v-row>
              </v-col>

              <v-col
                cols="12"
                sm="5"
              >
                <v-img :src="currentProject?.images[3]?.downloadURL" />
              </v-col>
            </v-row>

            <p
              v-if="projects.length >= 1"
              class="main-text text-body-2 text-sm-body-1 my-10"
              style="white-space:pre-wrap;"
              v-text="currentProject?.t3"
            />

            <v-img
              v-if="projects.length >= 1"
              :src="currentProject?.images[4]?.downloadURL"
              cover
              class="my-10"
            />

            <p
              v-if="projects.length >= 1"
              class="main-text text-body-2 text-sm-body-1"
              style="white-space:pre-wrap;"
              v-text="currentProject?.t4"
            />

            <!-- Pagination for projects -->
            <v-pagination
              v-model="currentPage"
              :length="projects.length"
              @input="changePage"
            />
          </div>
        </v-tabs-window-item>

        <v-tabs-window-item value="Completed Project">
          <CompletedProjects
            class="mt-10"
            :projects="projects"
          />
        </v-tabs-window-item>
      </v-tabs-window>

      <FeaturedArticles class="my-16" />
    </v-container>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export default {
  data: () => ({
    projectData: null,
    projects: [],
    currentPage: 1, // Track the current page
    displayHeight: null,
    tab: null,
  }),

  computed: {
    height () {
      switch (this.displayHeight) {
        case 'xs':
          return 600;
        case 'sm':
          return 500;
        case 'md':
          return 550;
        case 'lg':
          return 700;
        case 'xl':
          return 800;
        case 'xxl':
          return 1200;
        default:
          return undefined;
      }
    },
    currentProject () {
      // Return the project corresponding to the current page
      return this.projects[this.currentPage - 1] || {};
    },
  },

  created () {
    const { name } = this.$vuetify.display;
    this.displayHeight = name;
  },

  mounted () {
    this.getRealTimeUpdate()
  },

  updated () {
    this.getRealTimeUpdate()
  },

  methods: {
    async getRealTimeUpdate () {
      const q = query(collection(db, "projects"), orderBy("timestamp", 'desc'));

      const unsub = onSnapshot(q, (doc) => {
        this.projects =
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
  },
}
</script>
