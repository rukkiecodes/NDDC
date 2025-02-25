<template>
  <div>
    <v-carousel v-if="projects.length >= 1" :show-arrows="false" hide-delimiters :height="height" cycle
      interval="5000">
      <v-carousel-item v-for="(image, index) in mainBannerImages" :key="index" :src="image.downloadURL" eager cover
        position="center center" />

      <v-sheet :height="height" class="d-flex align-center pa-2" color="rgba(0,0,0,0.4)"
        style="position: absolute; left: 0; width: 100%;">
        <v-row justify="center">
          <v-col sm="2" />
          <v-col cols="12" sm="8">
            <p class="block-text text-white font-weight-black text-h6 text-sm-h5 text-md-h4 text-lg-h3 mb-2 text-sm-center"
              v-text="currentProject?.heading || currentProject?.projectHeading" />
            <p class="main-text text-white text-caption text-sm-body-2 text-md-body-1 my-5 text-sm-center"
              v-text="currentProject?.about || currentProject?.projectDescription" />

            <v-btn v-if="currentProject?.hasVideo"
              class="main-text text-caption text-sm-body-2 text-md-body-1 text-capitalize" :elevation="0"
              prepend-icon="mdi-play-circle-outline" variant="outlined" rounded="0" color="green-darken-3"
              :href="currentProject?.videoLink">
              Watch our video
            </v-btn>
          </v-col>
          <v-col cols="12" sm="2" />
        </v-row>
      </v-sheet>
    </v-carousel>

    <Sort class="my-16" />

    <v-container class="mt-10">
      <div class="border-b-md">
        <v-tabs v-model="tab">
          <v-tab class="main-text text-caption text-sm-body-2 text-md-body-1" :class="{
            'text-green-darken-3 font-weight-black': tab == 'Ongoing Project',
            'text-grey-darken-2 font-weight-black': tab !== 'Ongoing Project',
          }" value="Ongoing Project">
            Ongoing Project
          </v-tab>
          <v-tab class="main-text text-caption text-sm-body-2 text-md-body-1" :class="{
            'text-green-darken-3 font-weight-black': tab == 'Completed Project',
            'text-grey-darken-2 font-weight-black': tab !== 'Completed Project',
          }" value="Completed Project">
            Completed Project
          </v-tab>
        </v-tabs>
      </div>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Ongoing Project">
          <div class="mt-10">
            <v-row v-if="projects.length >= 1" class="align-end">
              <v-col cols="12" sm="7">
                <p class="block-text text-body-1 text-sm-h6 text-md-h5 text-lg-h4 font-weight-bold mb-2 mb-sm-5"
                  v-text="currentProject?.t1 || currentProject?.articleTitle" />
                <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2 mb-sm-5" style="white-space:pre-wrap;"
                  v-text="currentProject?.t2 || currentProject?.openingText" />

                <v-row>
                  <v-col cols="12" sm="6">
                    <v-img :src="currentProject?.images[1]?.downloadURL" height="300" cover />
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-img :src="currentProject?.images[2]?.downloadURL" height="300" cover />
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" sm="5">
                <v-img :src="currentProject?.images[3]?.downloadURL" />
              </v-col>
            </v-row>

            <v-img v-if="(projects.length >= 1 && currentProject?.images[4]?.downloadURL)"
              :src="currentProject?.images[4]?.downloadURL" cover class="my-10" />

            <p v-if="projects.length >= 1" class="main-text text-caption text-sm-body-2 text-md-body-1 mt-16"
              style="white-space:pre-wrap;" v-html="currentProject?.t4 || currentProject?.content" />

            <!-- Pagination for projects -->
            <v-pagination v-model="currentPage" :length="projects.length" active-color="#263238" variant="flat"
              class="mt-16" @input="changePage" :density="density" />
          </div>
        </v-tabs-window-item>

        <v-tabs-window-item value="Completed Project">
          <CompletedProjects class="mt-10" :projects="projects" />
        </v-tabs-window-item>
      </v-tabs-window>

      <FeaturedArticles class="my-16" />
    </v-container>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';

export default {
  data: () => ({
    projectData: null,
    projects: [],
    currentPage: 1, // Track the current page
    displayHeight: null,
    tab: null,
    mainBannerImages: []
  }),

  computed: {
    height () {
      switch (this.displayHeight) {
        case 'xs':
          return 600;
        case 'sm':
          return 600;
        case 'md':
          return 700;
        case 'lg':
          return 800;
        case 'xl':
          return '85vh';
        case 'xxl':
          return 1200;
        default:
          return undefined;
      }
    },
    density () {
      switch (this.displayHeight) {
        case 'xs':
          return 'compact';
        case 'sm':
          return 'comfortable';
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
      const q = query(collection(db, "projects"), orderBy("timestamp", "desc"), limit(10));

      const unsub = onSnapshot(q, (doc) => {
        // Reset before updating to prevent infinite growth
        this.projects = doc.docs.map(document => ({
          id: document.id,
          ...document.data()
        }));

        // Extract images efficiently
        this.mainBannerImages = this.projects.flatMap(project => project.images || []);
      });

      return unsub;
    },

    changePage () {
      // Update the displayed project when the page changes
      window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: Scroll to the top
    },
  },
}
</script>
