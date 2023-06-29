<template>
    <div class="w-screen h-screen overflow-hidden">
    <icon icon="mingcute:aerial-lift-fill" color="#607" width="30" class="text-center w-[400px]" :horizontalFlip="true" />
    <!-- <icon icon="ic:baseline-alarm-add" font-size="50px"/> -->
    <ul class="overflow-hidden w-[400px] h-[16px]">
      <li v-for="item in menu" v-bind:key="item.id" class="text-xs float-left mx-4 cursor-pointer" v-bind:class="{active : item.name === activeMenuItem}"
          v-on:click="toggleMenu(item.name)">
          {{item.name}}
      </li>
  </ul>
  <ul class="flex flex-wrap">
      <li v-for="item in playlists" v-bind:key="item.id" class=" w-1/4 ml-4 mb-3">
          <div class=" w-full h-30 rounded overflow-hidden">
              <img :src="item.coverImgUrl" alt="" class="w-full h-full">
          </div>
          <p class="text-xs">{{item.name}}</p>
      </li>
  </ul>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data() {
		return {
      menu:[],
      activeMenuItem:'',
      playlists: []
		}
	},
	methods: {
		toggleMenu(name) {
			this.activeMenuItem = name
			this.fetchPlaylists(name)
		},
		fetchPlaylists(cat) {
			axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist', {
				params: { cat }
			})
				.then(res => {
					this.playlists = res.data.playlists
				})
		}
	},
  created() {
		axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot')
			.then(res => {
				console.log(res.data.tags)
				this.menu = res.data.tags
				return (this.activeMenuItem = this.menu[0].name)
			})
			.then(cat => { this.fetchPlaylists(cat) })
			.catch(err => { console.log(err) })
	},
    // 监控某个响应式数据发生变化之后执行指定的动作（函数）vm
    //methods beforeCreate created watch 中的this指向vm
    // watch:{
    //     activeMenuItem:function(newCat){
    //         this.fetchPlaylists(newCat);
    //     }
    // }
    watch:{
        // 指定数据变化的回调函数
         activeMenuItem:{
            handler:function (newCat){
                this.fetchPlaylists(newCat);
            },
            // 指向配置 立即执行
            immediate:true,
            // 监听配置L深度监听
            deep:true,
         }
    }
    }
</script>
<style>
    .active{
    color: red;
}
</style>