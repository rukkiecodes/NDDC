<template>
  <div>
    <v-sheet
      color="#F1F4FF"
      class="mb-16"
    >
      <v-container class="py-16">
        <v-row>
          <v-col
            cols="12"
            sm="5"
            order="1"
            order-sm="0"
          >
            <v-sheet
              color="transparent"
              max-width="700"
            >
              <p
                class="block-text text-green-darken-3 font-weight-black text-h4 text-sm-h3 mb-4"
                v-text="programData?.heading"
              />

              <p
                class="main-text text-grey-darken-3 text-h6 my-5 text-body-2 text-sm-body-1"
                v-text="programData?.about"
              />

              <div class="right d-flex">
                <v-sheet
                  class="pa-2 d-flex flex-fill align-center"
                  border="sm"
                  height="50"
                >
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    class="contact-input main-text"
                    style="flex: 1"
                  >
                </v-sheet>
                <v-btn
                  class="main-text text-capitalize"
                  rounded="0"
                  color="green-darken-4"
                  height="50"
                  :elevation="0"
                >
                  Register
                  Now
                </v-btn>
              </div>

              <div class="d-flex mt-5">
                <div class="d-flex mr-5 align-center">
                  <p
                    class="main-text text-h4 font-weight-bold mr-2"
                    v-text="programData?.t1"
                  />
                  <p
                    class="main-text text-grey-darken-2"
                    v-text="programData?.t2"
                  />
                </div>
                <div class="d-flex align-center">
                  <p
                    class="main-text text-h4 font-weight-bold mr-2"
                    v-text="programData?.t3"
                  />
                  <p
                    class="main-text text-grey-darken-2"
                    v-text="programData?.t4"
                  />
                </div>
              </div>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="7"
          >
            <v-img
              :src="programData?.image?.uri"
              cover
              @click="uploadNewImage"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet
      class="my-16 py-16"
      style="position: relative;"
    >
      <v-img
        src="@/assets/smallSpots.png"
        width="100"
        height="100"
        cover
        style="position: absolute; top: 0; right: 0;"
      />
      <v-img
        src="@/assets/bigSpots.png"
        width="100"
        height="100"
        cover
        style="position: absolute; bottom: 0; left: 0;"
      />

      <v-row no-gutters>
        <v-col
          cols="12"
          sm="3"
        />
        <v-col
          cols="12"
          sm="6"
        >
          <v-sheet class="text-center mx-auto pa-2 pa-sm-0">
            <p
              class="block-text text-h5 text-sm-h4 font-weight-bold"
              v-text="programData?.subheading"
            />
            <p
              class="main-text text-body-1 text-grey-darken-3 mt-5"
              v-text="programData?.subheadingContext"
            />
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="3"
        />
      </v-row>
    </v-sheet>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="3"
        />
        <v-col
          cols="12"
          sm="6"
        >
          <v-sheet class="text-center mx-auto">
            <p
              class="text-h4 font-weight-bold"
              v-text="programData?.t5"
            />
            <p
              class="text-body-1 text-grey-darken-3 mt-5"
              v-text="programData?.t6"
            />
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="3"
        />
      </v-row>

      <v-row>
        <v-col
          v-for="story in storries"
          :key="story.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-sheet border="sm">
            <v-img
              :src="story.image"
              cover
              height="300"
            />

            <div class="pa-5">
              <p class="block-text text-h6 font-weight-black mb-5">
                {{ story.title }}
              </p>
              <p class="main-text text-grey-darken-3 text-body-2 mb-2">
                {{ story.host }}
              </p>

              <v-btn
                class="main-text text-green-darken-3"
                variant="text"
                append-icon="mdi-arrow-right"
                style="text-transform: none;"
              >
                Read More
              </v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          class="d-flex justify-center mt-5"
        >
          <v-btn
            append-icon="mdi-arrow-right"
            color="green-darken-3"
            rounded="0"
            class="main-text text-body-2 text-sm-body-1"
          >
            Read More
          </v-btn>
        </v-col>
      </v-row>

      <Newsletter class="my-16" />
    </v-container>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import bgpt from '@/assets/bgpt.jpeg'
import woman from '@/assets/woman.png'
import bfi from '@/assets/bfi.jpeg'
import bgggt from '@/assets/bgggt.jpeg'
import pwl from '@/assets/pwl.jpeg'
import bfifw from '@/assets/bfifw.jpeg'

export default {
  data: () => ({
    programData: null,
    model: null,
    dialog: false,
    dialogProps: {
      text: '',
      link: '',
      field: '',
      isLink: false
    },
    storries: [
      {
        id: 0,
        image: bgpt,
        title: `Bridging the Gender Gap Through Education and Skill Development`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 1,
        image: woman,
        title: `Promoting Women’s Leadership and Decision-Making in the Niger Delta`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 2,
        image: bfi,
        title: `Building Financial Independence for Women in the Niger Delta`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 3,
        image: bgggt,
        title: `Bridging the Gender Gap Through Education and Skill Development`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 4,
        image: pwl,
        title: `Promoting Women’s Leadership and Decision-Making in the Niger Delta`,
        host: `Crystalline Nwachukwu`,
      },
      {
        id: 5,
        image: bfifw,
        title: `Building Financial Independence for Women in the Niger Delta`,
        host: `Crystalline Nwachukwu`,
      },
    ]
  }),

  mounted () {
    this.getRealTimeUpdate()
  },

  updated () {
    this.getRealTimeUpdate()
  },

  methods: {
    async updateItem (key, content) {
      await updateDoc(doc(db, 'programs', this.programData.id), {
        [key]: content
      })

      this.dialog = false
    },

    async getRealTimeUpdate () {
      const q = query(collection(db, "programs"), where("title", "==", this.$route.params.program));

      const unsub = onSnapshot(q, (doc) => {
        this.programData = {
          id: doc.docs[0].id,
          ...doc.docs[0].data()
        }
      });

      return unsub
    },

    uploadNewImage () {
      const storage = getStorage()
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = async (event) => {
        const file = event.target.files[0];
        if (file) {
          const filePath = `images/${file.name}`;
          const fileRef = ref(storage, filePath);

          try {
            // Upload the new image to Firebase Storage
            const snapshot = await uploadBytes(fileRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);

            await updateDoc(doc(db, 'programs', this.programData.id), {
              image: { path: snapshot.ref.fullPath, uri: downloadURL }
            })

            // Update the program data with the new image details
            this.programData.image = { uri: downloadURL, path: filePath };
          } catch (error) {
            console.error("Error uploading image:", error);
            alert("Failed to upload the image. Please try again.");
          }
        }
      };

      input.click();
    },
  }
}
</script>
