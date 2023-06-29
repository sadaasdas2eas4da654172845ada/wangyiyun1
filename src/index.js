// import Vue from 'vue/dist/vue.esm';
import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
// import indexView from './IndexView.vue';
import indexView from './HomeView.vue';
Vue.component('Icon', Icon);
//页面打开请求自动发送，请求回来的数据还要渲染到页面上（数据驱动视图变化的ui框架）
//数据驱动视图变化的条件：数据必须是响应式数据（data）+数据必须通过模板语法绑定到模板中
//vue中this的指向问题：methods中的所有函数（不包括箭头函数）的this指向vm（vue实例对象）

const vm = new Vue({
	//挂载点
	el: '#app',
	render:(h)=> h(indexView)
});