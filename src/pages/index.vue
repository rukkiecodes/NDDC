<template>
  <div>
    <v-carousel
      :show-arrows="false"
      hide-delimiters
      :height="height"
      cycle
      interval="15000"
    >
      <v-carousel-item
        src="@/assets/ttrtr.png"
        eager
        cover
      />
      <v-carousel-item
        src="@/assets/crc3.png"
        eager
        cover
      />
      <v-carousel-item
        src="@/assets/inspection.jpg"
        eager
        cover
      />
      <v-carousel-item
        src="@/assets/mision.png"
        eager
        cover
      />
      <v-carousel-item
        src="@/assets/mission-2.png"
        eager
        cover
      />
      <v-carousel-item
        src="@/assets/wdp.jpeg"
        eager
        cover
      />

      <v-sheet
        :height="height"
        class="d-flex align-center"
        color="rgba(0,0,0,0.4)"
        style="position: absolute; left: 0; width: 100%;"
      >
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="5"
            >
              <v-sheet color="transparent">
                <p
                  class="main-text text-white text-body-1 text-sm-h6"
                  v-text="pageData?.t1"
                />
                <p
                  class="block-text text-h4 text-sm-h3 text-md-h2 font-weight-bold text-white mb-2 mt-5"
                  v-text="pageData?.t2"
                />

                <div class="my-5">
                  <p
                    class="main-text text-body-1 text-sm-h6 text-white"
                    v-text="pageData?.t3"
                  />
                </div>

                <div class="d-flex">
                  <v-btn
                    class="main-text text-capitalize mr-5"
                    color="#038735"
                    :elevation="0"
                  >
                    {{ pageData?.t4 }}
                  </v-btn>
                  <v-btn
                    class="main-text text-capitalize"
                    :elevation="0"
                    prepend-icon="mdi-play-circle-outline"
                    variants="outlined"
                  >
                    {{ pageData?.t5 }}
                  </v-btn>
                </div>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              sm="7"
            />
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel>

    <v-container>
      <v-row
        class="mb-16 mt-10"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
      >
        <v-col
          cols="6"
          sm="3"
        >
          <v-sheet
            color="#EBF9F1"
            class="rounded-lg pa-4"
          >
            <v-avatar color="white">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p
              class="block-text text-h3 font-weight-bold my-5"
              style="color: #038735"
              v-text="pageData?.t6"
            />
            <p
              class="main-text text-body-2 text-sm-body-1 text-grey-darken-3"
              v-text="pageData?.t7"
            />
          </v-sheet>
        </v-col>

        <v-col
          cols="6"
          sm="3"
        >
          <v-sheet
            color="#EBF9F1"
            class="rounded-lg pa-4"
          >
            <v-avatar color="white">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p
              class="block-text text-h3 font-weight-bold my-5"
              style="color: #038735"
              v-text="pageData?.t8"
            />
            <p
              class="main-text text-body-2 text-sm-body-1 text-grey-darken-3"
              v-text="pageData?.t9"
            />
          </v-sheet>
        </v-col>

        <v-col
          cols="6"
          sm="3"
        >
          <v-sheet
            color="#EBF9F1"
            class="rounded-lg pa-4"
          >
            <v-avatar color="white">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p
              class="block-text text-h3 font-weight-bold my-5"
              style="color: #038735"
              v-text="pageData?.t10"
            />
            <p
              class="main-text text-body-2 text-sm-body-1 text-grey-darken-3"
              v-text="pageData?.t11"
            />
          </v-sheet>
        </v-col>

        <v-col
          cols="6"
          sm="3"
        >
          <v-sheet
            color="#EBF9F1"
            class="rounded-lg pa-4"
          >
            <v-avatar color="white">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p
              class="block-text text-h3 font-weight-bold my-5"
              style="color: #038735"
              v-text="pageData?.t12"
            />
            <p
              class="main-text text-body-2 text-sm-body-1 text-grey-darken-3"
              v-text="pageData?.t13"
            />
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="my-16">
        <v-col
          cols="12"
          sm="6"
          class="d-flex align-center mt-10 mt-sm-0"
          order="1"
          order-sm="0"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          <div>
            <p
              class="block-text text-h4 text-sm-h3 font-weight-bold"
              style="line-height: 1.2em;"
            >
              We're on a <span style="color: #038735;">misson</span> of big changes to
              <span style="color: #038735;">help</span> the people and
              <span style="color: #038735;">improve</span> Niger Delta
            </p>

            <p
              class="main-text text-grey-darken-3 mt-5 text-body-2 text-sm-body-1"
              v-text="pageData?.t14"
            />


            <v-btn
              append-icon="mdi-arrow-right"
              class="main-text mt-5 rounded-0"
              variant="outlined"
              style="border-color: #038735; text-transform: none;"
            >
              {{ pageData?.t15 }}
            </v-btn>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          order-sm="0"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          <v-img
            src="@/assets/1.png"
            :eager="true"
          />
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col
          cols="12"
          sm="4"
        />
        <v-col
          cols="12"
          sm="4"
        >
          <v-sheet
            class="mx-auto text-center"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-easing="ease-in-out"
          >
            <p class="main-text text-green-darken-3 font-weight-bold text-body-1">
              What we do
            </p>
            <p class="block-text text-h4 font-weight-bold">
              Our Interventions in the Niger Delta Region
            </p>
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        />
      </v-row>

      <v-row class="mt-5">
        <v-col
          cols="12"
          sm="7"
          order="1"
          order-sm="0"
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
              data-aos="fade-up-right"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              <v-sheet
                class="pa-4"
                border="md"
                style="border-color: #038735;"
                rounded="xl"
              >
                <v-sheet
                  class="d-flex justify-center align-center"
                  color="#038735"
                  width="90"
                  height="90"
                  rounded="xl"
                >
                  <v-icon size="30">
                    mdi-account-group
                  </v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p
                    class="main-text text-sm-h5 font-weight-bold"
                    v-text="pageData?.t16"
                  />
                </div>

                <p
                  class="main-text text-grey-darken-3 my-2 my-sm-5 text-body-2 text-sm-body-1"
                  v-text="pageData?.t17"
                />

                <v-btn
                  class="main-text text-capitalize text-green-darken-4 font-weight-bold text-body-2 text-sm-body-1"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  Read more
                </v-btn>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              data-aos="fade-up-right"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              <v-sheet
                class="pa-4"
                border="md"
                style="border-color: #038735;"
                rounded="xl"
              >
                <v-sheet
                  class="d-flex justify-center align-center"
                  color="#038735"
                  width="90"
                  height="90"
                  rounded="xl"
                >
                  <v-icon size="30">
                    mdi-human-female-female
                  </v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p
                    class="main-text text-sm-h5 font-weight-bold"
                    v-text="pageData?.t18"
                  />
                </div>

                <p
                  class="main-text text-grey-darken-3 my-2 my-sm-5 text-body-2 text-sm-body-1"
                  v-text="pageData?.t19"
                />

                <v-btn
                  class="main-text text-capitalize text-green-darken-4 font-weight-bold text-body-2 text-sm-body-1"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  Read more
                </v-btn>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              data-aos="fade-up-right"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              <v-sheet
                class="pa-4"
                border="md"
                style="border-color: #038735;"
                rounded="xl"
              >
                <v-sheet
                  class="d-flex justify-center align-center"
                  color="#038735"
                  width="90"
                  height="90"
                  rounded="xl"
                >
                  <v-icon size="30">
                    mdi-asterisk
                  </v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p
                    class="main-text text-sm-h5 font-weight-bold"
                    v-text="pageData?.t20"
                  />
                </div>

                <p
                  class="main-text text-grey-darken-3 my-2 my-sm-5 text-body-2 text-sm-body-1"
                  v-text="pageData?.t21"
                />

                <v-btn
                  class="main-text text-capitalize text-green-darken-4 font-weight-bold text-body-2 text-sm-body-1"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  Read more
                </v-btn>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              data-aos="fade-up-right"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              <v-sheet
                class="pa-4"
                border="md"
                style="border-color: #038735;"
                rounded="xl"
              >
                <v-sheet
                  class="d-flex justify-center align-center"
                  color="#038735"
                  width="90"
                  height="90"
                  rounded="xl"
                >
                  <v-icon size="30">
                    mdi-leaf-circle-outline
                  </v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p
                    class="main-text text-sm-h5 font-weight-bold"
                    v-text="pageData?.t22"
                  />
                </div>

                <p
                  class="main-text text-grey-darken-3 my-2 my-sm-5 text-body-2 text-sm-body-1"
                  v-text="pageData?.t23"
                />

                <v-btn
                  class="main-text text-capitalize text-green-darken-4 font-weight-bold text-body-2 text-sm-body-1"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  Read more
                </v-btn>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          sm="5"
        >
          <v-sheet
            class="pa-4"
            border="md"
            style="border-color: #038735;"
            rounded="xl"
            data-aos="fade-up-left"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-easing="ease-in-out"
          >
            <v-img
              class="rounded-xl pa-4"
              :eager="true"
              aspect-ratio="16/9"
              :height="440"
              cover
              src="@/assets/students.jpeg"
            >
              <v-sheet
                class="d-flex justify-center align-center"
                color="#038735"
                width="90"
                height="90"
                rounded="xl"
              >
                <v-icon size="30">
                  mdi-account-school
                </v-icon>
              </v-sheet>
            </v-img>

            <p
              class="main-text text-h5 font-weight-bold mt-5"
              v-text="pageData?.t24"
            />
            <p
              class="main-text text-grey-darken-3 my-2 my-sm-5 text-body-2 text-sm-body-1"
              v-text="pageData?.t25"
            />

            <v-btn
              class="main-text text-capitalize text-green-darken-4 font-weight-bold text-body-2 text-sm-body-1"
              variant="text"
              append-icon="mdi-arrow-right"
            >
              Read more
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>

      <div class="my-16">
        <v-row>
          <v-col
            cols="12"
            sm="7"
            md="6"
          >
            <p
              class="main-text text-green-darken-3 font-weight-bold text-body-2 text-sm-body-1"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
              v-text="pageData?.t29"
            />
            <p
              class="block-text text-h4 font-weight-black my-3"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
              v-text="pageData?.t28"
            />
            <p
              class="text-grey-darken-3 text-body-2 text-sm-body-1"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
              v-text="pageData?.t30"
            />

            <v-btn
              color="green-darken-3"
              class="text-capitalize mt-5 text-body-2 text-sm-body-1"
              rounded="0"
              :elevation="0"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              Our programs
            </v-btn>
          </v-col>
        </v-row>

        <v-slide-group
          v-model="model"
          class="pa-0 mt-10"
          :center-active="true"
          mobile-breakpoint="sm"
        >
          <v-slide-group-item
            v-for="program in programs"
            :key="program.id"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-sheet
                v-bind="props"
                color="grey-lighten-1"
                width="300"
                rounded="xl"
                class="mr-4"
              >
                <v-img
                  :src="program?.image?.uri"
                  :eager="true"
                  class="d-flex align-end rounded-lg"
                  cover
                  height="300"
                >
                  <v-fade-transition>
                    <v-sheet
                      v-if="isHovering"
                      color="transparent"
                      class="pa-4 text-center"
                    >
                      <v-btn
                        append-icon="mdi-arrow-right"
                        class="main-text text-capitalize text-body-2 text-sm-body-1"
                        :elevation="0"
                        color="green-darken-3"
                        rounded="0"
                      >
                        See More Details
                      </v-btn>
                    </v-sheet>
                  </v-fade-transition>

                  <div class="blur_card pa-4">
                    <div class="d-flex justify-space-between mb-2 mb-sm-5">
                      <span class="text-white text-body-2 text-sm-body-1">{{ new Date(program?.timestamp?.seconds *
                        1000).toDateString()
                      }}</span>
                    </div>

                    <p
                      class="block-text text-white text-h6 text-sm-h5 font-weight-black"
                      v-text="program?.heading"
                    />
                  </div>
                </v-img>
              </v-sheet>
            </v-hover>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <div class="my-16">
        <v-row>
          <v-col
            cols="12"
            sm="2"
          />
          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet class="text-center mx-auto">
              <p
                class="text-green-darken-3 font-weight-bold text-body-2 text-sm-body-1"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
              >
                Our Projects
              </p>
              <p
                class="block-text text-h5 text-sm-h4 font-weight-black my-3"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
                v-text="pageData?.t26"
              />

              <p
                class="text-body-2 text-sm-body-1"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
                v-text="pageData?.t27"
              />

              <v-btn
                class="text-capitalize mt-5 text-body-2 text-sm-body-1"
                :elevation="0"
                rounded="0"
                color="green-darken-4"
                append-icon="mdi-arrow-right"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
              >
                Our Projects
              </v-btn>
            </v-sheet>
          </v-col>
          <v-col
            cols="12"
            sm="2"
          />
        </v-row>

        <v-slide-group
          v-model="model"
          class="pa-0 mt-0 mt-sm-10"
          :center-active="true"
          mobile-breakpoint="sm"
        >
          <v-slide-group-item
            v-for="project in projects"
            :key="project.id"
            v-slot="{ selectedClass }"
          >
            <v-sheet
              :class="['ma-4', selectedClass]"
              color="grey-lighten-1"
              width="300"
              rounded="xl"
            >
              <v-img
                :src="project?.images[0]?.downloadURL"
                :eager="true"
                class="d-flex align-end rounded-lg"
                cover
                height="300"
              />
            </v-sheet>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <FeaturedArticles class="my-16" />
    </v-container>
    <Newsletter />
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';

