<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="2"
      >
        <p class="text-green-darken-3 mb-1 font-weight-bold">
          From:
        </p>
        <v-dialog max-width="400">
          <template #activator="{ props: activatorProps }">
            <v-sheet
              v-bind="activatorProps"
              border="sm"
              rounded="md"
              height="50"
              class="d-flex align-center px-2"
            >
              <v-icon class="mx-2">
                mdi-calendar-month-outline
              </v-icon>

              <span class="text-body-2 text-grey-darken-2">DD/MM/YYY</span>
            </v-sheet>
          </template>

          <template>
            <v-card>
              <v-card-text>
                <v-date-picker />
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
      </v-col>

      <v-col
        cols="12"
        sm="2"
      >
        <p class="text-green-darken-3 mb-1 font-weight-bold">
          To:
        </p>
        <v-dialog max-width="400">
          <template #activator="{ props: activatorProps }">
            <v-sheet
              v-bind="activatorProps"
              border="sm"
              rounded="md"
              height="50"
              class="d-flex align-center px-2"
            >
              <v-icon class="mx-2">
                mdi-calendar-month-outline
              </v-icon>

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

      <v-col
        cols="12"
        sm="8"
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
  </v-container>
</template>
