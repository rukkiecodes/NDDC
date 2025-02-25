// Utilities
import { db } from "@/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";

import power from "@/assets/power.png";
import woman from "@/assets/woman.png";
import men from "@/assets/men.png";
import ttrtr from "@/assets/ttrtr.png";
import ttrs2 from "@/assets/ttrs2.jpeg";
import inspection from "@/assets/inspection.jpg";
import bfi from "@/assets/bfi.jpeg";
import wdp from "@/assets/wdp.jpeg";
import pwl from "@/assets/pwl.jpeg";
import students from "@/assets/students.jpeg";
import mision from "@/assets/mision.png";
import mission2 from "@/assets/mission-2.png";

export const useAppStore = defineStore("app", {
  state: () => ({
    programmes: null,
    projects: null,

    drawer: false,
    theCommision: [
      { text: "Mission Statement", to: "" },
      { text: "The Management Team", to: "" },
      { text: "Our People", to: "/governingBoard" },
    ],
    eServices: [
      { text: "Online Forms", to: "" },
      { text: "Adverts", to: "" },
      { text: "i-Report", to: "" },
    ],
    news: [
      { text: "News and Updates", to: "" },
      { text: "Press Releases", to: "" },
      { text: "Media Gallery", to: "" },
      { text: "Publications", to: "" },
      { text: "Events Calendar", to: "" },
    ],

    featuredNews: [
      {
        image: power,
        title: "132KV Transmission Line and Substation in Abia State",
        texts: [
          `In a groundbreaking achievement for infrastructure development in the Niger Delta, the Niger Delta Development Commission (NDDC) has completed the construction of a 132KV transmission line and substation in Abia State. This monumental project aims to revolutionise power supply in the region, driving economic growth, industrial development, and improved living standards for residents.`,
          `At the commissioning ceremony, NDDC Managing Director, Dr Samuel Ogbuku, emphasised the importance of reliable power infrastructure in regional development. "Reliable electricity is not just about convenience; it is the foundation of economic growth, improved healthcare, better education, and overall social progress. This project represents our unwavering commitment to addressing the region's challenges and unlocking its vast potential," he stated. The substation and transmission line are expected to significantly reduce power outages, enhance industrial efficiency, and attract investments to the area. Small and medium-sized enterprises (SMEs), which form the backbone of the local economy, stand to benefit immensely from a more stable and efficient power supply.`,
          `Community leaders and residents have expressed optimism about the impact of the project. Mrs Ngozi Amadi, a small business owner in Umuahia, said, "For years, unreliable electricity has been a major challenge for us. This development gives me hope that things are finally changing for the better."`,
          `In addition to boosting economic activities, the project is seen as a pivotal step in NDDC’s broader mission of fostering sustainable development in the Niger Delta. By prioritising critical infrastructure projects like this, the commission reaffirms its commitment to creating a thriving and self-reliant region.`,
          `The 132KV transmission line and substation in Abia State mark a significant stride towards a brighter and more electrified future for the Niger Delta. As the lights come on, so does the promise of progress for millions of lives in the region.`,
        ],
      },
      {
        image: woman,
        title:
          "NDDC Programme: Building Financial Independence for Women in the Niger Delta",
        texts: [
          `The Niger Delta Development Commission (NDDC) has launched a transformative programme aimed at empowering women in the Niger Delta with the tools and resources to achieve financial independence. This initiative is designed to address the gender disparity in economic opportunities and uplift women, who play a vital role in the region's socio-economic fabric.`,
          `The programme offers a range of training sessions, including skills acquisition in entrepreneurship, vocational training, and financial literacy. By equipping women with these skills, the NDDC aims to enable them to start and manage their own businesses effectively, thereby creating sustainable income streams and reducing dependency.`,
          `Speaking at the programme's launch, NDDC Director of Women’s Affairs, Mrs Ebiere Tekena, emphasised the importance of empowering women for the region's overall development. "When women are empowered, families thrive, communities prosper, and the entire region benefits. This programme reflects our commitment to fostering an inclusive economy that leaves no one behind," she said.`,
          `The initiative has already seen the participation of hundreds of women across various states in the Niger Delta, with success stories emerging of women starting small businesses in agriculture, trade, and technology. The programme also includes mentorship sessions where successful female entrepreneurs share their journeys, challenges, and strategies for success.`,
          `Participants have expressed gratitude for the initiative, with many citing it as a life-changing opportunity. "I never thought I could own a business, but with the skills I’ve gained, I feel confident about my future," said Mrs Grace Igbinedion, a beneficiary from Bayelsa State.`,
          `The NDDC’s focus on women’s empowerment aligns with its broader mission to promote sustainable development and equitable economic growth in the Niger Delta. By investing in the potential of women, the commission is building a foundation for long-term prosperity and stability in the region.`,
          `This programme is a testament to the NDDC's vision of a more inclusive and economically robust Niger Delta, where every individual, regardless of gender, has the opportunity to thrive.`,
        ],
      },
      {
        image: men,
        title:
          "Empowering the Future: NDDC Launches Youth Skill Acquisition Programme in the Niger Delta",
        texts: [
          `The Niger Delta Development Commission (NDDC) has unveiled a comprehensive Youth Skill Acquisition Programme designed to equip young men and women in the region with practical skills and resources to thrive in today’s competitive job market. This initiative underscores NDDC’s commitment to tackling youth unemployment and fostering sustainable development in the Niger Delta.`,
          `The programme offers training in various fields, including technology, agriculture, craftsmanship, and digital marketing. By focusing on these areas, the NDDC aims to create a skilled workforce capable of driving innovation and entrepreneurship in the region.`,
          `At the launch event, NDDC Executive Director of Projects, Engr Charles Ogunedo, highlighted the programme’s significance. "The youth are the backbone of our nation. By investing in their skills and potential, we are not just securing their future but also the future of the Niger Delta," he stated.`,
          `Participants will also benefit from mentorship opportunities, start-up capital for business ventures, and access to a network of industry professionals. The programme prioritises practical, hands-on training to ensure that participants are well-equipped to transition seamlessly into the workforce.`,
          `A beneficiary of the programme, John Etuk from Rivers State, shared his excitement. "This is a golden opportunity for me to learn skills that can transform my life. I am grateful to the NDDC for this life-changing initiative," he said.`,
          `The Youth Skill Acquisition Programme aligns with NDDC’s broader mission to address systemic challenges in the Niger Delta, including unemployment and poverty. By empowering the youth, the commission is laying the groundwork for a prosperous and self-reliant region.`,
          `Through initiatives like this, the NDDC reinforces its role as a catalyst for sustainable development and a beacon of hope for the Niger Delta’s youth.`,
        ],
      },
    ],

    topThree: [
      {
        image: ttrtr,
        title: "Revolutionising Road Infrastructure in the Niger Delta",
        texts: [
          `In a bid to accelerate economic development and improve connectivity, the Niger Delta Development Commission (NDDC) has embarked on a major road construction project across the region. This initiative is designed to enhance the movement of people, goods, and services, thereby boosting local economies and reducing travel time between key cities and rural communities.`,
          `The NDDC's road construction projects focus on building and rehabilitating critical transportation routes that have long been neglected. These roads will not only improve access to markets but also foster greater integration between urban and rural areas, paving the way for equitable development.`,
          `At the groundbreaking ceremony, NDDC Managing Director, Dr Samuel Ogbuku, expressed confidence in the positive impact of the project, stating, "Infrastructure is the backbone of any thriving region. By improving our road network, we are opening up new opportunities for businesses, creating jobs, and ensuring that the benefits of development reach every part of the Niger Delta."`,
          `Local residents have welcomed the project with optimism. "Better roads mean better access to healthcare, education, and other essential services," said Mrs Adaeze Okoro, a community leader in Port Harcourt. "This is a game-changer for us."`,
          `The construction of these roads is also set to improve the transportation of goods, which is vital for small businesses and farmers. The NDDC’s initiative will help reduce the cost of goods and services, boosting the local economy and improving the quality of life for residents.`,
          `This road construction effort is part of the NDDC’s broader mission to transform the region into an economic powerhouse, driven by state-of-the-art infrastructure and sustainable development practices.`,
        ],
      },
      {
        image: ttrs2,
        title:
          "Enhancing Mobility and Economic Growth through Road Construction",
        texts: [
          `The Niger Delta Development Commission (NDDC) continues to make strides in transforming the region with the construction of modern road networks. These infrastructure projects are not only aimed at improving accessibility but also at stimulating economic growth by providing smoother routes for trade and travel.`,
          `The NDDC’s emphasis on road construction is a critical step in addressing the transportation challenges faced by communities in the Niger Delta. Poorly maintained roads have long been a barrier to progress, but with the new initiatives underway, residents are beginning to see tangible changes in their daily lives.`,
          `Dr Samuel Ogbuku, NDDC Managing Director, highlighted the transformative potential of these projects: "Our road construction efforts are designed to create a more connected and cohesive Niger Delta, where people can freely move and businesses can thrive."`,
          `The impact of these roads extends far beyond improved travel. They are expected to open up new opportunities for tourism, improve access to government services, and encourage investment in local businesses. “This initiative is a beacon of hope for us,” said Chijioke Nwosu, a local shop owner in Calabar.`,
          `These upgrades will also benefit the agricultural sector, as farmers will be able to transport their goods more efficiently, reducing costs and wastage. The NDDC’s commitment to road construction is a testament to its dedication to improving lives across the region.`,
          `As these roads are completed, the Niger Delta is set to experience a significant boost in regional development, driving both social and economic progress.`,
        ],
      },
      {
        image: inspection,
        title: "Building the Future with Road Construction in the Niger Delta",
        texts: [
          `The Niger Delta is undergoing a major transformation with the construction of critical road infrastructure, spearheaded by the Niger Delta Development Commission (NDDC). These projects are set to revolutionise the region’s transportation system, making it easier for people and businesses to connect with one another and fostering economic growth.`,
          `One of the key focuses of the NDDC is to build roads that connect rural communities with urban centres, ensuring that development reaches all corners of the region. The improved road networks will enable farmers to bring their products to market faster, businesses to expand, and individuals to access essential services more easily.`,
          `Speaking at the launch of a new road project, Dr Samuel Ogbuku, NDDC Managing Director, emphasised the importance of road infrastructure in driving the region's economic growth. "These roads are not just about travel; they are the arteries of the economy, facilitating trade, industry, and job creation," he explained.`,
          `Local communities have voiced their appreciation for the initiative. "The new roads will make it easier for us to get to work, attend school, and even visit relatives in neighbouring towns," said Emeka Nwokolo, a young professional in Warri. "This is exactly what we need for a better future."`,
          `The NDDC’s road construction efforts are not just about improving roads; they are about building a future where the Niger Delta is a thriving, connected region that attracts businesses, investors, and visitors from around the world.`,
          `As the NDDC continues its work, the roads being built today are setting the foundation for a brighter tomorrow for the people of the Niger Delta.`,
        ],
      },
    ],

    forWomen: [
      {
        image: wdp,
        title: "Empowering Women in the Niger Delta through Skill Acquisition",
        texts: [
          "In a bid to foster gender equality and economic independence, the Niger Delta Development Commission (NDDC) has launched several programmes aimed at empowering women through skills training. These initiatives are designed to equip women across the region with the tools they need to succeed in the workforce and start their own businesses.",
          "The programmes, which span a wide range of sectors including agriculture, technology, and" +
            " entrepreneurship, provide women with practical skills that can be directly applied to their careers. The NDDC is committed to breaking the barriers that have historically limited women's economic opportunities in the region.",
          "At a recent training session, Dr. Samuel Ogbuku, NDDC Managing Director, praised the efforts of women who have taken the initiative to learn new skills. 'These women are the changemakers of tomorrow. By investing in their education and skill development, we are helping to build a more inclusive and prosperous Niger Delta,' he said.",
          "One of the programme participants, Adaora Nwokolo, shared her excitement about the skills she is" +
            " acquiring. 'I'm learning how to start my own business, and I feel more confident about my future now,' she said. 'The training is giving me the independence I need to support my family.'",
          "The NDDC's commitment to women's empowerment is helping to shift societal attitudes, showing that when women are given the right tools and opportunities, they can become key drivers of economic growth in the region.",
        ],
      },
      {
        image: pwl,
        title: "Building Financial Independence for Women in the Niger Delta",
        texts: [
          "The Niger Delta Development Commission (NDDC) is taking bold steps to promote financial independence among women in the region. Through targeted educational programmes and financial literacy workshops, the NDDC is helping women unlock their potential and take control of their finances.",
          "Financial independence is a key goal for many women across the Niger Delta, and the NDDC’s programmes are helping them achieve it. The initiatives focus on teaching women how to manage their finances, invest wisely, and start and grow their own businesses.",
          "Dr. Samuel Ogbuku, NDDC Managing Director, highlighted the importance of these programmes in his speech at a recent financial literacy workshop. 'Empowering women financially means creating a more sustainable future for the Niger Delta. When women have control over their financial resources, they can invest in their families, communities, and businesses,' he remarked.",
          "Participants in the workshops have expressed their gratitude for the opportunity to learn and grow. 'Learning how to save, budget, and invest has changed my life,' said Chika Okafor, a workshop participant. 'I now have the knowledge to make better financial decisions and invest in my business.'",
          "These programmes not only aim to provide women with financial independence but also foster a sense of empowerment, as women are encouraged to contribute to the region’s economic development through their newfound knowledge and skills.",
        ],
      },
      {
        image: bfi,
        title:
          "Women’s Economic Empowerment through Vocational Training in the Niger Delta",
        texts: [
          "The Niger Delta Development Commission (NDDC) is working tirelessly to promote women’s economic empowerment through vocational training programmes across the region. These programmes are designed to provide women with the necessary skills to thrive in a variety of trades and professions, from fashion design to carpentry, catering, and more.",
          "The NDDC recognizes the importance of giving women access to vocational training as a means of achieving financial independence. By offering these opportunities, the commission is helping to create a region where women can support themselves and their families while contributing to the local economy.",
          "Dr. Samuel Ogbuku, NDDC Managing Director, emphasized the long-term benefits of the vocational training programmes. 'Vocational skills are a pathway to self-sufficiency, and when women are empowered with these skills, they become key players in the economic development of the Niger Delta,' he said.",
          "Many women have already benefited from these programmes. 'I’ve learned how to bake and run a business, and now I’m able to support my children,' said Mary Akpan, a graduate of the NDDC vocational training program. 'This training has opened up new opportunities for me, and I’m proud to be able to provide for my family.'",
          "The NDDC’s dedication to empowering women in the Niger Delta is creating a ripple effect, inspiring other women to take control of their financial futures and pursue careers in fields that were once considered unattainable for them.",
        ],
      },
    ],

    education: [
      {
        image: students,
        title: "Revolutionizing Education in the Niger Delta",
        texts: [
          "The Niger Delta Development Commission (NDDC) has launched several initiatives aimed at transforming education in the region. With a focus on improving access to quality education, these projects are addressing the longstanding educational challenges faced by the region’s youth.",
          "One of the key projects is the establishment of new schools and the renovation of existing ones to ensure that children have access to a conducive learning environment. The NDDC is also providing educational materials such as books, computers, and other resources to enhance the quality of learning.",
          "Dr. Samuel Ogbuku, NDDC Managing Director, emphasized that education is the foundation of sustainable development. 'By improving the educational system in the Niger Delta, we are creating a better future for our children and empowering them to become leaders in their communities and beyond,' he said.",
          "The initiative has already had a significant impact on local communities. 'My children now have access to better learning resources,' said Mrs. Ngozi, a mother in Port Harcourt. 'I am hopeful that this will give them a brighter future.'",
          "The NDDC’s commitment to education is laying the foundation for a more prosperous and self-reliant Niger Delta, where quality education is accessible to all children, regardless of their background.",
        ],
      },
      {
        image: mision,
        title:
          "NDDC Educational Grants: Shaping the Future of the Niger Delta Youth",
        texts: [
          "In a bid to further enhance educational opportunities in the Niger Delta, the Niger Delta Development Commission (NDDC) has introduced a series of educational grants aimed at providing financial support to students pursuing higher education. These grants are designed to remove the financial barriers that prevent many talented young people in the region from achieving their academic and career goals.",
          "The NDDC's educational grants cover various fields of study, from engineering and technology to health and the arts. By providing these grants, the NDDC is ensuring that the youth of the Niger Delta have the opportunity to pursue their dreams and contribute to the growth and development of the region.",
          "Dr. Samuel Ogbuku, NDDC Managing Director, spoke about the importance of these grants. 'Education is the most powerful tool we have to shape the future of the Niger Delta. By supporting the education of our young people, we are investing in the future of the region,' he said.",
          "The grants have already benefited a number of students, including Chidi, a student studying computer science at a university in Lagos. 'Without this grant, I wouldn't have been able to continue my studies,' Chidi said. 'I'm grateful for the NDDC's support, and I’m determined to use my education to give back to the Niger Delta.'",
          "The NDDC's educational grants are helping to create a more educated and skilled workforce in the Niger Delta, ensuring that the region’s youth have the tools they need to succeed in the global economy.",
        ],
      },
      {
        image: mission2,
        title:
          "Building a Future through Vocational Education in the Niger Delta",
        texts: [
          "The Niger Delta Development Commission (NDDC) has placed a strong emphasis on vocational education as a key strategy for empowering the region’s youth. Recognizing that not all young people have the opportunity to pursue traditional academic paths, the NDDC is offering a range of vocational training programmes to help youth develop the skills they need to secure stable, well-paying jobs.",
          "These programmes cover a wide range of trades, including carpentry, plumbing, electrical work, and technology. By providing hands-on training in these fields, the NDDC is ensuring that young people in the region are equipped with practical skills that are highly sought after in today’s job market.",
          "Dr. Samuel Ogbuku, NDDC Managing Director, shared his vision for the future: 'Vocational education provides young people with the opportunity to build a successful career without the need for a university degree. We are committed to creating opportunities for everyone, regardless of their background, to succeed.'",
          "Young people who have participated in the vocational training programmes have already seen positive results. 'The skills I’ve gained in carpentry have helped me start my own business,' said Emeka, a graduate of the NDDC vocational program. 'I’m now able to support myself and my family, and I’m proud to contribute to my community.'",
          "The NDDC’s focus on vocational education is helping to create a region where youth are empowered to build successful careers and contribute to the local economy, fostering a brighter future for all.",
        ],
      },
    ],

    directors: [
      {
        id: 0,
        name: "Alabo (Hon.) Boma Iyaye, Esq, DSSRS",
        title: "Executive Director Finance and Admin",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739486086/NDDC/Alabo%20%28Hon.%29%20Boma%20Iyaye%2C%20Esq%2C%20DSSRS.png",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">In the sprawling Niger Delta landscape of the Niger Delta, an inspiring figure of steadfast commitment and indefatigable spirit emerges: Alabo (Hon.) Boma Iyaye. The current Executive Director, Finance and Administration of the Niger Delta Development Commission (NDDC), it has been a lifelong mission to uplift, guide, and provide a nurturing platform and environment for the region's youth. Deeply embedded in his essence, this mission has painted a remarkable canvas of his journey through public service and the private sector.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He was born to the esteemed lineage of Alabo A. C. T Iyaye, Fifikachiri III, and Alabota F. A. Iyaye on September 24, over five decades ago, Young Boma's formative years hinted at the excellence to come. His academic prowess shone brightly, first at State School 2 in Port Harcourt and later at Baptist High School, where he combined stellar academic achievements with a growing passion for sports.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Transitioning into higher education, Boma's diligence led him to the then University of Science and Technology, Nkpolu-Oruworokwo, in Port Harcourt, where he earned a Bachelor's degree in Business Education and an MBA in Banking and Finance. Not one to rest on his laurels, he later embraced the legal profession. He obtained his LL.B degree from the University of Abuja and was subsequently called to the Nigerian Bar.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Beyond his commendable academic strides, however, he bore within the burning desire to make tangible societal impacts. Following a successful tenure in the accounting arena with prestigious multinationals, Hon. Iyaye joined the People's Democratic Party (PDP). His foray into politics culminated in representing Ogu/Bolo Constituency in the Rivers State House of Assembly, further highlighting and cementing his commitment to the region's development.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">A testament to his undeniable talent and unwavering devotion to sports, Boma's tenure as the Commissioner of Sports for Rivers State saw him championing pivotal milestones for the state. Notably, he was crucial in successfully hosting the 17th National Sports Festival, the "Garden City Games." His leadership acumen caught the eye of the then Governor Nyesom Ezenwo Wike, leading to multiple stints as Commissioner, first for Sports and later for Local Government Affairs.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Hon. Boma Iyaye's impeccable reputation and passion soon captured the attention of President Bola Ahmed Tinubu. Recognizing his dual expertise in accounting and dedication to youth development, President Tinubu appointed him to the eminent position of Executive Director for Finance and Administration at the NDDC.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Today, as he navigates the intricate responsibilities of this new role, his core values remain unchanged: to elevate the Niger Delta's youth and forge a path of hope and prosperity. An avid sports enthusiast and devoted family man, Boma's life is a harmonious blend of personal joys with his beloved wife, Joy, their children, and a professional journey dedicated to the betterment of the Niger Delta community.</p></br>`,
        ],
      },
      {
        id: 1,
        name: "Mr. Chiedu Ebie",
        title: "Chairman",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739478526/NDDC/Chinedu%20Ebie.png",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Mr. Chiedu Ebie, Chairman of the Niger Delta Development Commission (NDDC), is not just a lawyer but a seasoned technocrat who represents transformative leadership for the Niger Delta Region.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His vast experience and innate capabilities make him well-equipped to combat the enormous challenges ahead and leave a monumental impact on the development of the Niger Delta Region.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He was born into the family of Professor John C. Ebie, a respected psychiatrist, academic, and pioneer Chief Medical Director of the University of Benin Teaching Hospital (UBTH).  This rich pedigree is the foundation of his illustrious career, propelling him to amass over three decades of varied experiences from the private and public sectors. With an undergraduate degree in law from the University of Benin, a certificate of call to the Bar from Nigerian Law School, and a postgraduate diploma from the University of London, his academic credentials are just as impressive.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His journey as a corporate and commercial lawyer saw him offering advisory and transactional services to diverse multi-industry clients. Delving into the intricate world of startups, specifically in the oil and gas sector, he managed an indigenous upstream company operating in the Niger Delta.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">As a man of results, his tenure in the public sector was marked by efficiency and the breaking down of bureaucratic barriers. He introduced and implemented government policies through processes that translated into a seamless, result-oriented working environment. Before long, recognition came in droves for him, particularly by former Governor Ifeanyi Okowa of Delta State, who lauded him as his most outstanding appointee during the third anniversary of his first tenure when he served as Commissioner for Education (Basic & Secondary). This accolade culminated in a higher responsibility. He became the Secretary to the Delta State Government (SSG) during Okowa's second term. In this dynamic political environment, his calm demeanor, humility, and strategic insight became a source of guidance and stability, further solidifying his reputation as an invaluable asset to Delta State.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He stands out as a vivid patch in the vast tapestry of Nigerian governance and development. His humility, unwavering commitment to knowledge, due process, and teamwork place him at the forefront of driving change and making pivotal decisions.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Demonstrating his leadership skills, he co-convened the Delta Unity Group (DUG) aimed at promoting unity and harmony within the political domain of Delta State. This structure was crucial in grassroots mobilization for progressive candidates during the 2023 general elections.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">As he takes the reins of Governing Board of NDDC, his vision for the Niger Delta Region is clear and promising. It is a vision that seeks to improve and change the outlook of the Commission while at the same time rebuilding trust and confidence among critical stakeholders.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Chiedu Ebie is a leader, reformist, and architect of progress, ready to shape a brighter and more prosperous future for the Niger Delta Region.</p>`,
        ],
      },
      {
        id: 2,
        name: "Dr Samuel Ogbuku",
        title: "(Managing Director/CEO)",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739471829/NDDC/Dr%20Samuel%20Ogbuku.png",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1 mt-16">Chief Samuel Ogbuku, Ph.D., the Managing Director of the Niger Delta Development Commission, NDDC, has become synonymous with transformative development in the Niger Delta region.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In a very short period, he has demonstrated that he is on a mission to reshape the socio-economic landscape of Nigeria's oil-rich region.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Born on August 19, 1975, he has an impressive profile spanning over twenty years of experience and expertise in crisis management and capacity building, built across diverse fields of human endeavour.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">A native of Ayakoro in Ogbia Local Government Area of Bayelsa State, Dr Ogbuku started his basic education at Christ the King School, Oromineke, D/Line in Port Harcourt, Rivers State. He proceeded to Government Secondary School, Borokiri, Port Harcourt. As a student of the popular Government Secondary School, his earliest passion for how to help transform the Niger Delta had begun to form.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Little wonder, therefore, that the young Samuel Ogbuku proceeded to the University of Port Harcourt to study Political and Administrative Studies, graduating in 2000 with a Bachelor of Science, B.Sc., degree. He also obtained a Post Graduate Diploma (PGD) in Sociology, Industrial Relations and Personnel Management in 2002; a Master of Science, M.Sc., degree in Political and Administrative Studies and Development Studies in 2013; and a Doctor of Philosophy, Ph.D in Political and Administrative Studies, Development Studies in 2021.</p></br>`,

          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Dr Ogbuku has held several important leadership and management positions. These include serving as Personal Assistant to the Special Assistant to the Minister of State, Petroleum, from 2005 to 2007 and Chief of Staff, Government House, Yenagoa, Bayelsa State, from May 2007 to January 2012.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Dr Ogbuku has held several important leadership and management positions. These include serving as Personal Assistant to the Special Assistant to the Minister of State, Petroleum, from 2005 to 2007 and Chief of Staff, Government House, Yenagoa, Bayelsa State, from May 2007 to January 2012.</p></br>`,

          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">An ally of Chief Timipre Sylva, working with him in different capacities, Dr Ogbuku sees his long years of tutelage as the solid foundation that broadened his experience and deepened his understanding of improving people's living conditions.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Until he was appointed Managing Director/CEO of the NDDC, he served as Senior Special Assistant on Niger Delta Affairs to the then Deputy President of the Senate, Obarisi Ovie Omo-Agege.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He is also the Traditional Ruler (Deputy Paramount Ruler) of Ayakoro Town, Ogbia Local Government Area of Bayelsa State. He continues to build bridges between communities in the state and the region.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">A product of the Niger Delta struggle, a student union activist and one-time Public Relations Officer of Ijaw Youths Council (IYC), Central Zone, Dr Ogbuku has always shown deep concern about the plight of the Niger Delta region.</p></br>`,

          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">As a humanist, his expertise and experience across diverse human endeavours span over two decades, demonstrating the zeal to positively affect the lives of his people in the Niger Delta Region.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Beyond these roles, Dr. Ogbuku is a respected voice, as shown in the national discourse on regional development, energy, security and environmental sustainability.  He continues to advocate for policies that balance the need for economic growth with the imperative of protecting the Niger Delta’s unique ecological landscape.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Ogbuku has the rare privilege of being appointed by two Presidents as NDDC Managing Director. President Muhammadu Buhari appointed him as MD/CEO on November 23, 2022, and the board was inaugurated on January 4, 2023. He was again re-appointed by President Bola Ahmed Tinubu on August 29, 2023.</p></br>`,

          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Since he mounted the saddle at NDDC, he has focused on addressing long-standing infrastructural deficits in the Niger Delta region and building a strong institution, empowering communities and promoting sustainable development across the Niger Delta.</p></br>`,

          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His leadership style is inclusive, transparent, and accountable. He emphasises collaborative efforts that unite stakeholders, government agencies, and private sector partners to achieve shared goals.</p></br>`,

          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Dr. Ogbuku is utilising his vast intellectual resources to strengthen the Commission and execute its mandate in ways that will be remarkably and fundamentally different from his predecessor.  His management team initiated and launched several transformative projects that have brought remarkable improvement across various communities in the region.  This includes constructing 142 healthcare centres equipped with modern facilities. He revived the hitherto suspended free healthcare programmes that have provided 20,000 surgeries, attended to 45,000 patients, and distributed essential medical supplies to rural communities to enhance healthcare access.</p></br>`,

          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">The Ogbuku-led management also takes credit for the construction and rehabilitation of 5,141.3 kilometres of roads, 42 bridges, and 87 jetties, including the inauguration of the 25.7-kilometre Ogbia-Nembe Road in Bayelsa State and the Ibeno Bridge in Akwa Ibom State. These bridges link 20 communities, hitherto separated by the Qua Iboe River.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">The NDDC Foreign Post-Graduate Scholarship Programme has benefitted 2,700 students. Numerous schools have been rehabilitated, and educational materials have been distributed to foster learning and equip younger generations with skills and knowledge to drive the region’s future.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Under the stewardship of Dr Ogbuku, NDDC has provided solar-powered street lights, supported 4,500 rice, cassava farmers and collaborated with ITF skill up Artisan Scheme for the Niger Delta Youths showing great interest for the total well-being and improvement of the Niger Delta people and the diaspora.</p></br>`,

          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Dr. Ogbuku, armed with deep knowledge and insight in conflict resolution, youth leadership development, and personnel management, has shored up the Commission's operations. He ensured that the Commission restructured its administrative system by returning to the 13 Directorates recognised in the NDDC Act.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Reorganising the administrative system to enhance better service delivery was expedient. Demonstrating its commitment to due process and transparency, the Commission introduced measures to build confidence and trust among all partners and stakeholders.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">The management of NDDC under Dr Samuel Ogbuku set up a system to establish a robust Corporate Governance structure that fosters accountability and transparency. This structure is complemented by the development of clear and measurable Key Performance Indicators (KPIs) to track progress towards set goals.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">To ensure a strong institutional culture anchored on sound ethics and good corporate governance, KPMG, a reputable global business consultancy, was engaged to review and strengthen the Commission’s corporate governance system and improve its internal processes and institutional protocols.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Part of KPMG’s mandate is to produce an SOP for the NDDC that covers all aspects of the Commission’s activities and transactions. Apart from delivering on projects, the NDDC has Transiting from Transaction to Transformation.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">The Commission has modified the NDDC Youth Volunteer programme into a Youth Internship Programme. Ten thousand youths will be attached to organisations for one year to learn different skills while the Commission pays them N50,000 monthly stipends.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In addition to the internship programme, the Commission also gives more opportunities and hope to Niger Delta youths through a novel programme called the Holistic Opportunity Projects of Engagement (HOPE), meant to identify the interests of the youths for skills training.</p>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">As part of the efforts to renew and reposition the NDDC, management stepped up its collaboration with various stakeholders. This included engagement with the key stakeholders in the oil industry, who contribute three per cent of their operational budget to the Commission, the state governments, traditional rulers, civil society groups, youth organisations, and contractors.</p></br>`,

          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Ogbuku is a consummate administrator who is loved by both the staff of the Commission and Niger Delta stakeholders. He is indeed an Ambassador Extraordinaire of the University of Ibadan.</p>`,
        ],
      },
      {
        id: 3,
        name: "Sir Victor Etim Antai",
        title: "Executive Director Projects",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739486279/NDDC/Sir%20Victor%20Etim%20Antai.png",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Sir Victor Etim Antai, the Executive Director of Projects, is a distinguished Methodist who has been honoured with the prestigious title of KJW. He symbolizes administrative mastery and dynamic leadership, inspiring those around him. He was born on May 19, 1965, at Methodist Hospital in Ituk Mbang, Akwa Ibom State. Sir Antai's inspiring journey is defined by his unwavering dedication to service and his profound commitment to creating transformative change within communities.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">A devoted family man, Sir Antai finds fulfillment as a loving husband to Mrs. Edu Victor Antai and a proud father to their children. His passion for serving his community is matched only by his devotion to his family.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">With a remarkable educational background, Sir Antai's thirst for knowledge led him to pursue a Bachelor of Science (B.Sc.) in Geography from the esteemed University of Port-Harcourt. His visionary mindset and desire for further growth propelled him to obtain a Master of Science (M.Sc.) degree in Logistics and Transportation Management. He is currently pursuing a Ph.D. in the same field at the University of Port Harcourt.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Sir Antai's professional path radiates with innovative leadership, beginning as the Chief Operating Officer at Maintenance Culture Limited. His entrepreneurial spirit and visionary mindset led him to found Men at Work LTD, where he served as Chief Executive Officer (CEO). His exceptional leadership qualities were evident during his tenure as the Chairman of the Mbo Council Area from 2008 to 2011 in Akwa Ibom State, where he redefined governance and achieved an unprecedented re-election for a second term from 2012 to 2015.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In 2015, Sir Antai's journey took on a greater purpose when he accepted the role of Commissioner in the Akwa Ibom State Ministry of Local Government and Chieftaincy Affairs. He demonstrated his transformative touch and transitioned to the Ministry of Tourism and Culture, where he spearheaded initiatives that revitalized the state's cultural heritage and tourism sector. Under his visionary leadership, Akwa Ibom experienced remarkable transformations and gained national prominence through groundbreaking events showcasing the state's rich cultural tapestry.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Sir Antai's commitment to community development matches his pleasant nature and dedication to student welfare. His Active involvement in sports and his former leadership role as Director of Welfare/Transport in the Student Union Government of the University of Port Harcourt underscore his holistic approach to leadership and his genuine care for the well-being of others.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Honored with the Knight of John Wesley (KJW) by the Methodist Church Nigeria and recognized as the head of the most improved ministry by the Governor of Akwa Ibom State in 2017, Sir Antai's exceptional contributions have received well-deserved accolades. His legacy of excellence is further cemented by the Ibom Pride Award of Excellence and his recognition as the Best Performing Local Government Chairman by the House of Representatives Committee on Local Government.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Beyond his administrative prowess, Sir Victor Etim Antai is a true humanitarian, dedicating his time and efforts to community development. His unwavering commitment to societal growth has earned him several chieftaincy titles, testifying to his transformative impact on the lives of the people he serves.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Sir Victor Etim Antai is not merely an administrator but a visionary leader guided by a deep sense of purpose. His exceptional achievements, dedication to service, and holistic approach to community development have solidified his reputation as a figure of influence and inspiration in Akwa Ibom State. Through his remarkable journey and outstanding leadership, Sir Antai exemplifies excellence in transforming communities and leaving an indelible mark on society, all while cherishing the loving support of his wife and children.</p></br>`,
        ],
      },
      {
        id: 4,
        name: "Hon. Ifedayo Abegunde",
        title: "Executive Director Corporate Services",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740243303/NDDC/Hon.%20Ifedayo%20Abegunde.png",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">The journey of the Executive Director of Corporate Services, Hon. Ifedayo Abegunde, has been a rich tapestry of engineering prowess, architectural brilliance, and dedicated public service.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Born on May 5, 1955, he started from a civil engineering background. He enlarged his scope with architectural studies before moving into the esteemed chambers of the House of Representatives. His variegated forays endowed him with a plethora of skills and experiences. His strong affinity for architecture, coupled with the art of crafting environments, has allowed him to weave imaginative planning seamlessly with realistic implementations.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His educational foundation was laid at St. David's Primary School, Akure, which he followed up with a secondary education at Oyemekun Grammar School, Akure. Furthering his passion for design and structure, he acquired a B.Sc in Architecture from Florida A&M University, Tallahassee, Florida, U.S.A. He obtained his Master's in Architecture from Morgan State University, Baltimore, Maryland, U.S.A.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His professional journey began as an Assistant Civil Engineer at Akintobi-Oyenekan & Associates, where he played an instrumental role in developing roads in Ondo State. His career then spanned across international borders to the USA, where he showcased his technical prowess as a Systems Engineer for both the State of Maryland and the United States Patent and Trade Organization.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In politics, his commitment to the public good has been evident. As a Member of the House of Representatives, he chaired committees on Inter-Governmental Affairs and the National Emergency Management Agency. His dedication to governance and statecraft further propelled him to serve as the Secretary to Ondo State Government (SSG) from 2017-2020, where he played pivotal roles in industrialization, poverty eradication, and governance programmes.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Hon. Ifedayo possesses various certifications, including those from Microsoft, Cisco, and the American Society of Professional Estimators. His attributes resonate with organizational restructuring, team collaboration, excellent communication, relentless pursuit of objectives, and fostering strong interpersonal relationships.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Hon. Ifedayo Abegunde is not just a seasoned professional or political figure; he's a harmonious blend of both. He is dedicated to exploring new territories, improving built environments, and positively impacting his local government, state, and the nation.</p></br>`,
        ],
      },
    ],

    subDirectors: [
      {
        id: 0,
        name: "Dr Stephen Onome Ighomuaye",
        title: "",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740225438/NDDC/sub%20dorectors/Dr_Stephen_Ighomuaye_iikvo2.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Stephen Onome Ighomuaye, Ph.D, a Consummate Lawyer, Public Servant and Farmer is Chairman BOT, El Marino Sports Club. </p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">A graduate of the Edo State University Ekpoma with about 30 years post call to bar experience. He also holds a Master’s Degree (LL.M Hons) from the University of Lagos and a Ph.D from the Rivers State University, Port Harcourt.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">After a robust private experience spanning several Law firms culminating in the establishment of a partnership – ONYEKE, IDEHO & IGHOMUAYE, He subsequently entered the Public Service of the Presidency with the Niger Delta Development Commission in 2001 as a pioneer staff. He has risen from the position of Senior Manager in 2001 to the rank of Director, Legal Services in charge of the huge litigation and dispute resolution portfolio of the interventionist agency.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His experience generally spans litigation management, Regulatory/Control, Negotiation, Dispute Resolution and Strategic Management.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He is a member of several professional organisations including the Nigeria Bar Association (NBA), American Bar Association (ABA), International Bar Association (IBA), International Dispute Resolution Institute (IDRI) and a fellow of the Institute of Strategic Management of Nigeria (ISMN) and Chartered Institute of Administrators of Nigeria (CIA).</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">A man of peace and catalyst for change, Ighomuaye has been called a friend of the oppressed, a symbol of hope and an inspiration for the youth.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">A devout Christian of the Catholic faith, Stephen Ighomuaye believes true family values are the core of life and good society. He enjoys playing squash, table tennis, football and swimming with his family. He is married to amiable Princess Modupe and they are blessed with three sons.</p></br>`,
        ],
      },
      {
        id: 1,
        name: "Engr Alamieyesiegha Bayelsa Directo",
        title: "",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740225685/NDDC/sub%20dorectors/Engr_Alamieyesiegha_Bayelsa_Director_dbhate.jpg",
        body: [
          `<div class="mt-16">
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              Engr. Alamieyeseigha S. Godknows, FNSE, FNIHTE was born on November 23, 1969, in Amassoma town in 
              Southern Ijaw Local Government Area of Bayelsa State. He has a passion for becoming an academician, 
              which he started at the elite Army Day Secondary School, Jos, Plateau State. 
              He then proceeded to the elite Government Secondary School, Amassoma, Southern Ijaw, Bayelsa State, 
              where he obtained his West African School Certificate (WASC).
            </p>

            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              He proceeded to the University of Science & Technology, Port Harcourt, and obtained his 
              Bachelor of Technology (B. Tech.) in Civil Engineering. He later obtained an M. Tech. Degree 
              (Structures) from the same university in Civil Engineering. Additionally, he possesses a 
              special Executive Master's Degree in Corporate Governance and Leadership from the Metropolitan 
              School of Business and Management, United Kingdom. He is currently undergoing a Ph.D. in 
              Structural Engineering at Rivers State University, Port Harcourt, Nigeria.
            </p></br>

            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              He is a member of many, both local and international professional institutes and associations. Among them are:
            </p>
            <ul class="ml-10">
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Fellow of the Nigerian Society of Engineers (FNSE)</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Council for the Regulation of Engineering in Nigeria (COREN)</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Fellow of the Nigerian Institute of Highway and Transport Engineers (FNIHTE)</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Fellow of the Institute of Corporate Administration of Nigeria</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Universal Peace Federation & Youth Federation for World Peace (Youth Ambassador for Peace)</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Project Management Institute (PMI)</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Member, Nigeria’s Construction Industry Hall of Fame</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Member, Port Harcourt Polo Club</li>
            </ul></br>

            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              He has worked with Keystone Oil & Gas Services Ltd.; Akpos Nig. Ltd.; Global Marine Engineering Co. Ltd.; Maxwell Electrical Engineering Co. Ltd. before joining the Niger Delta Development Commission (NDDC).
            </p></br>

            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              He gained employment into The Niger Delta Development Commission i(NDDC) in 2004 as a Manager and has risen to the position of a Director, currently heading the Bayelsa State Office. 
            </p>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              He has numerous working experiences having gone through different directorates, departments, units and traversing the nine states of the NDDC as follows; 
            </p>
            
            <p class="main-text text-caption text-sm-body-2 text-md-body-1" stype="text-decoration: underline">UTILITIES, INSTRUCTRUCTURAL DEVELOPMENT AND WATERWAYS-</p>
            <ul class="ml-10">
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Evaluation and processing of variation claims on buildings</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Calculating and processing consultant fees on buildings</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Reviewing and preparing building tender documents</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Developing and preparing building road projects</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Responding to important memos and claims</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Attending directorate meetings</li>
            </ul></br>

            <h5>Highway Unit</h5>
            <ul class="ml-10">
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Developing rate indices for road and bridge projects</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Reporting status of various road projects</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Calculating, checking, and processing consultant fees</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Evaluating variation claims of contractors</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Attending directorate meetings</li>
            </ul></br>

            <h5>Canalization/Waterways Unit</h5>
            <ul class="ml-10">
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Calculating man-month rates and responsibility fees for consultants</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Processing variation issues on reclamation and shore protection projects</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Opening and analyzing tenders for erosion control, flood mitigation, and canalization projects</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Developing appropriate rate indices for reclamation, shore protection, and canalization projects</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Attending directorate meetings</li>
            </ul></br>

            <h5>Water Unit</h5>
            <ul class="ml-10">
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Processing variation issues on awarded water projects</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Calculating and processing consultant fees</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Evaluating technical proposals on water treatment plants</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Providing technical advisory on proposals</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Opening and analyzing tenders on water projects</li>
            </ul></br>

            <h3>Training and Certifications</h3>
            <p>He has attended the following courses:</p>
            <ul class="ml-10">
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Formulating and Executing Strategy for Result Course</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Construction Cost Estimating Course</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Advanced Project Management</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Professional Project Management</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Conflict Analysis and Management Training</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Medium Term Sector Strategies (MTSS) and Medium Term Expenditure Framework (MTEF)</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Preventing and Managing Delays, Claims, and Disputes in Engineering Projects</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">STAAD Pro. Workshop / Seminar</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Cost Engineering - Total Cost Management</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Cost Estimating, Project Planning & Control</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Project Management and Cost Control</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Design and Detailing of Roads and Bridges in Practice</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Supervising the Design, Construction, and Maintenance of Steel Structures</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Operations Manual Implementation Workshop</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Strengthening Leadership and Managerial Skills for Effective Performance</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Leadership and Corporate Governance</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Course on Preparing & Pricing Bills of Quantities for Civil Engineering Projects</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">AutoCAD and 3-D ArchiCAD Training Programme</li>
              <li class="main-text text-caption text-sm-body-2 text-md-body-1">Quality Management – Individual Awareness</li>
            </ul></br>

            <h3>Personal Life</h3>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">
              Engr. Alamieyeseigha, FNSE, is happily married with children and is known for his virtues. 
              His career, social engagements, and private life are characterized by exceptional humility, 
              a good reputation, reticence, and hard work.
            </p>
          </div>
          `,
        ],
      },
      {
        id: 2,
        name: "Engr Evong Moduck Evong",
        title: "",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740225807/NDDC/sub%20dorectors/Engr_Evong_Moduck_Evong_iueb5s.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Engr. Evong Moduck Evong is the Director of the Akwa Ibom State office of  the Niger Delta Development Commission (NDDC) in Uyo, Nigeria. He had been a Director in the Project Management Department (PMD) at the Commission's headquarters in Port Harcourt Rivers State. He had also been the Commercial and Industrial Development desk officer of the Niger Delta Development Commission (NDDC), Cross River State office, Calabar.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">For 26 years he has been involved in the Public Service and the organized Private Sectors of the Nigerian economy. His competencies include but not limited to Project Management, Administration, Management Consultancy, Organizational Transformation, Corporate Governance, Mechanical Engineering (production) Technology, Grains processing, Maize Milling, Wheat Milling, Plant Installation, Plant Maintenance, Operations Management, Business Advisory Services, Small Business Mentoring, Credit Management, Entrepreneurship Development, Strategic Management, Human Resources Management, etc.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He had previously plied his trade in very reputable organizations like the Flour Mills of Nigeria Plc group, the Continental (West Africa) group, Union International Milling Services and Mitchelson Nigeria Limited before joining the services of the Niger Delta Development Commission in 2004.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Born on the 25th of January, 1976 in Akpet Central, Biase, Cross River State, South South Nigeria into a very disciplined, humble but reputable parentage.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He attended the Redeemed Christian Bible College, Lagos, where he obtained a Post Graduate Diploma in Theology in 2015 with merit, the University of Calabar where he obtained the Masters Degree in Business Administration (MBA) as the most outstanding student in his class of 2009 and a Post Graduate Diploma in Management in 2006. Engr. Evong was also trained at the prestigious Flour Mills of Nigeria Milling School, Apapa, Lagos and acquired yet another Post Graduate Diploma, this time in Milling Technology in 2004. He had earlier bagged the Higher National Diploma (HND) in Mechanical (production) Engineering Technology at Upper Credit level at The Polytechnic Calabar in 1998. His secondary Education was at the famous St. Patrick’s College, Calabar and the College of Education, Akamkpa where he obtained the Junior School Certificate (JSC) and the Senior School Certificates (SSC) respectively. He holds the globally recognized Project Management Professional (PMP) Credentials Certification from the prestigious Project Management Institute (PMI) in Philadelphia, Pennsylvania, United States of America and has participated in Strategic Management fora in Johannesburg and London, Project Management fora in Mauritius and Dare salaam.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Evong served in the Governing Council of the Institute of Strategic Management, Nigeria (ISMN) from 2012 – 2018 as the National Secretary of ISMN, Assistant National Secretary, was the founding Assistant Secretary and later Secretary of Cross River State Chapter of ISMN and the Chairman, Nigerian Institute of Management (Chartered), Cross River State Branch. He is a member of the South South Zonal Executive Committee of the Nigerian Institute of Management (Chartered). He is a Fellow of the following professional bodies: Nigerian Institute of Management (Chartered), Chartered Institute of Administration, International Professional Managers Association –UK, Association of Corporate Governance Professionals of Nigeria, Institute of Strategic Management, Nigeria. He is a Doctoral Fellow of the Chartered Institute of Human Resources Management, amongst others.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He is very compassionate and works tirelessly for the emancipation of his immediate community and the society at large. A philanthropist, community leader, man of the people, promoter of peace, empathic, detribalized, a strong supporter of human capacity development and empowerment. He loves challenges, enjoys solving problems, a go- getter and settles for excellence. A team player, counselor par excellence, loves coaching and mentoring, a practicing Christian (an ordained Minister in the Redeemed Christian Church of God, RCCG), very principled and amiable. Evong is self confident, a fence mender, a bridge builder and a pleasing personality.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Engr. Evong loves to read and write, serve in the Lord’s vineyard, sing and listen to good music, prepare and savor good dishes, follow and watch football, play table tennis and scrabble He is married to Hope David; they are blessed with two sons and a daughter, Epayobazi, Amochobazi and Ayomachobazi respectively.</p></br>`,
        ],
      },
      {
        id: 3,
        name: "Engr Nelson Onwoh",
        title: "",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740225908/NDDC/sub%20dorectors/Engr_Nelson_Onwoh_djsju0.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">ONWO, Nelson Odezi became the Director, Project Monitoring & Supervision of the Niger Delta Development Commission in 2023.  He joined the Commission in 2002 as a Senior Manager and one of the pioneer staff of the Directorate of Project Monitoring & Supervision. He rose to Assistant Director in 2010, Deputy Director in 2014 and became a substantive Director in 2018.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Nelson Onwo graduated from the University of Benin in 1994 with a Bachelor of Science Degree in Geology. His quest for knowledge and professionalism propelled him to further his studies at the Federal University of Technology, Owerri, where he bagged an M.Tech Degree in Environmental Management Technology in 2004. He also holds a Master's and a Doctorate Degree in Civil Engineering with specialization in Geotechnical Engineering from the University of Benin.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He is a certified Project Management Professional (PMP) with over 29 years of cognate experience in Project Management. He is a Fellow of the Nigerian Association for Engineering Geology and Environment, a member of the Project Management Institute, Nigerian Society of Engineers, Nigerian Mining and Geosciences Society (NMGS), and the Nigerian Institute of Management.  His earlier work in the private sector from 1995 to 2002 prepared him for various multidisciplinary responsibilities crisscrossing the infrastructural Directorates of the NDDC.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He has attended several trainings, workshops and conferences in project management, leadership, corporate governance, strategic planning and innovation both local and international; notably Havard Law School negotiation and leadership course - 2012, University of Wisconsin (Madison) – 2013, Project Management Institute Global Conferences, etc.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He has made remarkable contributions to the success of the NDDC evident in the completion and commissioning of impactful projects in some states of the Niger Delta Region, namely; 29.5km Ogbia-Nembe Road and Bridges, 132/33 KV transmission substation at Okitipupa, Obehie Road, etc. He coordinated the development of a Standard Operating Procedure (SOP) for all Directorates, Departments and Units of the NDDC, which is currently being streamlined by the KPMG. He also introduced the need for Quality Assurance/Quality Control of all NDDC solar streetlight projects under the “Light up the Niger Delta Initiative” of the MD/CEO.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Under his leadership, the Directorate operates a new template for the Performance Evaluation Report devoid of complexities in reporting the Contractor’s achievements on the project.  He championed the delivery of quality projects through the introduction of project hold points to ensure value for money at various stages of project implementation. He has brought together the optimum functioning of the PMS in the Nine (9) State Offices through various platforms, retreats, and other engagements.</p></br>`,
        ],
      },
      {
        id: 4,
        name: "Engr Onoriode Joseph",
        title: "Director, Delta State Office",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740225960/NDDC/sub%20dorectors/Engr_Onoriode_Delta_Office_l3dtnw.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Onoriode Joseph Omo-Udoyo is a seasoned engineer with extensive experience in mechanical engineering and project management. He obtained his Bachelor of Engineering degree in Mechanical Engineering from the Federal University of Technology, Owerri, in 1992. His early education began at Olodi Primary School, Warri, where he earned his First School Leaving Certificate in 1981, followed by Notre Dame College, Ozoro, where he obtained his West African School Certificate in 1986.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His professional career began in 1993 with the Nigerian Airforce at the 303 Flying Training School in Kano, where he served as a Pupil Engineer during his National Youth Service Corps (NYSC) program. In 1994, he joined Panama Construction Company in Warri as a Staff Engineer, a position he held for a decade until 2004. That same year, he transitioned to the Niger Delta Development Commission (NDDC), where he has continued to serve in various capacities to date.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Engr. Omo-Udoyo has attended numerous training courses in project management and leadership, enhancing his expertise in infrastructure development and administration. He is a member of the Nigerian Institution of Mechanical Engineers (NiMechE) and the Nigerian Institute of Management (NIM).</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His office is located at the NDDC Delta State Office, Anoskye Close, Off Edjeba Road, Edjeba, Warri, with a postal address at P.O. Box 3881, Warri. He can be contacted via email at <a href="mailto:omo-udoyo.onoriode@nddc.gov.ng">omo-udoyo.onoriode@nddc.gov.ng</a>.</p>`,
        ],
      },
      {
        id: 5,
        name: "Abraham Onduku",
        title: "",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740226032/NDDC/sub%20dorectors/Abraham%20Onduku.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Engr. Abrahams Onduku, FNSE, PMP, is the Director of the Project Management Department (PMD) at the Niger Delta Development Commission (NDDC). Born on 19th December 1969, he has amassed over 30 years of professional experience, establishing himself as a distinguished leader in engineering and project management. He holds a Bachelor's degree in Mechanical Engineering and a Master's degree in Engineering Management, blending technical expertise with strategic leadership.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Before assuming his current role, Engr. Onduku served as the Director of Project Monitoring and Supervision from January 2021 to October 2022. His journey at NDDC began in 2004 after a successful tenure at First Aluminum Nig. Plc, where he worked as a Production Engineer.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Since his promotion to Director in 2000, Engr. Onduku has played a crucial role in overseeing and executing key projects that have significantly impacted the Niger Delta region. His expertise in managing large-scale infrastructure projects, combined with his unwavering commitment to excellence, has earned him recognition as a Fellow of the Nigerian Society of Engineers (FNSE) and certification as a Project Management Professional (PMP).</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Engr. Onduku's leadership and project management skills continue to drive the successful implementation of development projects, contributing to the growth and transformation of the Niger Delta.</p></br>`,
        ],
      },
      {
        id: 6,
        name: "Engr Uno",
        title:
          "Director, Utilities, Infrastructural Development & Waterways (UIDW)",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740226132/NDDC/sub%20dorectors/Engr%20Uno.jpg",
        body: [
          `
            <p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Engr. Uno Ogban Uno was born on December 27, 1965, in Ikun Community, Biase Local Government Area of Cross River State. He is married and resides in Port Harcourt at 3 Samuel Onyekere Close, Off Owen Street, Off RD Road, Rumuokwurushi. His postal address is at the Niger Delta Development Commission (NDDC) headquarters in Port Harcourt. He can be reached via phone at 08032012167 or by email at <a href="mailto:uno.ogban@yahoo.com">uno.ogban@yahoo.com</a>.</p></br>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">He began his education at Primary School Akamkpa Town, where he obtained his First School Leaving Certificate in 1976. He proceeded to Federal Government College, Ikot Ekpene, earning his West African School Certificate in 1982. His academic journey culminated in a Bachelor of Engineering in Civil Engineering from the University of Nigeria, Nsukka, in 1989.</p></br>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">Engr. Uno started his career in 1990 as a Site Supervisor at Eagle Construction Limited, Jos. In 1991, he joined the Cross River State Rural Water Supply Agency, where he worked as a Civil Engineer and later as a Senior Civil Engineer. Between 1993 and 1994, he was an Executive Member of the Cross River State Task Force on Roads Construction, overseeing bridges and culverts. From 1996 to 2002, he served as a Senior and Principal Civil Engineer at the Nigeria Reinsurance Corporation in Lagos. He then joined the Niger Delta Development Commission (NDDC) in 2002, where he steadily rose through the ranks, holding positions such as Senior Manager, Principal Manager, Assistant Director, Deputy Director, and eventually Director in 2018.</p></br>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">With extensive experience in infrastructural development, Engr. Uno has supervised major projects across the Niger Delta region. He played a key role in developing NDDC’s Project Management template and led the Public-Private Partnership (PPP) initiative, collaborating with organizations like NLNG and Chevron. He has chaired various committees on project implementation, tenders evaluation, and PPP funding.</p>
            <p class="main-text text-caption text-sm-body-2 text-md-body-1">He is a Corporate Member of the Nigerian Society of Engineers (NSE), a registered engineer with COREN (R.11,309), a Fellow of the Nigerian Institution of Civil Engineers (F.02227), and a member of the Risk Surveyors Association of Nigeria.</p>
          `,
        ],
      },
      {
        id: 7,
        name: "Chidi nwaknwo",
        title: "",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740226365/NDDC/sub%20dorectors/Chidi%20nwaknwo.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Chidi Nwankwo was born into the family of Elder Monday Nwankwo  and Mrs.  Happiness Nwankwo of Umuodiri Community in Omuma LGA,  Rivers State.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He is a Chartered Accountant and currently the Director, Public Private Partnership in the Niger Delta Development Commission. He has special interest in the field of accounting and law, pursuant to this desire, he obtained a B. Sc, MBA in accounting and LL. B, LL.M in law.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He joined the Oil Mineral Producing  Areas Development Commission (OMPADEC) in may 1995 as accountant II, later transferred to the Audit Department as Auditor II .He rose to the position of Zonal Auditor-  Bayelsa State office. In 2001 his service was transferred to the Niger Delta Development Commission (NDDC) where he rose to the  position of Zonal Accountant- Rivers State office,  Deputy Director- Finance and Supply Headquarters, Director in the Cross Rivers State Office until his current position as Director,  Public Private Partnership.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He also served as the Secretary of the Anti-corruption Transparency Unit (ACTU)) of the Commission.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Mr. Chidi Nwankwo, apart from being a member of the Institute of Chartered Accountants of Nigeria, is also a member of the Certified Fraud Examiners and Nigerian Institute of Management.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He has attended many professional training in key institutions, including the Lagos Business School and the Harvard  Business school,  Boston USA.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He is married to Pharm. Chikaodili  Nwankwo and blessed with four children.</p></br>`,
        ],
      },
      {
        id: 8,
        name: "Engr Kelechi Nwelue",
        title: "",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1740226532/NDDC/sub%20dorectors/Engr%20Kelechi%20Nwelue.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Sir Kelechi Nwelue is the Imo State Director of the Niger Delta Development Commission (NDDC). He began his career at the NDDC in 2004 and has risen through the ranks over the past 21 years to his current position. Before joining the Commission, he built an impressive career in Nigeria’s banking, finance, and customer relationship management sectors. He holds a B.Tech in Agricultural Economics from the Federal University of Technology, Yola, and an M.Sc in Agricultural Economics from the Federal University of Technology, Owerri. Additionally, he has a Postgraduate Diploma in Management from the University of Port Harcourt and a Corporate Governance Certificate from the Metropolitan School of Business and Management, United Kingdom. He is a Fellow of the Nigerian Institute of Marketing (FNIM).</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Born on August 3, 1974, in Aba, Abia State, Sir Kelechi Nwelue is an indigene of Imo State. He is a Knight of Saint Christopher (KSC) and holds multiple professional fellowships, including FNIM, SMIPM, and FCIFCN. His extensive career spans roles in both the private and public sectors. He started as a Marketing Executive at Rokana Industries PLC in 2000, later serving as a Manager for Agricultural Projects at International Consolidated Limited (ICL). He transitioned into banking, working as a Banking Officer at Intercity Bank PLC before joining the NDDC in 2004, where he has held various key positions leading to his appointment as State Director on August 31, 2023.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Sir Nwelue is a highly trained professional with numerous certifications and specialized training in areas such as corporate governance, project management, financial services, risk management, and agricultural project monitoring. He has attended workshops and training sessions in Nigeria and abroad, including programs organized by the Lagos Business School, London Corporate Training (LCT), the Nigerian Institute of Management (NIM), and the Centre for Management Development (CMD). He has also participated in international seminars on monitoring and evaluation, public procurement management, and leadership strategies.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Throughout his career, Sir Nwelue has been committed to capacity building, sustainable development, and effective governance. His expertise in financial services, agricultural economics, and public administration has significantly contributed to the growth and impact of the NDDC in Imo State. His leadership continues to drive development initiatives, ensuring progress and transformation in the Niger Delta region.</p>`,
        ],
      },
    ],

    stateRepresentatives: [
      {
        id: 0,
        name: "Elder Senator Dimaro Denyanbofa",
        title: "Bayelsa State Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739487032/NDDC/Elder%20Senator%20Dimaro%20Denyanbofa.png",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Senator Dimaro Denyanbofa stands tall in the pantheon of educationists and politicians who have championed a better, more literate Niger Delta region. With his roots firmly anchored in Peretorugbene, Ekeremor Local Government Area of Bayelsa State, Senator Denyanbofa embodies the true spirit of service and development for Bayelsa, and the Niger Delta.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Fueled by a burning motivation to harness his legislative and executive prowess to improve the living conditions of the people, Senator Denyanbofa has consistently endeavoured to reshape organisational landscapes. He envisions the optimal utilisation of resources to amplify infrastructural and human capital development. With over thirty-five years under his belt, his expertise in high-level management and public administration is exemplary.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In the early 1990s, as the pioneering Executive Chairman of Ekeremor Local Government, he demonstrated an unparalleled zest for innovation. With limited resources, he built the unique Rural Electrification Model for Ekeremor and introduced groundbreaking investment models in agriculture. His tenure was so impactful that he was honoured as the best LGA Chairman in 1992. During his stint as a supervisory councilor, his ingenuity birthed the innovative 'Doctors Flying Project'— a pilot programme that was the talk of Rivers State at the time.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In 1998, as Senator for Bayelsa's West Senatorial district, not content with his legislative duties, Senator Denyanbofa was at the forefront of the fight for Nigeria's return to democracy. His passionate advocacy and leadership in groups like the Ijaw Youths Action League helped pave the way for creating the NDDC and the Niger Delta Amnesty Programme. He was also instrumental in attracting projects worth over N80 billion to Bayelsa State during his tenure as the Special Advisor on NDDC and Niger Delta affairs.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He has demonstrated adept political acumen throughout his years in politics and governance. Indeed, he helped harmonise differences between political parties in Bayelsa, strengthening the state's political framework. His accomplishments in the realms of infrastructure are commendable as well. As Special Advisor on state capital development in 2003, he played a pivotal role in enhancing Yenagoa's infrastructure, laying down internal roads, and pioneering the stormwater drainage systems that serve the capital today. In 2023, his exemplary service earned him a coveted position as a Board member and Commissioner representing Bayelsa State in the Governing Board of NDDC.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Senator Denyanbofa's rich academic background is equally noteworthy. Beginning his education at LA Primary School in Peretorugbene, he completed his Bachelor's in Business Education from Rivers State University of Science and Technology and later, a Master's in Education Psychology Guidance and counseling from the University of Port Harcourt.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Elder Senator Dimaro Denyanbofa's life is a testament to commitment, innovation, and visionary leadership. As Bayelsa strides forward, his legacy remains an enduring guiding light for progress, development and for a better Bayelsa State and the Niger Delta region.</p></br>`,
        ],
      },
      {
        id: 1,
        name: "Pastor Abasiandikan Robert Nkono",
        title: "Akwa Ibom State Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739524990/NDDC/Pastor%20Abasiandikan%20Robert%20Nkono.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Born on October 29, 1969, in the oil-rich city of Eket, the Akwa Ibom State Representative on the NDDC Governing Board, Pastor Abasiandikan Nkono, exemplifies dedication, steadfastness, dynamism and good leadership. His roots are firmly grounded in Christianity, and he is a devoted family man, proudly married, and a pillar of support for his family and community.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He started his early education at Urban Central School, Ikot Ekpene LGA, where he acquired his First School Leaving Certificate. He then proceeded to Ibiono High School, Edem Urua, which was then in Itu Local Government Area, leaving in 1984 to further his academic pursuits. His dedication to academics saw him successfully achieve O-Level General Certificates of Education in 1994.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He attended the prestigious University of Lagos for tertiary education, earning his B.Sc. (Hons) in Business Administration. He topped it up with a Postgraduate Diploma in Theology from The Redeemed Christian Bible College, Lagos, in 2013.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">A multi-talented professional, Pastor Abasiandikan Nkono's career path, drawn from the private and public sectors, posts an impressive portfolio, including his roles as Assistant Manager, Corporate Affairs, Niger Delta Development Commission (NDDC), Projects Assistant to the Akwa Ibom State Governor and Financial Controller.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Others are Vice Chairman; Supervisor for Education; Supervisor for Works and Transport; Supervisor for Agriculture and Natural Resources; all in Eket Local Government; Branding Expert and Publisher of erstwhile Horizon Magazine.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In these positions, he has manifested his unique blend of leadership and organizational management skills, which have enabled him to supervise, manage, and lead teams across multiple sectors, cementing his reputation as a focused, dynamic and dependable figure in public service.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Characterized by a "can-do" attitude, Pastor Abasiandikan thrives in challenges, showcasing an unwavering commitment to detail and an eagerness to learn. His skills are wider than leadership. As a team player, he possesses an exceptional ability to multi-task, adapt to change, and employ effective problem-solving strategies. His analytical prowess and commendable communication, presentation, and interpersonal skills make him an asset in any endeavour.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Pastor Abasiandikan Robert Nkono's career path, both in academic and professional spheres, is a testament to his commitment to excellence, service and leadership, making him an inspiration for many in Akwa Ibom and beyond.</p></br>`,
        ],
      },
      {
        id: 2,
        name: "Rt. Hon. Monday Igbuya",
        title: "Delta State Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739524990/NDDC/Rt.%20Hon.%20Monday%20Igbuya.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Rt. Hon. Monday Ovwigho Igbuya's remarkable life journey is a testament to commitment, leadership, and the pursuit of excellence. Born on August 17, 1956, in the vibrant heart of the delta, he is a distinguished figure in political and business landscapes. A devout Christian, he hails from the Sapele Local Government Area of Delta State.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Rt. Hon. Igbuya began his educational quest at the Government Primary School in Sapele. He received the Primary School Leaving Certificate in 1968. From there, he attended Academy Grammar School and Sapele Technical College before proceeding to Delta State University, Abraka, where he earned a Bachelor of Science in Political Science. Post graduation, Rt. Hon. Igbuya served in many defining roles at prominent companies, such as Shoumount Engineering Company and Delta Steel Company Limited, Ovwian-Aladja.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">However, his true calling lay in the political arena. Beginning as an elected Councilor for Old Okpe Local Government Council, Chief Igbuya climbed the political ladder with unwavering commitment, loyalty, humility, and dedication to service. His roles ranged from being the Pioneer Councilor for Sapele Local Government Council to State Publicity Secretary for the defunct Social Democratic Party in Delta State.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">While his remarkable role as the Chairman of the Sapele Local Government Council further highlighted his commitment to the progress of Sapele and Delta State at large, his leadership acumen shone brightest as the Speaker of the Delta State House of Assembly, having previously served as the Majority Leader and Member of the State Assembly.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Chief Igbuya is equally accomplished as a businessman in tandem with his political journey. He has helmed multiple ventures, serving as the Chairman and Managing Director for Movig Nigeria Limited, Movig Petroleum Nigeria Limited, and the luxurious Movig Hotels & Suites, with establishments in both Sapele and Lagos.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Indeed, Rt. Hon. Monday Igbuya is a harmonious blend of political prowess and Business savvy. Married and deeply rooted in the principles of Christianity, he stands as an emblem of dedication, leadership, and unwavering commitment to the growth and prosperity of Delta State and beyond.</p></br>`,
        ],
      },
      {
        id: 3,
        name: "Sir Anthony Chinedu Okocha",
        title: "Rivers State Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739549389/NDDC/Sir%20Anthony%20Chinedu%20Okocha.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Steeped in profound academic credentials and an illustrious political career, Anthony Chinedu Okocha is a paragon of dedication, leadership, and service to his community. Born into the vibrant cultural tapestry of Rivers State, Okocha's journey began in the classrooms of State School, Rumuapara, and culminated in the hallowed halls of the University of Port Harcourt, where he earned a Bachelor of Arts with Second Class Upper honours in Philosophy.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His early years saw him as a student leader. From serving as the President of the National Union of Obio Akpor Students to becoming the voice of many as the President of the Students Union Government at UNIPORT, Okocha's leadership qualities were evident from the outset. This trajectory continued with his appointment as the Speaker of the Student Representative Council at UNIPORT, marking the beginning of a political journey that would see him serving his state in numerous high-profile capacities.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His roles ranged from being the Executive Assistant to the Chairman of the Obio/Akpor Local Government Area to mounting the saddle as the Chief of Staff at the Government House of Rivers State.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">As the Chairman of the Caretaker Committee for the Obio/Akpor Local Government Area Council, he showcased his administrative skills. Okocha also played pivotal roles in the Ikwerre Youth Movement International, holding the position of Secretary-General, a testament to his dedication to youth empowerment and community development.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Outside the corridors of political offices, Okocha has been an influential figure in various organizations. From being a founding member of the All Progressives Congress in Rivers State to leading the Local Organizing Committee for the APC Presidential Campaign, his influence and commitment to the political landscape are undeniable.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Okocha's accolades extend beyond politics. The Anglican Communion has elevated him as a Knight of the Order of Saint Christopher and he has received titles such as Eze Ruwhu-Oha Ekinigbo Clan and Eze Enwa-gbaganu Ohna Rukani. He was also recognized as a Peace Ambassador and was honored with the Distinguished Service Star of Rivers State.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His interests reflect the depth of his character. An avid football enthusiast, Okocha is also a voracious reader, particularly drawn to journals and motivational works. He is a prolific writer, contributing intellectually to international journals. He is the esteemed author of "Through The Slippery Slopes of Rivers State Politics." Okocha's life is a harmonious blend of academia, politics, and cultural advocacy. Married and deeply rooted in the principles of Christianity, Anthony Chinedu Okocha remains a shining example of hope, inspiration, and dedication to Rivers State and beyond.</p></br>`,
        ],
      },
      {
        id: 4,
        name: "Patrick Aisowieren",
        title: "Edo State Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739524990/NDDC/Patrick%20Aisowieren.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Born on October 14, 1972, in the culturally rich state of Edo, Hon. Patrick Aisowieren, the Edo State Representative on the Governing Board of the NDDC, began his academic sojourn at Usi Primary School in Benin City.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His academic journey, which started in 1980, took him through Esigie Teacher Training College in Abudu and Eweka Grammar School, Benin City, culminating with an illustrious period at the Delta State University in Abraka, where he secured his B.Sc Ed in Agricultural Science. Currently, he is studying for more laurels with a Master's degree in view.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Hon. Aisowieren's dedication to service began at the grassroots level when he was elected as a councilor for Aibiokula Ward 2 in Orhionmwon Local Government Area, Edo State. Not content with representation at that level, he ascended to the role of Deputy Leader of the Legislative Arm of the Local Government Council.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His steadfast commitment to the welfare of his people and his inherent leadership qualities led to his election, not once but twice, to the Edo State House of Assembly, representing the Orhionmwon East Constituency. His tenure in the state assembly was marked by his election as the Chief Whip from 2011-2015. His versatility was evident as he chaired various critical committees, from Local Government and Chieftaincy Affairs to Transport and Environment.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His influence continued beyond the state level. The people of Orhionmwon/Uhunmwode saw in him a beacon to represent them at the Federal House of Representatives. Twice, they entrusted him with this role. Twice, he delivered, contributing as Deputy Chairman of the Committee on Interior and being a significant member of numerous critical committees such as FERMA, NDDC, and Appropriation, to name a few.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His contributions and steadfast commitment were recognized at the highest levels when, in May of 2023, he was appointed as a Member of the Governing Board of the NDDC.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Married and deeply rooted in the tenets of Christianity, Hon. Patrick Aisowieren's journey is a testament to dedicated service, commitment to the welfare of the people, and an unwavering belief in the power of good governance.</p>`,
        ],
      },
      {
        id: 5,
        name: "Chidiebere Kyrian Uchegbu",
        title: "Imo State Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739524990/NDDC/Chidiebere%20Kyrian%20Uchegbu.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">A native of the serene, oil-rich town of Umuorji, Izombe, the Imo State Representative on the NDDC Governing Board, Dr. Chidiebere Kyrian Uchegbu, was born on November 10, 1968. A devout Christian, Dr. Uchegbu's life ethos revolves around teamwork, peace, advocacy, and an unyielding drive for development, philanthropy, and building humanity.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He began his academic career at Aborshi Primary School in Izombe. He proceeded to Izombe Secondary Commercial School and the Abia State University, where he obtained a Bachelor of Arts in Linguistics. Driven by an effervescent thirst for knowledge, Dr. Uchegbu acquired a National Diploma in History and International Studies from Alvan Ikoku Federal College of Education and a Master's in International Development Studies from the Imo State University. His academic pinnacle was achieved in 2021 with a Ph.D. in History and International Studies.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Professionally, Dr. Uchegbu's journey is as diverse as it is impressive. Yet the passion for community service, touching lives, and inspiring humanity continues to define his accomplishments. After his mandatory national service at Summer Publishers, Onitsha, Anambra State, he threw his hat into the political ring to contribute his quota towards bringing to his community, his state, and his beloved Niger Delta, the kind of development that he believes will make the lives of the people more enriching.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Starting as an elected Councilor for Izombe Ward, he soon became the Supervisor for Works in the Oguta Local Government Area. His leadership abilities were recognized as he served as the Speaker for the Oguta Legislative Council. Over the years, he has held esteemed positions, including Special Assistant on Political Matters to the Executive Chairman of Oguta Local Government Area and Personal Assistant to the Imo State representative on the NDDC board.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">While he has served as the Chairman of the Peace and Development Union for Umuokwu Umuorji Communities in Izombe Clan, Oguta Local Government Area, his dedication, commitment to service, and administrative savvy have seen Dr. Uchegbu ascend to represent Imo State on Governing Board of the Niger Delta Development Commission (NDDC).</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Dr. Uchegbu finds solace in staying updated with national and international news beyond his professional engagements, immersing himself in books, and journeying to new places. He is a ceaseless questioner for improving humanity and a pillar of dedication and leadership, profoundly impacting Imo State and Nigeria.</p>`,
        ],
      },
      {
        id: 6,
        name: "Hon. Otito Thompson Atikase",
        title: "Ondo State Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739551466/NDDC/Hon.%20Otito%20Thompson%20Atikase.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Born into the royal lineage of Ehinmore, a blend of the Akinneyin Ruling House in the Mahin Kingdom and Agboidun Ruling House in the Ugbo Kingdom, Otito Thompson Atikase was born on May 16, 1970. His name, a legacy passed down by his grandfather, Ehinmore Ezekiel Atikase, was a prophecy setting the stage for a life of impact and leadership.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Otito's educational journey began in the serene confines of Holy Trinity Anglican Primary School, Igbokoda (1979-1984), and progressed through the halls of Ilaje High School (1985-1990) and Methodist High School, Okitipupa (1992-1993). These formative years were a crucible, forging the resilience required to transcend the oppressive boundaries of his environment's inherent challenges.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Defying the constraints of his surroundings, Otito embarked on a tertiary academic venture at the Federal University of Technology, Akure (FUTA), where he studied Computer Science in the Department of Industrial Mathematics and Computer Science from 1995 to 2001. Here, his political consciousness and leadership understanding began to take root. Representing his department in the Students' Representatives Council (SRC) in 1996-1997 was merely a prelude to his consequential election as President of the FUTA SU Government in 1997-1998.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Otito's passion for service extended beyond academic leadership. He served as the National Secretary of the National Association of Ilaje Students (NAIS) between 1997 and 1998, channeling his dedication towards his peers' collective welfare and progress. This commitment burgeoned as he joined the Niger Delta Youth Movement (NDYM), eventually serving as the National Welfare Officer from 2002 to 2004, advocating for the development and well-being of the broader Niger Delta community.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Recognition of his contributions wasn't long in coming. The Ondo State Government appointed him to the State Library Board from 2003 to 2005, an opportunity that further highlighted his administrative capabilities. This experience paved the way for a significant role as an Administrative Officer at the Niger Delta Development Commission (NDDC) from 2004 to 2006.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Yet, the call to serve his community resonated strongly, leading Otito to resign from NDDC and embrace leadership as an elected Ondo State House of Assembly member in 2007. His tenure was marked by active participation across several committees, contributing significantly to education, youth development, state development goals, and the welfare of oil-producing areas.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Otito's political journey continued to ascend, and from 2015 to 2016, he served as the Senior Special Assistant to the governor on political matters. This role positioned him as a critical player in the state's political landscape. His ability to lead and connect with the grassroots was further endorsed when he served as the Caretaker Chairman for Ilaje Local Government from 2018 to 2020. His influence within local government circles was recognized as he chaired the Association Of Local Governments Of Nigeria (ALGON), Ondo State Chapter, from 2019 to 2020.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Not one to rest on past laurels, Otito remained an active participant in shaping the political future of his community and state. He played a significant role in the APC National Convention as a committee member in 2022. He demonstrated strategic political insight as the Director General of the Tinubu/Shetima Campaign Council, Ilaje Local Government, in 2023.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Beyond the political arena, Otito Thompson Atikase is a family man, blessed with a loving wife and wonderful children, grounding his public service in the richness of his private joy. His journey, punctuated by various roles in service to his people, underscores a life dedicated to uplifting others, reflecting his deep-rooted commitment to societal advancement.</p>`,
        ],
      },
      {
        id: 7,
        name: "Chief Eruba Dimgba",
        title: "Abia State Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739551603/NDDC/Chief%20Eruba%20Dimgba.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Born on August 24, 1970, in the scenic landscapes of Abia State's Ukwa West, the Abia State Representative on the NDDC Governing Board, Chief Eruba Dimgba, stands as a beacon of dedication and unwavering commitment to public service. Eruba's journey has been a relentless pursuit of socio-economic development, driven by a desire to mobilize human and material assets. With his roots deeply embedded in Christianity, he finds strength in faith and family, being a proud husband and a devout Christian.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Chief Dimgba's educational voyage began at Umuaka Primary School, where he laid the foundation for his academic pursuits from 1976 to 1982. After that, he advanced to Owaza Secondary School, earning his West African School Certificate by 1988. The drive to further his knowledge led him to the Federal Polytechnic Nekede, Owerri, where he explored the intricacies of Microbiology from 1990 to 1995. But his quest for knowledge didn't stop there. Eruba's passion for agricultural economics saw him acquire both a Postgraduate Diploma and a Master's degree from the Rivers State University of Science & Technology.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Professionally, Chief Dimgba has worn many hats, each adorned with responsibility and commitment. From 1996 to 1997, he began his career journey with the National Youth Service Corps, serving in the medical laboratory of SPDC, Port Harcourt. He then moved to the Abia State Hospital Management Board as an SPDC Laboratory Technician, contributing his expertise from 1998 to 2004. However, it was with the Niger Delta Development Commission (NDDC) that he indeed found his calling. He joined the Commission in 2004 and became a Director before his appointment to represent Abia State on the NDDC board. Until his appointment, Chief Dimgba was the Director of the Abia State Office.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Beyond his career, Chief Dimgba aligns himself with professional bodies that resonate with his mission and values. As a member of the Nigeria Institute of Management since 2006 and the Institute of Public Management Nigeria since 2012, he consistently seeks to grow and engage with professionals who share his vision.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In the quiet moments, away from the hustle and responsibilities, Chief Dimgba retreats to the solace of books, delving into their wisdom, or finds joy in the rhythmic flow of table tennis, challenging both mind and body.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In Chief Dimgba, one sees a blend of dedication, innovation, and an unwavering resolve to make impactful contributions to society. He is not just a public servant but a mobilizer, change crusader, and beacon of hope for a brighter future.</p>`,
        ],
      },
      {
        id: 8,
        name: "Hon. (Chief) Orok Otu Duke (J.P)",
        title: "Cross River State Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739551679/NDDC/Hon.%20%28Chief%29%20Orok%20Otu%20Duke%20%28J.P%29.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Hon. Orok Otu Duke embarking on a journey marked by educational rigour, legislative prowess, and unwavering commitment to societal enrichment. Born on July 24, 1961, in Calabar South, Cross River State, this stalwart has woven an intricate tapestry of service, leadership, and cultural advocacy. Married and blessed with four children, his life narrative is one of continuous ascent, driven by passion, intellect, and a profound sense of duty.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His academic odyssey was shaped within the prestigious halls of the University of Calabar, where he earned a BA (Hons) in 1986, followed by an MFA in Media in 1991. With a relentless thirst for knowledge, he pursued doctoral studies, his PhD is in view. This academic journey was anchored by foundational education at Saint Patrick's College, Calabar, and Hope Waddell Training Institute.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">He carved a niche as a formidable force in the legislative arena, commencing a path of distinction as a member of the Cross River State House of Assembly (CRHA), representing the Calabar 1 State Constituency from 1992 to 1993. Demonstrating an innate leadership aptitude, he swiftly rose to the position of Deputy Speaker. His legislative acumen was further recognised in subsequent terms, marked by key roles as an adviser and representative of the Calabar South 1 State Constituency. His influential footprint was etched into the national consciousness as a member of the National Conference in Abuja in 2014, representing the Niger Delta Zone.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Beyond legislative contributions, he shone in various executive roles, infusing dynamism and visionary thinking into positions such as the Special Assistant on Information and Culture for Cross River State and the conceptual architect behind the state's modern radio and television stations  between 1994 and 1996. His strategic leadership was instrumental in successfully hosting the National Festival of Arts and Culture in 1994. Further, his dedication to communal growth was evident during his tenure as Commissioner/Chairman of the Cross River State Sports Commission from 2015 to 2019 and his short but impactful stint as the Commissioner for the Niger Delta Development Commission (NDDC) from December 2022 to June 2023.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His entrepreneurial and creative spirit thrived through Duke and Duke Media Limited, offering media consultancy since 1987, alongside a flourishing career in sports consultancy. A literary enthusiast, he penned numerous works that resonate with cultural identity, human experiences, and societal reflections, including noteworthy titles such as "Sentinels (Farewell Bakassi)" and "Treasures."</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Membership in esteemed organizations such as the London Poetry Society and the Society of Nigerian Theatre Artistes (SONTA) underscores his commitment to the arts. His contributions have garnered international accolades, including honors from the cities of Detroit, Indianapolis, and Windsor, Ontario, Canada.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">In the realm of sports, his legacy is unmatched. Serving as Cross River State's Sports Ambassador since 2007 and contributing significantly to table tennis at national and regional levels, his work extends to pro bono services, reflecting a genuine love for sports development.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His influence transcends professional and public life, touching traditional and communal spheres. As Adaidaha of Efik Eburutu and Otuekong of Atakpa Ikot Effiom, he holds esteemed traditional titles, further anchoring his leadership and advisory roles within the community.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">From shaping legislative policies to nurturing artistic expression and sports excellence, his journey is a testament to a life dedicated to multifaceted excellence, a beacon for current and future generations on the path of service, leadership, and societal development.</p>`,
        ],
      },
    ],

    zonalMembers: [
      {
        id: 0,
        name: "Nicholas Wende",
        title: "North Central Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739552750/NDDC/Nicholas%20Wende.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Hon. Nicholas Wende, the North Central Representative on the NDDC Governing Board, hails from Kwande in Benue State, Nigeria, and was born in Jos, Plateau State, on May 11, 1970. He stands tall as a pillar of excellence, with a reputation for prudence and an ambition that seeks great fame. Nicholas's life goal pivots around fostering and nurturing the core values of politics and the building profession.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">An alumnus of Ahmadu Bello University, ABU, Zaria, Nicholas's educational journey started at the Demonstration Primary School, Makurdi, taking a momentary pause at Mount Saint Michael's Secondary School, Aliade, before culminating in a Bachelor of Science Degree in Building from ABU.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His commitment to professional excellence is reflected in his affiliations. As a member of the Nigerian Institute of Building (NIOB), the Council of Registered Builders of Nigeria (COBON), and an associate of the Nigerian Society of Engineers (NSE), Nicholas has stamped his footprints on the sands of time.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">While navigating the political landscape, Nicholas has served in various capacities, notably as the Commissioner for Benue State's Ministry of Water Resources and Environment. He chaired the Benue State Committee on Flood and Erosion Control from 2015 to 2017. As a testament to his leadership and expertise, Nicholas was appointed Chairman of the Governing Board for the Nigerian Stored Products Research Institute, Ilorin, from 2018 to 2022 and also served as a Member of the Governing Board for the Nigerian Agricultural Research Council of Nigeria, Abuja, during the same period. He played pivotal roles in addressing the Kwande/Cameroon Border Crises. He even rose to the rank of Benue Governorship aspirant in 2022.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">With vast experience, Nicholas held the prestigious position of Chief Building Officer for the Benue State Ministry of Works, Housing, and Transport. His projects range from the construction and renovation of school blocks, bridges, and duplexes to the significant task of building massive complexes. His supervision of the construction of monumental building projects like the International Conference Centre, Makurdi, and the College of Health Sciences and Law Faculty at Benue State University is evidence of his unparalleled prowess in the field.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Nicholas's dedication isn't limited to his professional pursuits. He deeply cherishes traveling, devoting time to worship, reading, playing lawn tennis, and engaging in humanitarian services. His social responsibility initiatives include renovating schools, sponsoring youth football competitions, and implementing rural electrification in his hometown.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Nicholas Aondona Wende's new assignment in the Niger Delta region has many expectations, especially as the region needs builders like him. He is not just a name but a legacy, an embodiment of dedication, commitment, and excellence.</p>`,
        ],
      },
      {
        id: 1,
        name: `Dr. Abdulrazzak Sa'ad Namdas`,
        title: "North East Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739552867/NDDC/Dr.%20Abdulrazzak%20Sa%27ad%20Namdas.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">Born on January 1, 1969, in Ganye, Adamawa State, the Representative of the North East on the NDDC Governing Board, Hon. Dr. Abdulrazzak Sa'ad Namdas, has been the epitome and repository of the rich tradition and values of his homeland, building a profile of immense wealth and success in his illustrious journey, both in academia and politics.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Weaving through various institutions and disciplines in an impressive academic odyssey, Dr. Namdas earned a Bachelor of Science degree in Sociology from the Usman Dan Fodio University, Sokoto, as well as a postgraduate diploma in Journalism from the Nigeria Institute of Journalism, Jos Campus. His thirst for knowledge led him to obtain a Master's in Criminology and Security Studies from the University of Abuja, culminating with a PhD in Security and Strategic Studies from Nasarawa State University, Keffi, in September 2023.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">As a practicing journalist, he was known for his insightful and intelligent writing, building a profile of an excellent reporter with a keen eye for details. Little wonder, therefore, that as State Correspondent for Daily Times Plc, he caught the attention of Mr. Boni Haruna, the former Governor of Adamawa State, who appointed him as the Chief Press Secretary. Not one to rest on his laurels, he founded 'The Viewer Newspaper' in 2007 after that. But journalism was just one facet of his multifaceted blossoming career.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">To provide a more robust platform for his people to advocate for better governance, Dr. Namdas ventured into politics, clinching a seat as an elected member of the House of Representatives in both the 8th and 9th National Assemblies. He showcased his leadership prowess in those hallowed chambers by chairing several committees, including significant ones on Media, Public Affairs, and the Army. His diplomatic skills also shone brightly as the West Africa Caucus Deputy Chairman in the Pan African Parliament in Midrand, South Africa.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">The political accolades of this unassuming academic, social scientist, and politician are numerous. From being the Governorship running mate in Adamawa State to an aspirant for the state's gubernatorial seat under the APC banner, he has attracted national recognition for his capacity and capabilities. Consequently, he was appointed the Secretary of Logistics and Support Services for the APC Presidential Campaign Council.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Honoured with various awards, his dedication to his state and country has not gone unnoticed. His recognition has come from diverse groups, from student bodies to traditional institutions and revered monarchs who have given him many titles. Indeed, his reputation is solidified not just in political and professional spheres but also in the cultural heartbeats of his community.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">A man of disarming simplicity, humility, and tolerance, he is a widely traveled Nigerian, finding joy in the company of his family, friends, and associates. Amid the hustle and bustle of his life, he also finds solace in sports, deepening his knowledge of society and humanity. These he brings to bear in every duty with which he is entrusted.</p>`,
        ],
      },
      {
        id: 2,
        name: `Ibrahim Abdullahi Gobir MFR, CON`,
        title: "North West Representative",
        image:
          "https://res.cloudinary.com/rukkiecodes/image/upload/v1739553016/NDDC/Ibrahim%20Abdullahi%20Gobir%20MFR%2C%20CON.jpg",
        body: [
          `<p class="mt-16 main-text text-caption text-sm-body-2 text-md-body-1">The North West Representative on the Governing Board of the NDDC, Senator Ibrahim Abdullahi Gobir, carries a legacy that melds academic prowess and engineering excellence with distinguished leadership. Born on a New Year's Day in 1953 in the picturesque town of Sabon-Birnin, Sokoto State, his outstanding journey began in Sabon-Birnin Primary School, leading him through such esteemed institutions as the University of Detroit and the University of Liverpool.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">His academic capstone is an impressive lineup: A B.Eng. in Electronics, an M.Eng in Electrical, a Ph.D. in Energy Studies, and an MBA in Finance & Accounting. Indeed, Senator Gobir is a pinnacle in the engineering realm. His status as a Chartered Electrical Engineer since 1994 is fortified with affiliations to engineering's crème de la crème, including the Nigerian Society of Engineers and the Institution of Electrical Engineers, UK. He has been recognized by esteemed bodies, from the Nigerian Academy of Engineering to the Council of Registered Engineers of Nigeria (COREN).</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Yet, his expertise is wider than the theoretical realm. Practical applications of his genius are evident in innovative designs and constructions for CCNN Plc., a Sokoto-based construction company. Senator Gobir has regularly brought his technical prowess to bear in presentations and academic papers, emphasizing the importance of improvisation and quality in industries from temperature scanners to auto-purging systems.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Beyond his accomplishments in engineering, the remarkable journey of this great professional, technocrat, and administrator has also been milestoned by many feats in the political arena. Engr. Dr. Gobir has served as a Senator from 2011 to 2023, holding the esteemed position of Majority Leader of the Senate in the 9th National Assembly. While Senator Gobir's leadership shines in the business sector, serving as the Managing Director and CEO of Cement Company of Northern Nigeria Plc to holding directorial positions in prominent companies like Union Bank of Nigeria and Total Nigeria PLC, his influence in politics and governance is undeniable.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Consequently, he has received significant recognitions, awards, and honours for his outstanding contributions to Business, society, philanthropy and humanity. Senator  Gobir is a recipient of the Best Engineer Award by NTA Sokoto and the National Honours Award of Member of the Order of the Federal Republic (MFR). These accolades mirror his unwavering commitment to commerce and education, as well as the overall development of Nigeria in particular and Africa in general.</p></br>`,
          `<p class="main-text text-caption text-sm-body-2 text-md-body-1">Among these achievements is the distinguished, regal title of "Sardauna of Gobir Ngdom," translating to the Commander of the Royal Brigade of Guards - a fitting title for a Prince dedicated to excellence and service. Indeed, Senator Ibrahim Abdullahi Gobir stands tall as an embodiment of dedication, innovation, and leadership, leaving an indelible mark on Sokoto State and Nigeria.</p>`,
        ],
      },
    ],
  }),

  actions: {
    async getRealTimeprogrammesUpdate() {
      const unsub = onSnapshot(doc(db, "web", "ourprogrammes"), (doc) => {
        this.programmes = doc.data();
      });
      return unsub;
    },

    async getRealTimeProjectUpdate() {
      const unsub = onSnapshot(doc(db, "web", "ourProjects"), (doc) => {
        this.projects = doc.data();
      });
      return unsub;
    },
  },
});
