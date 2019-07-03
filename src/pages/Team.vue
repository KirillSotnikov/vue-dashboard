<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Team</h4>
            <p class="category">Here is a subtitle for this team table</p>
          </md-card-header>
          <md-card-content>
            <div @click="CreateLink" class="md-layout-item md-size-100 text-right"><button type="button" class="md-button md-raised md-success md-theme-default"><div class="md-ripple"><div class="md-button-content">Create team</div> </div></button></div>
            <simple-table table-header-color="green" :navButtons="true" :editItem="true" :tableData="teamData"></simple-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    SimpleTable
  },
  data() {
    return {
      tableData: [
        {
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout",
          isShow: true,
          id: 1
        },
        {
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas",
          isShow: false,
          id: 2
        },
        {
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park",
          isShow: true,
          id: 3
        },
        {
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester",
          isShow: true,
          id: 4
        },
        {
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
          isShow: false,
          id: 5
        },
        {
          name: "Mason Porter",
          salary: "$78,615",
          country: "Chile",
          city: "Gloucester",
          isShow: false,
          id: 6
        }
      ]
    }
  },
  methods: {
    CreateLink() {
      this.$router.push('/createTeam')
    }
  },
  computed: {
    teamData() {
      return this.$store.getters.teamData
    }
  }
};
</script>