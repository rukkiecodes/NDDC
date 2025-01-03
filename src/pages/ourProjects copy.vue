<template>
  <div>
    <v-img src="@/assets/delta-roads.png" class="d-flex justify-center align-center" :height="600" cover>
      <v-sheet height="600" color="rgba(0,0,0,0.6)" class="d-flex align-center">
        <v-sheet color="transparent" width="700" class="mx-auto text-center">
          <p class="text-white font-weight-black text-h2 mb-2">Transforming the region through</p>
          <p class="text-white font-weight-black text-h2">Road Construction</p>

          <p class="text-white text-h6 my-5">Every road paved, bridge built is a step towards unlocking the vast
            potential
            of the Niger Delta.</p>

          <v-btn
class="text-capitalize" :elevation="0" prepend-icon="mdi-play-circle-outline" variants="outlined"
            rounded="0" color="green-darken-3">
            Watch our video
          </v-btn>
        </v-sheet>
      </v-sheet>
    </v-img>

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
    </v-container>

    <v-container class="mt-10">
      <v-card :elevation="0">
        <v-tabs v-model="tab" bg-color="white">
          <v-tab value="Ongoing Road Construction" class="text-capitalize">Ongoing Road Construction</v-tab>
          <v-tab value="Completed Road Construction" class="text-capitalize">Completed Road Construction</v-tab>
        </v-tabs>

        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="Ongoing Road Construction">
              <v-row class="align-end">
                <v-col cols="12" sm="7">
                  <p class="text-h4 font-weight-bold mb-5">The 25.7-kilometre Ogbia-Nembe Road</p>
                  <p class="mb-5 text-body-1">
                    Donec ultricies quam urna, ac tincidunt massa porttitor eu. Duis suscipit mi est, eu facilisis
                    sapien volutpat quis. Sed non quam a mauris semper mollis. Praesent magna nisl, pretium at risus ut,
                    eleifend consequat nibh. Morbi magna magna, hendrerit at libero at, luctus posuere.
                  </p>

                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-img src="@/assets/road2.jpg" height="300" cover />
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-img src="@/assets/inspection.jpg" height="300" cover />
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" sm="5">
                  <v-img src="@/assets/road.jpg" />
                </v-col>
              </v-row>

              <p class="text-body-1 mb-5 my-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis risus quis lorem hendrerit
                volutpat a ut ligula. Phasellus posuere tortor a ex varius hendrerit. Mauris feugiat vehicula sem, ac
                finibus leo pulvinar quis. Phasellus ac consequat velit. Aliquam id enim lorem. Donec placerat vehicula
                faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
                pellentesque hendrerit commodo. Cras cursus elit eu nibh hendrerit, ut maximus sem rhoncus. Etiam dictum
                massa a molestie interdum.
              </p>
              <p class="text-body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis risus quis lorem hendrerit
                volutpat a ut ligula. Phasellus posuere tortor a ex varius hendrerit. Mauris feugiat vehicula sem, ac
                finibus leo pulvinar quis. Phasellus ac consequat velit. Aliquam id enim lorem. Donec placerat vehicula
                faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
                pellentesque hendrerit commodo. Cras cursus elit eu nibh hendrerit, ut maximus sem rhoncus. Etiam dictum
                massa a molestie interdum.
              </p>

              <v-img src="@/assets/road3.png" cover class="my-10" />

              <p class="text-body-1 mb-5 my-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis risus quis lorem hendrerit
                volutpat a ut ligula. Phasellus posuere tortor a ex varius hendrerit. Mauris feugiat vehicula sem, ac
                finibus leo pulvinar quis. Phasellus ac consequat velit. Aliquam id enim lorem. Donec placerat vehicula
                faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
                pellentesque hendrerit commodo. Cras cursus elit eu nibh hendrerit, ut maximus sem rhoncus. Etiam dictum
                massa a molestie interdum.
              </p>
              <p class="text-body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis risus quis lorem hendrerit
                volutpat a ut ligula. Phasellus posuere tortor a ex varius hendrerit. Mauris feugiat vehicula sem, ac
                finibus leo pulvinar quis. Phasellus ac consequat velit. Aliquam id enim lorem. Donec placerat vehicula
                faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
                pellentesque hendrerit commodo. Cras cursus elit eu nibh hendrerit, ut maximus sem rhoncus. Etiam dictum
                massa a molestie interdum.
              </p>

              <v-pagination :length="4" class="mt-16" />
            </v-tabs-window-item>

            <v-tabs-window-item value="Completed Road Construction">
              <div class="d-flex align-center justify-space-between">
                <v-sheet width="600">
                  <p class="text-green-darken-3 font-weight-bold text-h6 mb-10">Our Projects</p>
                  <p class="text-h4 font-weight-bold mb-2">Completed NDDC Road Projects</p>
                  <p class="text-body-1">Get current updates on our Projects and Programs cut accross the Nine States of
                    the
                    Niger Delta Region, gain deep insights and analysis of developmental trends.</p>
                </v-sheet>

                <v-btn
