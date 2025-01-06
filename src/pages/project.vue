<template>
  <div>
    <v-row no-gutters>
      <v-col
        v-for="project in projects"
        :key="project.id"
        cols="12"
      >
        <v-img
          :src="project.images[0].downloadURL"
          class="d-flex justify-center align-center"
          :height="600"
          cover
          position="center center"
        >
          <v-sheet
            height="600"
            color="rgba(0,0,0,0.6)"
            class="d-flex align-center"
          >
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="2"
                />
                <v-col
                  cols="12"
                  sm="8"
                >
                  <v-sheet
                    color="transparent"
                    class="mx-auto text-center"
                  >
                    <p
                      class="block-text text-white font-weight-black text-h4 text-sm-h3 text-md-h2 mb-2"
                      v-text="project?.heading"
                    />

                    <p
                      class="main-text text-white text-body-1 text-ms-h6 my-5"
                      v-text="project?.about"
                    />

                    <v-btn
                      class="main-text text-body-2 text-sm-body-1 text-capitalize"
                      :elevation="0"
                      prepend-icon="mdi-play-circle-outline"
                      variants="outlined"
                      rounded="0"
                      color="green-darken-3"
                      :href="project?.videoLink"
                    >
                      Watch our video
                    </v-btn>
                  </v-sheet>
                </v-col>
                <v-col
                  cols="12"
                  sm="2"
                />
              </v-row>
            </v-container>
          </v-sheet>
        </v-img>

        <v-container class="mt-10">
          <v-row class="align-end">
            <v-col
              cols="12"
              sm="7"
            >
              <p
                class="block-text text-h6 text-sm-h5 text-md-h4 font-weight-bold mb-2 mb-sm-5"
                v-text="project?.t1"
              />
              <p
                class="main-text text-body-2 text-sm-body-1 mb-5 text-body-1"
                style="white-space:pre-wrap;"
                v-text="project?.t2"
              />

              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-img
                    :src="project.images[1].downloadURL"
                    height="300"
                    cover
                  />
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-img
                    :src="project.images[2].downloadURL"
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
              <v-img
                :src="project.images[3].downloadURL"
                cover
                height="450"
              />
            </v-col>
          </v-row>

          <p
            class="main-text text-body-2 text-sm-body-1 mb-5 my-10"
            style="white-space:pre-wrap;"
            v-text="project?.t3"
          />

          <v-img
            :src="project.images[4].downloadURL"
            class="my-10"
            cover
          />

          <p
            class="main-text text-body-2 text-sm-body-1"
            style="white-space:pre-wrap;"
            v-text="project?.t4"
          />

          <FeaturedArticles class="mt-16" />
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import { db } from '@/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export default {
  data: () => ({
    projectData: null,
    projects: [],
    model: null,
  }),

  mounted () {
    this.getRealTimeUpdate()
  },

  updated (){
    this.getRealTimeUpdate()
  },

  methods: {
    async getRealTimeUpdate () {
      const q = query(collection(db, "projects"), where("title", "==", this.$route.params.project));

      const unsub = onSnapshot(q, (doc) => {
        this.projects =
          doc.docs.map(document => ({
            id: document.id,
            ...document.data()
          }))
      });

      return unsub
    },
  }
}
</script>