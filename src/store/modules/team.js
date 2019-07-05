export default {
  state: {
    teamData: [
      {
        isShow: true,
        id: 1,
        editLink: '/editTeam',
        ru: {
          name: "ONE",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "ONE",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "ONE",
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
          name: "TWO",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout",
        }, 
        ua: {
          name: "TWO",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "TWO",
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
          name: "THREE",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "THREE",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "THREE",
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
          name: "FOUR",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "FOUR",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "FOUR",
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
          name: "FIVE",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "FIVE",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "FIVE",
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
          name: "SIX",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "SIX",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "SIX",
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
          name: "SEVEN",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "SEVEN",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "SEVEN",
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
          name: "EIGHT",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "EIGHT",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "EIGHT",
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
          name: "NINE",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "NINE",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "NINE",
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
          name: "TEN ",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "TEN",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "TEN",
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
          name: "ELEVEN",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        }, 
        ua: {
          name: "ELEVEN",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        en: {
          name: "ELEVEN",
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