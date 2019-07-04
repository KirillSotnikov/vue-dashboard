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
          name: "Dakota Rice22",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout",
        }, 
        ua: {
          name: "Dakota Rice22",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice22",
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
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: true,
        id: 4,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice44",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice44",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice44",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: false,
        id: 5,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: false,
        id: 6,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: true,
        id: 7,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: true,
        id: 8,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: false,
        id: 9,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: true,
        id: 10,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
      },
      {
        isShow: false,
        id: 11,
        editLink: '/editTeam',
        ru: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "Dakota Rice33",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "Dakota Rice33",
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
        return state.teamData.find(worker => {
          return worker.id == teamId
        });
      };
    }
  }
}