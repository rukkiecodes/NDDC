<template>
  <v-container class="py-16">
    <v-sheet width="600" class="mx-auto text-center">
      <p class="text-green-darken-3 font-weight-bold text-h6 mb-10">The board</p>
      <p class="text-h4 font-weight-bold mb-2">Our Executives and Board of Directors</p>
      <p class="text-body-1">The Niger Delter Development Commission is Governed by seasoned experts from accross the
        region that help navigate the affairs of the Commission.</p>
    </v-sheet>

    <v-row class="mt-16">
      <v-col v-for="(director, index) in directors" :key="index" cols="12" sm="3">
        <v-sheet style="border: 1px solid #00341433;" class="cursor-pointer" @click="openDialog(director)">
          <v-img :src="director.image" />

          <div class="pa-4">
            <p class="text-h5 font-weight-bold mb-2">{{ director.name }}</p>
            <p class="text-body-1 mb-2">{{ director.position }}</p>

            <div class="d-flex">
              <span class="text-green-darken-3 font-weight-bold mr-2">Read more</span>
              <v-icon color="green-darken-3">mdi-arrow-right</v-icon>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>



    <v-dialog v-model="dialog" width="auto">
      <v-card width="800">
        <v-card-title class="d-flex justify-end">
          <v-btn icon variant="outlined" size="35" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3">
              <v-img :src="dialogData.image" />
            </v-col>
            <v-col cols="12" sm="9">
              <p class="font-weight-bold text-h5">{{ dialogData.name }}:</p>
              <p class="font-weight-bold text-h5">{{ dialogData.fullTitle }}</p>
              <p class="mt-2 text-green-darken-3 font-weight-bold text-h6">{{ dialogData.title }}</p>

              <p class="mt-2 text-grey-darken-3 font-weight-bold text-body-1">Follow on Socials</p>

              <div class="d-flex mt-5">
                <v-btn icon variant="outlined" color="grey">
                  <v-icon color="grey-darken-4">mdi-twitter</v-icon>
                </v-btn>
                <v-btn class="mx-5" icon variant="outlined" color="grey">
                  <v-icon color="grey-darken-4">mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon variant="outlined" color="grey">
                  <v-icon color="grey-darken-4">mdi-linkedin</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="(text, index) in dialogData.texts" :key="index" cols="12">
              <p>{{ text }}</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import d1 from '@/assets/d1.png'
import d2 from '@/assets/d2.png'
import d3 from '@/assets/d3.png'
import d4 from '@/assets/d4.png'

