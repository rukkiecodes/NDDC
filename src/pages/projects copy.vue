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
        v-for="project in projects"
        :key="project.id"
        :src="project.images[0]?.downloadURL"
        cover
      >
        <v-sheet
          :height="height"
          color="rgba(0,0,0,0.6)"
          class="d-flex align-center"
        >
          <v-sheet
            color="transparent"
            width="700"
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
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container class="my-16">
      <v-row>
        <v-col
          cols="12"
          sm="2"
        >
          <p class="text-green-darken-3 mb-1 font-weight-bold">
            From:
          </p>
          <v-dialog max-width="400">
            <template #activator="{ props: activatorProps }">
              <v-sheet
                v-bind="activatorProps"
                border="sm"
                rounded="md"
                height="50"
                class="d-flex align-center px-2"
              >
                <v-icon class="mx-2">
                  mdi-calendar-month-outline
                </v-icon>

                <span class="text-body-2 text-grey-darken-2">DD/MM/YYY</span>
              </v-sheet>
            </template>

            <template #default="{ isActive }">
              <v-card>
                <v-card-text>
                  <v-date-picker />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>

        <v-col
          cols="12"
          sm="2"
        >
          <p class="text-green-darken-3 mb-1 font-weight-bold">
            To:
          </p>
          <v-dialog max-width="400">
            <template #activator="{ props: activatorProps }">
              <v-sheet
                v-bind="activatorProps"
                border="sm"
                rounded="md"
                height="50"
                class="d-flex align-center px-2"
              >
                <v-icon class="mx-2">
                  mdi-calendar-month-outline
                </v-icon>

                <span class="text-body-2 text-grey-darken-2">DD/MM/YYY</span>
              </v-sheet>
            </template>

            <template #default="{ isActive }">
              <v-card>
                <v-card-text>
                  <v-date-picker />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>

        <v-col
          cols="12"
          sm="8"
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
    </v-container>

    <v-container class="mt-10">
      <v-row class="align-end">
        <v-col
          cols="12"
          sm="7"
        >
          <p
            class="text-h4 font-weight-bold mb-5"
            v-text="projectData?.t1"
          />
          <p
            class="mb-5 text-body-1"
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
          <v-img src="@/assets/road.jpg" />
        </v-col>
      </v-row>

      <p
        class="text-body-1 mb-5 my-10"
        v-text="projectData?.t3"
      />

      <v-img
        src="@/assets/road3.png"
        cover
        class="my-10"
      />

      <p
        class="text-body-1"
        v-text="projectData?.t4"
      />

      <v-pagination :length="4" />

      <FeaturedArticles />
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
    model: null,
    displayHeight: null,
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
  },

  created () {
    const { name } = this.$vuetify.display;
    this.displayHeight = name;
  },

  mounted () {
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
  },
}
</script>