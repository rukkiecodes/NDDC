<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="7"
      >
        <v-img
          :src="topThree[0].image"
          height="800"
          cover
          class="pa-5 d-flex align-end"
          gradient="transparent, rgba(0,0,0,0.9)"
        >
          <div>
            <v-btn
              color="white"
              class="main-text text-body-2 text-sm-body-1 text-green-darken-3 font-weight-bold text-capitalize"
              :elevation="0"
            >
              NDDC Highlights
            </v-btn>

            <p class="block-text text-h4 text-sm-h3 text-white font-weight-bold mt-5">
              {{ topThree[0].title }}
            </p>

            <v-divider
              class="my-5"
              color="white"
              width="60%"
            />

            <p class="main-text text-white text-body-2 text-sm-body-1">
              {{ topThree[0].texts[0].slice(0, 200) }}...
            </p>

            <v-btn
              class="main-text text-body-2 text-sm-body-1 text-capitalize text-green-lighten-2 font-weight-bold mt-2"
              append-icon="mdi-arrow-right"
              variant="text"
              :to="`/news/${topThree[0].title}`"
            >
              Read More
            </v-btn>
          </div>
        </v-img>
      </v-col>
      <v-col
        cols="12"
        sm="5"
      >
        <v-row>
          <v-col cols="12">
            <v-img
              :src="topThree[1].image"
              height="388"
              cover
              class="pa-5 d-flex align-end"
              gradient="transparent, rgba(0,0,0,0.9)"
            >
              <div>
                <p class="main-text text-white text-body-2 text-sm-body-1">
                  {{ topThree[1].texts[0].slice(1, 100) }}...
                </p>

                <p class="block-text text-h5 text-sm-h4 text-white font-weight-bold mt-2 mb-2">
                  {{ topThree[1].title }}
                </p>

                <v-btn
                  class="main-text text-body-2 text-sm-body-1 text-capitalize text-green-lighten-2 font-weight-bold mt-2"
                  append-icon="mdi-arrow-right"
                  variant="text"
                  :to="`/news/${topThree[1].title}`"
                >
                  Read More
                </v-btn>
              </div>
            </v-img>
          </v-col>

          <v-col cols="12">
            <v-img
              :src="topThree[2].image"
              height="388"
              cover
              class="pa-5 d-flex align-end"
              gradient="transparent, rgba(0,0,0,0.9)"
            >
              <div>
                <p class="main-text text-white text-body-2 text-sm-body-1">
                  {{ topThree[2].texts[0].slice(0, 100) }}...
                </p>

                <p class="block-text text-h5 text-sm-h4 text-white font-weight-bold mt-2 mb-2">
                  {{ topThree[2].title }}
                </p>

                <v-btn
                  class="main-text text-body-2 text-sm-body-1 text-capitalize text-green-lighten-2 font-weight-bold mt-2"
                  append-icon="mdi-arrow-right"
                  variant="text"
                  :to="`/news/${topThree[2].title}`"
                >
                  Read More
                </v-btn>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <Sort />

    <v-container class="my-16">
      <FeaturedArticles />

      <v-row class="mt-16">
        <v-col
          cols="12"
          sm="9"
        >
          <v-row>
            <v-col cols="12">
              <div class="d-flex align-center justify-space-between mb-5">
                <v-sheet width="600">
                  <p class="main-text text-body-2 text-sm-body-1 text-green-darken-3 font-weight-bold mb-2 mb-sm-5">
                    Current News
                  </p>
                  <p class="block-text text-h5 text-sm-h4 font-weight-bold mb-2">
                    Latest NDDC News
                  </p>
                </v-sheet>

                <v-btn
                  class="text-capitalize text-green-darken-3 font-weight-bold"
                  variant="outlined"
                  rounded="0"
                  style="border-color: #038735;"
                >
                  See All
                </v-btn>
              </div>
            </v-col>

            <v-col
              cols="12"
              sm="7"
            >
              <v-sheet border="sm">
                <v-img
                  :src="forWomen[0].image"
                  cover
                  height="500"
                />

                <div class="pa-5">
                  <div class="d-flex justify-space-between mb-5">
                    <div class="d-flex align-center mr-5">
                      <v-icon
                        color="green-darken-3"
                        class="mr-2"
                      >
                        mdi-account
                      </v-icon>
                      <p class="main-text text-caption text-sm-body-1 text-green-darken-3">
                        Infrastructural Development
                      </p>
                    </div>
                    <p class="main-text text-caption text-sm-body-1 text-grey-darken-3">
                      17th July, 2024
                    </p>
                  </div>

                  <router-link
                    :to="`/news/${forWomen[0].title}`"
                    class="block-text text-body-1 text-sm-h6 font-weight-black mb-5 text-decoration-underline text-grey-darken-4"
                  >
                    {{ forWomen[0].title }}
                  </router-link>
                  <p class="main-text text-caption text-sm-body-2 text-grey-darken-3 my-2">
                    Crystalline Nwachukwu
                  </p>

                  <v-btn
                    class="main-text text-body-2 text-sm-body-1 font-weight-bold text-green-darken-3"
                    variant="text"
                    append-icon="mdi-arrow-right"
                    :to="`/news/${forWomen[0].title}`"
                  >
                    Read More
                  </v-btn>
                </div>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="5"
            >
              <v-row>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img
                      :src="forWomen[1].image"
                      cover
                      height="172"
                      position="center"
                    />

                    <div class="pa-5">
                      <router-link
                        :to="`/news/${forWomen[1].title}`"
                        class="block-text text-body-1 text-sm-h6 font-weight-black mb-5 text-decoration-underline text-grey-darken-4"
                      >
                        {{ forWomen[1].title }}
                      </router-link>
                      <p class="main-text text-caption text-grey-darken-3 text-body-2 my-2">
                        Crystalline Nwachukwu
                      </p>

                      <v-btn
                        class="main-text text-body-2 text-sm-body-1 font-weight-bold text-green-darken-3"
                        variant="text"
                        append-icon="mdi-arrow-right"
                        :to="`/news/${forWomen[1].title}`"
                      >
                        Read More
                      </v-btn>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img
                      :src="forWomen[2].image"
                      cover
                      height="172"
                      position="center"
                    />

                    <div class="pa-5">
                      <router-link
                        :to="`/news/${forWomen[2].title}`"
                        class="block-text text-body-1 text-sm-h6 font-weight-black mb-5 text-decoration-underline text-grey-darken-4"
                      >
                        {{ forWomen[2].title }}
                      </router-link>
                      <p class="main-text text-caption text-grey-darken-3 text-body-2 my-2">
                        Crystalline Nwachukwu
                      </p>

                      <v-btn
                        class="main-text text-body-2 text-sm-body-1 font-weight-bold text-green-darken-3"
                        variant="text"
                        append-icon="mdi-arrow-right"
                        :to="`/news/${forWomen[1].title}`"
                      >
                        Read More
                      </v-btn>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="7"
            >
              <v-sheet border="sm">
                <v-img
                  :src="education[0].image"
                  cover
                  height="500"
                />

                <div class="pa-5">
                  <div class="d-flex justify-space-between mb-5">
                    <div class="d-flex align-center mr-5">
                      <v-icon
                        color="green-darken-3"
                        class="mr-2"
                      >
                        mdi-account
                      </v-icon>
                      <p class="main-text text-caption text-sm-body-1 text-green-darken-3">
                        Infrastructural Development
                      </p>
                    </div>
                    <p class="main-text text-caption text-sm-body-1 text-grey-darken-3">
                      17th July, 2024
                    </p>
                  </div>

                  <router-link
                    :to="`/news/${education[0].title}`"
                    class="block-text text-body-1 text-sm-h6 font-weight-black mb-5 text-decoration-underline text-grey-darken-4"
                  >
                    {{ education[0].title }}
                  </router-link>
                  <p class="main-text text-caption text-grey-darken-3 text-body-2 my-2">
                    Crystalline Nwachukwu
                  </p>

                  <v-btn
                    class="main-text text-body-2 text-sm-body-1 font-weight-bold text-green-darken-3"
                    variant="text"
                    append-icon="mdi-arrow-right"
                    :to="`/news/${education[0].title}`"
                  >
                    Read More
                  </v-btn>
                </div>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="5"
            >
              <v-row>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img
                      :src="education[1].image"
                      cover
                      height="172"
                      position="center"
                    />

                    <div class="pa-5">
                      <router-link
                        :to="`/news/${education[1].title}`"
                        class="block-text text-body-1 text-sm-h6 font-weight-black mb-5 text-decoration-underline text-grey-darken-4"
                      >
                        {{ education[1].title }}
                      </router-link>
                      <p class="main-text text-caption text-grey-darken-3 text-body-2 my-2">
                        Crystalline Nwachukwu
                      </p>

                      <v-btn
                        class="main-text text-body-2 text-sm-body-1 font-weight-bold text-green-darken-3"
                        variant="text"
                        append-icon="mdi-arrow-right"
                        :to="`/news/${education[1].title}`"
                      >
                        Read More
                      </v-btn>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img
                      :src="education[2].image"
                      cover
                      height="172"
                      position="center"
                    />

                    <div class="pa-5">
                      <router-link
                        :to="`/news/${education[2].title}`"
                        class="block-text text-body-1 text-sm-h6 font-weight-black mb-5 text-decoration-underline text-grey-darken-4"
                      >
                        {{ education[2].title }}
                      </router-link>
                      <p class="main-text text-caption text-grey-darken-3 text-body-2 my-2">
                        Crystalline Nwachukwu
                      </p>

                      <v-btn
                        class="main-text text-body-2 text-sm-body-1 font-weight-bold text-green-darken-3"
                        variant="text"
                        append-icon="mdi-arrow-right"
                        :to="`/news/${education[1].title}`"
                      >
                        Read More
                      </v-btn>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
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

      <Newsletter class="mt-16" />
    </v-container>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/app';


export default {

  setup () {
    const { topThree, forWomen, education } = useAppStore()

    return {
      topThree,
      forWomen,
      education
    }
  },
  data: () => ({
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
  })
}
</script>
