// Utilities
import { db } from "@/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    programs: null,
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
  }),

  actions: {
    async getRealTimeProgramsUpdate() {
      const unsub = onSnapshot(doc(db, "web", "ourPrograms"), (doc) => {
        this.programs = doc.data();
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