class="text-capitalize text-green-darken-3 font-weight-bold" variant="outlined" rounded="0"
                  style="border-color: #038735;">See All</v-btn>
              </div>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-sheet border="sm">
                    <v-img src="@/assets/power.png" height="300" cover />

                    <div class="pa-5">
                      <p class="font-weight-black text-h5">132KV Transmission Line and Substation in Abia State</p>

                      <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation
                        project
                        will transform energy...</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Click here to read the full article</v-btn>
                    </div>
                  </v-sheet>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-sheet border="sm">
                    <v-img src="@/assets/srs1.png" height="300" cover />

                    <div class="pa-5">
                      <p class="font-weight-black text-h5">132KV Transmission Line and Substation in Abia State</p>

                      <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation
                        project
                        will transform energy...</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Click here to read the full article</v-btn>
                    </div>
                  </v-sheet>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-sheet border="sm">
                    <v-img src="@/assets/crc2.png" height="300" cover />

                    <div class="pa-5">
                      <p class="font-weight-black text-h5">132KV Transmission Line and Substation in Abia State</p>

                      <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation
                        project
                        will transform energy...</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Click here to read the full article</v-btn>
                    </div>
                  </v-sheet>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-sheet border="sm">
                    <v-img src="@/assets/crc3.png" height="300" cover />

                    <div class="pa-5">
                      <p class="font-weight-black text-h5">132KV Transmission Line and Substation in Abia State</p>

                      <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation
                        project
                        will transform energy...</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Click here to read the full article</v-btn>
                    </div>
                  </v-sheet>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-sheet border="sm">
                    <v-img src="@/assets/crc4.png" height="300" cover />

                    <div class="pa-5">
                      <p class="font-weight-black text-h5">132KV Transmission Line and Substation in Abia State</p>

                      <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation
                        project
                        will transform energy...</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Click here to read the full article</v-btn>
                    </div>
                  </v-sheet>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-sheet border="sm">
                    <v-img src="@/assets/crc5.png" height="300" cover />

                    <div class="pa-5">
                      <p class="font-weight-black text-h5">132KV Transmission Line and Substation in Abia State</p>

                      <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation
                        project
                        will transform energy...</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Click here to read the full article</v-btn>
                    </div>
                  </v-sheet>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-sheet border="sm">
                    <v-img src="@/assets/crc6.png" height="300" cover />

                    <div class="pa-5">
                      <p class="font-weight-black text-h5">132KV Transmission Line and Substation in Abia State</p>

                      <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation
                        project
                        will transform energy...</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Click here to read the full article</v-btn>
                    </div>
                  </v-sheet>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-sheet border="sm">
                    <v-img src="@/assets/crc7.png" height="300" cover />

                    <div class="pa-5">
                      <p class="font-weight-black text-h5">132KV Transmission Line and Substation in Abia State</p>

                      <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation
                        project
                        will transform energy...</p>

                      <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                        style="text-transform: none;">Click here to read the full article</v-btn>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>

      <div class="d-flex align-center justify-space-between mt-16">
        <v-sheet width="600">
          <p class="text-green-darken-3 font-weight-bold text-h6 mb-10">News and Update</p>
          <p class="text-h4 font-weight-bold mb-2">Featured Articles</p>
          <p class="text-body-1">Get current updates on our Projects and Programs cut accross the Nine States of the
            Niger Delta Region, gain deep insights and analysis of developmental trends.</p>
        </v-sheet>

        <v-btn
class="text-capitalize text-green-darken-3 font-weight-bold" variant="outlined" rounded="0"
          style="border-color: #038735;">See All</v-btn>
      </div>

      <v-row class="mt-10">
        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/power.png" />

            <div class="pa-5">
              <p class="font-weight-black text-h5">132KV Transmission Line</p>
              <p class="font-weight-black text-h5">and Substation in Abia State</p>

              <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation project
                will transform energy...</p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Click here to read the full article</v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/woman.png" />

            <div class="pa-5">
              <p class="font-weight-black text-h5">132KV Transmission Line</p>
              <p class="font-weight-black text-h5">and Substation in Abia State</p>

              <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation project
                will transform energy...</p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Click here to read the full article</v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="4">
          <v-sheet border="sm">
            <v-img src="@/assets/men.png" />

            <div class="pa-5">
              <p class="font-weight-black text-h5">132KV Transmission Line</p>
              <p class="font-weight-black text-h5">and Substation in Abia State</p>

              <p class="text-body-2 my-2">The NDDC's state-of-the-art 132KV transmission line and substation project
                will transform energy...</p>

              <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                style="text-transform: none;">Click here to read the full article</v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>

<style></style>