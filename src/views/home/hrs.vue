<template>

    <div >
        招聘信息
       <!-- <Select v-model="model4" size="large" style="width:100px">
            <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select> -->
        <Input v-model="type" size="large" placeholder="标题"></Input>
        <Input v-model="type" type="textarea" placeholder="富文本"></Input>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                type:'',
                // list: [
                //     {
                //         value: 'ganzi',
                //         label: '甘孜'
                //     },
                //     {
                //         value: 'chuanwai',
                //         label: '川内'
                //     },
                //     {
                //         value: 'chuannei',
                //         label: '川外'
                //     },
                // ],
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
