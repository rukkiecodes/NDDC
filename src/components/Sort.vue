<template>
  <v-container>
    <v-row class="align-end">
      <v-col cols="12" sm="2">
        <p class="main-text text-caption text-sm-body-2 text-md-body-1 text-green-darken-3 mb-1 font-weight-bold">
          From:
        </p>
        <v-dialog max-width="400">
          <template #activator="{ props: activatorProps }">
            <v-sheet v-bind="activatorProps" border="sm" rounded="md" height="50" class="d-flex align-center px-2">
              <v-icon class="mx-2">
                mdi-calendar-month-outline
              </v-icon>

              <span class="main-text text-caption text-sm-body-2 text-md-body-1 text-grey-darken-2">DD/MM/YYY</span>
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
        <p class="main-text text-caption text-sm-body-2 text-md-body-1 text-green-darken-3 mb-1 font-weight-bold">
          To:
        </p>
        <v-dialog max-width="400">
          <template #activator="{ props: activatorProps }">
            <v-sheet v-bind="activatorProps" border="sm" rounded="md" height="50" class="d-flex align-center px-2">
              <v-icon class="mx-2">
                mdi-calendar-month-outline
              </v-icon>

              <span class="main-text text-caption text-sm-body-2 text-md-body-1 text-grey-darken-2">DD/MM/YYY</span>
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

      <div style="background-color: #37723B; width: 1px; height: 80px; opacity: 0.6" class="mb-2 d-none d-md-flex" />

      <v-col cols="12" sm="7">
        <p class="main-text text-caption text-sm-body-2 text-md-body-1 text-green-darken-3 mb-1 font-weight-bold">
          Search
        </p>
        <v-sheet border="sm" rounded="md" height="50" class="d-flex align-center px-2">
          <v-icon class="mx-2">
            mdi-magnify
          </v-icon>

          <input type="text" placeholder="Search for names, articles, references etc"
            style="flex: 1; height: 100%; outline: none" class="main-text text-caption text-sm-body-2 text-md-body-1">
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
