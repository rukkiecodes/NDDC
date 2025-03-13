<template>
  <div>
    <v-carousel :show-arrows="false" hide-delimiters :height="height" cycle interval="5000">
      <v-carousel-item
        src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740151010/NDDC/banner/6O7A2269_eofpqr.jpg" eager
        cover position="top center"
      />
      <v-carousel-item src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740144459/NDDC/banner/img2_aapsxa.jpg"
                       eager cover
      />
      <v-carousel-item
        src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740224346/NDDC/banner/delta-roads_bdjccq.jpg" eager
        cover
      />
      <v-carousel-item
        src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740148663/NDDC/banner/Solar_light_pcle8s.jpg" eager
        cover
      />

      <v-sheet :height="height" class="d-flex align-center" color="rgba(0,0,0,0.4)"
               style="position: absolute; left: 0; width: 100%;"
      >
        <v-container>
          <v-row>
            <v-col cols="12" sm="10" md="8" lg="7" class="d-flex align-center">
              <v-img src="@/assets/line.png" width="5" class="d-none d-sm-block"/>

              <div color="transparent" class="ml-sm-5">
                <p class="main-text text-white text-caption text-sm-body-2 text-md-body-1 text-sm-h6"
                   v-text="pageData?.t1 || 'Niger Delta Development Commission'"
                />
                <p class="block-text text-h5 text-sm-h4 text-md-h3 font-weight-bold text-white mb-2 mt-5"
                   v-text="pageData?.t2"
                />

                <div class="my-5">
                  <p class="main-text text-caption text-sm-body-2 text-md-h6 text-white"
                     v-text="pageData?.t3 || `Together, we are driving impactful change, transforming lives, and empowering communities through sustainable development initiatives.`"
                  />
                </div>

                <div class="d-flex flex-column flex-sm-row">
                  <v-btn to="/projects"
                         class="main-text text-capitalize mr-5 text-caption text-sm-body-2 text-md-body-1"
                         :size="buttonSize"
                         color="#038735" :elevation="0" :block="blockButtons"
                  >
                    {{ pageData?.t4 || 'Explore our work' }}
                  </v-btn>
                  <v-btn variant="outlined" color="white" rounded="0"
                         class="main-text text-capitalize text-white mt-2 mt-sm-0 text-caption text-sm-body-2 text-md-body-1"
                         :size="buttonSize" :block="blockButtons" prepend-icon="mdi-play-circle-outline"
                         @click="openVideo"
                  >
                    {{ pageData?.t5 || 'Watch our video' }}
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel>

    <v-container>
      <v-row class="mb-16 mt-10" data-aos="fade-down" data-aos-duration="500" data-aos-mirror="true"
             data-aos-once="false" data-aos-easing="ease-in-out"
      >
        <v-col cols="6" sm="4" md="3">
          <v-sheet color="#EBF9F1" class="rounded-lg pa-4">
            <v-avatar color="white" class="d-none d-sm-flex" size="40">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p class="block-text text-h6 text-sm-h5 text-md-h3 font-weight-bold my-5" style="color: #038735"
               v-text="pageData?.t6 || '16,000'"
            />
            <p class="main-text text-caption text-sm-body-2 text-md-body-1 text-grey-darken-3"
               v-text="pageData?.t7 || 'Regional Projects Delivered'"
            />
          </v-sheet>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-sheet color="#EBF9F1" class="rounded-lg pa-4">
            <v-avatar color="white" class="d-none d-sm-flex" size="40">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p class="block-text text-h6 text-sm-h5 text-md-h3 font-weight-bold my-5" style="color: #038735"
               v-text="pageData?.t8 || '60%'"
            />
            <p class="main-text text-caption text-sm-body-2 text-md-body-1 text-grey-darken-3"
               v-text="pageData?.t9 || 'Signature Projects'"
            />
          </v-sheet>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-sheet color="#EBF9F1" class="rounded-lg pa-4">
            <v-avatar color="white" class="d-none d-sm-flex" size="40">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p class="block-text text-h6 text-sm-h5 text-md-h3 font-weight-bold my-5" style="color: #038735"
               v-text="pageData?.t12 || '3000+'"
            />
            <p class="main-text text-caption text-sm-body-2 text-md-body-1 text-grey-darken-3"
               v-text="pageData?.t13 || 'Rural Projects'"
            />
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class=" my-16">
        <v-col cols="12" sm="6" class="d-flex align-center mt-1 mt-sm-0" order="1" order-sm="0" data-aos="fade-right"
               data-aos-duration="500" data-aos-mirror="true" data-aos-once="false" data-aos-easing="ease-in-out"
        >
          <div>
            <p class="block-text text-h6 text-sm-h5 text-md-h4 font-weight-bold" style="line-height: 1.2em;">
              We are on a <span style="color: #038735;">misson</span> of big changes to
              <span style="color: #038735;">help</span> the people and
              <span style="color: #038735;">improve</span> Niger Delta
            </p>

            <p class="main-text text-grey-darken-3 mt-5 text-caption text-sm-body-2 text-md-body-1">
              {{
                pageData?.t14 || `Get the latest updates on our projects and programmes across the nine states of
              the
              Niger Delta region. Gain in-depth insights and analyses of developmental trends within the region,
              as well
              as the impact of our projects and programmes on the people, along with projections for future
              development.`
              }}
            </p>

            <v-menu>
              <template #activator="{ props }">
                <v-btn v-bind="props" append-icon="mdi-arrow-right"
                       class="main-text mt-5 rounded-0 text-caption text-sm-body-2 text-md-body-1" variant="outlined"
                       :size="buttonSize"
                >
                  {{ pageData?.t15 || 'Read more about who we are' }}
                </v-btn>
              </template>
              <v-list density="compact">
                <v-list-item to="/programs/Youth empowerment">
                  <v-list-item-title class="main-text text-caption text-sm-body-2">Our Programmes</v-list-item-title>
                </v-list-item>
                <v-list-item to="/projects">
                  <v-list-item-title class="main-text text-caption text-sm-body-2">Our Projects</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>

        <v-col cols="12" sm="6" order-sm="0" data-aos="fade-left" data-aos-duration="500" data-aos-mirror="true"
               data-aos-once="false" data-aos-easing="ease-in-out" class="d-flex justify-end align-center"
        >
          <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740145245/NDDC/banner/img3_tjsuqg.jpg"
                 :eager="true" rounded="lg" class="d-flex d-md-none"
          />

          <v-sheet class="d-none d-md-flex" width="100%" height="100%" style="position: relative;">
            <v-img src="@/assets/bigSpots.png" width="150" style="position: absolute; top: 0; left: 0;"/>
            <v-card width="600" elevation="0" class="mx-auto" style="z-index: 1">
              <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740145245/NDDC/banner/img3_tjsuqg.jpg"
                     :eager="true" rounded="lg"
              />
            </v-card>
            <v-img src="@/assets/bigSpots.png" width="150" style="position: absolute; bottom: 0; right: 0"/>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12" sm="3"/>
        <v-col cols="12" sm="6">
          <v-sheet class="mx-auto text-center" data-aos="fade-down" data-aos-duration="500" data-aos-mirror="true"
                   data-aos-once="false" data-aos-easing="ease-in-out"
          >
            <p class="block-text text-h6 text-sm-h5 text-md-h4 font-weight-bold">
              Our Interventions in the Niger Delta Region
            </p>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="3"/>
      </v-row>

      <v-row class="mt-5">
        <v-col cols="12" sm="12" md="7" order="1" order-sm="0">
          <v-row>
            <v-col cols="12" sm="6" lg="6" data-aos="fade-up-right" data-aos-duration="500" data-aos-mirror="true"
                   data-aos-once="false" data-aos-easing="ease-in-out"
            >
              <v-sheet v-bind="props" class="pa-0" border="md" rounded="xl">
                <v-img class="d-flex align-end rounded-lg" :eager="true" aspect-ratio="16/9" :height="400" cover
                       src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740148694/NDDC/intervention/edp_skilll_acquisition_250_nw9dc3.jpg"
                >
                  <v-sheet class="d-flex justify-center align-center ma-4" color="#038735" width="60" height="60"
                           rounded="lg" style="position: absolute; top: 0; left: 0"
                  >
                    <v-icon size="30">
                      mdi-account-group
                    </v-icon>
                  </v-sheet>

                  <div class="blur_card pa-4">
                    <p class="main-text text-body-2 text-sm-h5 font-weight-bold text-white mt-2"
                       v-text="pageData?.t16 || 'Youth Empowerment'"
                    />
                    <p class="main-text text-white my-2 my-sm-5 text-caption text-sm-body-1">
                      NDDC empowers Niger Delta youth with skills, entrepreneurship, and job opportunities, fostering
                      innovation and self-reliance for a sustainable future.
                    </p>
                  </div>
                </v-img>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="6" lg="6" data-aos="fade-up-right" data-aos-duration="500" data-aos-mirror="true"
                   data-aos-once="false" data-aos-easing="ease-in-out"
            >
              <v-sheet v-bind="props" class="pa-0" border="md" rounded="xl">
                <v-img class="d-flex align-end rounded-lg" :eager="true" aspect-ratio="16/9" :height="400" cover
                       src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740148693/NDDC/intervention/bfi_ybm6fq.jpg"
                >
                  <v-sheet class="d-flex justify-center align-center ma-4" color="#038735" width="60" height="60"
                           rounded="lg" style="position: absolute; top: 0; left: 0"
                  >
                    <v-icon size="30">
                      mdi-human-female-female
                    </v-icon>
                  </v-sheet>

                  <div class="blur_card pa-4">
                    <p class="main-text text-body-2 text-sm-h5 font-weight-bold text-white mt-2">Women Empowerment</p>
                    <p class="main-text text-white my-2 my-sm-5 text-caption text-sm-body-1">
                      NDDC supports women through skills training, entrepreneurship, and economic opportunities,
                      promoting independence and sustainable growth.
                    </p>
                  </div>
                </v-img>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="6" lg="6" data-aos="fade-up-right" data-aos-duration="500" data-aos-mirror="true"
                   data-aos-once="false" data-aos-easing="ease-in-out"
            >
              <v-sheet v-bind="props" class="pa-0" border="md" rounded="xl">
                <v-img class="d-flex align-end rounded-lg" :eager="true" aspect-ratio="16/9" :height="400" cover
                       src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740148696/NDDC/intervention/Free_Medical_Mission_in_Abia_sgq0fa.jpg"
                >
                  <v-sheet class="d-flex justify-center align-center ma-4" color="#038735" width="60" height="60"
                           rounded="lg" style="position: absolute; top: 0; left: 0"
                  >
                    <v-icon size="30">
                      mdi-asterisk
                    </v-icon>
                  </v-sheet>

                  <div class="blur_card pa-4">
                    <p class="main-text text-body-2 text-sm-h5 font-weight-bold text-white mt-2">Health Development</p>
                    <p class="main-text text-white my-2 my-sm-5 text-caption text-sm-body-1">
                      NDDC enhances healthcare access, infrastructure, and services to improve the well-being of Niger Delta communities
                    </p>
                  </div>
                </v-img>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="6" lg="6" data-aos="fade-up-right" data-aos-duration="500" data-aos-mirror="true"
                   data-aos-once="false" data-aos-easing="ease-in-out"
            >
              <v-sheet v-bind="props" class="pa-0" border="md" rounded="xl">
                <v-img class="d-flex align-end rounded-lg" :eager="true" aspect-ratio="16/9" :height="400" cover
                       src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740148697/NDDC/intervention/distribution_of_tractors_mxpvfn.jpg"
                >
                  <v-sheet class="d-flex justify-center align-center ma-4" color="#038735" width="60" height="60"
                           rounded="lg" style="position: absolute; top: 0; left: 0"
                  >
                    <v-icon size="30">
                      mdi-leaf-circle-outline
                    </v-icon>
                  </v-sheet>

                  <div class="blur_card pa-4">
                    <p class="main-text text-body-2 text-sm-h5 font-weight-bold text-white mt-2">Agricultural Development</p>
                    <p class="main-text text-white my-2 my-sm-5 text-caption text-sm-body-1">
                      NDDC promotes modern agriculture, empowering farmers with resources, training, and support for food security and economic growth.
                    </p>
                  </div>
                </v-img>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="12" md="5">
          <v-sheet v-bind="props" class="pa-0" border="md" rounded="xl">
            <v-img class="d-flex align-end rounded-lg" :eager="true" aspect-ratio="16/9" :height="educationImageHeight"
                   cover
                   src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740152700/NDDC/banner/IMG-20250221-WA0038_d03v8f.jpg"
            >
              <v-sheet class="d-flex justify-center align-center ma-4" color="#038735" width="60" height="60"
                       rounded="lg" style="position: absolute; top: 0; left: 0"
              >
                <v-icon size="30">
                  mdi-account-school
                </v-icon>
              </v-sheet>

              <div class="blur_card pa-4">
                <p class="main-text text-body-2 text-sm-h5 font-weight-bold text-white mt-2">Educational Development</p>
                <p class="main-text text-white my-2 my-sm-5 text-caption text-sm-body-1">
                  NDDC invests in education through scholarships, infrastructure, and skill development, empowering the youth for a brighter future.
                </p>
              </div>
            </v-img>
          </v-sheet>
        </v-col>
      </v-row>

      <div class="my-16">
        <v-row>
          <v-col cols="12" sm="7" md="6">
            <p class="main-text text-green-darken-3 font-weight-bold text-caption text-sm-body-2 text-md-body-1"
               data-aos="fade-down" data-aos-duration="500" data-aos-mirror="true" data-aos-once="false"
               data-aos-easing="ease-in-out" v-text="pageData?.t29 || 'Our Programmes'"
            />
            <p class="block-text text-h6 text-sm-h5 text-md-h4 font-weight-black my-3" data-aos="fade-down"
               data-aos-duration="500" data-aos-mirror="true" data-aos-once="false" data-aos-easing="ease-in-out"
               v-text="pageData?.t28 || 'Ongoing Programmes'"
            />
            <p class="text-grey-darken-3 text-caption text-sm-body-2 text-md-body-1" data-aos="fade-down"
               data-aos-duration="500" data-aos-mirror="true" data-aos-once="false" data-aos-easing="ease-in-out"
               v-text="pageData?.t30 || 'Get current updates on our projects and programmes across the nine states of the Niger Delta region, and gain deep insights and analysis of developmental trends.'"
            />

            <v-btn to="/programs/Youth empowerment" color="green-darken-3"
                   class="main-text text-capitalize mt-5 text-caption text-sm-body-2 text-md-body-1" rounded="0"
                   :elevation="0" data-aos="fade-down" data-aos-duration="500" data-aos-mirror="true"
                   data-aos-once="false"
                   data-aos-easing="ease-in-out" :size="buttonSize"
            >
              Our programmes
            </v-btn>
          </v-col>
        </v-row>

        <v-slide-group v-model="model" class="pa-0 mt-10" :center-active="true" mobile-breakpoint="sm" mobile>
          <v-slide-group-item v-for="program in programs" :key="program.id">
            <v-hover v-slot="{ isHovering, props }">
              <v-sheet v-bind="props" color="grey-lighten-1" :width="slideImageSize == 'small' ? 200 : 300" rounded="xl"
                       class="mr-4"
              >
                <v-img :src="program?.image?.uri" :eager="true" class="d-flex align-end rounded-lg" cover :height="300">
                  <v-fade-transition>
                    <v-sheet v-if="isHovering" color="transparent" class="pa-1 pa-sm-4 text-center">
                      <v-btn append-icon="mdi-arrow-right"
                             class="main-text text-capitalize text-caption text-sm-body-2 text-md-body-1" :elevation="0"
                             color="green-darken-3" rounded="0" :to="`/programs/${program.title}`" :size="buttonSize"
                             :block="blockButtons"
                      >
                        See More Details
                      </v-btn>
                    </v-sheet>
                  </v-fade-transition>

                  <div class="blur_card pa-2 pa-sm-4">
                    <div class="d-flex justify-space-between mb-2 mb-sm-5">
                      <span class="text-white text-caption text-sm-body-2 text-md-body-1">{{
                          new Date(program?.timestamp?.seconds *
                            1000).toDateString()
                        }}</span>
                    </div>

                    <p class="block-text text-white text-body-2 text-sm-h6 text-md-h5 font-weight-black"
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
          <v-col cols="12" sm="2"/>
          <v-col cols="12" sm="8">
            <v-sheet class="text-center mx-auto">
              <p class="block-text text-h6 text-sm-h5 text-md-h4 font-weight-black my-3" data-aos="fade-up"
                 data-aos-duration="500" data-aos-mirror="true" data-aos-once="false" data-aos-easing="ease-in-out"
                 v-text="pageData?.t26 || 'View some of our completed projects in the region'"
              />

              <p class="main-text text-caption text-sm-body-2 text-md-body-1" data-aos="fade-up" data-aos-duration="500"
                 data-aos-mirror="true" data-aos-once="false" data-aos-easing="ease-in-out"
                 v-text="pageData?.t27 || 'From bolstering infrastructure to advancing social welfare initiatives, we remain steadfastly committed to creating opportunities and enhancing livelihoods.'"
              />

              <v-btn to="/projects" class="main-text text-capitalize mt-5 text-caption text-sm-body-2 text-md-body-1"
                     :elevation="0" rounded="0" color="green-darken-4" append-icon="mdi-arrow-right" data-aos="fade-up"
                     data-aos-duration="500" data-aos-mirror="true" data-aos-once="false" data-aos-easing="ease-in-out"
                     :size="buttonSize"
              >
                Our Projects
              </v-btn>
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="2"/>
        </v-row>

        <v-slide-group v-model="model" class="pa-0 mt-0 mt-sm-10" :center-active="true" mobile-breakpoint="sm" mobile>
          <v-slide-group-item v-for="project in projects" :key="project.id" v-slot="{ selectedClass }">
            <router-link :to="`/project/${project.sector}`">
              <v-sheet :class="['ma-1 ma-sm-4', selectedClass]" class="cursor-pointer" color="grey-lighten-1"
                       :width="slideImageSize === 'small' ? 200 : 300" rounded="xl"
              >
                <v-img :src="project?.images[0]?.downloadURL" eager class="d-flex align-end rounded-lg cursor-pointer"
                       cover :height="slideImageSize === 'small' ? 200 : 300"
                />
              </v-sheet>
            </router-link>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <FeaturedArticles class="my-16"/>
    </v-container>

    <v-container class="my-16">
      <p class="block-text text-body-1 text-sm-h6 text-md-h5 mb-5">
        iReport
      </p>
      <p class="main-text text-caption text-sm-body-2 text-md-body-1">
        You can now send updates on ongoing projects or abandoned projects happening in the Niger Delta
      </p>
      <v-btn to="/IReports" class="main-text text-capitalize mt-5 text-caption text-sm-body-2 text-md-body-1"
             size="large" rounded="0" elevation="0" color="green-darken-3"
      >
        Send an Ireport
      </v-btn>
    </v-container>

    <Newsletter/>
  </div>
