<template>
  <div>
    <v-row class="d-sm-flex align-sm-center">
      <v-col
        cols="12"
        sm="11"
      >
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="7"
          >
            <p class="main-text text-green-darken-3 font-weight-bold text-body-1 text-sm-h6 mb-5 mb-sm-10">
              News and Update
            </p>
            <p class="block-text text-h5 text-sm-h4 font-weight-bold mb-2">
              Featured Articles
            </p>
            <p class="main-text text-body-2 text-sm-body-1">
              Get current updates on our Projects and Programs cut accross the Nine States of
              the
              Niger Delta Region, gain deep insights and analysis of developmental trends.
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
        sm="1"
      >
        <v-btn
          class="main-text text-capitalize text-green-darken-3 font-weight-bold"
          variant="outlined"
          rounded="0"
          style="border-color: #038735;"
        >
          See All
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col
        v-for="(news, index) in news"
        :key="index"
        cols="12"
        sm="4"
      >
        <v-sheet border="sm">
          <v-img
            :src="news.image"
            cover
            height="300"
          />

          <div class="pa-5">
            <p class="block-text text-h6 font-weight-black mb-5">
              {{ news.title }}
            </p>
            <p class="main-text text-grey-darken-3 text-body-2 mb-2">
              {{ news.texts[0].slice(0, 200) }}...
            </p>

            <v-btn
              class="main-text text-green-darken-3 font-weight-bold"
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