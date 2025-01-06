<template>
  <v-container class="py-16">
    <v-row>
      <v-col
        cols="12"
        sm="8"
      >
        <p class="main-text text-green-darken-3 font-weight-bold text-body-1 text-sm-h6 mb-5">
          Who We Are
        </p>
        <v-row no-gutters>
          <v-col
            cols="12"
            md="8"
          >
            <p class="block-text text-h4 text-sm-h3 font-weight-bold mb-2">
              Empowering the <span class="text-green-darken-4">Niger Delta</span>, Building a <span
                class="text-green-darken-4"
              >Brighter Future</span> for it's people
            </p>
          </v-col>
        </v-row>
        <p class="text-grey-darken-3 text-body-2 text-sm-body-1">
          At the Niger Delta Development Commission (NDDC), we aim to drive
          economic prosperity, social stability, and environmental regeneration in a region rich in potential but
          historically underserved
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      />
    </v-row>

    <v-img
      src="@/assets/3.png"
      class="my-16 rounded-xl"
    />

    <v-divider class="my-16" />

    <v-row class="align-center">
      <v-col
        cols="12"
        sm="3"
      >
        <p class="block-text font-weight-bold text-h6 text-sm-h5 text-md-h4">
          Who we are?
        </p>
      </v-col>

      <v-col
        cols="12"
        sm="9"
      >
        <p class="main-text text-grey-darken-4 text-body-2 text-sm-body-1 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          accusantium rerum, illo deserunt officia sed repellendus vero voluptate eum fugit accusamus ipsam molestiae et
          iste nemo numquam placeat repudiandae minima. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum natus deleniti praesentium asperiores maiores, voluptatem repudiandae tempore accusantium quidem
          impedit perspiciatis veniam laboriosam perferendis alias reiciendis enim nihil voluptate culpa.
        </p>

        <p class="main-text text-grey-darken-4 text-body-2 text-sm-body-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          accusantium rerum, illo deserunt officia sed repellendus vero voluptate eum fugit accusamus ipsam molestiae et
          iste nemo numquam placeat repudiandae minima. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum natus deleniti praesentium asperiores maiores, voluptatem repudiandae tempore accusantium quidem
          impedit perspiciatis veniam laboriosam perferendis alias reiciendis enim nihil voluptate culpa.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-16 align-center">
      <v-col
        cols="12"
        class="d-flex d-sm-none"
      >
        <p class="block-text font-weight-bold text-h6 text-sm-h5 text-md-h4 mb-5">
          History of NDDC
        </p>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        order="1"
        order-sm="0"
      >
        <p class="block-text d-none d-sm-flex font-weight-bold text-h6 text-sm-h5 text-md-h4 mb-5">
          History of NDDC
        </p>

        <p class="main-text text-grey-darken-4 text-body-2 text-sm-body-1 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus repellat consequuntur nisi? Molestias eaque quo eveniet possimus deserunt eum nihil facere nobis
          illum accusantium, aliquam voluptatibus cum asperiores pariatur dolorum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic enim, vel harum nisi et, vero asperiores rem quidem dolorum cum numquam non
          ex doloribus porro quos provident officiis neque sapiente.
        </p>

        <p class="main-text text-grey-darken-4 text-body-2 text-sm-body-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          repellat consequuntur nisi? Molestias eaque quo eveniet possimus deserunt eum nihil facere nobis illum
          accusantium, aliquam voluptatibus cum asperiores pariatur dolorum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Hic enim, vel harum nisi et, vero asperiores rem quidem dolorum cum numquam non ex doloribus
          porro quos provident officiis neque sapiente.
        </p>

        <v-btn
          class="main-text text-body-2 text-sm-body-1 text-capitalize mt-5 font-weight-bold"
          color="green-darken-4"
          rounded="0"
          append-icon="mdi-arrow-right"
          :elevation="0"
        >
          Contact Us
        </v-btn>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-img src="@/assets/4.png" />
      </v-col>
    </v-row>

    <v-row class="my-16">
      <v-col
        cols="12"
        sm="3"
      >
        <p class="block-text font-weight-bold text-h6 text-sm-h5 text-md-h4 mb-2 mb-sm-5">
          Act of NDDC
        </p>
      </v-col>

      <v-col
        cols="12"
        sm="9"
      >
        <router-link
          class="main-text text-green-darken-4 font-weight-bold text-body-1 text-sm-h5"
          to="/"
        >
          Click this link to download the ACT of
          the Niget Delta Development Commission
        </router-link>
      </v-col>
    </v-row>

    <v-divider class="my-16" />

    <v-sheet>
      <p class="main-text text-green-darken-4 font-weight-bold text-body-1 text-sm-h6">
        Our Main Offices
      </p>

      <p class="block-text font-weight-bold text-h5 text-sm-h4 my-5">
        Now We Are in 4 States
      </p>

      <p class="main-text text-grey-3 text-body-2 text-sm-body-1">
        Get current updates on our Projects and Programs cut accross the Nine States of
        the Niger Delta Region.
      </p>

      <v-row class="mt-5">
        <v-col
          cols="12"
          sm="5"
        >
          <v-expansion-panels
            :elevation="0"
            multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-title class="main-text font-weight-bold text-body-2 text-sm-h6">
                NDDC Headquater
                <template #actions="{ expanded }">
                  <v-sheet
                    color="green-darken-4"
                    class="pa-1 rounded-lg"
                  >
                    <v-icon
                      color="white"
                      :icon="expanded ? 'mdi-minus' : 'mdi-plus'"
                    />
                  </v-sheet>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="main-text text-body-2 text-sm-body-1">
                  Eastern Bypass Marine Base, Port Harcourt. Rivers State
                </p>
                <div class="d-flex mt-2">
                  <v-icon
                    color="green-darken-3"
                    class="mr-2"
                  >
                    mdi-email
                  </v-icon>
                  <p class="main-text text-body-2 text-sm-body-1">
                    info@nddc.gov.ng
                  </p>
                </div>
                <div class="d-flex mt-2">
                  <v-icon
                    color="green-darken-3"
                    class="mr-2"
                  >
                    mdi-phone
                  </v-icon>
                  <p class="main-text text-body-2 text-sm-body-1">
                    +234 702 657 2314
                  </p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title class="main-text font-weight-bold text-body-2 text-sm-h6">
                Akwa-Ibom Rigional Office
                <template #actions="{ expanded }">
                  <v-sheet
                    color="green-darken-4"
                    class="pa-1 rounded-lg"
                  >
                    <v-icon
                      color="white"
                      :icon="expanded ? 'mdi-minus' : 'mdi-plus'"
                    />
                  </v-sheet>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="main-text text-body-2 text-sm-body-1">
                  Eastern Bypass Marine Base, Port Harcourt. Rivers State
                </p>
                <div class="d-flex mt-2">
                  <v-icon
                    color="green-darken-3"
                    class="mr-2"
                  >
                    mdi-email
                  </v-icon>
                  <p class="main-text text-body-2 text-sm-body-1">
                    info@nddc.gov.ng
                  </p>
                </div>
                <div class="d-flex mt-2">
                  <v-icon
                    color="green-darken-3"
                    class="mr-2"
                  >
                    mdi-phone
                  </v-icon>
                  <p class="main-text text-body-2 text-sm-body-1">
                    +234 702 657 2314
                  </p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col
          cols="12"
          sm="7"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9858541652843!2d7.017670175509909!3d4.772395541030767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cda9d82836e7%3A0xc34b50422d11500a!2sNDDC%20HEAD%20OFFICE!5e0!3m2!1sen!2sus!4v1735090891739!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </v-col>
      </v-row>
    </v-sheet>

    <Haveaquestion />
  </v-container>
</template>

<script>
export default {

}
</script>

<style></style>