<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light mb-4">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <router-link :to="{ name: 'welcome' }" class="navbar-brand">
          AutoTube
        </router-link>
  
        <div class="collapse navbar-collapse" id="navbar">
          <input name="q" type="search" class="form-control" placeholder="Search" style="height:35px; width:560px; margin-top: 3px;margin-left:60px;">
          <button type="submit" class="btn btn-default btn-search" style="height:33px; margin-top: 4px;">
            <!-- <span class="glyphicon glyphicon-search" aria-hidden="true"></span> -->
            <i class="el-icon-search" style="color:#0e77ef;"></i>
  
          </button>
          <ul class="navbar-nav mr-auto">
            <!-- <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li> -->
          </ul>
          <ul class="navbar-nav">
            <template v-if="authenticated">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                  <!-- <span class="glyphicon glyphicon-user"></span> <span class="caret"></span> -->
                  <img src="/img/avatar-placeholder.jpg" style="width: 32px;height: 32px; position: absolute;top: 10px; left: 10px; border-radius: 50%">
                </a>
  
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown-header">{{ user.name }}</li>
                  <li>
                    <router-link :to="{ name: 'settings.profile' }" tag="li" class="nav-item">
                      <a class="nav-link">My Account</a>
                    </router-link>
                  </li>
                  <li class="nav-divider"></li>
                  <li class="nav-item">
                    <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </template>
            <template v-else>
              <router-link :to="{ name: 'auth.login' }" tag="li" class="nav-item" active-class="active">
                <a class="nav-link">Login</a>
              </router-link>
              <router-link :to="{ name: 'auth.register' }" tag="li" class="nav-item" active-class="active">
                <a class="nav-link">Register</a>
              </router-link>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  
    <div class="container course">
      <child/>
  
      <footer class="footer footermargin">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Bulma</strong> by
              <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
            </p>
            <p>
              <a class="icon" href="https://github.com/jgthms/bulma">
                <i class="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    user: 'authUser',
    authenticated: 'authCheck'
  }),

  components: {

    Search: require('../components/Search.vue')
  },

  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({ name: 'auth.login' })
        })
    }
  }
}
</script>

<style>
.course {
  width: 1148px;
  max-width: 1148px;
  min-width: 1000px;
  margin: 0;
  padding-right: 0px;
  padding-left: 0px;
}


/* .navmargin{
 margin-bottom: 0px;
} */


 .footermargin{
margin-top:100px;
} 
</style>
