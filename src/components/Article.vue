<template>
    <div id="article">
        <div class="cross-hd">
            <s class="go-back" @click="goBack"></s>
            <h2>详情</h2>
        </div>
        <div class="art-hd">
            <h2>{{info.title}}</h2>
            <p class="a-time">{{info.time}}</p>
        </div>
        <div class="art-bd">
            <div class="art-con" v-html="info.content">
               
            </div>
           
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                info:{
                    title:"",
                    time:"",
                    content:""
                } 
            }
        },
        methods:{
            goBack(){
                window.history.go(-1)
            },
            fetchData(){
                
                const re = /\/article\/(\d+)/;
                const sid =  this.$route.path.match(re)[1];
                var _this = this;
              
                
                this.$httpx.get('/src/assets/data/article.data').then(function(response) {
                        // 这里是处理正确的回调
                      
                        _this.info = response.data;
                        // this.articles = response.data["subjects"] 也可以
                    }).catch(function(err){

                    });
            }
        },
        mounted(){
            this.fetchData();
        }
    }
    
</script>
<style>
.cross-hd{background:#1d84ed;width:100%;height:0.4rem;line-height:0.4rem; overflow:hidden;box-sizing:border-box;padding:0 0 0 0.16rem}
.cross-hd .go-back{ background:url('../assets/images/back.png') no-repeat;display:inline-block;width:0.16rem;height:0.16rem;background-size:0.16rem}
.cross-hd h2{font-size:.16rem;color:#f3f7fa;display:inline-block;font-weight:normal;padding-left:0.1rem}
.art-hd h2{;font-size:0.16rem;font-weight:normal;color:#343434;line-height:.36rem;}
.art-con,.art-hd{padding:0 .2rem 0 .2rem}
.art-con{color:#666}
.art-con{font-size:.14rem;margin-top:.15rem}
.art-con p{line-height:.24rem;}
.art-con img{max-width:3.3rem;height:auto}
</style>