<template>
  <v-sheet v-if="loading" color="white" width="100vw" height="100vh" class="d-flex justify-center align-center">
    <v-progress-circular indeterminate color="green-darken-3" size="100" />
  </v-sheet>

  <v-app v-if="!loading">
    <v-navigation-drawer v-model="drawer" location="right" :width="drawerWidth">
      <v-list density="compact">
        <v-list-item density="compact" prepend-avatar="@/assets/logoRound.png" />
      </v-list>

      <v-list-item link title="Home" to="/" prepend-icon="mdi-home"
        class="main-text mx-5 my-5 rounded-lg text-caption text-sm-body-1 font-weight-bold"
        active-class="text-green-darken-3" density="compact" />
      <v-expansion-panels v-model="expanded" :elevation="0">
        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-caption text-sm-body-1 font-weight-bold">
            The Commision
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item v-for="(item, i) in theCommision" :key="i" :to="item.to" density="compact"
              prepend-icon="mdi-chevron-right" class="rounded-lg main-text text-caption text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3">
              <v-list-item-title class="main-text text-caption text-sm-body-1" v-text="item.text" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-caption text-sm-body-1 font-weight-bold">
            Our Projects
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item density="compact" to="/projects" prepend-icon="mdi-chevron-right"
              class="rounded-lg main-text text-caption text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3">
              <v-list-item-title class="text-caption text-sm-body-1">All Projects</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="(project, index) in projects?.project" :key="index" :to="`/project/${project}`"
              prepend-icon="mdi-chevron-right" class="rounded-lg main-text font-weight-bold"
              active-class="text-green-darken-3">
              <v-list-item-title class="main-text text-caption text-sm-body-1" v-text="project" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-caption text-sm-body-1 font-weight-bold">
            Our programme
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item v-for="(program, index) in programs?.programs" :key="index" :to="`/programs/${program}`"
              prepend-icon="mdi-chevron-right" class="rounded-lg" active-class="text-green-darken-3" density="compact">
              <v-list-item-title v-text="program" class="main-text text-caption text-sm-body-1" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-caption text-sm-body-1 font-weight-bold">
            E-Services
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item v-for="(item, index) in eServices" :key="index" :to="item.to" prepend-icon="mdi-chevron-right"
              class="rounded-lg" active-class="text-green-darken-3">
              <v-list-item-title v-text="item.text" class="main-text text-caption text-sm-body-1" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-caption text-sm-body-1 font-weight-bold">
            News and Update
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item v-for="(item, index) in news" :key="index" :to="item.to" prepend-icon="mdi-chevron-right"
              class="rounded-lg" active-class="text-green-darken-3">
              <v-list-item-title v-text="item.text" class="main-text text-caption text-sm-body-1" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>

    <v-app-bar v-if="showGreenAppBar" :elevation="0" color="#263238" class="px-0" density="compact">
      <template #prepend>
        <v-sheet class="d-flex" color="green">
          <v-btn icon :elevation="0" class="mr-0" color="white"
            @click="openLinkInNewWindow('https://x.com/NDDCOnline')">
            <v-img src="@/assets/x.png" width="18" />
          </v-btn>
          <v-btn icon :elevation="0" class="mr-0" color="white"
            @click="openLinkInNewWindow('https://www.instagram.com/nddconline')">
            <v-img src="@/assets/instagram-fill.png" width="18" />
          </v-btn>
          <v-btn icon :elevation="0" class="mr-0" color="white"
            @click="openLinkInNewWindow('https://www.linkedin.com/company/officialnddc')">
            <v-img src="@/assets/linkedin-fill.png" width="18" />
          </v-btn>
          <v-btn icon :elevation="0" color="white"
            @click="openLinkInNewWindow('https://web.facebook.com/OfficialNDDC')">
            <v-img src="@/assets/facebook-fill.png" width="18" />
          </v-btn>
          <v-btn icon :elevation="0" color="white" @click="openLinkInNewWindow('https://www.tiktok.com/@nddconline')">
            <v-img src="@/assets/tik-tok.png" width="22" />
          </v-btn>
          <v-btn icon :elevation="0" color="white" @click="openLinkInNewWindow('https://www.youtube.com/@nddconline')">
            <v-icon>"mdi mdi-youtube</v-icon>
          </v-btn>
        </v-sheet>
      </template>

      <template #append>
        <div class="d-flex">
          <div class="mr-5 d-flex align-center">
            <v-tooltip text="info@nddc.gov.ng" location="end">
              <template #activator="{ props }">
                <v-icon size="18" v-bind="props">
                  mdi-email
                </v-icon>
              </template>
            </v-tooltip>

            <span
              class="main-text d-none d-sm-block text-caption text-sm-body-1 text-white ml-2">info@nddc.gov.ng</span>
          </div>

          <div class="mr-5 d-flex align-center">
            <v-tooltip text="Work Hours:8:00am-5:00pm (Monday-Friday)" location="end">
              <template #activator="{ props }">
                <v-icon size="18" v-bind="props">
                  mdi-clock
                </v-icon>
              </template>
            </v-tooltip>

            <span class="main-text d-none d-sm-block text-caption text-sm-body-1 text-white ml-2">Work Hours:
              8:00am-5:00pm (Monday-Friday)</span>
          </div>
        </div>
      </template>
    </v-app-bar>

    <v-app-bar :elevation="0" color="white" class="px-sm-16" height="70" :density="!showAppBar ? 'compact' : ''">
      <template #prepend>
        <router-link to="/">
          <v-img cover src="https://res.cloudinary.com/rukkiecodes/image/upload/v1740244907/NDDC/images/Logo_vzaypx.png"
            :width="!showAppBar ? 150 : 250" />
        </router-link>
      </template>

      <div v-if="showAppBar" class="d-flex align-center">
        <div class="d-flex align-center justify-end">
          <div class="mr-4 d-flex justify-center px-2" :class="{
              'border-b-md border-opacity-100 border-success': $route.path === '/',
              'py-2': true
            }">
            <router-link to="/" class="main-text text-caption text-lg-body-2 text-xl-body-1" :class="{
                'text-grey-darken-3': $route.path !== '/',
                'text-green-darken-3': $route.path === '/',
                'text-decoration-none': true,

                'text-green-darken-3': true,

              }">
              Home
            </router-link>
          </div>

          <div style="width: 1px; height: 25px; background-color: #A5A5A5" />
        </div>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <div class="d-flex align-center justify-end ml-5">
              <div class="mr-4 d-flex justify-center px-2" :class="{
                  'border-b-md border-opacity-100 border-success': $route.path === '/management',
                  'py-2': true
                }">
                <router-link to="/management" v-bind="props"
                  class="main-text d-flex text-caption text-lg-body-2 text-xl-body-1" :class="{
                    'text-grey-darken-3': $route.path !== '/management',
                    'text-green-darken-3': $route.path === '/management',
                    'text-decoration-none': true,

                    'text-green-darken-3': true,

                  }">
                  The Commission <v-icon class="ml-1">
                    mdi-chevron-down
                  </v-icon>
                </router-link>
              </div>

              <div style="width: 1px; height: 25px; background-color: #A5A5A5" />
            </div>
          </template>

          <v-card color="green-lighten-5" rounded="0" width="200">
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link to="/missionStatement" style="width: 100%;"
                class="main-text px-2 border-b-sm border-opacity-50 border-success" :class="{
                  'text-grey-darken-3': $route.path !== '/',
                  'text-green-darken-3': $route.path === '/',
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === '/',
                  'text-green-darken-3': true,
                  'py-4': true
                }">
                Mission Statement
              </router-link>
              <router-link to="/management" style="width: 100%;"
                class="main-text px-2 border-b-sm border-opacity-50 border-success" :class="{
                  'text-grey-darken-3': $route.path !== '/management',
                  'text-green-darken-3': $route.path === '/management',
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === '/management',
                  'text-green-darken-3': true,
                  'py-4': true
                }">
                Management Team
              </router-link>
              <router-link to="/governingBoard" style="width: 100%;"
                class="main-text px-2 border-b-sm border-opacity-50 border-success" :class="{
                  'text-grey-darken-3': $route.path !== '/governingBoard',
                  'text-green-darken-3': $route.path === '/governingBoard',
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === '/governingBoard',
                  'text-green-darken-3': true,
                  'py-4': true
                }">
                Governing Board
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <div class="d-flex align-center justify-end ml-5">
              <div class="mr-4 d-flex justify-center px-2" :class="{
                  'border-b-md border-opacity-100 border-success': $route.path === '/projects',
                  'py-2': true
                }">
                <router-link to="/projects" v-bind="props"
                  class="main-text d-flex text-caption text-lg-body-2 text-xl-body-1" :class="{
                    'text-grey-darken-3': $route.path !== '/projects',
                    'text-green-darken-3': $route.path === '/projects',
                    'text-decoration-none': true,

                    'text-green-darken-3': true,

                  }">
                  Our Projects <v-icon class="ml-1">
                    mdi-chevron-down
                  </v-icon>
                </router-link>
              </div>

              <div style="width: 1px; height: 25px; background-color: #A5A5A5" />
            </div>
          </template>
          <v-card color="green-lighten-5" rounded="0" width="200">
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link v-for="(project, index) in projects?.project" :key="index" :to="`/project/${project}`"
                style="width: 100%;" class="main-text px-2 border-b-sm border-opacity-50 border-success" :class="{
                  'text-grey-darken-3': $route.path !== `/project/${project}`,
                  'text-green-darken-3': $route.path === `/project/${project}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/project/${project}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }">
                {{ project }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <div class="d-flex align-center justify-end ml-5">
              <div class="mr-4 d-flex justify-center px-2" :class="{
                  'border-b-md border-opacity-100 border-success': $route.path === `/programs/${programs?.programs[0]}`,
                  'py-2': true
                }">
                <router-link :to="`/programs/${programs?.programs[0]}`" v-bind="props"
                  class="main-text d-flex text-caption text-lg-body-2 text-xl-body-1" :class="{
                    'text-grey-darken-3': $route.path !== `/programs/${programs?.programs[0]}`,
                    'text-green-darken-3': $route.path === `/programs/${programs?.programs[0]}`,
                    'text-decoration-none': true,

                    'text-green-darken-3': true,

                  }">
                  Our Programms <v-icon class="ml-1">
                    mdi-chevron-down
                  </v-icon>
                </router-link>
              </div>

              <div style="width: 1px; height: 25px; background-color: #A5A5A5" />
            </div>
          </template>
          <v-card color="green-lighten-5" rounded="0" width="200">
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link v-for="(program, index) in programs.programs" :key="index" :to="`/programs/${program}`"
                style="width: 100%;" class="main-text text-body-1 px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== `/programs/${program}`,
                  'text-green-darken-3': $route.path === `/programs/${program}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/programs/${program}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }">
                {{ program }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <div class="d-flex align-center justify-end ml-5">
              <div class="mr-4 d-flex justify-center px-2" :class="{
                  'border-b-md border-opacity-100 border-success': $route.path === `/service/${eServices[0].to}`,
                  'py-2': true
                }">
                <router-link to="/onlineForms" v-bind="props"
                  class="main-text d-flex text-caption text-lg-body-2 text-xl-body-1" :class="{
                    'text-grey-darken-3': $route.path !== `/service/${eServices[0].to}`,
                    'text-green-darken-3': $route.path === `/service/${eServices[0].to}`,
                    'text-decoration-none': true,

                    'text-green-darken-3': true,

                  }">
                  E-Services <v-icon class="ml-1">
                    mdi-chevron-down
                  </v-icon>
                </router-link>
              </div>

              <div style="width: 1px; height: 25px; background-color: #A5A5A5" />
            </div>
          </template>
          <v-card color="green-lighten-5" rounded="0" width="200">
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link v-for="(service, index) in eServices" :key="index" :to="service.to" style="width: 100%;"
                class="main-text-text-body-1 px-2 border-b-sm border-opacity-50 border-success" :class="{
                  'text-grey-darken-3': $route.path !== `/service/${service.to}`,
                  'text-green-darken-3': $route.path === `/service/${service.to}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/service/${service.to}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }">
                {{ service.text }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <div class="d-flex align-center justify-end ml-5">
              <div class="mr-4 d-flex justify-center px-2" :class="{
                  'border-b-md border-opacity-100 border-success': $route.path === '/media',
                  'py-2': true
                }">
                <router-link to="/media" v-bind="props"
                  class="main-text d-flex text-caption text-lg-body-2 text-xl-body-1" :class="{
                    'text-grey-darken-3': $route.path !== '/media',
                    'text-green-darken-3': $route.path === '/media',
                    'text-decoration-none': true,

                    'text-green-darken-3': true,

                  }">
                  Media/photo gallery <v-icon class="ml-1">
                    mdi-chevron-down
                  </v-icon>
                </router-link>
              </div>

              <div style="width: 1px; height: 25px; background-color: #A5A5A5" />
            </div>
          </template>
          <v-card color="green-lighten-5" rounded="0" width="200">
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link v-for="(newsItem, index) in news" :key="index" :to="`${newsItem.to}`" style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success" :class="{
                  'text-grey-darken-3': $route.path !== `/news/${newsItem.to}`,
                  'text-green-darken-3': $route.path === `/news/${newsItem.to}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/news/${newsItem.to}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }">
                {{ newsItem.text }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>
        <router-link to="/contact" class="main-text mx-4 text-caption text-lg-body-2 text-xl-body-1" :class="{
            'text-grey-darken-3': $route.path !== '/contact',
            'text-green-darken-3': $route.path === '/contact',
            'text-decoration-none': true,
            'border-b-md border-opacity-100 border-success': $route.path === '/contact',
            'text-green-darken-3': true,
            'py-2': true
          }">
          Contact Us
        </router-link>
      </div>

      <v-app-bar-nav-icon v-if="!showAppBar" @click="drawer = !drawer" />
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <AppFooter />
  </v-app>
