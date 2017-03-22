<template>
   <div id="top-header" :class="{fix:ss==false}">
         <div class="top-search" v-show="ss">
           <div class="sh-lis">
               <input type="text" placeholder="搜索" v-model="shTag" @keyup='showLis($event)' @keydown.down='changeDown' @keydown.up.prevent="changeUp">
               <s></s>
            <div class="drop-area">
                <ul>
                    <!--<li v-show='dropTag.length==0'>暂无数据</li>-->
                    <li v-show='dropTag.length' :class='{current:index==targetIdx}' v-for="(item,index) in dropTag">
                        <a :href="'https://www.baidu.com/s?wd='+shTag">{{item}}</a>
                    </li>
                </ul>
            </div>


           </div>
       </div>
       <div class="top-nav">
           <ul class="clearfix">
               <!--<li><i></i><a href="javascript:;">科技</a></li>-->
               <!-- <li class="current"><i></i><a href="javascript:;">娱乐</a></li>
               <li><i></i><a href="javascript:;">体育</a></li>
               <li><i></i><a href="javascript:;">军事</a></li>
               <li><i></i><a href="javascript:;">女人</a></li> -->
               <router-link tag="li" to="/tech"><i></i><a href="javascript:;" active-class="current">科技</a></router-link>
               <router-link tag="li" to="/ent"><i></i><a href="javascript:;">娱乐</a></router-link>
               <router-link tag="li" to="/sport"><i></i><a href="javascript:;">体育</a></router-link>
               <router-link tag="li" to="/mil"><i></i><a href="javascript:;">军事</a></router-link>
               <router-link tag="li" to="/lady"><i></i><a href="javascript:;">女人</a></router-link>
           </ul>
       </div>
   </div>
</template>
<script>
    
    export default {
        data(){
            return {
              shTag:"",
              dropTag:[],
              targetIdx:'-1'
            }
        },
        methods:{
            showLis:function(ev){
                    if(ev.keyCode==38 || ev.keyCode==40) return;
                    if(ev.keyCode==13){
                        window.open('https://www.baidu.com/s?wd='+this.shTag)
                    }
                    this.$http.jsonp(
                        'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
                        {
                            params: {
                                wd: this.shTag
                             },
                             jsonp: 'cb'
                        }
                        
                    ).then(function(res){
                        this.dropTag = res.data.s;
                    },function(res){

                    })
                },
                changeDown:function(){
                    this.targetIdx ++;
                    if(this.targetIdx==this.dropTag.length){
                        this.targetIdx = 0;
                    }
                    this.shTag = this.dropTag[this.targetIdx]
                },
                changeUp:function(){
                    this.targetIdx --;
                    if(this.targetIdx == -1){
                        this.targetIdx = this.dropTag.length-1
                    }
                    this.shTag = this.dropTag[this.targetIdx]
                }

        },
        computed:{
            
        },
        props:['ss'] 
    }
</script>
<style scoped>
    .fix{position:fixed;left:0;top:0;z-index:22;width:100%;margin-bottom:0.6rem;}
    .sh-lis{position:relative}
    .drop-area{position:absolute;top:.53rem;z-index:9;width:94%;background-color:#fff;left:50%;margin-left:-47%}
    .drop-area ul{
        border-bottom:none;;
        background-color:#fff;
        text-align:left
    }
    .drop-area li{border:1px solid #e9e9e9;border-top:none;height:0.4rem;line-height:.4rem; overflow:hidden;padding-left:.16rem;font-size:.16rem}
    .drop-area .current{background-color: #eee;}
    .drop-area li a{ color:#2d2d2d;display:block;width:100%}
</style>