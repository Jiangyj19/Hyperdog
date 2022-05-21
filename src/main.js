import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'animate.css'
import 'animate.css/animate.compat.css'
// import Web3 from 'web3'

createApp(App)
  // .use(Web3)
  .use(router)
  .use(Antd)
  .mount('#app')
