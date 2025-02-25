<template>
  <v-img src="@/assets/pattern.png" cover class="d-flex justify-center align-center">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-row no-gutters>
            <v-col cols="12" sm="2">
              <v-icon :size="iconSize" color="green-darken-4">
                mdi-email
              </v-icon>
            </v-col>

            <v-col cols="12" sm="10">
              <p class="main-text text-body-2 text-sm-body-1 text-md-h6 text-green-darken-3">
                Stay Connected
              </p>
              <p class="block-text text-sm-body-2 text-md-h5 font-weight-bold text-green-darken-3 mt-md-2">
                Join our Newsletter to stay updated
              </p>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="d-flex flex-fill justify-sm-end">
            <v-sheet class="pa-2 d-flex align-center" border="sm" height="50" width="100%">
              <input type="text" placeholder="Enter your email address"
                class="contact-input text-caption text-sm-body-2">
            </v-sheet>
            <v-btn rounded="0" color="green-darken-4" class="text-caption text-sm-body-2" height="50" :elevation="0">
              Subscribe
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

export default {
  setup () {
    const { name } = useDisplay();

    const iconSize = computed(() => {
      // Compute app bar visibility based on screen size
      switch (name.value) {
        case 'xs': return 50;
        case 'sm': return 50;
        case 'md': return 60;
        case 'lg': return 70;
        case 'xl': return 90;
        case 'xxl': return 100;
        default:
          return 20; // Fallback for unexpected values
      }
    });

    return {
      iconSize
    }
  }
}
</script>

<style></style>