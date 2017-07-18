<template>
  <div class="row">
    <section class="hero is-medium is-dark is-bold hero1">
      <div class="hero-body">
  
        <div class="container">
  
          <h1 class="title">
            Selenium WebDriver with Java - Basics to Advanced& Interview
          </h1>
          <h2 class="subtitle">
            Join with us-"Top Ranked Best Selenium course - 18000+ students learning together with great collaboration"
          </h2>
        </div>
      </div>
    </section>
    
    <div class="col-md-9">
      <div class="panel panel-default coursedetails">
        <div class="panel-heading">
          <b> Curriculum For This Course</b>
        </div>
        <div class="panel-body">
  
          <el-collapse v-model="activeNames">
            <el-collapse-item title="Selenium Introduction" name="1">
              
              <a><div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div></a>
              <br>
              <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
            </el-collapse-item>
            <el-collapse-item title="Brush up Java Concepts for Selenium Automation" name="2">
              <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
              <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
            </el-collapse-item>
            <el-collapse-item title="Configuring Selenium and Running Tests on All Browsers" name="3">
              <div>Simplify the process: keep operating process simple and intuitive;</div>
              <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
              <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
            </el-collapse-item>
            <el-collapse-item title="Locator Techniques& Tools used to identify Objects" name="4">
              <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
              <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
            </el-collapse-item>
          </el-collapse>
  
        </div>
      </div>
    </div>
  <div class="col-md-3">
    
      <nav class="panel coursedetails">
        
       <div class="panel-block">
          <button class="button is-primary is-fullwidth">
            Buy Now
          </button>
        </div>
        <!-- <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small" type="text" placeholder="Search">
            <span class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </span>
          </p>
        </div> -->
        <!-- <p class="panel-tabs">
          <a class="is-active">All</a>
          <a>Public</a>
          <a>Private</a>
          <a>Sources</a>
          <a>Forks</a>
        </p> -->
        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fa fa-book"></i>
          </span>
          bulma
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fa fa-book"></i>
          </span>
          marksheet
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fa fa-book"></i>
          </span>
          minireset.css
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fa fa-book"></i>
          </span>
          jgthms.github.io
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fa fa-code-fork"></i>
          </span>
          daniellowtw/infBoard
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fa fa-code-fork"></i>
          </span>
          mojs
        </a>
        <!-- <label class="panel-block">
          <input type="checkbox"> Remember me
        </label> -->
        
      </nav>
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
      videoId: '',
      activeNames: ['1']
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



.coursedetails {
  /* width: 960px;
  margin-top: 15px; */
  margin-right: 10px;
  margin-left: 10px;
   margin-top: 15px;
}
</style>

