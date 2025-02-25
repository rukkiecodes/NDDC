<template>
  <div>
    <v-row v-if="projects.length >= 1" no-gutters>
      <v-col v-if="paginatedProject" :key="paginatedProject.id" cols="12">
        <v-img :src="paginatedProject.images[0]?.downloadURL" class="d-flex justify-center align-center" :height="600"
          cover eager position="center center">
          <v-sheet height="600" color="rgba(0,0,0,0.6)" class="d-flex align-center">
            <v-container>
              <v-row>
                <v-col cols="12" sm="2" />
                <v-col cols="12" sm="8">
                  <v-sheet color="transparent" class="mx-auto text-center">
                    <p class="block-text text-white font-weight-black text-h6 text-sm-h5 text-md-h4 text-lg-h3 mb-2 text-sm-center"
                      v-text="paginatedProject?.heading || paginatedProject?.projectHeading" />
                    <p class="main-text text-white text-caption text-sm-body-2 text-md-body-1 my-5 text-sm-center"
                      v-text="paginatedProject?.about || paginatedProject?.projectDescription" />

                    <v-btn v-if="paginatedProject?.hasVideo"
                      class="main-text text-caption text-sm-body-2 text-md-body-1 text-capitalize" :elevation="0"
                      prepend-icon="mdi-play-circle-outline" variant="outlined" rounded="0" color="green-darken-3"
                      :href="paginatedProject?.videoLink">
                      Watch our video
                    </v-btn>
                  </v-sheet>
                </v-col>
                <v-col cols="12" sm="2" />
              </v-row>
            </v-container>
          </v-sheet>
        </v-img>

        <v-container class="mt-10">
          <v-row class="align-end">
            <v-col cols="12" sm="7">
              <p class="block-text text-body-1 text-sm-h6 text-md-h5 text-lg-h4 font-weight-bold mb-2 mb-sm-5"
                v-text="paginatedProject?.t1 || paginatedProject?.articleTitle" />
              <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2 mb-sm-5" style="white-space:pre-wrap;"
                v-text="paginatedProject?.t2 || paginatedProject?.openingText" />

              <v-row>
                <v-col cols="12" sm="6">
                  <v-img :src="paginatedProject.images[1]?.downloadURL" height="300" cover />
                </v-col>

                <v-col cols="12" sm="6">
                  <v-img :src="paginatedProject.images[2]?.downloadURL" height="300" cover />
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" sm="5">
              <v-img :src="paginatedProject.images[3]?.downloadURL" cover height="450" />
            </v-col>
          </v-row>

          <v-img :src="paginatedProject.images[4]?.downloadURL" class="my-10" cover />

          <p v-if="projects.length >= 1" class="main-text text-caption text-sm-body-2 text-md-body-1 mt-16"
            style="white-space:pre-wrap;" v-html="paginatedProject?.t4 || paginatedProject?.content" />

          <v-pagination v-if="projects.length > 1" v-model="page" :length="projects.length" :total-visible="5"
            active-color="#263238" variant="flat" class="mt-16" :density="density" />

          <FeaturedArticles class="my-16" />
        </v-container>
      </v-col>
    </v-row>

    <!-- Pagination -->
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';

export default {
  data: () => ({
    projects: [],
    page: 1,
    displayDensity: null
  }),

  computed: {
    paginatedProject () {
      return this.projects.length > 0 ? this.projects[this.page - 1] : null;
    },

    density () {
      switch (this.displayDensity) {
        case 'xs':
          return 'compact';
        case 'sm':
          return 'comfortable';
        default:
          return undefined;
      }
    },
  },

  updated () {
    this.getRealTimeUpdate();
  },

  mounted () {
    this.getRealTimeUpdate();
  },

  created () {
    const { name } = this.$vuetify.display;
    this.displayDensity = name;
  },

  methods: {
    async getRealTimeUpdate () {
      const q = query(collection(db, "projects"), where("sector", "==", this.$route.params.project), orderBy("timestamp", "desc"), limit(10));

      onSnapshot(q, (doc) => {
        this.projects = doc.docs.map(document => ({
          id: document.id,
          ...document.data()
        }));
      });
    },
  }
};
</script>