export default {
  data: () => ({
    dialog: false,
    dialogData: null,
    directors: [
      {
        name: 'Chinedu Ebie',
        title: 'NDDC Chairman',
        fullTitle: 'The Technocrat and Beacon of the Niger Delta Region',
        texts: [`Mr. Chiedu Ebie, the newly appointed Chairman of the Niger Delta Development Commission (NDDC), is not just a lawyer but a seasoned technocrat who represents transformative leadership for the Niger Delta Region. 
His vast experience and innate capabilities make him well-equipped to combat the enormous challenges ahead and leave a monumental impact on the development of the Niger Delta Region.`,

          `He was born into the family of Professor John C. Ebie, a respected psychiatrist, academic, and pioneer Chief Medical Director of the University of Benin Teaching Hospital (UBTH).  This rich pedigree is the foundation of his illustrious career, propelling him to amass over three decades of varied experiences from the private and public sectors. With an undergraduate degree in law from the University of Benin, a certificate of call to the Bar from Nigerian Law School, and a postgraduate diploma from the University of London, his academic credentials are just as impressive.
His journey as a corporate and commercial lawyer saw him offering advisory and transactional services to diverse multi-industry clients. Delving into the intricate world of startups, specifically in the oil and gas sector, he managed an indigenous upstream company operating in the Niger Delta.`,

          `As a man of results, his tenure in the public sector was marked by efficiency and the breaking down of bureaucratic barriers. He introduced and implemented government policies through processes that translated into a seamless, result-oriented working environment. Before long, recognition came in droves for him, particularly by former Governor Ifeanyi Okowa of Delta State, who lauded him as his most outstanding appointee during the third anniversary of his first tenure when he served as Commissioner for Education (Basic & Secondary). This accolade culminated in a higher responsibility. He became the Secretary to the Delta State Government (SSG) during Okowa's second term. In this dynamic political environment, his calm demeanor, humility, and strategic insight became a source of guidance and stability, further solidifying his reputation as an invaluable asset to Delta State.`
        ],
        socials: [],
        image: d1
      },
      {
        name: 'Dr. Samuel Ogbuku',
        title: 'Managing Director',
        fullTitle: 'The Technocrat and Beacon of the Niger Delta Region',
        texts: [`Mr. Chiedu Ebie, the newly appointed Chairman of the Niger Delta Development Commission (NDDC), is not just a lawyer but a seasoned technocrat who represents transformative leadership for the Niger Delta Region. 
His vast experience and innate capabilities make him well-equipped to combat the enormous challenges ahead and leave a monumental impact on the development of the Niger Delta Region.`,

          `He was born into the family of Professor John C. Ebie, a respected psychiatrist, academic, and pioneer Chief Medical Director of the University of Benin Teaching Hospital (UBTH).  This rich pedigree is the foundation of his illustrious career, propelling him to amass over three decades of varied experiences from the private and public sectors. With an undergraduate degree in law from the University of Benin, a certificate of call to the Bar from Nigerian Law School, and a postgraduate diploma from the University of London, his academic credentials are just as impressive.
His journey as a corporate and commercial lawyer saw him offering advisory and transactional services to diverse multi-industry clients. Delving into the intricate world of startups, specifically in the oil and gas sector, he managed an indigenous upstream company operating in the Niger Delta.`,

          `As a man of results, his tenure in the public sector was marked by efficiency and the breaking down of bureaucratic barriers. He introduced and implemented government policies through processes that translated into a seamless, result-oriented working environment. Before long, recognition came in droves for him, particularly by former Governor Ifeanyi Okowa of Delta State, who lauded him as his most outstanding appointee during the third anniversary of his first tenure when he served as Commissioner for Education (Basic & Secondary). This accolade culminated in a higher responsibility. He became the Secretary to the Delta State Government (SSG) during Okowa's second term. In this dynamic political environment, his calm demeanor, humility, and strategic insight became a source of guidance and stability, further solidifying his reputation as an invaluable asset to Delta State.`
        ],
        socials: [],
        image: d2
      },
      {
        name: 'Alabo (Hon.) Boma Iyaye',
        title: 'EDFA',
        fullTitle: 'The Technocrat and Beacon of the Niger Delta Region',
        texts: [`Mr. Chiedu Ebie, the newly appointed Chairman of the Niger Delta Development Commission (NDDC), is not just a lawyer but a seasoned technocrat who represents transformative leadership for the Niger Delta Region. 
His vast experience and innate capabilities make him well-equipped to combat the enormous challenges ahead and leave a monumental impact on the development of the Niger Delta Region.`,

          `He was born into the family of Professor John C. Ebie, a respected psychiatrist, academic, and pioneer Chief Medical Director of the University of Benin Teaching Hospital (UBTH).  This rich pedigree is the foundation of his illustrious career, propelling him to amass over three decades of varied experiences from the private and public sectors. With an undergraduate degree in law from the University of Benin, a certificate of call to the Bar from Nigerian Law School, and a postgraduate diploma from the University of London, his academic credentials are just as impressive.
His journey as a corporate and commercial lawyer saw him offering advisory and transactional services to diverse multi-industry clients. Delving into the intricate world of startups, specifically in the oil and gas sector, he managed an indigenous upstream company operating in the Niger Delta.`,

          `As a man of results, his tenure in the public sector was marked by efficiency and the breaking down of bureaucratic barriers. He introduced and implemented government policies through processes that translated into a seamless, result-oriented working environment. Before long, recognition came in droves for him, particularly by former Governor Ifeanyi Okowa of Delta State, who lauded him as his most outstanding appointee during the third anniversary of his first tenure when he served as Commissioner for Education (Basic & Secondary). This accolade culminated in a higher responsibility. He became the Secretary to the Delta State Government (SSG) during Okowa's second term. In this dynamic political environment, his calm demeanor, humility, and strategic insight became a source of guidance and stability, further solidifying his reputation as an invaluable asset to Delta State.`
        ],
        socials: [],
        image: d3
      },
      {
        name: 'Sir Victor Etim Antai',
        title: 'EDP',
        fullTitle: 'The Technocrat and Beacon of the Niger Delta Region',
        texts: [`Mr. Chiedu Ebie, the newly appointed Chairman of the Niger Delta Development Commission (NDDC), is not just a lawyer but a seasoned technocrat who represents transformative leadership for the Niger Delta Region. 
His vast experience and innate capabilities make him well-equipped to combat the enormous challenges ahead and leave a monumental impact on the development of the Niger Delta Region.`,

          `He was born into the family of Professor John C. Ebie, a respected psychiatrist, academic, and pioneer Chief Medical Director of the University of Benin Teaching Hospital (UBTH).  This rich pedigree is the foundation of his illustrious career, propelling him to amass over three decades of varied experiences from the private and public sectors. With an undergraduate degree in law from the University of Benin, a certificate of call to the Bar from Nigerian Law School, and a postgraduate diploma from the University of London, his academic credentials are just as impressive.
His journey as a corporate and commercial lawyer saw him offering advisory and transactional services to diverse multi-industry clients. Delving into the intricate world of startups, specifically in the oil and gas sector, he managed an indigenous upstream company operating in the Niger Delta.`,

          `As a man of results, his tenure in the public sector was marked by efficiency and the breaking down of bureaucratic barriers. He introduced and implemented government policies through processes that translated into a seamless, result-oriented working environment. Before long, recognition came in droves for him, particularly by former Governor Ifeanyi Okowa of Delta State, who lauded him as his most outstanding appointee during the third anniversary of his first tenure when he served as Commissioner for Education (Basic & Secondary). This accolade culminated in a higher responsibility. He became the Secretary to the Delta State Government (SSG) during Okowa's second term. In this dynamic political environment, his calm demeanor, humility, and strategic insight became a source of guidance and stability, further solidifying his reputation as an invaluable asset to Delta State.`
        ],
        socials: [],
        image: d4
      },
    ]
  }),

  methods: {
    openDialog (director) {
      this.dialogData = director
      this.dialog = true
    }
  }
}
</script>

<style></style>