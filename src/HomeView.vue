<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="w-[400px] h-6 flex justify-around">
      <icon
        icon="codicon:three-bars"
        color="black"
        width="20"
        class="leading-3"
      />
      <input
        type="text"
        placeholder="王棉的：只愿意得一人心"
        class="bg-gradient-to-r from-[#dddbfb] to-pink-500 w-80 rounded h-6 border border-solid text-xs"
      />
      <icon icon="mdi:microphone" color="black" width="20" class="leading-3" />
    </div>
	<!-- banner -->
    <div class="swiper-container mt-3">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="item in menu" v-bind:key="item.id">
            <img :src="item.pic" alt="" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
	<div class="mt-3">
		<ul class="flex justify-around">
			<li>
				<icon icon="material-symbols:recommend" color="red" width="30" class=" ml-3"  />
			</li>
			<li>
				<icon icon="simple-icons:roamresearch" color="red" width="30" class=" ml-8" />
			</li>
			<li>
				<icon icon="game-icons:love-song" color="red" width="30" class=" ml-4" />
			</li>
			<li>
				<icon icon="icon-park-outline:viencharts" color="red" width="30"/>
			</li>
			<li>
				<icon icon="arcticons:aaaaa" color="red" width="30"/>
			</li>
		</ul>
	</div>
	<div>
		<ul class=" flex justify-around">
			<li v-for="item in lists" :key="item.id">
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
	<div class="flex justify-between">
		<h2>推荐歌单></h2>
		<h2><Icon icon="octicon:three-bars-16" width="24" /></h2>
	</div>
  <div>  
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide mr-3" style="width: 120px;"  v-for="item in lists2" v-bind:key="item.id">
            <img :src="item.uiElement.image.imageUrl" alt="" />
            <p class=" text-xs">{{item.uiElement.mainTitle.title}}</p>
          </div>
        </div>
    </div>
  </div>
  <div class="flex justify-between">
		<h2>新歌速递<Icon icon="ic:baseline-greater-than" width="24" /></h2>
		<h2><Icon icon="octicon:three-bars-16" width="24" /></h2>
	</div>

  <div>  
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide flex" style="width: 200px"  v-for="item in menu2" v-bind:key="item.id">
            <img :src="item.img1v1Url" alt="" />
            <div class="">
              <p class=" text-xs">{{item.name}}</p>
              <p class=" text-xs mt-24">{{item.id}}</p>
            </div>
          </div>
        </div>
    </div>
  </div>

  <div class="flex justify-between">
    <h2>音乐日历</h2>
    <Icon icon="octicon:three-bars-16" width="24" />
  </div>
   <div class=" w-[400px]">
      <ul>
        <li class="flex justify-between">
          <div>
            <p>今天</p>
            <p>且随疾风前行，身后亦须留心</p>
          </div>
          <div>
            <Icon icon="typcn:anchor-outline" color="red" width="40" />
          </div>
        </li>
        <li class="flex justify-between">
          <div>
            <p>明天</p>
            <p>哈哈哈哈就是大家是</p>
          </div>
          <div>
            <Icon icon="typcn:arrow-move-outline" color="red" width="40" />
          </div>
        </li>
      </ul>
   </div>


   <div class="justify-between">
		<h2>新闻导播<Icon icon="ic:baseline-greater-than" width="24" /></h2>
		<h2><Icon icon="octicon:three-bars-16" width="24" /></h2>
	</div>

  <div>  
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="item in lists2" v-bind:key="item.id">
            <div class="flex justify-around mb-8">
              <span>我想和你牵了手就走到永远的永远</span>
              <img :src="item.uiElement.image.imageUrl" alt="" class="w-[80px] h-[40px]" />
            </div>
            <div class="flex justify-around mb-8">
              <span>每次听到这首歌就觉得再等等也行</span>
              <img :src="item.uiElement.image.imageUrl" alt="" class="w-[80px] h-[40px]" />
            </div>
            <div class="flex justify-around">
              <span>每次听到这首歌就觉得再等等也行</span>
              <img :src="item.uiElement.image.imageUrl" alt="" class="w-[80px] h-[40px]" />
            </div>
              
          </div>
        </div>
    </div>
  </div>

  </div>
</template>
<script>
import axios from 'axios';
import Swiper from 'swiper';
import '../node_modules/swiper/css/swiper.css';
export default {
  data() {
    return {
      num:12,
      menu: [], //图片上一级
      //   activeMenuItem:'',
      menu1:{},
      menu2:{},
      lists: [
		{
			id:1,name:'每日推荐'
		},
		{
			id:2,name:'私人漫游'
		},
		{
			id:3,name:'歌单'
		},
		{
			id:4,name:'排行榜'
		},
		{
			id:5,name:'音乐'
		},
	  ],
	  lists2:[
      {id:1,name:'我想和你牵了手就走到永远的永远',num:'广播'},
      {id:2,name:'等到真正被爱的那天 一定要大哭一场',num:'广播'},
      {id:3,name:'每次听到这首歌就觉得再等等也行',num:'广播'},
      {id:4,name:'那就祝你下次哭是因为太幸福',num:'广播'},
      {id:5,name:'地球是圆的 我终究会走到你身边',num:'广播'}
    ],
    };
  },
  created() {
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        console.log(res.data);
		    console.log(res.data.data.blocks[3].creatives[5].resources[0].resourceExtInfo.artists)
        this.menu = res.data.data.blocks[0].extInfo.banners;
		    this.lists2 = res.data.data.blocks[1].creatives
        this.menu2 = res.data.data.blocks[3].creatives[5].resources[0].resourceExtInfo.artists;
        
        
        
        // return (this.activeMenuItem = this.menu[0].pic)
      })
      // .then(cat => { this.fetchPlaylists(cat) })
      .catch((err) => {
        console.log(err);
      });
  },
   mounted() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
</script>
<style>
.active {
  color: red;
}
</style>
