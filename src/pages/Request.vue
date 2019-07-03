<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Request</h4>
            <p class="category">Here is a subtitle for this request table</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green" :editItem="false" :navButtons="true" :tableData="tableData"></simple-table>
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
          isShow: false,
          id: 1,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: true,
          id: 2,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: true,
          id: 3,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        },
        {
          isShow: false,
          id: 4,
          ru: {
            name: "Dakota Rice",
            salary: "$36,738",
            country: "Niger",
            city: "Oud-Turnhout",
          }
        }
      ]
    }
  }
};
</script>