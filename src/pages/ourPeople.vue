<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12">
        <v-sheet>
          <p class="main-text text-green-darken-3 font-weight-bold text-body-1 text-sm-h6 mb-5 mb-sm-10">
            Our People
          </p>
          <p class="block-text text-h4 font-weight-bold mb-2">
            Meet our Featured Staff of the Month
          </p>
          <p class="text-body-2 text-sm-body-1">
            The Niger Delta Development Commission is Governed by seaseoned experts from accross the
            region that help navigate the affairs of the Commission.
          </p>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="5"
          >
            <v-img
              src="@/assets/d5.png"
              cover
              class="mr-4"
            />
          </v-col>
          <v-col
            cols="12"
            sm="7"
          >
            <div class="mt-5 mt-sm-0">
              <p class="main-text text-body-1 text-sm-h6 font-weight-bold text-grey-darken-2">
                HR Manager
              </p>
              <p class="block-text text-h6 text-sm-h5 font-weight-bold mt-2">
                Sir Victor Etim Antai
              </p>
              <p class="main-text mt-2 text-body-2 text-sm-body-1 text-grey-darken-2">
                Administrative Support
              </p>
              <a
                class="text-green-darken-3"
                href="#"
              >victoretimantai@gmail.com</a>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="5"
          >
            <v-img
              src="@/assets/d6.png"
              cover
              class="mr-4"
            />
          </v-col>
          <v-col
            cols="12"
            sm="7"
          >
            <div class="mt-5 mt-sm-0">
              <p class="main-text text-body-1 text-sm-h6 font-weight-bold text-grey-darken-2">
                HR Manager
              </p>
              <p class="block-text text-h6 text-sm-h5 font-weight-bold mt-2">
                Sir Victor Etim Antai
              </p>
              <p class="main-text mt-2 text-body-2 text-sm-body-1 text-grey-darken-2">
                Administrative Support
              </p>
              <a
                class="text-green-darken-3"
                href="#"
              >victoretimantai@gmail.com</a>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="5"
          >
            <v-img
              src="@/assets/d7.png"
              cover
              class="mr-4"
            />
          </v-col>
          <v-col
            cols="12"
            sm="7"
          >
            <div class="mt-5 mt-sm-0">
              <p class="main-text text-body-1 text-sm-h6 font-weight-bold text-grey-darken-2">
                HR Manager
              </p>
              <p class="block-text text-h6 text-sm-h5 font-weight-bold mt-2">
                Sir Victor Etim Antai
              </p>
              <p class="main-text mt-2 text-body-2 text-sm-body-1 text-grey-darken-2">
                Administrative Support
              </p>
              <a
                class="text-green-darken-3"
                href="#"
              >victoretimantai@gmail.com</a>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider class="my-16" />

    <v-row class="mt-16">
      <v-col cols="12">
        <p class="text-h3 text-center font-weight-bold">
          Other Team Members
        </p>
      </v-col>
      <v-col
        v-for="(director, index) in directors"
        :key="index"
        cols="12"
        sm="3"
      >
        <v-sheet
          style="border: 1px solid #00341433;"
          class="cursor-pointer"
          @click="openDialog(director)"
        >
          <v-img
            :src="director.image"
            height="300"
            cover
          />

          <div class="pa-4">
            <p class="block-text text-h5 font-weight-bold mb-2">
              {{ director.name }}
            </p>
            <p class="main-text text-body-2 text-sm-body-1 mb-2">
              {{ director.title }}
            </p>

            <div class="d-flex">
              <span class="main-text text-body-2 text-sm-body-1 text-green-darken-3 font-weight-bold mr-2">Read
                more</span>
              <v-icon color="green-darken-3">
                mdi-arrow-right
              </v-icon>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>



    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card max-width="800">
        <v-card-title class="d-flex justify-end">
          <v-btn
            icon
            variant="outlined"
            size="35"
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              sm="3"
            >
              <v-img :src="dialogData.image" />
            </v-col>
            <v-col
              cols="12"
              sm="9"
            >
              <p class="main-text font-weight-bold text-h6 text-sm-h5">
                {{ dialogData.name }}{{ dialogData.fullTitle }}
              </p>
              <p class="main-text mt-2 text-green-darken-3 font-weight-bold text-body-1 text-sm-h6">
                {{ dialogData.title }}
              </p>

              <p class="main-text mt-2 text-grey-darken-3 font-weight-bold text-body-2 text-sm-body-1">
                Follow on Socials
              </p>

              <div class="d-flex mt-5">
                <v-btn
                  icon
                  variant="outlined"
                  color="grey"
                >
                  <v-img
                    src="@/assets/x.png"
                    width="20"
                  />
                </v-btn>
                <v-btn
                  class="mx-5"
                  icon
                  variant="outlined"
                  color="grey"
                >
                  <v-img
                    src="@/assets/instagram.png"
                    width="20"
                  />
                </v-btn>
                <v-btn
                  icon
                  variant="outlined"
                  color="grey"
                >
                  <v-img
                    src="@/assets/linkedin.png"
                    width="20"
                  />
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              v-for="(text, index) in dialogData.texts"
              :key="index"
              cols="12"
            >
              <p class="main-text text-body-2 text-sm-body-1">
                {{ text }}
              </p>
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
import d8 from '@/assets/d8.jpeg'
import d9 from '@/assets/d9.jpeg'
import d10 from '@/assets/d10.jpeg'
import d6 from '@/assets/d6.png'

