<template>
  <!-- <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="card">
              <div class="card-header">Dashboard</div>
              <div class="card-block">
                Start Viewing!
        
              </div>
             
              <div>
                 <!--<button id="show-modal" @click="showModal = true">Show Modal</button>
                  <modal v-if="showModal" @close="showModal = false">-->
  <!-- <youtube :video-id="this.videoId" player-width="610" player-height="290" :player-vars="{autoplay: 0}"></youtube>
                
            
            </div>
        
          </div>
        </div>
        </div> -->
  
  <div class="row">
    <section class="hero is-medium is-dark is-bold hero1">
      <div class="hero-body">
  
        <div class="container">
          <!-- <span class="icon"> -->
            <!-- <img src="/img/sample3.png" style="width: 40px;height: 36px; position: absolute;top: 10px; left: 10px; border-radius: 50%; align:right">
  </span> -->
            <h1 class="title">
              Learn from world-class trainers at your convenience
            </h1>
            <h2 class="subtitle">
              Advanced technology courses to cope up with modern changes
            </h2>
        </div>
      </div>
    </section>
    <!-- <div class="col-md-3">
          </div> -->
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          Recommended
        </div>
        <div class="panel-body">
          <el-row>
             <router-link :to="{ name: 'CourseDetails' }">
            <el-col :span="6" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0" class="elcard">
              <el-card :body-style="{ padding: '0px' }">
                <img src="/img/sample2.png" class="image">
                <div style="padding: 14px;">
                  <span>Yummy hamburger</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">Operating button</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            </router-link>
          </el-row>
        </div>
      </div>
  
      <div class="panel panel-default">
        <div class="panel-heading">
          Recently uploaded
        </div>
  
        <div class="panel-body">
          <el-row>
            <el-col :span="6" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0" class="elcard">
              <el-card :body-style="{ padding: '0px' }">
                <img src="/img/sample4.png" class="image">
                <div style="padding: 6px;">
                  <span>Yummy hamburger</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">Operating button</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'


export default {

  name: 'home',

  metaInfo: {
    titleTemplate: 'Home | %s'
  },
  components: {

    Search: require('../components/VideoThumb.vue')
  },

  data() {
    return {
      videos: {
        data: []
      },
      currentDate: new Date(),
      videoId: ''
    }
  },
  mounted() {

    this.videoId = getIdFromURL("http://www.youtube.com/watch?v=ivUaKeAgVLE")
    // this.$http.get('/api/videos').then((res) => {

    //             this.videos = res.data;
    //             // console.log(this.videos);
    //         }).catch((err) => {

    //             console.log(err);
    //         });

  }

}
</script>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  height: 150px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.hero1 {
  width: 1148px;
  max-width: 1148px;
  min-width: 1000px;
  margin: 0 auto;
  padding-right: 0px;
  padding-left: 0px;
}

.elcard {
  width: 18%;
  margin-top: 15px;
  padding-right: 0;
  padding-left: 0;
  margin-right: 12px;
  margin-left: 10px;
}
</style>

