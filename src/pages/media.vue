<template>
  <div>
    <v-row>
      <v-col cols="12" sm="7">
        <v-img
src="@/assets/ttrtr.png" height="800" cover class="pa-5 d-flex align-end"
          gradient="transparent, rgba(0,0,0,0.9)">
          <div>
            <v-btn
color="white" class="text-green-darken-3 font-weight-bold" :elevation="0"
              style="text-transform: none;">NDDC Highlights</v-btn>

            <p class="text-h3 text-white font-weight-bold mt-5 mb-2">Transforming the region</p>
            <p class="text-h3 text-white font-weight-bold">through Road Construction</p>

            <v-divider class="my-5" color="white" width="60%" />

            <p class="text-white text-h6 mt-5">Every road paved, bridge built is a step towards unlocking the vast
              potential of the Niger Delta.</p>

            <v-btn
class="text-capitalize text-green-lighten-2 font-weight-bold mt-5" append-icon="mdi-arrow-right"
              variant="text">Read
              More</v-btn>
          </div>
        </v-img>
      </v-col>
      <v-col cols="12" sm="5">
        <v-row>
          <v-col cols="12">
            <v-img
src="@/assets/ttrs2.jpeg" height="388" cover class="pa-5 d-flex align-end"
              gradient="transparent, rgba(0,0,0,0.9)">
              <div>
                <p class="text-white text-h6">Every road paved, bridge built is a step towards unlocking the vast
                  potential of the Niger Delta.</p>

                <p class="text-h4 text-white font-weight-bold mt-5 mb-2">Transforming the region</p>
                <p class="text-h4 text-white font-weight-bold">through Road Construction</p>


                <v-btn
class="text-capitalize text-green-lighten-2 font-weight-bold mt-5" append-icon="mdi-arrow-right"
                  variant="text">Read
                  More</v-btn>
              </div>
            </v-img>
          </v-col>

          <v-col cols="12">
            <v-img
src="@/assets/inspection.jpg" height="388" cover class="pa-5 d-flex align-end"
              gradient="transparent, rgba(0,0,0,0.9)">
              <div>
                <p class="text-white text-h6">Every road paved, bridge built is a step towards unlocking the vast
                  potential of the Niger Delta.</p>

                <p class="text-h4 text-white font-weight-bold mt-5 mb-2">Transforming the region</p>
                <p class="text-h4 text-white font-weight-bold">through Road Construction</p>


                <v-btn
class="text-capitalize text-green-lighten-2 font-weight-bold mt-5" append-icon="mdi-arrow-right"
                  variant="text">Read
                  More</v-btn>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-container class="my-16">
      <v-row>
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

      <div class="d-flex align-center justify-space-between my-16">
        <v-sheet width="600">
          <p class="text-green-darken-3 font-weight-bold text-h6 mb-10">News and Update</p>
          <p class="text-h4 font-weight-bold mb-2">Featured Articles</p>
          <p class="text-body-1">Get current updates on our Projects and Programs cut accross the Nine States of
            the
            Niger Delta Region, gain deep insights and analysis of developmental trends.</p>
        </v-sheet>

        <v-btn
