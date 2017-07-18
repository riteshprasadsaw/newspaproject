<template>
  <div class="card">
    <div class="card-header">
      Delete Your Account
    </div>
    <div class="card-block">
       
                <a @click.prevent="deleteaccount" class="nav-link" href="#">Delete Account</a>
      
    </div>
  </div>
</template>

<script>


export default {
 

 methods: {
    deleteaccount () {
      this.$store.dispatch('deleteaccount')
        .then(() => {
          this.$router.push({ name: 'auth.login' })
        })
    }
  }
}
</script>
