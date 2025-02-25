<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12">
        <v-sheet>
          <p
            class="main-text text-green-darken-3 font-weight-bold text-caption text-sm-body-2 text-md-body-1 text-lg-h6 mb-5 mb-sm-10">
            Governing Board
          </p>
          <p class="block-text text-h6 text-sm-h5 text-md-h4 font-weight-bold mb-2">
            Our Management Team
          </p>
          <p class="main-text text-caption text-sm-body-2 text-md-body-1 text-sm-body-1">
            The Niger Delta Development Commission is Governed by seaseoned experts from accross the
            region that help navigate the affairs of the Commission.
          </p>
        </v-sheet>
      </v-col>
    </v-row>

    <v-divider class="my-16" />

    <v-row class="mt-16">
      <v-col cols="12">
        <p class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-bold">
          State Representatives
        </p>
      </v-col>
      <v-col v-for="(item, index) in stateRepresentatives" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-sheet style="border: 1px solid #00341433;" class="cursor-pointer" @click="openDialog(item)">
          <v-img :src="item.image" height="400" position="top" cover />

          <div class="pa-4">
            <p class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-bold mb-2">
              {{ item.name }}
            </p>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2">
              {{ item.title }}
            </p>

            <div class="d-flex">
              <span
                class="main-text text-caption text-sm-body-2 text-md-body-1 text-green-darken-3 font-weight-bold mr-2">Know
                More</span>
              <v-icon color="green-darken-3">
                mdi-arrow-right
              </v-icon>
            </div>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" class="mt-16">
        <p class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-bold">
          Zonal Members
        </p>
      </v-col>
      <v-col v-for="(item, index) in zonalMembers" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-sheet style="border: 1px solid #00341433;" class="cursor-pointer" @click="openDialog(item)">
          <v-img :src="item.image" height="450" position="top center" cover />

          <div class="pa-4">
            <p class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-bold mb-2">
              {{ item.name }}
            </p>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2">
              {{ item.title }}
            </p>

            <div class="d-flex">
              <span
                class="main-text text-caption text-sm-body-2 text-md-body-1 text-green-darken-3 font-weight-bold mr-2">Know
                More</span>
              <v-icon color="green-darken-3">
                mdi-arrow-right
              </v-icon>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>



    <v-dialog v-model="dialog" width="auto" :fullscreen="fullscreen" scrollable>
      <v-card max-width="800">
        <v-card-title class="d-flex justify-end">
          <v-btn icon variant="outlined" size="25" @click="dialog = false">
            <v-icon size="18">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3">
              <v-img :src="dialogData.image" />
            </v-col>
            <v-col cols="12" sm="9">
              <p class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-bold mb-2">
                {{ dialogData.name }}{{ dialogData.fullTitle }}
              </p>
              <p class="main-text text-caption text-sm-body-2 text-md-body-1 mb-2 text-green-darken-3 font-weight-bold">
                {{ dialogData.title }}
              </p>

              <p class="main-text mt-2 text-grey-darken-3 font-weight-bold text-body-2 text-sm-body-1">
                Follow on Socials
              </p>

              <div class="d-flex mt-5">
                <v-btn icon variant="outlined" color="grey">
                  <v-img src="@/assets/x.png" width="20" />
                </v-btn>
                <v-btn class="mx-5" icon variant="outlined" color="grey">
                  <v-img src="@/assets/instagram.png" width="20" />
                </v-btn>
                <v-btn icon variant="outlined" color="grey">
                  <v-img src="@/assets/linkedin.png" width="20" />
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <div v-for="(text, index) in dialogData.body" :key="index" v-html="text" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { useAppStore } from "@/stores/app";

export default {
  setup () {
    const { stateRepresentatives, zonalMembers } = useAppStore();

    return { stateRepresentatives, zonalMembers }
  },

  data: () => ({
    dialog: false,
    dialogData: null,
    displayFullScreen: null,
  }),

  created () {
    const { name } = this.$vuetify.display;
    this.displayFullScreen = name;
  },

  methods: {
    openDialog (item) {
      this.dialogData = item
      this.dialog = true
    }
  },

  computed: {
    fullscreen () {
      switch (this.displayFullScreen) {
        case 'xs':
          return true;
        default:
          return undefined;
      }
    },
  }
}
</script>

<style></style>