class="text-capitalize text-green-darken-3 font-weight-bold" variant="outlined" rounded="0"
          style="border-color: #038735;">See All</v-btn>
      </div>

      <v-row class="mt-10">
        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/power.png" cover height="300" />

            <div class="pa-5">
              <p class="text-h6 font-weight-black mb-5">132KV Transmission Line and Substation in Abia State</p>
              <p class="text-grey-darken-3 text-body-2 mb-2">The NDDC's state-of-the-art 132KV transmission line and
                substation project will transform energy...
              </p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Click here to read the full article</v-btn>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/woman.png" cover height="300" />

            <div class="pa-5">
              <p class="text-h6 font-weight-black mb-5">132KV Transmission Line and Substation in Abia State</p>
              <p class="text-grey-darken-3 text-body-2 mb-2">The NDDC's state-of-the-art 132KV transmission line and
                substation project will transform energy...
              </p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Click here to read the full article</v-btn>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/men.png" cover height="300" />

            <div class="pa-5">
              <p class="text-h6 font-weight-black mb-5">132KV Transmission Line and Substation in Abia State</p>
              <p class="text-grey-darken-3 text-body-2 mb-2">The NDDC's state-of-the-art 132KV transmission line and
                substation project will transform energy...
              </p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Click here to read the full article</v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12" sm="9">
          <v-row>
            <v-col cols="12">
              <div class="d-flex align-center justify-space-between mb-5">
                <v-sheet width="600">
                  <p class="text-green-darken-3 font-weight-bold text-h6 mb-10">Current News</p>
                  <p class="text-h4 font-weight-bold mb-2">Latest NDDC News</p>
                </v-sheet>

                <v-btn
class="text-capitalize text-green-darken-3 font-weight-bold" variant="outlined" rounded="0"
                  style="border-color: #038735;">See All</v-btn>
              </div>
            </v-col>

            <v-col cols="12" sm="7">
              <v-sheet border="sm">
                <v-img src="@/assets/wdp.jpeg" cover height="500" />

                <div class="pa-5">
                  <div class="d-flex mb-5">
                    <div class="d-flex align-center mr-5">
                      <v-icon color="green-darken-3" class="mr-2">mdi-account</v-icon>
                      <p class="text-body-1 text-green-darken-3">Infrastructural Development</p>
                    </div>
                    <p class="text-grey-darken-3 text-body-1">17th July, 2024</p>
                  </div>

                  <p class="text-h6 font-weight-black mb-5 text-decoration-underline">NDDC Program: Building Financial
                    Independence for Women in
                    the Niger Delta</p>
                  <p class="text-grey-darken-3 text-body-2 mb-2">Crystalline Nwachukwu</p>

                  <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                    style="text-transform: none;">Read More</v-btn>
                </div>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="5">
              <v-row>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img src="@/assets/road3.png" cover height="172" position="center" />

                    <div class="pa-5">
                      <p class="text-h6 font-weight-black mb-5 text-decoration-underline">NDDC Program: Building
                        Financial Independence for Women in
                        the Niger Delta</p>
                      <p class="text-grey-darken-3 text-body-2 mb-2">Crystalline Nwachukwu</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Read More</v-btn>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img src="@/assets/bfi.jpeg" cover height="172" position="center" />

                    <div class="pa-5">
                      <p class="text-h6 font-weight-black mb-5 text-decoration-underline">NDDC Program: Building
                        Financial Independence for Women in
                        the Niger Delta</p>
                      <p class="text-grey-darken-3 text-body-2 mb-2">Crystalline Nwachukwu</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Read More</v-btn>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="7">
              <v-sheet border="sm">
                <v-img src="@/assets/students.jpeg" cover height="500" />

                <div class="pa-5">
                  <div class="d-flex mb-5">
                    <div class="d-flex align-center mr-5">
                      <v-icon color="green-darken-3" class="mr-2">mdi-account</v-icon>
                      <p class="text-body-1 text-green-darken-3">Infrastructural Development</p>
                    </div>
                    <p class="text-grey-darken-3 text-body-1">17th July, 2024</p>
                  </div>

                  <p class="text-h6 font-weight-black mb-5 text-decoration-underline">NDDC Program: Building Financial
                    Independence for Women in
                    the Niger Delta</p>
                  <p class="text-grey-darken-3 text-body-2 mb-2">Crystalline Nwachukwu</p>

                  <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                    style="text-transform: none;">Read More</v-btn>
                </div>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="5">
              <v-row>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img src="@/assets/bfifw.jpeg" cover height="172" position="center" />

                    <div class="pa-5">
                      <p class="text-h6 font-weight-black mb-5 text-decoration-underline">NDDC Program: Building
                        Financial Independence for Women in
                        the Niger Delta</p>
                      <p class="text-grey-darken-3 text-body-2 mb-2">Crystalline Nwachukwu</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Read More</v-btn>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img src="@/assets/inspection.jpg" cover height="172" position="center" />

                    <div class="pa-5">
                      <p class="text-h6 font-weight-black mb-5 text-decoration-underline">NDDC Program: Building
                        Financial Independence for Women in
                        the Niger Delta</p>
                      <p class="text-grey-darken-3 text-body-2 mb-2">Crystalline Nwachukwu</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Read More</v-btn>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="mt-16">
            <v-col cols="12">
              <div class="d-flex align-center justify-space-between mb-5">
                <v-sheet width="600">
                  <p class="text-green-darken-3 font-weight-bold text-h6 mb-10">Current News</p>
                  <p class="text-h4 font-weight-bold mb-2">Latest NDDC News</p>
                </v-sheet>

                <v-btn
