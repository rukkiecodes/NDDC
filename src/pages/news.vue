<template>
  <v-container class="mt-16">
    <v-row>
      <v-col
        cols="12"
        sm="9"
      >
        <v-breadcrumbs
          :items="items"
          divider=">"
          color="green-darken-3"
        />
        <v-divider class="mb-10" />

        <v-row>
          <v-col
            cols="12"
            class="d-flex ga-5 justify-center align-center"
          >
            <p class="main-text text-body-2 text-sm-body-1 text-green-darken-3">
              <v-icon>mdi-account</v-icon> Corporate Affairs Department
            </p>
            <p>17th July, 2024</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            sm="2"
          />
          <v-col
            cols="12"
            sm="8"
            class="text-center"
          >
            <p class="block-text text-h5 text-sm-h4 font-weight-bold">
              {{ news.title }}
            </p>

            <p class="main-text mt-2 text-grey-darken-2 font-weight-bold text-body-2 text-sm-body-1 mt-5">
              Follow on Socials
            </p>

            <div class="d-flex justify-center mt-4">
              <v-btn
                icon
                variant="outlined"
                size="40"
              >
                <v-img
                  src="@/assets/x.png"
                  width="18"
                />
              </v-btn>
              <v-btn
                class="mx-5"
                icon
                variant="outlined"
                size="40"
              >
                <v-img
                  src="@/assets/instagram.png"
                  width="18"
                />
              </v-btn>
              <v-btn
                icon
                variant="outlined"
                size="40"
              >
                <v-img
                  src="@/assets/linkedin.png"
                  width="18"
                />
              </v-btn>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="2"
          />
        </v-row>

        <v-row>
          <v-img
            :src="news.image"
            cover
            height="600"
          />

          <div class="pa-5">
            <p
              v-for="(text, index) in news.texts"
              :key="index"
              class="main-text text-body-2 mb-5"
              style="white-space:pre-wrap;"
            >
              {{ text }}
            </p>
          </div>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <v-list :items="importantLinks" />
        <v-list
          :items="newsArchive"
          class="mt-5"
        />
      </v-col>
    </v-row>

    <Haveaquestion />
  </v-container>
</template>

<script>
import { useAppStore } from "@/stores/app";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {

  setup () {
    const newsStore = useAppStore();

    // Access the route parameter
    const route = useRoute();

    // Find the news item that matches the title in the route parameter
    const news = computed(() =>
      [...newsStore.featuredNews, ...newsStore.topThree, ...newsStore.forWomen, ...newsStore.education].find((item) => item.title === route.params.title)
    );

    return { news };
  },

  data: () => ({
    items: [
      {
        title: 'Media',
        disabled: false,
        href: '/media',
      },
      {
        title: 'News',
        disabled: false,
        href: '',
      }
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
    ]
  }),
};
</script>

<style>
/* Add your styles here */
</style>
