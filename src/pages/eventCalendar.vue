<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-sheet>
            <p class="main-text text-body-2 text-sm-body-1 text-green-darken-3 font-weight-bold mb-5 mb-sm-10">
              Events Calendar
            </p>
            <p class="block-text text-h4 font-weight-bold mb-2">
              Take a look at the events we have planned
            </p>
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        />
      </v-row>

      <v-divider
        class="my-5"
        width="200"
      />

      <div>
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
            <p class="text-green-darken-3 mb-1 font-weight-bold">
              Filter
            </p>
            <v-sheet
              border="sm"
              rounded="md"
              height="50"
              class="d-flex align-center px-2"
            >
              <v-icon class="mx-2">
                mdi-filter-variant
              </v-icon>

              <span class="text-body-2 text-grey-darken-2">Select Filter</span>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="9"
          >
            <p class="text-green-darken-3 mb-1 font-weight-bold">
              Search
            </p>
            <v-sheet
              v-bind="activatorProps"
              border="sm"
              rounded="md"
              height="50"
              class="d-flex align-center px-2"
            >
              <v-icon class="mx-2">
                mdi-magnify
              </v-icon>

              <input
                type="text"
                placeholder="Search for names, articles, references etc"
                style="flex: 1; height: 100%; outline: none"
              >
            </v-sheet>
          </v-col>
        </v-row>
      </div>

      <v-row class="mt-16">
        <v-col
          cols="12"
          sm="4"
        >
          <v-sheet class="d-flex justify-center">
            <v-date-picker />
          </v-sheet>

          <v-row>
            <v-col cols="12">
              <p class="text-h5 font-weight-bold">
                Filters
              </p>
            </v-col>

            <v-col cols="2" />
            <v-col
              cols="10"
              class="d-flex align-center ga-4"
            >
              <v-sheet
                width="20"
                height="20"
                color="#0033FF"
                rounded="pill"
              />
              <p class="text-body-1 font-weight-bold">
                Meet Ups
              </p>
            </v-col>
            <v-col cols="2" />
            <v-col
              cols="10"
              class="d-flex align-center ga-4"
            >
              <v-sheet
                width="20"
                height="20"
                color="#890387"
                rounded="pill"
              />
              <p class="text-body-1 font-weight-bold">
                Workshops
              </p>
            </v-col>
            <v-col cols="2" />
            <v-col
              cols="10"
              class="d-flex align-center ga-4"
            >
              <v-sheet
                width="20"
                height="20"
                color="#00B383"
                rounded="pill"
              />
              <p class="text-body-1 font-weight-bold">
                Conferences
              </p>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          sm="8"
        >
          <v-sheet
            v-for="(date, index) in dates"
            :key="index"
            class="d-flex justify-space-between align-center px-5 ga-5 mb-5"
            border="s-lg opacity-100"
            :style="{ 'border-left-color': date + '!important' }"
          >
            <div>
              <div class="d-flex ga-2 mb-5">
                <v-icon>mdi-clock-outline</v-icon>

                <p class="main-text text-body-2 text-sm-body-1">
                  12:00pm - 2:00pm
                </p>
              </div>

              <p class="block-text text-h6 text-sm-h5 font-weight-bold">
                Youth Leaders Meet and Greet
              </p>
              <p class="main-text mt-2 mt-sm-5 text-grey-darken-2 text-body-1">
                A forward-looking document outlining the strategic goals
                and roadmap for the future of development in
                the Niger Delta. A bi-monthly newsletter featuring real-time updates...
              </p>

              <v-btn
                variant="text"
                color="green-darken-3"
                class="main-text text-body-2 text-sm-body-1 text-capitalize font-weight-bold mt-2 mt-sm-5"
                append-icon="mdi-arrow-right"
              >
                Read more
              </v-btn>
            </div>

            <div class="d-flex flex-column justify-center align-center text-center">
              <p
                class="text-h5 font-weight-bold"
                :style="{ 'color': date + '!important' }"
              >
                2
              </p>
              <p
                class="main-text text-body-2 text-sm-body-1 font-weiht-bold"
                :style="{ 'color': date + '!important' }"
              >
                SEPTEMBER
              </p>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <Haveaquestion class="my-16" />
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    dates: [
      '#00B383',
      '#0033FF',
      '#890387',
      '#890387',
      '#0033FF'
    ]
  })
}
</script>

<style></style>