export default {
  state: {
    teamData: [
      {
        name: "Dakota Rice11",
        salary: "$36,738",
        country: "Niger",
        city: "Oud-Turnhout",
        isShow: true,
        id: 1,
        editLink: '/editTeam/'
      },
      {
        name: "Minerva Hooper",
        salary: "$23,738",
        country: "Curaçao",
        city: "Sinaai-Waas",
        isShow: false,
        id: 2,
        editLink: '/editTeam/'
      },
      {
        name: "Sage Rodriguez",
        salary: "$56,142",
        country: "Netherlands",
        city: "Overland Park",
        isShow: true,
        id: 3,
        editLink: '/editTeam/'
      },
      {
        name: "Philip Chaney",
        salary: "$38,735",
        country: "Korea, South",
        city: "Gloucester",
        isShow: true,
        id: 4,
        editLink: '/editTeam/'
      },
      {
        name: "Doris Greene",
        salary: "$63,542",
        country: "Malawi",
        city: "Feldkirchen in Kārnten",
        isShow: false,
        id: 5,
        editLink: '/editTeam/'
      },
      {
        name: "Mason Porter",
        salary: "$78,615",
        country: "Chile",
        city: "Gloucester",
        isShow: false,
        id: 6,
        editLink: '/editTeam/'
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