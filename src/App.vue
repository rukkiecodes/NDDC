<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      width="300"
    >
      <v-list>
        <v-list-item prepend-avatar="@/assets/logoRound.png" />
      </v-list>

      <v-list-item
        link
        title="Home"
        to="/"
        prepend-icon="mdi-home"
        class="mx-5 my-5 rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
        active-class="text-green-darken-3"
      />
      <v-expansion-panels
        v-model="expanded"
        :elevation="0"
      >
        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-body-2 text-sm-body-1 font-weight-bold">
            The Commision
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item
              v-for="(item, i) in theCommision"
              :key="i"
              :to="item.to"
              prepend-icon="mdi-chevron-right"
              class="rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3"
            >
              <v-list-item-title
                class="main-text text-body-2 text-sm-body-1"
                v-text="item.text"
              />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-body-2 text-sm-body-1 font-weight-bold">
            Our Projects
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item
              to="/projects"
              prepend-icon="mdi-chevron-right"
              class="rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3"
            >
              <v-list-item-title>All Projects</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-for="(project, index) in projects?.project"
              :key="index"
              :to="`/projects/${project}`"
              prepend-icon="mdi-chevron-right"
              class="rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3"
            >
              <v-list-item-title v-text="project" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-body-2 text-sm-body-1 font-weight-bold">
            Our Programs
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item
              v-for="(program, index) in programs?.programs"
              :key="index"
              :to="`/programs/${program}`"
              prepend-icon="mdi-chevron-right"
              class="rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3"
            >
              <v-list-item-title v-text="program" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-body-2 text-sm-body-1 font-weight-bold">
            E-Services
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item
              v-for="(item, index) in eServices"
              :key="index"
              :to="item.to"
              prepend-icon="mdi-chevron-right"
              class="rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3"
            >
              <v-list-item-title v-text="item.text" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title class="main-text text-body-2 text-sm-body-1 font-weight-bold">
            News and Update
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item
              v-for="(item, index) in news"
              :key="index"
              :to="item.to"
              prepend-icon="mdi-chevron-right"
              class="rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3"
            >
              <v-list-item-title v-text="item.text" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>

    <v-app-bar
      :elevation="0"
      color="#263238"
      class="px-0"
      density="compact"
    >
      <template #prepend>
        <v-sheet
          class="d-flex"
          color="green"
        >
          <v-btn
            @click="openLinkInNewWindow('https://x.com/NDDCOnline')"
            icon
            :elevation="0"
            class="mr-0"
            color="white"
          >
            <v-icon size="18">
              mdi-twitter
            </v-icon>
          </v-btn>
          <v-btn
            @click="openLinkInNewWindow('https://www.instagram.com/nddconline')"
            icon
            :elevation="0"
            class="mr-0"
            color="white"
          >
            <v-icon size="18">
              mdi-instagram
            </v-icon>
          </v-btn>
          <v-btn
            @click="openLinkInNewWindow('https://www.linkedin.com/company/officialnddc')"
            icon
            :elevation="0"
            class="mr-0"
            color="white"
          >
            <v-icon size="18">
              mdi-linkedin
            </v-icon>
          </v-btn>
          <v-btn
            @click="openLinkInNewWindow('https://web.facebook.com/OfficialNDDC')"
            icon
            :elevation="0"
            color="white"
          >
            <v-icon size="18">
              mdi-facebook
            </v-icon>
          </v-btn>
        </v-sheet>
      </template>

      <template #append>
        <div class="d-flex">
          <div class="mr-5 d-flex align-center">
            <v-tooltip
              text="info@nddc.gov.ng"
              location="end"
            >
              <template #activator="{ props }">
                <v-icon
                  size="18"
                  v-bind="props"
                >
                  mdi-email
                </v-icon>
              </template>
            </v-tooltip>

            <span
              class="main-text d-none d-sm-block text-caption text-sm-body-1 text-white ml-2"
            >info@nddc.gov.ng</span>
          </div>

          <div class="mr-5 d-flex align-center">
            <v-tooltip
              text="Work Hours:8:00am-5:00pm (Mon-Fri)"
              location="end"
            >
              <template #activator="{ props }">
                <v-icon
                  size="18"
                  v-bind="props"
                >
                  mdi-clock
                </v-icon>
              </template>
            </v-tooltip>

            <span class="main-text d-none d-sm-block text-caption text-sm-body-1 text-white ml-2">Work Hours:
              8:00am-5:00pm (Mon-Fri)</span>
          </div>
        </div>
      </template>
    </v-app-bar>

    <v-app-bar
      :elevation="0"
      color="white"
      class="px-sm-16"
      height="70"
    >
      <template #prepend>
        <v-img
          cover
          src="@/assets/NDDCNewLogo_nobg.jpg"
          :width="250"
        />
      </template>

      <div v-if="showAppBar">
        <router-link
          to="/"
          :class="{
            'text-grey-darken-3': $route.path !== '/',
            'text-green-darken-3': $route.path === '/',
            'text-decoration-none': true,
            'border-b-md border-opacity-100 border-success': $route.path === '/',
            'text-green-darken-3': true,
            'py-2': true
          }"
        >
          Home
        </router-link>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <router-link
              v-bind="props"
              to="/whoWeAre"
              class="mx-4"
              :class="{
                'text-grey-darken-3': $route.path !== '/whoWeAre',
                'text-green-darken-3': $route.path === '/whoWeAre',
                'text-decoration-none': true,
                'border-b-md border-opacity-100 border-success': $route.path === '/whoWeAre',
                'text-green-darken-3': true,
                'py-2': true
              }"
            >
              The Commission
            </router-link>
          </template>

          <v-card
            color="green-lighten-5"
            rounded="0"
            width="150"
          >
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link
                to="/whoWeAre"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== '/whoWeAre',
                  'text-green-darken-3': $route.path === '/whoWeAre',
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === '/whoWeAre',
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                About Us
              </router-link>
              <router-link
                to="/missionStatement"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== '/',
                  'text-green-darken-3': $route.path === '/',
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === '/',
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                Mission Statement
              </router-link>
              <router-link
                to="/management"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== '/management',
                  'text-green-darken-3': $route.path === '/management',
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === '/management',
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                Management
              </router-link>
              <router-link
                to="/ourPeople"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== '/ourPeople',
                  'text-green-darken-3': $route.path === '/ourPeople',
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === '/ourPeople',
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                Our People
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <router-link
              v-bind="props"
              to="/projects"
              class="mx-4"
              :class="{
                'text-grey-darken-3': $route.path !== `/projects/${projects?.project[0]}`,
                'text-green-darken-3': $route.path === `/projects/${projects?.project[0]}`,
                'text-decoration-none': true,
                'border-b-md border-opacity-100 border-success': $route.path === `/projects/${projects?.project[0]}`,
                'text-green-darken-3': true,
                'py-2': true
              }"
            >
              Our Projects
            </router-link>
          </template>
          <v-card
            color="green-lighten-5"
            rounded="0"
            width="150"
          >
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link
                v-for="(project, index) in projects?.project"
                :key="index"
                :to="`/projects/${project}`"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== `/projects/${project}`,
                  'text-green-darken-3': $route.path === `/projects/${project}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/projects/${project}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                {{ project }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <router-link
              v-bind="props"
              :to="`/programs/${programs?.programs[0]}`"
              class="mx-4"
              :class="{
                'text-grey-darken-3': $route.path !== `/programs/${programs?.programs[0]}`,
                'text-green-darken-3': $route.path === `/programs/${programs?.programs[0]}`,
                'text-decoration-none': true,
                'border-b-md border-opacity-100 border-success': $route.path === `/programs/${programs?.programs[0]}`,
                'text-green-darken-3': true,
                'py-2': true
              }"
            >
              Our Programs
            </router-link>
          </template>
          <v-card
            color="green-lighten-5"
            rounded="0"
            width="150"
          >
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link
                v-for="(program, index) in programs.programs"
                :key="index"
                :to="`/programs/${program}`"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== `/programs/${program}`,
                  'text-green-darken-3': $route.path === `/programs/${program}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/programs/${program}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                {{ program }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <router-link
              v-bind="props"
              :to="`/service/${eServices[0].to}`"
              class="mx-4"
              :class="{
                'text-grey-darken-3': $route.path !== `/service/${eServices[0].to}`,
                'text-green-darken-3': $route.path === `/service/${eServices[0].to}`,
                'text-decoration-none': true,
                'border-b-md border-opacity-100 border-success': $route.path === `/service/${eServices[0].to}`,
                'text-green-darken-3': true,
                'py-2': true
              }"
            >
              E-Services
            </router-link>
          </template>
          <v-card
            color="green-lighten-5"
            rounded="0"
            width="150"
          >
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link
                v-for="(service, index) in eServices"
                :key="index"
                :to="service.to"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== `/service/${service.to}`,
                  'text-green-darken-3': $route.path === `/service/${service.to}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/service/${service.to}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                {{ service.text }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <router-link
              v-bind="props"
              to="/media"
              class="mx-4"
              :class="{
                'text-grey-darken-3': $route.path !== '/media',
                'text-green-darken-3': $route.path === '/media',
                'text-decoration-none': true,
                'border-b-md border-opacity-100 border-success': $route.path === '/media',
                'text-green-darken-3': true,
                'py-2': true
              }"
            >
              Media/photo gallery
            </router-link>
          </template>
          <v-card
            color="green-lighten-5"
            rounded="0"
            width="150"
          >
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link
                v-for="(newsItem, index) in news"
                :key="index"
                :to="`${newsItem.to}`"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== `/news/${newsItem.to}`,
                  'text-green-darken-3': $route.path === `/news/${newsItem.to}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/news/${newsItem.to}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                {{ newsItem.text }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>
        <router-link
          to="/contact"
          class="mx-4"
          :class="{
            'text-grey-darken-3': $route.path !== '/contact',
            'text-green-darken-3': $route.path === '/contact',
            'text-decoration-none': true,
            'border-b-md border-opacity-100 border-success': $route.path === '/contact',
            'text-green-darken-3': true,
            'py-2': true
          }"
        >
          Contact Us
        </router-link>
      </div>

      <v-app-bar-nav-icon
        v-if="!showAppBar"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
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

    const theCommision = [
      { text: 'About Us', to: '/whoWeAre' },
      { text: 'Mission Statement', to: '/missionStatement' },
      { text: 'Management', to: '/management' },
      { text: 'Our People', to: '/ourPeople' },
    ]

    const eServices = [
      { text: 'Online Forms', to: '/onlineForms' },
      { text: 'Adverts', to: '/adverts' },
      { text: 'i-Report', to: '/IReports' }
    ]

    const news = [
      { text: 'News and Updates', to: '/media' },
      // { text: 'Press Releases', to: '' },
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
      theCommision,
      eServices,
      news,
      expanded,
      openLinkInNewWindow
    };
  },
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
</style>
