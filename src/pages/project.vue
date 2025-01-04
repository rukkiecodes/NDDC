<template>
  <div>
    <v-img
      src="@/assets/delta-roads.png"
      class="d-flex justify-center align-center"
      :height="600"
      cover
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
                  v-text="projectData?.heading"
                />

                <p
                  class="main-text text-white text-body-1 text-ms-h6 my-5"
                  v-text="projectData?.about"
                />

                <v-btn
                  class="main-text text-body-2 text-sm-body-1 text-capitalize"
                  :elevation="0"
                  prepend-icon="mdi-play-circle-outline"
                  variants="outlined"
                  rounded="0"
                  color="green-darken-3"
                  :href="projectData?.videoLink"
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
      <v-row>
        <v-col
          cols="12"
          sm="7"
        >
          <p
            class="block-text text-h6 text-sm-h5 text-md-h4 font-weight-bold mb-2 mb-sm-5"
            v-text="projectData?.t1"
          />
          <p
            class="main-text text-body-2 text-sm-body-1 mb-5 text-body-1"
            v-text="projectData?.t2"
          />

          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-img
                src="@/assets/road2.jpg"
                height="300"
                cover
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-img
                src="@/assets/inspection.jpg"
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
            src="@/assets/road.jpg"
            height="420"
            cover
          />
        </v-col>
      </v-row>

      <p
        class="main-text text-body-2 text-sm-body-1 mb-5 my-10"
        v-text="projectData?.t3"
      />

      <v-img
        src="@/assets/road3.png"
        class="my-10"
        cover
      />

      <p
        class="main-text text-body-2 text-sm-body-1"
        v-text="projectData?.t4"
      />

      <FeaturedArticles class="mt-16" />
    </v-container>
  </div>
</template>


<script>
import { db } from '@/firebase';
import { collection, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export default {
  data: () => ({
    projectData: null,
    model: null,
  }),

  mounted () {
    this.getRealTimeUpdate()
  },

  methods: {
    async getRealTimeUpdate () {
      const q = query(collection(db, "projects"), where("title", "==", this.$route.params.project));

      const unsub = onSnapshot(q, (doc) => {
        this.projectData = {
          id: doc.docs[0].id,
          ...doc.docs[0].data()
        }
      });

      return unsub
    },
  }
}
</script>