export default {
  data: () => ({
    t1: '',
    programs: null,
    projects: null,
    displayHeight: null,
    model: null,
    dialog: false,
    dialogProps: {
      text: '',
      link: '',
      field: '',
      isLink: false
    },
    pageData: null
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
    this.getProgramUpdate()
    this.getProjectsUpdate()
  },

  methods: {
    async getRealTimeUpdate () {
      const unsub = onSnapshot(doc(db, 'web', 'home'), (doc) => {
        this.pageData = doc.data();
      });

      return unsub
    },

    async getProgramUpdate () {
      const unsub = onSnapshot(collection(db, 'programs'), (doc) => {
        this.programs = doc.docs.map((document) => ({
          id: document.id,
          ...document.data()
        }))
      });

      return unsub
    },

    async getProjectsUpdate () {
      const unsub = onSnapshot(collection(db, 'projects'), (doc) => {
        this.projects = doc.docs.map((document) => ({
          id: document.id,
          ...document.data()
        }))
      });

      return unsub
    },
  }
};
</script>

<style scoped>
.blur_card {
  backdrop-filter: blur(23px) saturate(200%);
  -webkit-backdrop-filter: blur(23px) saturate(200%);
  background-color: rgba(17, 25, 40, 0);
}

.contact-input {
  outline: none;
}
</style>