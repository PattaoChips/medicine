// v3提供createApp方法，用于创建实例
import { createApp } from 'vue';
// 引入根组件 App
import App from '@/App.vue';
// 利用createApp方法来创建实例，并且应用实例挂载到挂载点上
// 引入重置样式
import '@/style/reset.scss';
// 引入全局组件
import HospitalTop from '@/components/hospitalTop/index.vue';
// createApp(App).mount('#app')
const app = createApp(App);
app.component('HospitalTop', HospitalTop)
// 挂载
app.mount('#app'); 
