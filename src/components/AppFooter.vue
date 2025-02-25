<template>
  <v-footer color="#003414" class="pa-5 pa-md-16">
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="3">
            <div>
              <v-img cover
                src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740244907/NDDC/images/Logo_vzaypx.png"
                :width="logoImageSize" />

              <p class="main-text mt-5 text-caption text-sm-body-2 text-md-body-1">
                To offer a lasting solution to the socio-economic difficulties of the Niger Delta region
              </p>
            </div>

            <v-divider class="my-5" />

            <p class="text-body-2 text-sm-h6 text-md-h5 font-weight-bold">
              Follow Us
            </p>

            <div class="d-flex flex-wrap flex-md-nowrap mt-5">
              <v-btn icon :elevation="0" class="mr-sm-5" color="transparent"
                @click="openLinkInNewWindow('https://x.com/NDDCOnline')">
                <v-img src="@/assets/x.png" :width="socialImageSize" />
              </v-btn>
              <v-btn icon :elevation="0" class="mr-sm-5" color="transparent"
                @click="openLinkInNewWindow('https://www.instagram.com/nddconline')">
                <v-img src="@/assets/instagram-fill.png" :width="socialImageSize" />
              </v-btn>
              <v-btn icon :elevation="0" class="mr-sm-5" color="transparent"
                @click="openLinkInNewWindow('https://www.linkedin.com/company/officialnddc')">
                <v-img src="@/assets/linkedin-fill.png" :width="socialImageSize" />
              </v-btn>
              <v-btn icon :elevation="0" class="mr-sm-5" color="transparent"
                @click="openLinkInNewWindow('https://web.facebook.com/OfficialNDDC')">
                <v-img src="@/assets/facebook-fill.png" :width="socialImageSize" />
              </v-btn>
              <v-btn icon :elevation="0" color="transparent" class="mr-sm-5"
                @click="openLinkInNewWindow('https://www.tiktok.com/@nddconline')">
                <v-img src="@/assets/tik-tok.png" :width="socialImageSize" />
              </v-btn>
              <v-btn icon :elevation="0" color="transparent" class="mr-sm-5"
                @click="openLinkInNewWindow('https://www.youtube.com/@nddconline')">
                <v-icon>mdi mdi-youtube</v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="9">
            <v-row no-gutters>
              <v-col cols="6" md="3">
                <p class="block-text text-body-2 text-sm-h6 text-md-h5 text-green-lighten-3 font-weight-bold mb-5">
                  About Us
                </p>

                <div class="d-flex flex-column">
                  <router-link to="/whoWeAre"
                    class="main-text text-caption text-sm-body-2 text-md-body-1 text-white text-decoration-none mb-2">
                    Who We Are
                  </router-link>
                  <router-link to="/missionStatement"
                    class="main-text text-caption text-sm-body-2 text-md-body-1 text-white text-decoration-none mb-2">
                    Mission Statement
                  </router-link>
                  <router-link to="/management"
                    class="main-text text-caption text-sm-body-2 text-md-body-1 text-white text-decoration-none mb-2">
                    Governing Board
                  </router-link>
                  <router-link to="/governingBoard"
                    class="main-text text-caption text-sm-body-2 text-md-body-1 text-white text-decoration-none">
                    Governing Board
                  </router-link>
                </div>
              </v-col>

              <v-col cols="6" md="3">
                <p class="block-text text-body-2 text-sm-h6 text-md-h5 text-green-lighten-3 font-weight-bold mb-5">
                  Projects
                </p>

                <div class="d-flex flex-column">
                  <router-link v-for="(project, index) in projects?.project" :key="index" :to="`/project/${project}`"
                    style="width: 100%;"
                    class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2 text-decoration-none text-white">
                    {{ project }}
                  </router-link>
                </div>
              </v-col>

              <v-col cols="6" md="3" class="mt-10 mt-sm-0">
                <p class="block-text text-body-2 text-sm-h6 text-md-h5 text-green-lighten-3 font-weight-bold mb-5">
                  Releases
                </p>

                <div>
                  <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2">
                    News and Updates
                  </p>
                  <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2">
                    Media Gallery
                  </p>
                  <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2">
                    NDDC News
                  </p>
                  <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2">
                    Publications
                  </p>
                </div>
              </v-col>

              <v-col cols="6" md="3" class="mt-10 mt-sm-0">
                <p class="block-text text-body-2 text-sm-h6 text-md-h5 text-green-lighten-3 font-weight-bold mb-5">
                  Contact Us
                </p>

                <div>
                  <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2">
                    NDDC Headquarters
                  </p>

                  <div class="d-flex align-center mb-2">
                    <v-icon class="mr-2" :size="socialImageSize">
                      mdi-map-marker
                    </v-icon>
                    <span class="main-text text-caption text-sm-body-2 text-md-body-1">info@nddc.gov.ng</span>
                  </div>

                  <div class="d-flex align-center mb-2">
                    <v-icon class="mr-2" :size="socialImageSize">
                      mdi-email
                    </v-icon>
                    <span class="main-text text-caption text-sm-body-2 text-md-body-1">info@nddc.gov.ng</span>
                  </div>

                  <p class="main-text text-caption text-sm-body-2 text-md-body-1">
                    Regional Offices
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-divider />
      </v-col>

      <v-col cols="12">
        <div class="d-flex flex-column flex-sm-row justify-center justify-sm-space-between">
          <span class="main-text text-caption text-sm-body-2 text-md-body-1 text-center text-sm-start">Copyright {{
            new
            Date().getFullYear()
            }} Niger Delta
            Development Commission</span>

          <div class="d-flex flex-column flex-sm-row mt-5 mt-sm-0">
            <span class="mr-5 main-text text-caption text-sm-body-2 text-md-body-1 text-center text-sm-end">Terms and
              Conditions</span>
            <span class="mr-5 main-text text-caption text-sm-body-2 text-md-body-1 text-center text-sm-end">Privacy
              Policy</span>
            <span class="main-text text-caption text-sm-body-2 text-md-body-1 text-center text-sm-end">Freedom of
              Information</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>
import { onMounted, ref } from "vue";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase.js";

export default {
  data: () => ({
    displayHeight: null,
  }),

  setup () {
    const projects = ref(null);

    const openLinkInNewWindow = (link) => {
      window.open(link)
    }

    const getRealTimeProjectUpdate = async () => {
      const unsub = onSnapshot(doc(db, 'web', 'ourProjects'), (doc) => {
        projects.value = doc.data();
      });
      return unsub;
    };

    onMounted(() => {
      getRealTimeProjectUpdate();
    });

    return {
      openLinkInNewWindow,
      projects,
    }
  },

  created () {
    const { name } = this.$vuetify.display;
    this.displayHeight = name;
  },

  computed: {
    logoImageSize () {
      switch (this.displayHeight) {
        case 'xs':
          return 150;
        case 'sm':
          return 150;
        case 'md':
          return 250;
        default:
          return 250;
      }
    },
    socialImageSize () {
      switch (this.displayHeight) {
        case 'xs':
          return 10;
        case 'sm':
          return 10;
        case 'md':
          return 15;
        default:
          return undefined;
      }
    },
  }
}
</script>
