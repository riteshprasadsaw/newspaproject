import Vue from 'vue'
import $ from 'jquery'
import Tether from 'tether'
import Meta from 'vue-meta'
import Router from 'vue-router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import ElementUI from 'element-ui'
import Bulma from 'bulma'
import 'element-ui/lib/theme-default/index.css'
import Vuetify from 'vuetify'

import './components'
import './util/interceptors'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Meta)
Vue.use(VueYouTubeEmbed)
Vue.use(ElementUI)
Vue.use(Bulma)
Vue.use(Vuetify)

window.jQuery = $
window.Tether = Tether
require('bootstrap')
