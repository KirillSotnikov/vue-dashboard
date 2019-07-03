<template>
    <md-card>
      <md-card-header data-background-color="green">
        <div class="md-title">Registration</div>
      </md-card-header>

      <md-card-content>
          <div class="md-layout-item">
            <md-field>
              <label>Login</label>
              <md-input v-model="login" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Repeat password</label>
              <md-input v-model="repeatPassword" type="password"></md-input>
            </md-field>
          </div>
      </md-card-content>

      <md-card-actions md-alignment="space-between">
        <md-button to="/login" class="register">Log In</md-button>
        <md-button to="/request" class=" md-success">Save</md-button>
      </md-card-actions>
    </md-card>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      repeatPassword: ''
    }
  }
}
</script>
