<template>
    <div id="ent">
        <div class="news-lis">
            <ul>
                <li class="clearfix" v-for="(item,index) in info">
                    <router-link :to="'/article/'+item.id" tag="div">
                        <div class="pic-txt">
                            <div class="pic">
                                <img :src="item.imgurl" alt="">
                            </div>
                            <div class="txt">
                                <p class='tit'> {{item.title}} </p>
                                <p class="time"> {{item.time}} </p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                info:[]   
            }
        },
        methods:{
            fetchData(){        
                var _this = this;
                _this.info=[];
                // this.$http.get('http://wangyi.butterfly.mopaasapp.com/news/api', {

                //         params:{
                //             type:"ent",
                //             page:1,
                //             limit:10
                //         }

                //     }, {
                //         headers: {
                //         },
                //         emulateJSON: true
                //     }).then(function(response) {
                //         // 这里是处理正确的回调
                //         this.articles = response.data.subjects;
                //         _this.info = response.data.list;
                //         // this.articles = response.data["subjects"] 也可以
                //     }, function(response) {
                //         // 这里是处理错误的回调
                //         // console.log(response)
                //     });
                this.$httpx.get('src/assets/data/ent.data').then(function(res) {
                        // 这里是处理正确的回调
                        _this.info = res.data.list
                        // this.articles = response.data["subjects"] 也可以
                    }).catch(function(err){
                            
                    })
            }
        },
        mounted(){
            this.fetchData();
        }
    }
</script>