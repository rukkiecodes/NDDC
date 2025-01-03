<template>
  <div>
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" color="green-darken-3">
        <template #divider>
          <v-icon icon="mdi-chevron-right" />
        </template>
      </v-breadcrumbs>

      <v-row class="mt-16">
        <v-col cols="12" sm="2">
          <p class="text-green-darken-3 mb-1 font-weight-bold">From:</p>
          <v-dialog max-width="400">
            <template #activator="{ props: activatorProps }">
              <v-sheet v-bind="activatorProps" border="sm" rounded="md" height="50" class="d-flex align-center px-2">
                <v-icon class="mx-2">mdi-calendar-month-outline</v-icon>

                <span class="text-body-2 text-grey-darken-2">DD/MM/YYY</span>
              </v-sheet>
            </template>

            <template #default="{ isActive }">
              <v-card>
                <v-card-text>
                  <v-date-picker />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>

        <v-col cols="12" sm="2">
          <p class="text-green-darken-3 mb-1 font-weight-bold">To:</p>
          <v-dialog max-width="400">
            <template #activator="{ props: activatorProps }">
              <v-sheet v-bind="activatorProps" border="sm" rounded="md" height="50" class="d-flex align-center px-2">
                <v-icon class="mx-2">mdi-calendar-month-outline</v-icon>

                <span class="text-body-2 text-grey-darken-2">DD/MM/YYY</span>
              </v-sheet>
            </template>

            <template #default="{ isActive }">
              <v-card>
                <v-card-text>
                  <v-date-picker />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>

        <v-col cols="12" sm="8">
          <p class="text-green-darken-3 mb-1 font-weight-bold">Search</p>
          <v-sheet v-bind="activatorProps" border="sm" rounded="md" height="50" class="d-flex align-center px-2">
            <v-icon class="mx-2">mdi-magnify</v-icon>

            <input
type="text" placeholder="Search for names, articles, references etc"
              style="flex: 1; height: 100%; outline: none">
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12" sm="9">
          <v-card :elevation="0">
            <v-tabs v-model="tab" bg-color="white" color="green-darken-3">
              <v-tab value="Photos" class="text-capitalize font-weight-bold">Photos</v-tab>
              <v-tab value="Videos" class="text-capitalize font-weight-bold">Videos</v-tab>
              <v-tab value="Audio Recordings" class="text-capitalize font-weight-bold">Audio Recordings</v-tab>
            </v-tabs>

            <v-card-text>
              <v-tabs-window v-model="tab">
                <v-tabs-window-item value="Photos">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/road.jpg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/dam.jpeg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/crc4.png" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/ttrtr.png" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/pwl.jpeg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/bgpt.jpeg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/road.jpg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/dam.jpeg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/crc4.png" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/ttrtr.png" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/pwl.jpeg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/bgpt.jpeg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/road.jpg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/dam.jpeg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/crc4.png" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/ttrtr.png" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/pwl.jpeg" height="200" cover />
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-img src="@/assets/bgpt.jpeg" height="200" cover />
                    </v-col>
                    <v-col cols="12">
                      <v-pagination :length="4" />
                    </v-col>
                  </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="Videos">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/road.jpg" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/dam.jpeg" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/crc4.png" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/ttrtr.png" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/pwl.jpeg" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/bgpt.jpeg" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/road.jpg" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/dam.jpeg" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/crc4.png" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/ttrtr.png" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/pwl.jpeg" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-sheet border="sm" @click="dialog = true">
                        <v-img
src="@/assets/bgpt.jpeg" height="200"
                          class="d-flex justify-center align-center text-center" cover>
                          <v-icon color="white" size="70">mdi-play-circle-outline</v-icon>
                        </v-img>

                        <div class="pa-3">
                          <p class="text-grey-darken-4 text-body-2">17th July, 2024</p>
                          <p class="text-h6 font-weight-bold my-3">NDDC Program: Building Financial Independence for
                            Women in the Niger Delta</p>
                          <p class="text-grey-darken-4 text-body-1">NDDC CONFERENCE 2023</p>
                        </div>
                      </v-sheet>
                    </v-col>
                    <v-col cols="12">
                      <v-pagination :length="4" />
                    </v-col>
                  </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="Audio Recordings">
                  Audio Recordings
                </v-tabs-window-item>
              </v-tabs-window>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="3">
          <v-list :items="importantLinks" />
          <v-list :items="newsArchive" class="mt-5" />
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="800">
        <iframe
width="800" height="450" src="https://www.youtube.com/embed/T7yaTPMJTgw?si=BGCuyBS7MbKNaZFU"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    dialog: false,

    breadcrumbs: [
      {
        title: 'Media',
        disabled: false,
        to: '/media',
      },
      {
        title: 'Media Gallery',
        disabled: false,
        to: '/mediaGallery',
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
    ],
  }),
}
</script>

<style></style>