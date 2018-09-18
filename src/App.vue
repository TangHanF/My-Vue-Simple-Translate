<template>
    <div id="app">
        <h1>在线翻译</h1>
        <h5 class="text-muted">简单 / 实用 / 便捷</h5>
        <translateForm @formSubmit="formSubmit"></translateForm>
        <!--<TranslateOutput v-text="translatedText"></TranslateOutput>-->
        <TranslateOutput :translateResult="translatedText"></TranslateOutput>
    </div>
</template>

<script>
    import translateForm from './components/TranslateForm';
    import TranslateOutput from './components/TranslateOutput';
    import jq from 'jquery'
    // Vue.use(jq);

    export default {
        name: 'app',
        components: {translateForm, TranslateOutput},
        data:function(){
            return{
                translatedText:"",
            };
        },
        methods: {
            loading () {

                // setTimeout(msg, 3000);
            },
            formSubmit: function (text,lang) {
                if(!text || jq.trim(text).length==0){
                    alert("请输入要翻译的内容");
                    return;
                }
                const msg = this.$Message.loading({
                    content: '翻译中，请稍后...',
                    duration: 0
                });
                // https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/
                this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180918T021346Z.c8081cd3c0b73cbc.4b53597bf5be03aae6018b3d394636aae51c1210&text=' + text + '&lang='+lang)
                    .then((response) => {
                        setTimeout(msg, 0.1);
                        console.log(response);
                        if (response.ok) {
                            this.translatedText=response.body.text[0];
                        }else{
                            alert("出错了！")
                        }
                    });
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
