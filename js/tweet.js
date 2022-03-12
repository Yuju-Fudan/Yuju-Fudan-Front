var tweet = new Vue({
    el: '#tweet',
    data: {
        score: 0
    },
    methods: {
        send_tweet: function (event) {
            var s, url;
            s = "あなたの考えたアルゴリズムが"+this.score+"点を取りました！ #gazeat";
            url = document.location.href;
            
            if (s != "") {
                if (s.length > 140) {
                    //文字数制限
                    alert("テキストが140字を超えています");
                } else {
                    //投稿画面を開く
                    url = "http://twitter.com/share?hashtags=gazeat&url=" + escape(url) + "&text=" + s;
                    window.open(url,"_blank","width=600,height=300");
                }
            }
        }
    }
})
