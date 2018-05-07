<template>

    <div >
        新闻动态
       <Select v-model="type" size="large" style="width:100px" @on-select="typeSelect">
            <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Input v-model="type" size="large" placeholder="标题"></Input>
        <Input v-model="type" type="textarea" placeholder="富文本"></Input>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                list: [
                    {
                        value: 'hangye',
                        label: '行业新闻'
                    },
                    {
                        value: 'qiye',
                        label: '企业新闻'
                    },
                    {
                        value: 'biao',
                        label: '中标公告'
                    },
                    {
                        value: 'notes',
                        label: '通知公告'
                    },
                ],
                type: '',
            }
        },
        mounted(){
        },
        methods: {
           typeSelect (type){
                console.info(type);
           }
        },
        created() {
            let me = this;
        }
    }
</script>

<style lang="less">
 
</style>
