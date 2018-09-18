<template>
    <div class="row" id="translateForm">
        <div class="col-md-6 col-md-offset-3">
            <form id="transForm" class="well form-inline" @submit="formSubmit">
                <input class="form-control" v-model="textToTranslate" type="text" placeholder="输入翻译的内容..." value=""/>
                <select class="form-control" v-model="language">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                    <option value="ko">Korean</option>
                    <option value="ja">Japanese</option>
                </select>
                <!--<Button type="success" @submit="formSubmit">翻译</Button>-->
                <input class="btn bg-primary" type="submit" value="翻译"/>
            </form>
        </div>
    </div>
</template>

<script>
    // "@"是目录"/src"的别名
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'translateForm',
        data: function () {
            return {
                textToTranslate: "",
                language: ""
            }
        },
        components: {},
        methods: {
            formSubmit: function (e) {
                //当点击翻译按钮时，将待翻译的内容传递到根组件中（通过事件注册传入数据）。
                this.$emit('formSubmit', this.textToTranslate, this.language);
                e.preventDefault();//取消默认事件
            },

        },
        created: function () {
            this.language = 'en';
        }
    }
</script>
<style>
    #transForm {
        border: 1px #cccccc solid;
        border-radius: 10px;
    }

</style>