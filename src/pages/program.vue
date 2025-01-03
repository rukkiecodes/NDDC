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
          >
            <v-sheet
              color="transparent"
              max-width="700"
            >
              <p
                class="text-green-darken-3 font-weight-black text-h3 mb-4"
                v-text="programData?.heading"
              />

              <p
                class="text-grey-darken-3 text-h6 my-5"
                v-text="programData?.about"
              />

              <div class="right d-flex">
                <v-sheet
                  class="pa-2 d-flex align-center"
                  border="sm"
                  height="50"
                  width="300"
                >
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    class="contact-input"
                    style="flex: 1"
                  >
                </v-sheet>
                <v-btn
                  class="text-capitalize"
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
                    class="text-h4 font-weight-bold mr-2"
                    v-text="programData?.t1"
                  />
                  <p
                    class="text-grey-darken-2"
                    v-text="programData?.t2"
                  />
                </div>
                <div class="d-flex align-center">
                  <p
                    class="text-h4 font-weight-bold mr-2"
                    v-text="programData?.t3"
                  />
                  <p
                    class="text-grey-darken-2"
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

      <v-sheet
        class="text-center mx-auto"
        width="600"
      >
        <p
          class="text-h4 font-weight-bold"
          v-text="programData?.subheading"
        />
        <p
          class="text-body-1 text-grey-darken-3 mt-5"
          v-text="programData?.subheadingContext"
        />
      </v-sheet>
    </v-sheet>

    <v-container>
      <v-sheet
        class="text-center mx-auto"
        width="600"
      >
        <p
          class="text-h4 font-weight-bold"
          v-text="programData?.t5"
        />
        <p
          class="text-body-1 text-grey-darken-3 mt-5"
          v-text="programData?.t6"
        />
      </v-sheet>

      <FeaturedArticles />
    </v-container>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

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
  }),

  mounted () {
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

<style></style>