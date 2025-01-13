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
      { text: "About Us", to: "/whoWeAre" },
      { text: "Mission Statement", to: "" },
      { text: "The Management Team", to: "" },
      { text: "Our People", to: "/ourPeople" },
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
          `The newly completed substation is equipped with state-of-the-art technology and serves as a critical link in the power distribution network. Designed to stabilise electricity supply across Abia and its neighbouring states, the project addresses years of inadequate and inconsistent power delivery that have hindered development in the region.`,
          `At the commissioning ceremony, NDDC Managing Director, Dr Samuel Ogbuku, emphasised the importance of reliable power infrastructure in regional development. "Reliable electricity is not just about convenience; it is the foundation of economic growth, improved healthcare, better education, and overall social progress. This project represents our unwavering commitment to addressing the region's challenges and unlocking its vast potential," he stated. The substation and transmission line are expected to significantly reduce power outages, enhance industrial efficiency, and attract investments to the area. Small and medium-sized enterprises (SMEs), which form the backbone of the local economy, stand to benefit immensely from a more stable and efficient power supply.`,
          `Community leaders and residents have expressed optimism about the impact of the project. Mrs Ngozi Amadi, a small business owner in Umuahia, said, "For years, unreliable electricity has been a major challenge for us. This development gives me hope that things are finally changing for the better."`,
          `In addition to boosting economic activities, the project is seen as a pivotal step in NDDC’s broader mission of fostering sustainable development in the Niger Delta. By prioritising critical infrastructure projects like this, the commission reaffirms its commitment to creating a thriving and self-reliant region.`,
          `The 132KV transmission line and substation in Abia State mark a significant stride towards a brighter and more electrified future for the Niger Delta. As the lights come on, so does the promise of progress for millions of lives in the region.`,
        ],
      },
      {
        image: woman,
        title: "NDDC Programme: Building Financial Independence for Women in the Niger Delta",
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
        title: "Empowering the Future: NDDC Launches Youth Skill Acquisition Programme in the Niger Delta",
        texts: [
          `The Niger Delta Development Commission (NDDC) has unveiled a comprehensive Youth Skill Acquisition Programme designed to equip young men and women in the region with practical skills and resources to thrive in today’s competitive job market. This initiative underscores NDDC’s commitment to tackling youth unemployment and fostering sustainable development in the Niger Delta.`,
          `The programme offers training in various fields, including technology, agriculture, craftsmanship, and digital marketing. By focusing on these areas, the NDDC aims to create a skilled workforce capable of driving innovation and entrepreneurship in the region.`,
          `At the launch event, NDDC Executive Director of Projects, Engr Charles Ogunedo, highlighted the programme’s significance. "The youth are the backbone of our nation. By investing in their skills and potential, we are not just securing their future but also the future of the Niger Delta," he stated.`,
          `Participants will also benefit from mentorship opportunities, start-up capital for business ventures, and access to a network of industry professionals. The programme prioritises practical, hands-on training to ensure that participants are well-equipped to transition seamlessly into the workforce.`,
          `A beneficiary of the programme, John Etuk from Rivers State, shared his excitement. "This is a golden opportunity for me to learn skills that can transform my life. I am grateful to the NDDC for this life-changing initiative," he said.`,
          `The Youth Skill Acquisition Programme aligns with NDDC’s broader mission to address systemic challenges in the Niger Delta, including unemployment and poverty. By empowering the youth, the commission is laying the groundwork for a prosperous and self-reliant region.`,
          `Through initiatives like this, the NDDC reinforces its role as a catalyst for sustainable development and a beacon of hope for the Niger Delta’s youth.`,
        ],
      }
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
        title: "Enhancing Mobility and Economic Growth through Road Construction",
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
          "The NDDC's commitment to women's empowerment is helping to shift societal attitudes, showing that when women are given the right tools and opportunities, they can become key drivers of economic growth in the region."
        ]
      },
      {
        image: pwl,
        title: "Building Financial Independence for Women in the Niger Delta",
        texts: [
          "The Niger Delta Development Commission (NDDC) is taking bold steps to promote financial independence among women in the region. Through targeted educational programmes and financial literacy workshops, the NDDC is helping women unlock their potential and take control of their finances.",
          "Financial independence is a key goal for many women across the Niger Delta, and the NDDC’s programmes are helping them achieve it. The initiatives focus on teaching women how to manage their finances, invest wisely, and start and grow their own businesses.",
          "Dr. Samuel Ogbuku, NDDC Managing Director, highlighted the importance of these programmes in his speech at a recent financial literacy workshop. 'Empowering women financially means creating a more sustainable future for the Niger Delta. When women have control over their financial resources, they can invest in their families, communities, and businesses,' he remarked.",
          "Participants in the workshops have expressed their gratitude for the opportunity to learn and grow. 'Learning how to save, budget, and invest has changed my life,' said Chika Okafor, a workshop participant. 'I now have the knowledge to make better financial decisions and invest in my business.'",
          "These programmes not only aim to provide women with financial independence but also foster a sense of empowerment, as women are encouraged to contribute to the region’s economic development through their newfound knowledge and skills."
        ]
      },
      {
        image: bfi,
        title: "Women’s Economic Empowerment through Vocational Training in the Niger Delta",
        texts: [
          "The Niger Delta Development Commission (NDDC) is working tirelessly to promote women’s economic empowerment through vocational training programmes across the region. These programmes are designed to provide women with the necessary skills to thrive in a variety of trades and professions, from fashion design to carpentry, catering, and more.",
          "The NDDC recognizes the importance of giving women access to vocational training as a means of achieving financial independence. By offering these opportunities, the commission is helping to create a region where women can support themselves and their families while contributing to the local economy.",
          "Dr. Samuel Ogbuku, NDDC Managing Director, emphasized the long-term benefits of the vocational training programmes. 'Vocational skills are a pathway to self-sufficiency, and when women are empowered with these skills, they become key players in the economic development of the Niger Delta,' he said.",
          "Many women have already benefited from these programmes. 'I’ve learned how to bake and run a business, and now I’m able to support my children,' said Mary Akpan, a graduate of the NDDC vocational training program. 'This training has opened up new opportunities for me, and I’m proud to be able to provide for my family.'",
          "The NDDC’s dedication to empowering women in the Niger Delta is creating a ripple effect, inspiring other women to take control of their financial futures and pursue careers in fields that were once considered unattainable for them."
        ]
      }
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
          "The NDDC’s commitment to education is laying the foundation for a more prosperous and self-reliant Niger Delta, where quality education is accessible to all children, regardless of their background."
        ]
      },
      {
        image: mision,
        title: "NDDC Educational Grants: Shaping the Future of the Niger Delta Youth",
        texts: [
          "In a bid to further enhance educational opportunities in the Niger Delta, the Niger Delta Development Commission (NDDC) has introduced a series of educational grants aimed at providing financial support to students pursuing higher education. These grants are designed to remove the financial barriers that prevent many talented young people in the region from achieving their academic and career goals.",
          "The NDDC's educational grants cover various fields of study, from engineering and technology to health and the arts. By providing these grants, the NDDC is ensuring that the youth of the Niger Delta have the opportunity to pursue their dreams and contribute to the growth and development of the region.",
          "Dr. Samuel Ogbuku, NDDC Managing Director, spoke about the importance of these grants. 'Education is the most powerful tool we have to shape the future of the Niger Delta. By supporting the education of our young people, we are investing in the future of the region,' he said.",
          "The grants have already benefited a number of students, including Chidi, a student studying computer science at a university in Lagos. 'Without this grant, I wouldn't have been able to continue my studies,' Chidi said. 'I'm grateful for the NDDC's support, and I’m determined to use my education to give back to the Niger Delta.'",
          "The NDDC's educational grants are helping to create a more educated and skilled workforce in the Niger Delta, ensuring that the region’s youth have the tools they need to succeed in the global economy."
        ]
      },
      {
        image: mission2,
        title: "Building a Future through Vocational Education in the Niger Delta",
        texts: [
          "The Niger Delta Development Commission (NDDC) has placed a strong emphasis on vocational education as a key strategy for empowering the region’s youth. Recognizing that not all young people have the opportunity to pursue traditional academic paths, the NDDC is offering a range of vocational training programmes to help youth develop the skills they need to secure stable, well-paying jobs.",
          "These programmes cover a wide range of trades, including carpentry, plumbing, electrical work, and technology. By providing hands-on training in these fields, the NDDC is ensuring that young people in the region are equipped with practical skills that are highly sought after in today’s job market.",
          "Dr. Samuel Ogbuku, NDDC Managing Director, shared his vision for the future: 'Vocational education provides young people with the opportunity to build a successful career without the need for a university degree. We are committed to creating opportunities for everyone, regardless of their background, to succeed.'",
          "Young people who have participated in the vocational training programmes have already seen positive results. 'The skills I’ve gained in carpentry have helped me start my own business,' said Emeka, a graduate of the NDDC vocational program. 'I’m now able to support myself and my family, and I’m proud to contribute to my community.'",
          "The NDDC’s focus on vocational education is helping to create a region where youth are empowered to build successful careers and contribute to the local economy, fostering a brighter future for all."
        ]
      }
    ]
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
