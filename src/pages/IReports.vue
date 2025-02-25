<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <p class="block-text text-body-1 text-sm-h6 text-md-h5 font-weight-bold">
            What is iReport
          </p>
        </v-col>
        <v-col cols="12">
          <p class="main-text text-caption text-sm-body-2 text-md-body-1">
            The iReport (Power - Project Operations Warning and Early Response) System is an adaptable mechanism
            tailored to effectively prevent and mitigate various project delivery failures and incidents that can
            prevent projects from reaching their desired and required objectives of the NDDC.
          </p>
        </v-col>
        <v-col cols="12" sm="6">
          <p class="main-text text-caption text-sm-body-2 text-md-body-1">
            The iReport system aims at enhancing project capabilities in the following areas:
          </p>

          <ul>
            <li class="main-text text-caption text-sm-body-2 text-md-body-1 font-weight-bold mt-2">
              Monitoring and Reporting:
            </li>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              Efficiently identify and transmit potential risks in ongoing projects.
            </p>

            <li class="main-text text-caption text-sm-body-2 text-md-body-1 font-weight-bold mt-2">
              Incident Management and Verification:
            </li>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              Prioritize and Validate Information from Field monitors.
            </p>

            <li class="main-text text-caption text-sm-body-2 text-md-body-1 font-weight-bold mt-2">
              Co-ordinated Response:
            </li>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              Facilitate multi-stakeholder preventive actions and instant responses.
            </p>

            <li class="main-text text-caption text-sm-body-2 text-md-body-1 font-weight-bold mt-2">
              Data Analysis And Reporting:
            </li>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              Assessing data trends for analysis and reporting.
            </p>
          </ul>

          <v-btn @click="dialog = true" append-icon="mdi-pencil" color="green-darken-3" rounded="0" :elevation="0"
            class="mt-5 main-text text-caption text-sm-body-2 text-md-body-1" text="Send I Report" />

          <v-dialog max-width="500" v-model="dialog" scrollable :fullscreen="fullscreen">
            <v-card max-width="800">
              <v-card-tite class="d-flex">
                <v-spacer></v-spacer>

                <v-btn @click="dialog = !dialog" icon flat>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-tite>

              <v-card-text style="height: 400px;">
                <p class="block-text text-h5 text-sm-h4 font-weight-bold text-center">
                  Send iReport
                </p>
                <p class="main-text text-grey-darken-2 text-caption text-sm-body-2 text-md-body-1 mt-5">
                  You must upload at least one picture
                </p>
                <p class="main-text mt-4 text-caption text-sm-body-2 text-md-body-1">
                  Tell Us What You Want To Report On (In the Comment section kindly indicate detailed description of
                  the Cntractor Name, the exect loctaion of the Project and a brief description of the situation as
                  witnessed.)
                </p>

                <v-card-text class="mt-5 pa-0">
                  <v-row>
                    <v-col cols="12">
                      <v-select label="Select Report Type"
                        :items="['NDDC Ongoing Project', 'NDDC Abandoned Project', 'Poor Project Quality', 'Incompetent Contractor', 'NDDC Program']"
                        variant="outlined" hide-details density="compact" v-model="iReportData.reportType"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Enter Report Title" variant="outlined" hide-details density="compact"
                        class="main-text text-caption text-sm-body-2 text-md-body-1"
                        v-model="iReportData.reportTitle" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Your name" variant="outlined" hide-details density="compact"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" v-model="iReportData.name" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Email address" variant="outlined" hide-details density="compact"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" v-model="iReportData.email" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Phone number" variant="outlined" hide-details density="compact"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" v-model="iReportData.phone" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select label="Select Your State"
                        :items="['Abia', 'Akwa Ibom', 'Bayelsa', 'Cross Rivers', 'Delta', 'Edo', 'Imo', 'Ondo', 'Rivers']"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" variant="outlined" hide-details
                        density="compact" v-model="iReportData.state" />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Enter the location of the project" variant="outlined" hide-details
                        class="main-text text-caption text-sm-body-2 text-md-body-1" density="compact"
                        v-model="iReportData.projectLocation" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-file-input @change="selectImage1" accept="image/*" label="Upload photo" variant="outlined"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" hide-details density="compact" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-file-input @change="selectImage2" accept="image/*" label="Upload photo" variant="outlined"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" hide-details density="compact" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-file-input @change="selectImage3" accept="image/*" label="Upload photo" variant="outlined"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" hide-details density="compact" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-file-input @change="selectImage4" accept="image/*" label="Upload photo" variant="outlined"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" hide-details density="compact" />
                    </v-col>
                    <v-col cols="12">
                      <v-textarea label="Enter your comment" variant="outlined" hide-details density="compact"
                        class="main-text text-caption text-sm-body-2 text-md-body-1" />
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card-text>


              <v-card-actions>
                <v-spacer />

                <v-btn text="Send Report"
                  class="main-text bg-green-darken-3 text-white text-caption text-sm-body-2 text-md-body-1" rounded="0"
                  :elevation="0" @click="saveIReport" :loading="loading" />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="6" />
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar" location="top right" color="green">
      {{ text }}

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export default {
  data: () => ({
    loading: false,
    snackbar: false,
    text: `Hello, I'm a snackbar`,
    displayFullScreen: null,
    dialog: false,
    iReportData: {
      reportType: '',
      reportTitle: '',
      name: '',
      email: '',
      phone: '',
      state: '',
      projectLocation: '',
      comment: '',
      image1: null,
      image2: null,
      image3: null,
      image4: null,
    }
  }),

  created () {
    const { name } = this.$vuetify.display;
    this.displayFullScreen = name;
  },

  methods: {
    selectImage1 (event) {
      const file = event.target.files[0];
      if (file) {
        this.iReportData.image1 = file
      }
    },
    selectImage2 (event) {
      const file = event.target.files[0];
      if (file) {
        this.iReportData.image2 = file
      }
    },
    selectImage3 (event) {
      const file = event.target.files[0];
      if (file) {
        this.iReportData.image3 = file
      }
    },
    selectImage4 (event) {
      const file = event.target.files[0];
      if (file) {
        this.iReportData.image4 = file
      }
    },
    async saveIReport () {
      const uploadTasks = [];

      if (this.iReportData.image1) {
        this.loading = true

        // Upload extra images
        const images = [
          this.iReportData.image1,
          this.iReportData.image2,
          this.iReportData.image3,
          this.iReportData.image4,
        ]

        images.forEach((file, index) => {
          if (file) {
            uploadTasks.push(
              this.uploadFile(file, `iReport/extraImage${index + 1}/${new Date()}`, 'extra')
            );
          }
        });

        try {
          const uploadedImages = await Promise.all(uploadTasks);
          console.log('save data')
          this.loading = true
          // Save to Firestore
          await addDoc(collection(db, "iReport"), {
            reportType: this.iReportData.reportType,
            reportTitle: this.iReportData.reportTitle,
            name: this.iReportData.name,
            email: this.iReportData.email,
            phone: this.iReportData.phone,
            state: this.iReportData.state,
            projectLocation: this.iReportData.projectLocation,
            comment: this.iReportData.comment,
            images: uploadedImages,
            timestamp: serverTimestamp()
          });

          console.log(uploadedImages)
          this.loading = false
          this.snackbar = true
          this.text = 'iReport sent successfully'
        } catch (error) {
          console.error("Error uploading images:", error);
          alert("Failed to upload images. Please try again.");
        }
      }
    },

    uploadFile (file, path, name) {
      const storage = getStorage()

      return new Promise(async (resolve, reject) => {
        try {
          const storageRef = ref(storage, path);
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          resolve({ path, downloadURL, name });
        } catch (error) {
          reject(error);
        }
      });
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
