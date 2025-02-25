<template>
  <div>
    <v-row class="d-sm-flex align-sm-center">
      <v-col
        cols="12"
        sm="10"
        md="11"
      >
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="10"
            md="7"
          >
            <div class="d-flex">
              <div class="bg-green-lighten-5 px-5 py-2 mb-5 mb-sm-10 align-start rounded-lg">
                <p class="main-text text-green-darken-3 font-weight-bold text-caption text-sm-body-2 text-md-body-1">
                  News and Update
                </p>
              </div>
            </div>

            <p class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-bold mb-2">
              Featured Articles
            </p>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              Get current updates on our Projects and Programmes across the Nine States of the Niger Delta Region, and
              gain deep insights and analysis of developmental trends.
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="2"
            md="5"
          />
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="2"
        md="1"
      >
        <v-btn
          class="main-text text-capitalize text-green-darken-3 font-weight-bold text-caption text-sm-body-2 text-md-body-1"
          variant="outlined"
          rounded="0"
          style="border-color: #038735;"
        >
          See All
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-10 bg-green-lighten-5 rounded-lg">
      <v-col
        v-for="(news, index) in news"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-sheet border="sm">
          <v-img
            :src="news.image"
            cover
            height="300"
          />

          <div class="pa-5">
            <p class="block-text text-body-2 text-sm-h6 text-md-h5 font-weight-black mb-2 mb-sm-5">
              {{ news.title }}
            </p>
            <p class="main-text text-grey-darken-3 text-caption text-sm-body-2 text-md-body-1 mb-2">
              {{ news.texts[0].slice(0, 200) }}...
            </p>

            <v-btn
              class="main-text text-green-darken-3 font-weight-bold text-caption text-sm-body-2"
              variant="text"
              append-icon="mdi-arrow-right"
              style="text-transform: none;"
              :to="`/news/${news.title}`"
            >
              Click here to read the full article
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import { useAppStore } from '@/stores/app';
export default {

  setup () {
    const newsStore = useAppStore();

    return {
      news: newsStore.featuredNews
    };
  },
  data: () => ({
  })
}
</script>
