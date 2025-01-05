<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="text-center"
        >
          <p class="block-text text-h5 text-sm-h4 font-weight-bold">
            What is iReport
          </p>
        </v-col>
        <v-col cols="12">
          <p class="main-text text-body-2 text-sm-body-1">
            The iReport (Power - Project Operations Warning and Early Response) System is an adaptable mechanism
            tailored to effectively prevent and mitigate various project delivery failures and incidents that can
            prevent projects from reaching their desired and required objectives of the NDDC.
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <p class="main-text text-body-2 text-sm-body-1">
            The iReport system aims at enhancing project capabilities in the following areas:
          </p>

          <ul>
            <li class="main-text text-body-2 text-sm-body-1 font-weight-bold mt-2">
              Monitoring and Reporting:
            </li>
            <p class="main-text text-body-2 text-sm-body-1">
              Efficiently identify and transmit potential risks in ongoing projects.
            </p>

            <li class="main-text text-body-2 text-sm-body-1 font-weight-bold mt-2">
              Incident Management and Verification:
            </li>
            <p class="main-text text-body-2 text-sm-body-1">
              Prioritize and Validate Information from Field monitors.
            </p>

            <li class="main-text text-body-2 text-sm-body-1 font-weight-bold mt-2">
              Co-ordinated Response:
            </li>
            <p class="main-text text-body-2 text-sm-body-1">
              Facilitate multi-stakeholder preventive actions and instant responses.
            </p>

            <li class="main-text text-body-2 text-sm-body-1 font-weight-bold mt-2">
              Data Analysis And Reporting:
            </li>
            <p class="main-text text-body-2 text-sm-body-1">
              Assessing data trends for analysis and reporting.
            </p>
          </ul>

          <v-dialog
            max-width="500"
            scrollable
          >
            <template #activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                append-icon="mdi-pencil"
                color="green-darken-3"
                rounded="0"
                :elevation="0"
                class="mt-5 main-text text-body-2 text-sm-body-1"
                text="Send I Report"
              />
            </template>

            <template #default="{ isActive }">
              <v-card
                max-width="800"
              >
                <v-card-text>
                  <p class="block-text text-h5 text-sm-h4 font-weight-bold text-center">
                    Send iReport
                  </p>
                  <p class="main-text text-grey-darken-2 text-body-2 text-sm-body-1 mt-5">
                    You must upload at least one picture
                  </p>
                  <p class="main-text mt-4 text-body-2 text-sm-body-1">
                    Tell Us What You Want To Report On (In the Comment section kindly indicate detailed description of
                    the Cntractor Name, the exect loctaion of the Project and a brief description of the situation as
                    witnessed.)
                  </p>
                </v-card-text>

                <v-card-text
                  class="mt-5"
                  style="height: 400px;"
                >
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        label="Select Report Type"
                        :items="['NDDC Ongoing Project', 'NDDC Abandoned Project', 'Poor Project Quality', 'Incompetent Contractor', 'NDDC Program']"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Enter Report Title"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-text-field
                        label="Your name"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-text-field
                        label="Email address"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-text-field
                        label="Phone number"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-select
                        label="Select Your State"
                        :items="['Abia', 'Akwa Ibom', 'Bayelsa', 'Cross Rivers', 'Delta', 'Edo', 'Imo', 'Ondo', 'Rivers']"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Enter the location of the project"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-file-input
                        accept="image/*"
                        label="Upload photo"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-file-input
                        accept="image/*"
                        label="Upload photo"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-file-input
                        accept="image/*"
                        label="Upload photo"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                    >
                      <v-file-input
                        accept="image/*"
                        label="Upload photo"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        label="Enter your comment"
                        variant="outlined"
                        hide-details
                        density="compact"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />

                  <v-btn
                    text="Send Report"
                    class="main-text bg-green-darken-3 text-white text-body-2 text-sm-body-1"
                    rounded="0"
                    :elevation="0"
                    @click="isActive.value = false"
                  />
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
}
</script>

<style></style>