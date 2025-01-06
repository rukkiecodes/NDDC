<template>
  <v-container class="py-16">
    <v-row>
      <v-col
        cols="12"
        sm="2"
      />
      <v-col
        cols="12"
        sm="8"
      >
        <v-sheet class="mx-auto text-center">
          <p class="main-text text-green-darken-3 font-weight-bold text-body-1 text-sm-h6 mb-5 mb-sm-10">
            The board
          </p>
          <p class="block-text text-h4 font-weight-bold mb-2">
            Our Executives and Board of Directors
          </p>
          <p class="main-text text-body-2 text-sm-body-1">
            The Niger Delter Development Commission is Governed by seasoned experts from accross
            the
            region that help navigate the affairs of the Commission.
          </p>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="2"
      />
    </v-row>

    <v-row class="mt-16">
      <v-col
        v-for="(director, index) in directors"
        :key="index"
        cols="12"
        sm="4"
        md="3"
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
              <span class="main-text text-body-2 text-sm-body-1 text-green-darken-3 font-weight-bold mr-2">Know
                More</span>
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
import d11 from '@/assets/d11.jpeg'
import d12 from '@/assets/d12.jpeg'
import d13 from '@/assets/d13.jpeg'
import d14 from '@/assets/d14.jpeg'
import d15 from '@/assets/d15.jpeg'
import d16 from '@/assets/d16.jpeg'
import d17 from '@/assets/d17.jpeg'
import d18 from '@/assets/d18.jpeg'
import d19 from '@/assets/d19.jpeg'
import d20 from '@/assets/d20.jpeg'

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
      {
        name: 'Hon. (Chief) Orok Otu Duke (J.P.)',
        title: 'Cross River State Representative',
        fullTitle: ': A Beacon of Versatility in Leadership, Artistry and Community Service',
        texts: [
          `Hon. Orok Otu Duke embarking on a journey marked by educational rigour, legislative prowess, and unwavering commitment to societal enrichment. Born on July 24, 1961, in Calabar South, Cross River State, this stalwart has woven an intricate tapestry of service, leadership, and cultural advocacy. Married and blessed with four children, his life narrative is one of continuous ascent, driven by passion, intellect, and a profound sense of duty.`,
          `His academic odyssey was shaped within the prestigious halls of the University of Calabar, where he earned a BA (Hons) in 1986, followed by an MFA in Media in 1991. With a relentless thirst for knowledge, he pursued doctoral studies, his PhD is in view. This academic journey was anchored by foundational education at Saint Patrick's College, Calabar, and Hope Waddell Training Institute.`,
          `He carved a niche as a formidable force in the legislative arena, commencing a path of distinction as a member of the Cross River State House of Assembly (CRHA), representing the Calabar 1 State Constituency from 1992 to 1993. Demonstrating an innate leadership aptitude, he swiftly rose to the position of Deputy Speaker. His legislative acumen was further recognised in subsequent terms, marked by key roles as an adviser and representative of the Calabar South 1 State Constituency. His influential footprint was etched into the national consciousness as a member of the National Conference in Abuja in 2014, representing the Niger Delta Zone.`,
          `Beyond legislative contributions, he shone in various executive roles, infusing dynamism and visionary thinking into positions such as the Special Assistant on Information and Culture for Cross River State and the conceptual architect behind the state's modern radio and television stations  between 1994 and 1996. His strategic leadership was instrumental in successfully hosting the National Festival of Arts and Culture in 1994. Further, his dedication to communal growth was evident during his tenure as Commissioner/Chairman of the Cross River State Sports Commission from 2015 to 2019 and his short but impactful stint as the Commissioner for the Niger Delta Development Commission (NDDC) from December 2022 to June 2023.`,
          `His entrepreneurial and creative spirit thrived through Duke and Duke Media Limited, offering media consultancy since 1987, alongside a flourishing career in sports consultancy. A literary enthusiast, he penned numerous works that resonate with cultural identity, human experiences, and societal reflections, including noteworthy titles such as "Sentinels (Farewell Bakassi)" and "Treasures."`,
          `Membership in esteemed organizations such as the London Poetry Society and the Society of Nigerian Theatre Artistes (SONTA) underscores his commitment to the arts. His contributions have garnered international accolades, including honors from the cities of Detroit, Indianapolis, and Windsor, Ontario, Canada.`,
          `In the realm of sports, his legacy is unmatched. Serving as Cross River State's Sports Ambassador since 2007 and contributing significantly to table tennis at national and regional levels, his work extends to pro bono services, reflecting a genuine love for sports development.`,
          `His influence transcends professional and public life, touching traditional and communal spheres. As Adaidaha of Efik Eburutu and Otuekong of Atakpa Ikot Effiom, he holds esteemed traditional titles, further anchoring his leadership and advisory roles within the community.`,
          `From shaping legislative policies to nurturing artistic expression and sports excellence, his journey is a testament to a life dedicated to multifaceted excellence, a beacon for current and future generations on the path of service, leadership, and societal development.`
        ],
        socials: [],
        image: d11
      },
      {
        name: 'Rt. Hon. Monday Igbuya',
        title: 'Delta State Representative',
        fullTitle: ': From Business to Politics, the Remarkable Journey of Rt. Hon. Monday Igbuya',
        texts: [
          `Rt. Hon. Monday Ovwigho Igbuya's remarkable life journey is a testament to commitment, leadership, and the pursuit of excellence. Born on August 17, 1956, in the vibrant heart of the delta, he is a distinguished figure in political and business landscapes. A devout Christian, he hails from the Sapele Local Government Area of Delta State.`,
          `Rt. Hon. Igbuya began his educational quest at the Government Primary School in Sapele. He received the Primary School Leaving Certificate in 1968. From there, he attended Academy Grammar School and Sapele Technical College before proceeding to Delta State University, Abraka, where he earned a Bachelor of Science in Political Science. Post graduation, Rt. Hon. Igbuya served in many defining roles at prominent companies, such as Shoumount Engineering Company and Delta Steel Company Limited, Ovwian-Aladja.`,
          `However, his true calling lay in the political arena. Beginning as an elected Councilor for Old Okpe Local Government Council, Chief Igbuya climbed the political ladder with unwavering commitment, loyalty, humility, and dedication to service. His roles ranged from being the Pioneer Councilor for Sapele Local Government Council to State Publicity Secretary for the defunct Social Democratic Party in Delta State.`,
          `While his remarkable role as the Chairman of the Sapele Local Government Council further highlighted his commitment to the progress of Sapele and Delta State at large, his leadership acumen shone brightest as the Speaker of the Delta State House of Assembly, having previously served as the Majority Leader and Member of the State Assembly.`,
          `Chief Igbuya is equally accomplished as a businessman in tandem with his political journey. He has helmed multiple ventures, serving as the Chairman and Managing Director for Movig Nigeria Limited, Movig Petroleum Nigeria Limited, and the luxurious Movig Hotels & Suites, with establishments in both Sapele and Lagos.`,
          `Indeed, Rt. Hon. Monday Igbuya is a harmonious blend of political prowess and Business savvy. Married and deeply rooted in the principles of Christianity, he stands as an emblem of dedication, leadership, and unwavering commitment to the growth and prosperity of Delta State and beyond.`
        ],
        socials: [],
        image: d12
      },
      {
        name: 'Patrick Aisowieren',
        title: 'Edo State Representative',
        fullTitle: `: From Orhionmwon/Uhunmwode's to Edo's Amiable and Resolute Rep`,
        texts: [
          `Born on October 14, 1972, in the culturally rich state of Edo, Hon. Patrick Aisowieren, the Edo State Representative on the Governing Board of the NDDC, began his academic sojourn at Usi Primary School in Benin City.`,
          `His academic journey, which started in 1980, took him through Esigie Teacher Training College in Abudu and Eweka Grammar School, Benin City, culminating with an illustrious period at the Delta State University in Abraka, where he secured his B.Sc Ed in Agricultural Science. Currently, he is studying for more laurels with a Master's degree in view.`,
          `Hon. Aisowieren's dedication to service began at the grassroots level when he was elected as a councilor for Aibiokula Ward 2 in Orhionmwon Local Government Area, Edo State. Not content with representation at that level, he ascended to the role of Deputy Leader of the Legislative Arm of the Local Government Council.`,
          `His steadfast commitment to the welfare of his people and his inherent leadership qualities led to his election, not once but twice, to the Edo State House of Assembly, representing the Orhionmwon East Constituency. His tenure in the state assembly was marked by his election as the Chief Whip from 2011-2015. His versatility was evident as he chaired various critical committees, from Local Government and Chieftaincy Affairs to Transport and Environment.`,
          `His influence continued beyond the state level. The people of Orhionmwon/Uhunmwode saw in him a beacon to represent them at the Federal House of Representatives. Twice, they entrusted him with this role. Twice, he delivered, contributing as Deputy Chairman of the Committee on Interior and being a significant member of numerous critical committees such as FERMA, NDDC, and Appropriation, to name a few.`,
          `His contributions and steadfast commitment were recognized at the highest levels when, in May of 2023, he was appointed as a Member of the Governing Board of the NDDC.`,
          `Married and deeply rooted in the tenets of Christianity, Hon. Patrick Aisowieren's journey is a testament to dedicated service, commitment to the welfare of the people, and an unwavering belief in the power of good governance.`
        ],
        socials: [],
        image: d13
      },
      {
        name: 'Chidiebere Kyrian Uchegbu',
        title: 'Imo State Representative',
        fullTitle: `: Luminary of Leadership and Community Service`,
        texts: [
          `A native of the serene, oil-rich town of Umuorji, Izombe, the Imo State Representative on the NDDC Governing Board, Dr. Chidiebere Kyrian Uchegbu, was born on November 10, 1968. A devout Christian, Dr. Uchegbu's life ethos revolves around teamwork, peace, advocacy, and an unyielding drive for development, philanthropy, and building humanity.`,
          `He began his academic career at Aborshi Primary School in Izombe. He proceeded to Izombe Secondary Commercial School and the Abia State University, where he obtained a Bachelor of Arts in Linguistics. Driven by an effervescent thirst for knowledge, Dr. Uchegbu acquired a National Diploma in History and International Studies from Alvan Ikoku Federal College of Education and a Master's in International Development Studies from the Imo State University. His academic pinnacle was achieved in 2021 with a Ph.D. in History and International Studies.`,
          `Professionally, Dr. Uchegbu's journey is as diverse as it is impressive. Yet the passion for community service, touching lives, and inspiring humanity continues to define his accomplishments. After his mandatory national service at Summer Publishers, Onitsha, Anambra State, he threw his hat into the political ring to contribute his quota towards bringing to his community, his state, and his beloved Niger Delta, the kind of development that he believes will make the lives of the people more enriching.`,
          `Starting as an elected Councilor for Izombe Ward, he soon became the Supervisor for Works in the Oguta Local Government Area. His leadership abilities were recognized as he served as the Speaker for the Oguta Legislative Council. Over the years, he has held esteemed positions, including Special Assistant on Political Matters to the Executive Chairman of Oguta Local Government Area and Personal Assistant to the Imo State representative on the NDDC board.`,
          `While he has served as the Chairman of the Peace and Development Union for Umuokwu Umuorji Communities in Izombe Clan, Oguta Local Government Area, his dedication, commitment to service, and administrative savvy have seen Dr. Uchegbu ascend to represent Imo State on the Board of the Niger Delta Development Commission (NDDC).`,
          `Dr. Uchegbu finds solace in staying updated with national and international news beyond his professional engagements, immersing himself in books, and journeying to new places. He is a ceaseless questioner for improving humanity and a pillar of dedication and leadership, profoundly impacting Imo State and Nigeria.`
        ],
        socials: [],
        image: d14
      },
      {
        name: '(Prince) Otito Thompson Atikase',
        title: 'Ondo State Representative',
        fullTitle: `: From Humble Beginnings to Political Big Wig`,
        texts: [
          `Born into the royal lineage of Ehinmore, a blend of the Akinneyin Ruling House in the Mahin Kingdom and Agboidun Ruling House in the Ugbo Kingdom, Otito Thompson Atikase was born on May 16, 1970. His name, a legacy passed down by his grandfather, Ehinmore Ezekiel Atikase, was a prophecy setting the stage for a life of impact and leadership.`,
          `Otito's educational journey began in the serene confines of Holy Trinity Anglican Primary School, Igbokoda (1979-1984), and progressed through the halls of Ilaje High School (1985-1990) and Methodist High School, Okitipupa (1992-1993). These formative years were a crucible, forging the resilience required to transcend the oppressive boundaries of his environment's inherent challenges.`,
          `Defying the constraints of his surroundings, Otito embarked on a tertiary academic venture at the Federal University of Technology, Akure (FUTA), where he studied Computer Science in the Department of Industrial Mathematics and Computer Science from 1995 to 2001. Here, his political consciousness and leadership understanding began to take root. Representing his department in the Students' Representatives Council (SRC) in 1996-1997 was merely a prelude to his consequential election as President of the FUTA SU Government in 1997-1998.`,
          `Otito's passion for service extended beyond academic leadership. He served as the National Secretary of the National Association of Ilaje Students (NAIS) between 1997 and 1998, channeling his dedication towards his peers' collective welfare and progress. This commitment burgeoned as he joined the Niger Delta Youth Movement (NDYM), eventually serving as the National Welfare Officer from 2002 to 2004, advocating for the development and well-being of the broader Niger Delta community.`,
          `Recognition of his contributions wasn't long in coming. The Ondo State Government appointed him to the State Library Board from 2003 to 2005, an opportunity that further highlighted his administrative capabilities. This experience paved the way for a significant role as an Administrative Officer at the Niger Delta Development Commission (NDDC) from 2004 to 2006.`,
          `Yet, the call to serve his community resonated strongly, leading Otito to resign from NDDC and embrace leadership as an elected Ondo State House of Assembly member in 2007. His tenure was marked by active participation across several committees, contributing significantly to education, youth development, state development goals, and the welfare of oil-producing areas.`,
          `Otito's political journey continued to ascend, and from 2015 to 2016, he served as the Senior Special Assistant to the governor on political matters. This role positioned him as a critical player in the state's political landscape. His ability to lead and connect with the grassroots was further endorsed when he served as the Caretaker Chairman for Ilaje Local Government from 2018 to 2020. His influence within local government circles was recognized as he chaired the Association Of Local Governments Of Nigeria (ALGON), Ondo State Chapter, from 2019 to 2020.`,
          `Not one to rest on past laurels, Otito remained an active participant in shaping the political future of his community and state. He played a significant role in the APC National Convention as a committee member in 2022. He demonstrated strategic political insight as the Director General of the Tinubu/Shetima Campaign Council, Ilaje Local Government, in 2023.`,
          `Beyond the political arena, Otito Thompson Atikase is a family man, blessed with a loving wife and wonderful children, grounding his public service in the richness of his private joy. His journey, punctuated by various roles in service to his people, underscores a life dedicated to uplifting others, reflecting his deep-rooted commitment to societal advancement.`
        ],
        socials: [],
        image: d15
      },
      {
        name: 'Sir Anthony Chinedu Okocha',
        title: 'Rivers State Representative',
        fullTitle: `: An Inspiring Odyssey in Public Service`,
        texts: [
          `Steeped in profound academic credentials and an illustrious political career, Anthony Chinedu Okocha is a paragon of dedication, leadership, and service to his community. Born into the vibrant cultural tapestry of Rivers State, Okocha's journey began in the classrooms of State School, Rumuapara, and culminated in the hallowed halls of the University of Port Harcourt, where he earned a Bachelor of Arts with Second Class Upper honours in Philosophy.`,
          `His early years saw him as a student leader. From serving as the President of the National Union of Obio Akpor Students to becoming the voice of many as the President of the Students Union Government at UNIPORT, Okocha's leadership qualities were evident from the outset. This trajectory continued with his appointment as the Speaker of the Student Representative Council at UNIPORT, marking the beginning of a political journey that would see him serving his state in numerous high-profile capacities.`,
          `His roles ranged from being the Executive Assistant to the Chairman of the Obio/Akpor Local Government Area to mounting the saddle as the Chief of Staff at the Government House of Rivers State.`,
          `As the Chairman of the Caretaker Committee for the Obio/Akpor Local Government Area Council, he showcased his administrative skills. Okocha also played pivotal roles in the Ikwerre Youth Movement International, holding the position of Secretary-General, a testament to his dedication to youth empowerment and community development.`,
          `Outside the corridors of political offices, Okocha has been an influential figure in various organizations. From being a founding member of the All Progressives Congress in Rivers State to leading the Local Organizing Committee for the APC Presidential Campaign, his influence and commitment to the political landscape are undeniable.`,
          `Okocha's accolades extend beyond politics. The Anglican Communion has elevated him as a Knight of the Order of Saint Christopher and he has received titles such as Eze Ruwhu-Oha Ekinigbo Clan and Eze Enwa-gbaganu Ohna Rukani. He was also recognized as a Peace Ambassador and was honored with the Distinguished Service Star of Rivers State.`,
          `His interests reflect the depth of his character. An avid football enthusiast, Okocha is also a voracious reader, particularly drawn to journals and motivational works. He is a prolific writer, contributing intellectually to international journals. He is the esteemed author of "Through The Slippery Slopes of Rivers State Politics." Okocha's life is a harmonious blend of academia, politics, and cultural advocacy. Married and deeply rooted in the principles of Christianity, Anthony Chinedu Okocha remains a shining example of hope, inspiration, and dedication to Rivers State and beyond.`
        ],
        socials: [],
        image: d16
      },
      {
        name: 'Nicholas Wende',
        title: 'North Central Representative',
        fullTitle: `: A Pillar of Building Excellence and Political Vision`,
        texts: [
          `Hon. Nicholas Wende, the North Central Representative on the NDDC Governing Board, hails from Kwande in Benue State, Nigeria, and was born in Jos, Plateau State, on May 11, 1970. He stands tall as a pillar of excellence, with a reputation for prudence and an ambition that seeks great fame. Nicholas's life goal pivots around fostering and nurturing the core values of politics and the building profession.`,
          `An alumnus of Ahmadu Bello University, ABU, Zaria, Nicholas's educational journey started at the Demonstration Primary School, Makurdi, taking a momentary pause at Mount Saint Michael's Secondary School, Aliade, before culminating in a Bachelor of Science Degree in Building from ABU.`,
          `His commitment to professional excellence is reflected in his affiliations. As a member of the Nigerian Institute of Building (NIOB), the Council of Registered Builders of Nigeria (COBON), and an associate of the Nigerian Society of Engineers (NSE), Nicholas has stamped his footprints on the sands of time.`,
          `While navigating the political landscape, Nicholas has served in various capacities, notably as the Commissioner for Benue State's Ministry of Water Resources and Environment. He chaired the Benue State Committee on Flood and Erosion Control from 2015 to 2017. As a testament to his leadership and expertise, Nicholas was appointed Chairman of the Governing Board for the Nigerian Stored Products Research Institute, Ilorin, from 2018 to 2022 and also served as a Member of the Governing Board for the Nigerian Agricultural Research Council of Nigeria, Abuja, during the same period. He played pivotal roles in addressing the Kwande/Cameroon Border Crises. He even rose to the rank of Benue Governorship aspirant in 2022.`,
          `With vast experience, Nicholas held the prestigious position of Chief Building Officer for the Benue State Ministry of Works, Housing, and Transport. His projects range from the construction and renovation of school blocks, bridges, and duplexes to the significant task of building massive complexes. His supervision of the construction of monumental building projects like the International Conference Centre, Makurdi, and the College of Health Sciences and Law Faculty at Benue State University is evidence of his unparalleled prowess in the field.`,
          `Nicholas's dedication isn't limited to his professional pursuits. He deeply cherishes traveling, devoting time to worship, reading, playing lawn tennis, and engaging in humanitarian services. His social responsibility initiatives include renovating schools, sponsoring youth football competitions, and implementing rural electrification in his hometown.`,
          `Nicholas Aondona Wende's new assignment in the Niger Delta region has many expectations, especially as the region needs builders like him. He is not just a name but a legacy, an embodiment of dedication, commitment, and excellence.`
        ],
        socials: [],
        image: d17
      },
      {
        name: `Dr. Abdulrazzak Sa'ad Namdas`,
        title: 'North East Representative',
        fullTitle: `: A Prodigy Charting the Course of Excellence`,
        texts: [
          `Born on January 1, 1969, in Ganye, Adamawa State, the Representative of the North East on the NDDC Governing Board, Hon. Dr. Abdulrazzak Sa'ad Namdas, has been the epitome and repository of the rich tradition and values of his homeland, building a profile of immense wealth and success in his illustrious journey, both in academia and politics.`,
          `Weaving through various institutions and disciplines in an impressive academic odyssey, Dr. Namdas earned a Bachelor of Science degree in Sociology from the Usman Dan Fodio University, Sokoto, as well as a postgraduate diploma in Journalism from the Nigeria Institute of Journalism, Jos Campus. His thirst for knowledge led him to obtain a Master's in Criminology and Security Studies from the University of Abuja, culminating with a PhD in Security and Strategic Studies from Nasarawa State University, Keffi, in September 2023.`,
          `As a practicing journalist, he was known for his insightful and intelligent writing, building a profile of an excellent reporter with a keen eye for details. Little wonder, therefore, that as State Correspondent for Daily Times Plc, he caught the attention of Mr. Boni Haruna, the former Governor of Adamawa State, who appointed him as the Chief Press Secretary. Not one to rest on his laurels, he founded 'The Viewer Newspaper' in 2007 after that. But journalism was just one facet of his multifaceted blossoming career.`,
          `To provide a more robust platform for his people to advocate for better governance, Dr. Namdas ventured into politics, clinching a seat as an elected member of the House of Representatives in both the 8th and 9th National Assemblies. He showcased his leadership prowess in those hallowed chambers by chairing several committees, including significant ones on Media, Public Affairs, and the Army. His diplomatic skills also shone brightly as the West Africa Caucus Deputy Chairman in the Pan African Parliament in Midrand, South Africa.`,
          `The political accolades of this unassuming academic, social scientist, and politician are numerous. From being the Governorship running mate in Adamawa State to an aspirant for the state's gubernatorial seat under the APC banner, he has attracted national recognition for his capacity and capabilities. Consequently, he was appointed the Secretary of Logistics and Support Services for the APC Presidential Campaign Council.`,
          `Honoured with various awards, his dedication to his state and country has not gone unnoticed. His recognition has come from diverse groups, from student bodies to traditional institutions and revered monarchs who have given him many titles. Indeed, his reputation is solidified not just in political and professional spheres but also in the cultural heartbeats of his community.`,
          `A man of disarming simplicity, humility, and tolerance, he is a widely traveled Nigerian, finding joy in the company of his family, friends, and associates. Amid the hustle and bustle of his life, he also finds solace in sports, deepening his knowledge of society and humanity. These he brings to bear in every duty with which he is entrusted.`
        ],
        socials: [],
        image: d18
      },
      {
        name: `Ibrahim Abdullahi Gobir MFR, CON`,
        title: 'North West Representative',
        fullTitle: `: Stalwart of Engineering Brilliance and Distinguished Leadership`,
        texts: [
          `The North West Representative on the Governing Board of the NDDC, Senator Ibrahim Abdullahi Gobir, carries a legacy that melds academic prowess and engineering excellence with distinguished leadership. Born on a New Year's Day in 1953 in the picturesque town of Sabon-Birnin, Sokoto State, his outstanding journey began in Sabon-Birnin Primary School, leading him through such esteemed institutions as the University of Detroit and the University of Liverpool.`,
          `His academic capstone is an impressive lineup: A B.Eng. in Electronics, an M.Eng in Electrical, a Ph.D. in Energy Studies, and an MBA in Finance & Accounting. Indeed, Senator Gobir is a pinnacle in the engineering realm. His status as a Chartered Electrical Engineer since 1994 is fortified with affiliations to engineering's crème de la crème, including the Nigerian Society of Engineers and the Institution of Electrical Engineers, UK. He has been recognized by esteemed bodies, from the Nigerian Academy of Engineering to the Council of Registered Engineers of Nigeria (COREN).`,
          `Yet, his expertise is wider than the theoretical realm. Practical applications of his genius are evident in innovative designs and constructions for CCNN Plc., a Sokoto-based construction company. Senator Gobir has regularly brought his technical prowess to bear in presentations and academic papers, emphasizing the importance of improvisation and quality in industries from temperature scanners to auto-purging systems.`,
          `Beyond his accomplishments in engineering, the remarkable journey of this great professional, technocrat, and administrator has also been milestoned by many feats in the political arena. Engr. Dr. Gobir has served as a Senator from 2011 to 2023, holding the esteemed position of Majority Leader of the Senate in the 9th National Assembly. While Senator Gobir's leadership shines in the business sector, serving as the Managing Director and CEO of Cement Company of Northern Nigeria Plc to holding directorial positions in prominent companies like Union Bank of Nigeria and Total Nigeria PLC, his influence in politics and governance is undeniable.`,
          `Consequently, he has received significant recognitions, awards, and honours for his outstanding contributions to Business, society, philanthropy and humanity. Senator  Gobir is a recipient of the Best Engineer Award by NTA Sokoto and the National Honours Award of Member of the Order of the Federal Republic (MFR). These accolades mirror his unwavering commitment to commerce and education, as well as the overall development of Nigeria in particular and Africa in general.`,
          `Among these achievements is the distinguished, regal title of "Sardauna of Gobir Ngdom," translating to the Commander of the Royal Brigade of Guards - a fitting title for a Prince dedicated to excellence and service. Indeed, Senator Ibrahim Abdullahi Gobir stands tall as an embodiment of dedication, innovation, and leadership, leaving an indelible mark on Sokoto State and Nigeria.`
        ],
        socials: [],
        image: d19
      },
      {
        name: `Chima Philip Okafor`,
        title: 'Representative of Revenue Mobilzation, Allocation and Fiscal Commission',
        fullTitle: ``,
        texts: [
          `Chima Philip Okafor, the Representative of the Revenue Mobilisation, Allocation and Fiscal Commission the NDDC Board, is a highly experienced Nigerian professional, who has carved a notable career spanning over 36 years in the legal, financial, and governmental sectors. Born on January 11, 1963, in Ufuma, Anambra State, Chima is not only a respected figure in his field but also a family man, proudly married and deeply rooted in his Nigerian heritage.`,
          `Chima's journey in law and governance commenced with his education. He earned his Barrister-at-Law degree from the Nigerian Law School in Lagos in 1986, following a Bachelor of Laws from the University of Benin. His academic foundation laid a robust platform for his diverse career.`,
          `In 1986, he was called to the Bar as a Barrister and Solicitor of the Supreme Court of Nigeria, marking the start of a distinguished legal career. Chima's professional path is marked by a blend of private and public sector roles, each demonstrating his capability to navigate complex legal and governmental landscapes.`,
          `He currently serves as the Federal Commissioner for the Revenue Mobilisation Allocation and Fiscal Commission at The Presidency, a role he has held since 2019. In this position, he carries out constitutional and statutory duties, representing Anambra State with distinction.`,
          `Prior to his current role, Chima was the Principal Partner and Lead Counsel at Chima Okafor & Co. from 2011 to 2019, where he led a team of lawyers in a leading commercial law firm. His expertise extended to corporate governance, investment services, and legal frameworks supporting various business ventures.`,
          `Between 2006 and 2011, Chima made significant contributions to the economic growth of Anambra State as the Honourable Commissioner for Commerce & Industry. His efforts in policy formulation, industrialization, and enhancing the state’s economic landscape are particularly noteworthy.`,
          `His earlier career includes valuable experiences in various capacities, including a pivotal role as Company Secretary and Legal Adviser at Comet Merchant Bank Ltd. and leading C. Okafor & Co. as Principal Partner.`,
          `Beyond his professional commitments, Chima is an active member of the Nigerian Bar Association, the African Bar Association, and the International Bar Association. He also enjoys membership at the prestigious Ikoyi Club 1938, reflecting his social engagements and networking acumen.`,
          `Chima's personal life is as vibrant as his professional one, with hobbies that include playing table tennis, lawn tennis, golf, and indulging in his passion for reading. This multifaceted personality is not just a testament to his professional acumen but also his ability to balance a demanding career with personal interests and family life.`,
          `For those seeking to know more about this dynamic individual, references are available upon request, promising insights into the life of a man who has seamlessly blended legal expertise, governmental acumen, and personal passions to carve a niche for himself in the professional world.`,
          `He is an exceptional professional who is well-versed in procedural pathways that organizations can tow to achieve their stated statutory objectives.`
        ],
        socials: [],
        image: d20
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