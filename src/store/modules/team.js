export default {
  state: {
    teamData: [
      {
        isShow: true,
        id: 1,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice11",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice11",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice11",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: false,
        id: 2,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice11",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout",
        }, 
        ua: {
          name: "Dakota Rice11",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice11",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: true,
        id: 3,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice11",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice11",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice11",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    teamData(state) {
      return state.teamData
    },
    teamById(state) {
      return teamId => {
        return state.teamData.find(worker => worker.id === teamId);
      };
    }
  }
}