export default {
  data: () => ({
    dialog: false,
    dialogData: null,
    directors: [
      {
        name: 'Chinedu Ebie',
        title: 'NDDC Chairman',
        fullTitle: ': The Technocrat and Beacon of the Niger Delta Region',
        texts: [
          `Mr. Chiedu Ebie, the newly appointed Chairman of the Niger Delta Development Commission (NDDC), is not just a lawyer but a seasoned technocrat who represents transformative leadership for the Niger Delta Region.`,
          `His vast experience and innate capabilities make him well-equipped to combat the enormous challenges ahead and leave a monumental impact on the development of the Niger Delta Region.`,
          `He was born into the family of Professor John C. Ebie, a respected psychiatrist, academic, and pioneer Chief Medical Director of the University of Benin Teaching Hospital (UBTH).  This rich pedigree is the foundation of his illustrious career, propelling him to amass over three decades of varied experiences from the private and public sectors. With an undergraduate degree in law from the University of Benin, a certificate of call to the Bar from Nigerian Law School, and a postgraduate diploma from the University of London, his academic credentials are just as impressive.`,
          `His journey as a corporate and commercial lawyer saw him offering advisory and transactional services to diverse multi-industry clients. Delving into the intricate world of startups, specifically in the oil and gas sector, he managed an indigenous upstream company operating in the Niger Delta.`,
          `As a man of results, his tenure in the public sector was marked by efficiency and the breaking down of bureaucratic barriers. He introduced and implemented government policies through processes that translated into a seamless, result-oriented working environment. Before long, recognition came in droves for him, particularly by former Governor Ifeanyi Okowa of Delta State, who lauded him as his most outstanding appointee during the third anniversary of his first tenure when he served as Commissioner for Education (Basic & Secondary). This accolade culminated in a higher responsibility. He became the Secretary to the Delta State Government (SSG) during Okowa's second term. In this dynamic political environment, his calm demeanor, humility, and strategic insight became a source of guidance and stability, further solidifying his reputation as an invaluable asset to Delta State.`,
          `He stands out as a vivid patch in the vast tapestry of Nigerian governance and development. His humility, unwavering commitment to knowledge, due process, and teamwork place him at the forefront of driving change and making pivotal decisions.`,
          `Demonstrating his leadership skills, he co-convened the Delta Unity Group (DUG) aimed at promoting unity and harmony within the political domain of Delta State. This structure was crucial in grassroots mobilization for progressive candidates during the 2023 general elections.`,
          `As he takes the reins of the board of NDDC, his vision for the Niger Delta Region is clear and promising. It is a vision that seeks to improve and change the outlook of the Commission while at the same time rebuilding trust and confidence among critical stakeholders.`,
          `Chiedu Ebie is a leader, reformist, and architect of progress, ready to shape a brighter and more prosperous future for the Niger Delta Region.`
        ],
        socials: [],
        image: d1
      },
      {
        name: 'Dr. Samuel Ogbuku',
        title: 'Managing Director',
        fullTitle: '',
        texts: [
          `Dr. Samuel Ogbuku, the Managing Director of the Niger Delta Development Commission, NDDC, comes fully equipped to make a difference at the interventionist agency, whose core Mandate is to facilitate the sustainable development of the Niger Delta region.`,
          `He boasts an impressive profile spanning over twenty years of experience and expertise in crisis management and capacity building, built across diverse fields of excellent human endeavour.`,
          `A native of Ayakoro in Ogbia Local Government Area of Bayelsa State, Dr. Ogbuku started his basic education at Christ the King School, Oromenike, D/Line in Port Harcourt, in Rivers State, where he obtained his First School Leaving Certificate (FSLC) in 1987. He proceeded to Government Secondary School, Borokiri, Port Harcourt, obtaining the West African School Certificate (WASC) in 1993. As a student of the popular Government Secondary School, his earliest passions of how to help in transforming his beloved Niger Delta had begun to form.`,
          `Little wonder, therefore, that the young Samuel Ogbuku proceeded to University of Port Harcourt to study Political and Administrative Studies, graduating in 2000 with a Bachelor of Science (B.Sc.). He also obtained a Post Graduate Diploma (PGD) in Sociology, Industrial Relations and Personnel Management in 2002, a Master of Science (M.Sc.) degree in Political and Administrative Studies, Development Studies in 2013 and a Doctor of Philosophy (PhD) in Political and Administrative Studies, Development Studies in 2021.`,
          `In a storied career on many remarkable accomplishments, Dr. Ogbuku has occupied several important leadership/development and management position. These include serving as Personal Assistant to the Special Assistant to the Minister of State, Petroleum from 2005 to 2007, Chief of Staff, Government House, Yenagoa, Bayelsa State, from May 2007 to January 2012, as well as the Managing Director/CEO of Fulfilled Farms Nigeria Limited, from February 2012 – 2019.`,
          `A product of the Niger Delta struggle, a student union activist and one-time Public Relations Officer of Ijaw Youths Council (IYC), Central Zone, Dr. Ogbuku has always shown deep concern about the plight of the Niger Delta region. Hence, the Ogbia-born strategist and administrator is well-armed with deep knowledge and insight in conflict resolution, youth leadership development, as well as personnel management in both the private and public sectors of the Nigerian economy.`,
          `As a humanist, he has continually demonstrated the zeal to positively affect the lives of his people, evidenced when he served as Chief of Staff under the Chief Timipre Sylva administration in Bayelsa State between 2007 and 2012. A passionately focused and self-motivated entrepreneur, he takes investment in agriculture very seriously. Already, there is growing hope that his tenure will bring important divestments towards improving agriculture and aquaculture in the region, in ways that will positively impact the traditional livelihoods of the people.`,
          `As the United Nations has prescribed, the sure proof of sustainable development lies in the sustainable livelihoods of the people. There is also hope that he will impact positively on the environment. There is indeed a lot to hope for, for the Commission and for the region.`,
          `An ally of the Minister of State for Petroleum Resources, Chief Timipre Sylva, working with him in many capacities, Dr. Ogbuku often says that his long years of service and tutelage have broadened the sphere of his experience and deepened his understanding on what it takes to improve the living conditions of the people of the Niger Delta. With his good and practical knowledge of the region, he believes that engagement of youths in dialogue, useful activities and education will go a long way in addressing the challenge of youth restiveness.`,
          `Until his appointment as Managing Director/CEO of the NDDC, he served as Senior Special Assistant on Niger Delta Affairs to the Deputy President of the Senate, Obarisi Ovie Omo-Agege. He is also a Traditional Ruler (Deputy Paramount Ruler) of Ayakoro Town, Ogbia LGA, Bayelsa State and continues to be a bridge builder across communities in the state and the region.`,
          `Armed with a Ph.D. in Political and Administrative Studies and a Master’s in Development Studies, therefore, Dr. Ogbuku looks forward to utilizing his vast intellectual resources to strengthen the Commission and execute its mandate in ways that will be remarkably and fundamentally different. Just as the motto of the Commission, “Making a Difference in the Niger Delta” declares.`
        ],
        socials: [],
        image: d2
      },
      {
        name: 'Alabo (Hon.) Boma Iyaye, Esq, DSSRS',
        title: 'EDFA',
        fullTitle: ': Advocate for Youthful Growth',
        texts: [
          `In the sprawling Niger Delta landscape of the Niger Delta, an inspiring figure of steadfast commitment and indefatigable spirit emerges: Alabo (Hon.) Boma Iyaye. The current Executive Director, Finance and Administration of the Niger Delta Development Commission (NDDC), it has been a lifelong mission to uplift, guide, and provide a nurturing platform and environment for the region's youth. Deeply embedded in his essence, this mission has painted a remarkable canvas of his journey through public service and the private sector.`,
          `He was born to the esteemed lineage of Alabo A. C. T Iyaye, Fifikachiri III, and Alabota F. A. Iyaye on September 24, over five decades ago, Young Boma's formative years hinted at the excellence to come. His academic prowess shone brightly, first at State School 2 in Port Harcourt and later at Baptist High School, where he combined stellar academic achievements with a growing passion for sports.`,
          `Transitioning into higher education, Boma's diligence led him to the then University of Science and Technology, Nkpolu-Oruworokwo, in Port Harcourt, where he earned a Bachelor's degree in Business Education and an MBA in Banking and Finance. Not one to rest on his laurels, he later embraced the legal profession. He obtained his LL.B degree from the University of Abuja and was subsequently called to the Nigerian Bar.`,
          `Beyond his commendable academic strides, however, he bore within the burning desire to make tangible societal impacts. Following a successful tenure in the accounting arena with prestigious multinationals, Hon. Iyaye joined the People's Democratic Party (PDP). His foray into politics culminated in representing Ogu/Bolo Constituency in the Rivers State House of Assembly, further highlighting and cementing his commitment to the region's development.`,
          `A testament to his undeniable talent and unwavering devotion to sports, Boma's tenure as the Commissioner of Sports for Rivers State saw him championing pivotal milestones for the state. Notably, he was crucial in successfully hosting the 17th National Sports Festival, the "Garden City Games." His leadership acumen caught the eye of the then Governor Nyesom Ezenwo Wike, leading to multiple stints as Commissioner, first for Sports and later for Local Government Affairs.`,
          `Hon. Boma Iyaye's impeccable reputation and passion soon captured the attention of President Bola Ahmed Tinubu. Recognizing his dual expertise in accounting and dedication to youth development, President Tinubu appointed him to the eminent position of Executive Director for Finance and Administration at the NDDC.`,
          `Today, as he navigates the intricate responsibilities of this new role, his core values remain unchanged: to elevate the Niger Delta's youth and forge a path of hope and prosperity. An avid sports enthusiast and devoted family man, Boma's life is a harmonious blend of personal joys with his beloved wife, Joy, their children, and a professional journey dedicated to the betterment of the Niger Delta community.`
        ],
        socials: [],
        image: d3
      },
      {
        name: 'Sir Victor Etim Antai',
        title: 'EDP',
        fullTitle: ': A Visionary Administrator and Servant Leader Transforming Communities with Excellence',
        texts: [
          `Sir Victor Etim Antai, the Executive Director of Projects, is a distinguished Methodist who has been honoured with the prestigious title of KJW. He symbolizes administrative mastery and dynamic leadership, inspiring those around him. He was born on May 19, 1965, at Methodist Hospital in Ituk Mbang, Akwa Ibom State. Sir Antai's inspiring journey is defined by his unwavering dedication to service and his profound commitment to creating transformative change within communities.`,
          `A devoted family man, Sir Antai finds fulfillment as a loving husband to Mrs. Edu Victor Antai and a proud father to their children. His passion for serving his community is matched only by his devotion to his family.`,
          `With a remarkable educational background, Sir Antai's thirst for knowledge led him to pursue a Bachelor of Science (B.Sc.) in Geography from the esteemed University of Port-Harcourt. His visionary mindset and desire for further growth propelled him to obtain a Master of Science (M.Sc.) degree in Logistics and Transportation Management. He is currently pursuing a Ph.D. in the same field at the University of Port Harcourt.`,
          `Sir Antai's professional path radiates with innovative leadership, beginning as the Chief Operating Officer at Maintenance Culture Limited. His entrepreneurial spirit and visionary mindset led him to found Men at Work LTD, where he served as Chief Executive Officer (CEO). His exceptional leadership qualities were evident during his tenure as the Chairman of the Mbo Council Area from 2008 to 2011 in Akwa Ibom State, where he redefined governance and achieved an unprecedented re-election for a second term from 2012 to 2015.`,
          `In 2015, Sir Antai's journey took on a greater purpose when he accepted the role of Commissioner in the Akwa Ibom State Ministry of Local Government and Chieftaincy Affairs. He demonstrated his transformative touch and transitioned to the Ministry of Tourism and Culture, where he spearheaded initiatives that revitalized the state's cultural heritage and tourism sector. Under his visionary leadership, Akwa Ibom experienced remarkable transformations and gained national prominence through groundbreaking events showcasing the state's rich cultural tapestry.`,
          `Sir Antai's commitment to community development matches his pleasant nature and dedication to student welfare. His Active involvement in sports and his former leadership role as Director of Welfare/Transport in the Student Union Government of the University of Port Harcourt underscore his holistic approach to leadership and his genuine care for the well-being of others.`,
          `Honored with the Knight of John Wesley (KJW) by the Methodist Church Nigeria and recognized as the head of the most improved ministry by the Governor of Akwa Ibom State in 2017, Sir Antai's exceptional contributions have received well-deserved accolades. His legacy of excellence is further cemented by the Ibom Pride Award of Excellence and his recognition as the Best Performing Local Government Chairman by the House of Representatives Committee on Local Government.`,
          `Beyond his administrative prowess, Sir Victor Etim Antai is a true humanitarian, dedicating his time and efforts to community development. His unwavering commitment to societal growth has earned him several chieftaincy titles, testifying to his transformative impact on the lives of the people he serves.`,
          `Sir Victor Etim Antai is not merely an administrator but a visionary leader guided by a deep sense of purpose. His exceptional achievements, dedication to service, and holistic approach to community development have solidified his reputation as a figure of influence and inspiration in Akwa Ibom State. Through his remarkable journey and outstanding leadership, Sir Antai exemplifies excellence in transforming communities and leaving an indelible mark on society, all while cherishing the loving support of his wife and children.`
        ],
        socials: [],
        image: d4
      },
      {
        name: 'Hon. Ifedayo Abegunde',
        title: 'EDCS',
        fullTitle: ': An Architect of Change in Politics and Professionalism',
        texts: [
          `The journey of the Executive Director of Corporate Services, Hon. Ifedayo Abegunde, has been a rich tapestry of engineering prowess, architectural brilliance, and dedicated public service.`,
          `Born on May 5, 1955, he started from a civil engineering background. He enlarged his scope with architectural studies before moving into the esteemed chambers of the House of Representatives. His variegated forays endowed him with a plethora of skills and experiences. His strong affinity for architecture, coupled with the art of crafting environments, has allowed him to weave imaginative planning seamlessly with realistic implementations.`,
          `His educational foundation was laid at St. David's Primary School, Akure, which he followed up with a secondary education at Oyemekun Grammar School, Akure. Furthering his passion for design and structure, he acquired a B.Sc in Architecture from Florida A&M University, Tallahassee, Florida, U.S.A. He obtained his Master's in Architecture from Morgan State University, Baltimore, Maryland, U.S.A.`,
          `His professional journey began as an Assistant Civil Engineer at Akintobi-Oyenekan & Associates, where he played an instrumental role in developing roads in Ondo State. His career then spanned across international borders to the USA, where he showcased his technical prowess as a Systems Engineer for both the State of Maryland and the United States Patent and Trade Organization.`,
          `In politics, his commitment to the public good has been evident. As a Member of the House of Representatives, he chaired committees on Inter-Governmental Affairs and the National Emergency Management Agency. His dedication to governance and statecraft further propelled him to serve as the Secretary to Ondo State Government (SSG) from 2017-2020, where he played pivotal roles in industrialization, poverty eradication, and governance programmes.`,
          `Hon. Ifedayo possesses various certifications, including those from Microsoft, Cisco, and the American Society of Professional Estimators. His attributes resonate with organizational restructuring, team collaboration, excellent communication, relentless pursuit of objectives, and fostering strong interpersonal relationships.`,
          `Hon. Ifedayo Abegunde is not just a seasoned professional or political figure; he's a harmonious blend of both. He is dedicated to exploring new territories, improving built environments, and positively impacting his local government, state, and the nation.`
        ],
        socials: [],
        image: d8
      },
      {
        name: 'Chief Eruba Dimgba',
        title: 'Abia State Representative',
        fullTitle: ': A Beacon of Dedication and Commitment',
        texts: [
          `Born on August 24, 1970, in the scenic landscapes of Abia State's Ukwa West, the Abia State Representative on the NDDC Governing Board, Chief Eruba Dimgba, stands as a beacon of dedication and unwavering commitment to public service. Eruba's journey has been a relentless pursuit of socio-economic development, driven by a desire to mobilize human and material assets. With his roots deeply embedded in Christianity, he finds strength in faith and family, being a proud husband and a devout Christian.`,
          `Chief Dimgba's educational voyage began at Umuaka Primary School, where he laid the foundation for his academic pursuits from 1976 to 1982. After that, he advanced to Owaza Secondary School, earning his West African School Certificate by 1988. The drive to further his knowledge led him to the Federal Polytechnic Nekede, Owerri, where he explored the intricacies of Microbiology from 1990 to 1995. But his quest for knowledge didn't stop there. Eruba's passion for agricultural economics saw him acquire both a Postgraduate Diploma and a Master's degree from the Rivers State University of Science & Technology.`,
          `Professionally, Chief Dimgba has worn many hats, each adorned with responsibility and commitment. From 1996 to 1997, he began his career journey with the National Youth Service Corps, serving in the medical laboratory of SPDC, Port Harcourt. He then moved to the Abia State Hospital Management Board as an SPDC Laboratory Technician, contributing his expertise from 1998 to 2004. However, it was with the Niger Delta Development Commission (NDDC) that he indeed found his calling. He joined the Commission in 2004 and became a Director before his appointment to represent Abia State on the NDDC board. Until his appointment, Chief Dimgba was the Director of the Abia State Office.`,
          `Beyond his career, Chief Dimgba aligns himself with professional bodies that resonate with his mission and values. As a member of the Nigeria Institute of Management since 2006 and the Institute of Public Management Nigeria since 2012, he consistently seeks to grow and engage with professionals who share his vision.`,
          `In the quiet moments, away from the hustle and responsibilities, Chief Dimgba retreats to the solace of books, delving into their wisdom, or finds joy in the rhythmic flow of table tennis, challenging both mind and body.`,
          `In Chief Dimgba, one sees a blend of dedication, innovation, and an unwavering resolve to make impactful contributions to society. He is not just a public servant but a mobilizer, change crusader, and beacon of hope for a brighter future.`
        ],
        socials: [],
        image: d9
      },
      {
        name: 'Pastor Abasiandikan Robert Nkono',
        title: 'Akwa Ibom State Representative',
        fullTitle: ': A Leadership Pillar in Business and Public Service',
        texts: [
          `Born on October 29, 1969, in the oil-rich city of Eket, the Akwa Ibom State Representative on the NDDC Governing Board, Pastor Abasiandikan Nkono, exemplifies dedication, steadfastness, dynamism and good leadership. His roots are firmly grounded in Christianity, and he is a devoted family man, proudly married, and a pillar of support for his family and community.`,
          `He started his early education at Urban Central School, Ikot Ekpene LGA, where he acquired his First School Leaving Certificate. He then proceeded to Ibiono High School, Edem Urua, which was then in Itu Local Government Area, leaving in 1984 to further his academic pursuits. His dedication to academics saw him successfully achieve O-Level General Certificates of Education in 1994.`,
          `He attended the prestigious University of Lagos for tertiary education, earning his B.Sc. (Hons) in Business Administration. He topped it up with a Postgraduate Diploma in Theology from The Redeemed Christian Bible College, Lagos, in 2013.`,
          `A multi-talented professional, Pastor Abasiandikan Nkono's career path, drawn from the private and public sectors, posts an impressive portfolio, including his roles as Assistant Manager, Corporate Affairs, Niger Delta Development Commission (NDDC), Projects Assistant to the Akwa Ibom State Governor and Financial Controller.`,
          `Others are Vice Chairman; Supervisor for Education; Supervisor for Works and Transport; Supervisor for Agriculture and Natural Resources; all in Eket Local Government; Branding Expert and Publisher of erstwhile Horizon Magazine.`,
          `In these positions, he has manifested his unique blend of leadership and organizational management skills, which have enabled him to supervise, manage, and lead teams across multiple sectors, cementing his reputation as a focused, dynamic and dependable figure in public service.`,
          `Characterized by a "can-do" attitude, Pastor Abasiandikan thrives in challenges, showcasing an unwavering commitment to detail and an eagerness to learn. His skills are wider than leadership. As a team player, he possesses an exceptional ability to multi-task, adapt to change, and employ effective problem-solving strategies. His analytical prowess and commendable communication, presentation, and interpersonal skills make him an asset in any endeavour.`,
          `Pastor Abasiandikan Robert Nkono's career path, both in academic and professional spheres, is a testament to his commitment to excellence, service and leadership, making him an inspiration for many in Akwa Ibom and beyond.`
        ],
        socials: [],
        image: d10
      },
      {
        name: 'Elder Senator Dimaro Denyanbofa',
        title: 'Bayelsa State Representative',
        fullTitle: ': A Guiding Light for Progress',
        texts: [
          `Senator Dimaro Denyanbofa stands tall in the pantheon of educationists and politicians who have championed a better, more literate Niger Delta region. With his roots firmly anchored in Peretorugbene, Ekeremor Local Government Area of Bayelsa State, Senator Denyanbofa embodies the true spirit of service and development for Bayelsa, and the Niger Delta.`,
          `Fueled by a burning motivation to harness his legislative and executive prowess to improve the living conditions of the people, Senator Denyanbofa has consistently endeavoured to reshape organisational landscapes. He envisions the optimal utilisation of resources to amplify infrastructural and human capital development. With over thirty-five years under his belt, his expertise in high-level management and public administration is exemplary.`,
          `In the early 1990s, as the pioneering Executive Chairman of Ekeremor Local Government, he demonstrated an unparalleled zest for innovation. With limited resources, he built the unique Rural Electrification Model for Ekeremor and introduced groundbreaking investment models in agriculture. His tenure was so impactful that he was honoured as the best LGA Chairman in 1992. During his stint as a supervisory councilor, his ingenuity birthed the innovative 'Doctors Flying Project'— a pilot programme that was the talk of Rivers State at the time.`,
          `In 1998, as Senator for Bayelsa's West Senatorial district, not content with his legislative duties, Senator Denyanbofa was at the forefront of the fight for Nigeria's return to democracy. His passionate advocacy and leadership in groups like the Ijaw Youths Action League helped pave the way for creating the NDDC and the Niger Delta Amnesty Programme. He was also instrumental in attracting projects worth over N80 billion to Bayelsa State during his tenure as the Special Advisor on NDDC and Niger Delta affairs.`,
          `He has demonstrated adept political acumen throughout his years in politics and governance. Indeed, he helped harmonise differences between political parties in Bayelsa, strengthening the state's political framework. His accomplishments in the realms of infrastructure are commendable as well. As Special Advisor on state capital development in 2003, he played a pivotal role in enhancing Yenagoa's infrastructure, laying down internal roads, and pioneering the stormwater drainage systems that serve the capital today. In 2023, his exemplary service earned him a coveted position as a Board member and Commissioner representing Bayelsa State in the Governing Board of NDDC.`,
          `Senator Denyanbofa's rich academic background is equally noteworthy. Beginning his education at LA Primary School in Peretorugbene, he completed his Bachelor's in Business Education from Rivers State University of Science and Technology and later, a Master's in Education Psychology Guidance and counseling from the University of Port Harcourt.`,
          `Elder Senator Dimaro Denyanbofa's life is a testament to commitment, innovation, and visionary leadership. As Bayelsa strides forward, his legacy remains an enduring guiding light for progress, development and for a better Bayelsa State and the Niger Delta region.`
        ],
        socials: [],
        image: d6
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