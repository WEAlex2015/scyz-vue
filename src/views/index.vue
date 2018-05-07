
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="about" theme="dark" width="auto"  @on-select="menuBtnClick"> 
                    <MenuItem name="about">
                        <Icon type="ios-navigate"></Icon>
                        <span>关于我们</span>
                    </MenuItem>
                    <MenuItem name="news">
                        <Icon type="search"></Icon>
                        <span>新闻动态</span>
                    </MenuItem>
                    <MenuItem name="cases">
                        <Icon type="settings"></Icon>
                        <span>项目案例</span>
                    </MenuItem>
                    <MenuItem name="hrs">
                        <Icon type="ios-navigate"></Icon>
                        <span>招聘信息</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider"  :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <component :is="nowComp"></component>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>


<script>

    import news from "./home/news.vue";
    import cases from "./home/cases.vue";
    import about from "./home/about.vue";
    import hrs from "./home/hrs.vue";
    import { mapGetters } from 'vuex';

    export default {

        computed: mapGetters({
            testData: 'testData',
           
            
        }),

        components: {
            'news': news,
            'cases': cases,
            'about': about,
            'hrs': hrs,
        },

        data () {
            return {
                nowComp: "about",
                time:'',
                date:'',
                isCollapsed: false
            }
        },
        mounted(){
        },
        watch:{
            "testData":function (val) {
                console.info(val);
            }
        },
        methods: {
            menuBtnClick (type) {
                let me = this;
                switch (type) {
                    case 'about':
                        me.nowComp = 'about'
                        break;
                    case 'news':
                        me.nowComp = 'news'
                        break;
                    case 'cases':
                        me.nowComp = 'cases'
                    break;
                    case 'hrs':
                        me.nowComp = 'hrs'
                    break;
                    default:
                        break;
                }
            },
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            test() {
                let me = this;
                console.info('test func');
                me.$store.dispatch('test', {reqData: {}});
            }
        },
        created() {
            let me = this;
            console.info(me.$store);
            me.test();
        }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        .ivu-layout {
            height: 100%;
        }
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