class="text-capitalize text-green-darken-3 font-weight-bold" variant="outlined" rounded="0"
                  style="border-color: #038735;">See All</v-btn>
              </div>
            </v-col>

            <v-col cols="12" sm="7">
              <v-sheet border="sm">
                <v-img src="@/assets/wdp.jpeg" cover height="500" />

                <div class="pa-5">
                  <div class="d-flex mb-5">
                    <div class="d-flex align-center mr-5">
                      <v-icon color="green-darken-3" class="mr-2">mdi-account</v-icon>
                      <p class="text-body-1 text-green-darken-3">Infrastructural Development</p>
                    </div>
                    <p class="text-grey-darken-3 text-body-1">17th July, 2024</p>
                  </div>

                  <p class="text-h6 font-weight-black mb-5 text-decoration-underline">NDDC Program: Building Financial
                    Independence for Women in
                    the Niger Delta</p>
                  <p class="text-grey-darken-3 text-body-2 mb-2">Crystalline Nwachukwu</p>

                  <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                    style="text-transform: none;">Read More</v-btn>
                </div>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="5">
              <v-row>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img src="@/assets/road3.png" cover height="172" position="center" />

                    <div class="pa-5">
                      <p class="text-h6 font-weight-black mb-5 text-decoration-underline">NDDC Program: Building
                        Financial Independence for Women in
                        the Niger Delta</p>
                      <p class="text-grey-darken-3 text-body-2 mb-2">Crystalline Nwachukwu</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Read More</v-btn>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12">
                  <v-sheet border="sm">
                    <v-img src="@/assets/bfi.jpeg" cover height="172" position="center" />

                    <div class="pa-5">
                      <p class="text-h6 font-weight-black mb-5 text-decoration-underline">NDDC Program: Building
                        Financial Independence for Women in
                        the Niger Delta</p>
                      <p class="text-grey-darken-3 text-body-2 mb-2">Crystalline Nwachukwu</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Read More</v-btn>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="3">
          <v-list :items="importantLinks" />
          <v-list :items="newsArchive" class="mt-5" />
        </v-col>
      </v-row>

      <div class="mt-16 d-flex justify-space-between">
        <div class="left d-flex justify-start align-center">
          <v-icon class="mr-5" size="90" color="green-darken-4">mdi-email</v-icon>
          <div>
            <p class="text-h5 font-weight-thin text-green-darken-3">Stay Connected</p>
            <p class="text-h4 font-weight-bold text-green-darken-3 mt-4">Join our Newsletter to stay updated</p>
          </div>
        </div>

        <div class="right d-flex">
          <v-sheet class="pa-2 d-flex align-center" border="sm" height="40">
            <input type="text" placeholder="Enter your email address" class="contact-input">
          </v-sheet>
          <v-btn rounded="0" color="green-darken-4" height="40" :elevation="0">Subscribe</v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
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
    ],
  }),
}
</script>