</template>

<script>
import {db} from '@/firebase';
import {collection, doc, onSnapshot} from 'firebase/firestore';
import router from "@/router/index.js";

export default {
  data: () => ({
    t1: '',
    programs: null,
    projects: [],
    displayHeight: null,
    model: 0,
    autoSlideInterval: null,
    dialog: false,
    dialogProps: {
      text: '',
      link: '',
      field: '',
      isLink: false
    },
    pageData: null
  }),

  watch: {
    projects(newProjects) {
      if (newProjects.length) {
        this.restartAutoSlide();
      }
    }
  },

  computed: {
    totalSlides() {
      return this.projects.length;
    },

    height() {
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
    educationImageHeight() {
      switch (this.displayHeight) {
        case 'xs':
          return 400;
        case 'sm':
          return 400;
        case 'md':
          return 700;
        case 'lg':
          return 825;
        case 'xl':
          return 825;
        case 'xxl':
          return 825;
        default:
          return undefined;
      }
    },
    blockButtons() {
      switch (this.displayHeight) {
        case 'xs':
          return true;
        case 'sm':
          return false;
        default:
          return undefined;
      }
    },
    buttonSize() {
      switch (this.displayHeight) {
        case 'xs':
          return 'small';
        case 'sm':
          return 'large';
        default:
          return undefined;
      }
    },
    slideImageSize() {
      switch (this.displayHeight) {
        case 'xs':
          return 'small';
        case 'sm':
          return 'large';
        default:
          return undefined;
      }
    },
  },
  created() {
    const {name} = this.$vuetify.display;
    this.displayHeight = name;
  },

  mounted() {
    this.getRealTimeUpdate()
    this.getProgramUpdate()
    this.getProjectsUpdate()

    if (this.projects.length) {
      this.startAutoSlide();
    }
  },

  beforeUnmount() {
    clearInterval(this.autoSlideInterval);
  },

  methods: {
    startAutoSlide() {
      if (this.autoSlideInterval) clearInterval(this.autoSlideInterval);

      this.autoSlideInterval = setInterval(() => {
        if (this.model < this.totalSlides - 1) {
          this.model += 1; // Move to the next slide
        } else {
          this.model = 0; // Restart from the first slide
        }
      }, 2000); // Every 2 seconds
    },
    restartAutoSlide() {
      this.model = 0; // Ensure it starts from the first slide
      this.startAutoSlide();
    },

    openVideo() {
      window.open('https://www.youtube.com/watch?v=4KKOQoBlMCo', '_blank');
    },

    router,
    async getRealTimeUpdate() {
      const unsub = onSnapshot(doc(db, 'web', 'home'), (doc) => {
        this.pageData = doc.data();
      });

      return unsub
    },

    async getProgramUpdate() {
      const unsub = onSnapshot(collection(db, 'programs'), (doc) => {
        this.programs = doc.docs.map((document) => ({
          id: document.id,
          ...document.data()
        }))
      });

      return unsub
    },

    async getProjectsUpdate() {
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
