<template>
  <div id="app">
    <Loading v-show="loading"></Loading>
   <!-- <TopHeader  :ss='shShow'  v-show="$route.path.indexOf('/article')==-1"></TopHeader> -->
    <TopHeader  :ss='shShow'  v-show="headerShow"></TopHeader>
    <div class="main-content" :class='{pt:shShow==false}'  v-finger:swipe="swipe">
      <transition name="slideDown">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue';
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      shShow:true
    } 
  },
  methods:{
    swipe:function(evt){
      if(this.$route.path.indexOf('/article')!=-1) {
         this.shShow = true;
         return false
      };
      if(evt.direction=="Up")   this.shShow=false;
      if(evt.direction=="Down"){
      if(document.body.scrollTop>=0 || document.body.scrollTop<20){
          this.shShow=true;
         
        }
      }
    }
  },
  watch:{
    $route(to,from){
      if(to.path.indexOf('/article')!=-1){
        this.$store.dispatch("hideHeader");
        this.shShow = true;
      }else{
        this.$store.dispatch("showHeader")
      }
    }
  },
  computed:mapGetters(['headerShow','loading']),
  components:{
    TopHeader:TopHeader
  },
  mounted(){
    if(this.$route.path.indexOf('/article')!=-1){
      this.$store.dispatch('hideHeader');
      this.shShow = true;
    }
  }
}
</script>

<style coped>
  .slideDown-enter-active,.slideDown-leave-active{
    transition:.4s all ease;
    opacity:0.7;
    transform:translate3d(0,0.2rem,0);
  }
 .slideDown-enter,.slideDown-leave{
   opacity:1;  transform:translate3d(0,0.2rem,0);
 }
 .pt{padding-top:0.65rem}
</style>
