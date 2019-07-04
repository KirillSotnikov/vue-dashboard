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
            <simple-table table-header-color="green" :navButtons="true" :editItem="true" :tableData="tableData"></simple-table>
            <md-button class="md-raised md-success" @click="prevPage" :disabled="isHiddenPrev">Prev</md-button>
            <md-button class="md-raised md-success" @click="nextPage" :disabled="isHiddenNext">Next</md-button>
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
      page: 1,
      rowsPerPage: 5,
      isHiddenPrev: true,
      isHiddenNext: false
      }
  },
  methods: {
    CreateLink() {
      this.$router.push('/createTeam')
    },
    prevPage (){
      this.isHiddenNext = false
      if(this.page !== 1) {
        this.page = this.page - 1 ;
      }

      if(this.page == 1) {
        this.isHiddenPrev = true
      }
    },
    nextPage () {
      this.isHiddenPrev = false

      if(this.page < this.teamData.length / this.rowsPerPage){
        this.page = this.page + 1 ;
      }

      if(this.page < Math.ceil(this.teamData.length / this.rowsPerPage)) {
        this.isHiddenNext = false
      } else {
        this.isHiddenNext = true
      }
    }
  },
  computed: {
    teamData() {
      return this.$store.getters.teamData
    },
    tableData() {
      return this.teamData.slice((this.page - 1) * this.rowsPerPage, this.page * this.rowsPerPage)
    }
  }
};
</script>