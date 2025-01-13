<template>
  <div>
    <v-container>
      <v-breadcrumbs
        :items="breadcrumbs"
        color="green-darken-3"
      >
        <template #divider>
          <v-icon icon="mdi-chevron-right" />
        </template>
      </v-breadcrumbs>

      <Sort />

      <v-row class="mt-10">
        <v-col
          cols="12"
          sm="9"
          class="mt-sm-16"
        >
          <v-card :elevation="0">
            <v-tabs
              v-model="tab"
              bg-color="white"
              color="green-darken-3"
            >
              <v-tab
                value="Photos"
                class="text-capitalize font-weight-bold"
              >
                Photos
              </v-tab>
              <v-tab
                value="Videos"
                class="text-capitalize font-weight-bold"
              >
                Videos
              </v-tab>
<!--              <v-tab-->
<!--                value="Audio Recordings"-->
<!--                class="text-capitalize font-weight-bold"-->
<!--              >-->
<!--                Audio Recordings-->
<!--              </v-tab>-->
            </v-tabs>

            <v-card-text>
              <v-tabs-window v-model="tab">
                <v-tabs-window-item value="Photos">
                  <v-row>
                    <v-col
                      v-for="(image, index) in images"
                      :key="index"
                      cols="12"
                      sm="4"
                    >
                      <v-img
                        :src="image"
                        height="200"
                        cover
                        class="cursor-pointer"
                        @click="() => { imageDialog = true; selectedImage = image }"
                      />
                    </v-col>
                  </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="Videos">
                  <v-row>
                    <v-col
                      v-for="(video, index) in videos"
                      :key="index"
                      cols="12"
                      sm="6"
                    >
                      <v-sheet
                        border="sm"
                      >
                        <div v-html="video.iFrame"></div>

                        <div class="pa-3">
                          <p class="main-text text-grey-darken-4 text-caption text-sm-body-2">
                            17th July, 2024
                          </p>
                          <p class="block-text text-body-1 text-sm-h6 font-weight-bold my-3 text-uppercase"
                             v-text="video.title" />
                          <p class="main-text text-grey-darken-4 text-caption text-sm-body-2">
                            NDDC CONFERENCE 2023
                          </p>
                        </div>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-tabs-window-item>
              </v-tabs-window>
            </v-card-text>
          </v-card>
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
    </v-container>

    <v-dialog
      v-model="imageDialog"
      width="auto"
    >
      <v-card
        max-width="800"
        rounded="xl"
      >
        <v-img
          :src="selectedImage"
          cover
          width="900"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import dam from '@/assets/dam.jpeg'
import crc4 from '@/assets/crc4.png'
import ttrtr from '@/assets/ttrtr.png'
import pwl from '@/assets/pwl.jpeg'
import bgpt from '@/assets/bgpt.jpeg'
import i1 from '@/assets/photos/i1.jpeg'
import i2 from '@/assets/photos/i2.jpeg'
import i3 from '@/assets/photos/i3.jpeg'
import i4 from '@/assets/photos/i4.jpeg'
import i5 from '@/assets/photos/i5.jpeg'
import i6 from '@/assets/photos/i6.jpeg'
import i7 from '@/assets/photos/i7.jpeg'
import i8 from '@/assets/photos/i8.jpeg'
import i9 from '@/assets/photos/i9.jpeg'
import i10 from '@/assets/photos/i10.jpg'
import i11 from '@/assets/photos/i11.jpg'
import i12 from '@/assets/photos/i12.jpg'
import i13 from '@/assets/photos/i13.jpg'
import i14 from '@/assets/photos/i14.jpeg'
import i15 from '@/assets/photos/i15.jpg'
import i16 from '@/assets/photos/i16.jpg'
import i17 from '@/assets/photos/i17.jpg'
import i18 from '@/assets/photos/i18.jpeg'
import i19 from '@/assets/photos/i19.jpg'
import i20 from '@/assets/photos/i20.jpg'
import i21 from '@/assets/photos/i21.jpeg'
import i22 from '@/assets/photos/i22.jpeg'
import i23 from '@/assets/photos/i23.jpg'
import i24 from '@/assets/photos/i24.jpeg'
import i25 from '@/assets/photos/i25.jpeg'
import i26 from '@/assets/photos/i26.jpeg'
import i27 from '@/assets/photos/i27.jpeg'
import i28 from '@/assets/photos/i28.jpeg'
import i29 from '@/assets/photos/i29.jpeg'
import i30 from '@/assets/photos/i30.jpeg'
import i31 from '@/assets/photos/i31.jpeg'
import i32 from '@/assets/photos/i32.jpeg'
import i33 from '@/assets/photos/i33.jpeg'
import i34 from '@/assets/photos/i34.jpeg'
import i35 from '@/assets/photos/i35.jpeg'
import i36 from '@/assets/photos/i36.jpg'
import i37 from '@/assets/photos/i37.jpg'
import i38 from '@/assets/photos/i38.jpeg'
import i39 from '@/assets/photos/i39.jpeg'
import i40 from '@/assets/photos/i40.png'

export default {
  data: () => ({
    tab: null,
    imageDialog: false,
    selectedImage: null,
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
    images: [
      dam,
      crc4,
      ttrtr,
      pwl,
      bgpt,
      i1,
      i2,
      i3,
      i4,
      i5,
      i6,
      i7,
      i8,
      i9,
      i10,
      i11,
      i12,
      i13,
      i14,
      i15,
      i16,
      i17,
      i18,
      i19,
      i20,
      i21,
      i22,
      i23,
      i24,
      i25,
      i26,
      i27,
      i28,
      i29,
      i30,
      i31,
      i32,
      i33,
      i34,
      i35,
      i36,
      i37,
      i38,
      i39,
      i40
    ],
    videos: [
      {
        iFrame:
          `<iframe width="100%" height="250" src="https://www.youtube.com/embed/NDmYxcp0zBw?si=ZHkwPDaf1nEGPpzl&amp;start=16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: 'TECHNICAL SESSION - NIGER DELTA STAKEHOLDERS SUMMIT'
      },
      {
        iFrame:
          `<iframe width="100%" height="250" src="https://www.youtube.com/embed/8sYusLIEK3s?si=7cOYfd1GPewS6sKK&amp;start=14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: 'This Summit will help us find out what our needs are and how to meet those needs'
      },
      {
        iFrame:
          `<iframe width="100%" height="250" src="https://www.youtube.com/embed/wePyajv4FCk?si=nb0YUJmUfCUWzqJf&amp;start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: 'We will discuss issues affecting the people of the Niger Delta'
      },
      {
        iFrame:
          `<iframe width="100%" height="250" src="https://www.youtube.com/embed/v3ulIpeVBKc?si=X_a1VNfaciSHkdLS&amp;start=9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: 'We will fashion out solutions needed for Sustainable Development of the Region'
      },
    ],
  }),
}
</script>

<style></style>