</template>


<script>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter for navigation
import { db } from '@/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useDisplay } from 'vuetify';

export default {
  setup () {
    const programs = ref(null);
    const projects = ref(null);
    const drawer = ref(false);
    const router = useRouter(); // Initialize the router instance
    const { name } = useDisplay();
    const expanded = ref([0, 1, 1])
    const loading = ref(true);

    setTimeout(() => {
      loading.value = false;
    }, 3000)

    const theCommision = [
      { text: 'Mission Statement', to: '/missionStatement' },
      { text: 'Management', to: '/management' },
      { text: 'Governing Board', to: '/governingBoard' },
    ]

    const eServices = [
      { text: 'Online Forms', to: '/onlineForms' },
      { text: 'Adverts', to: '/adverts' },
      { text: 'i-Report', to: '/IReports' }
    ]

    const news = [
      { text: 'News and Updates', to: '/media' },
      { text: 'Media Gallery', to: '/mediaGallery' },
      { text: 'Publications', to: '/publication' },
      { text: 'Events Calendar', to: '/eventCalendar' },
    ]

    const openLinkInNewWindow = (link) => {
      window.open(link)
    }

    const getRealTimeProgramsUpdate = async () => {
      const unsub = onSnapshot(doc(db, 'web', 'ourPrograms'), (doc) => {
        programs.value = doc.data();
      });
      return unsub;
    };

    const getRealTimeProjectUpdate = async () => {
      const unsub = onSnapshot(doc(db, 'web', 'ourProjects'), (doc) => {
        projects.value = doc.data();
      });
      return unsub;
    };

    const navigateToRoute = (prop) => {
      router.replace(prop);
    };

    const showAppBar = computed(() => {
      // Compute app bar visibility based on screen size
      switch (name.value) {
        case 'xs':
        case 'sm':
        case 'md':
          return false;
        case 'lg':
        case 'xl':
        case 'xxl':
          return true;
        default:
          return false; // Fallback for unexpected values
      }
    });

    const showGreenAppBar = computed(() => {
      // Compute app bar visibility based on screen size
      switch (name.value) {
        case 'xs': return false;
        case 'sm': return false;
        case 'md': return false;
        case 'lg':
        case 'xl':
        case 'xxl':
          return true;
        default:
          return false; // Fallback for unexpected values
      }
    });

    const drawerType = computed(() => {
      // Compute app bar visibility based on screen size
      switch (name.value) {
        case 'xs': return true;
        case 'sm':
        case 'md':
        case 'lg':
        case 'xl':
        case 'xxl':
          return false;
        default:
          return false; // Fallback for unexpected values
      }
    });

    const drawerWidth = computed(() => {
      // Compute app bar visibility based on screen size
      switch (name.value) {
        case 'xs': return 200;
        case 'sm': return 300;
        case 'md':
        case 'lg':
        case 'xl':
        case 'xxl':
          return 300;
        default:
          return 300; // Fallback for unexpected values
      }
    });

    onMounted(() => {
      getRealTimeProgramsUpdate();
      getRealTimeProjectUpdate();
    });

    return {
      programs,
      projects,
      drawer,
      navigateToRoute,
      showAppBar,
      showGreenAppBar,
      theCommision,
      eServices,
      news,
      expanded,
      openLinkInNewWindow,
      loading,
      drawerType,
      drawerWidth
    };
  },

  mounted () {
    window.scrollTo(0, 1); // Force full-screen on Safari
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

.main-text {
  font-family: "Source Sans 3", serif
}

.block-text {
  font-family: "Oswald", serif !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  /* Match your theme */
  overscroll-behavior: none;
}

html {
  background-color: #ffffff;
  --nav-bar-color: #ffffff;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Ensure content is visible under the status bar */
.safe-area {
  padding-top: env(safe-area-inset-top);
  /* iOS notch support */
}
</style>
