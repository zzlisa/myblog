$(document).ready(function() {

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        //var scr = $(document).scrollTop();
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if


    });
})

$('.test1').on('click', function() {

    layer.alert('我们是lisa和陈梦，我们的主题是博客，我们喜欢简洁大方的事物，网页也是如此，因此，我们选择了用英文来表达我们的主题，也许这只是一个小小的网站，却体现了我们所付出的所有的努力，每天都在思考，这么做到到底值得不？也许是源于热爱，我们也选择了坚持，便赋予了我们博客新的名字——Samon(lisa && meng)！', { icon: 6 });
});

$('.test2').on('click', function() {

    layer.alert('我们喜欢听音乐，因为音乐可以使人身心愉悦，在一天的学习中找到自我，反思自我，让我们明白我们真正的理想，音乐带我们找到方向，音乐也使我们拥有自己的想法，我们的博客中，需要有音乐的存在！(Samon)', { icon: 6 });
});

$('.test3').on('click', function() {

    layer.alert('我们喜欢旅游，在大自然的怀抱中找到灵感，也许风景就是一个个网站，都需要我们用心去设计，用心去感受，我们向往自由，却又想做出最好的网站，也做出最好的自己，因此，我们喜欢一切美的东西，美的设计，美的网站，美的风景......(Samon)', { icon: 6 });
});

$('.test4').on('click', function() {

    layer.alert('我们想要去遥远的地方，特别是有海的地方，这样我们就可以自由自在了，做什么都随心所欲了，不再受一些外界的束缚，如果可以，我们也想做出属于自己的网站，不受任何束缚，因此，我们的博客中需要航行，让心灵自由自在，感受最美的风景~(Samon)', { icon: 6 });
});

$('.test5').on('click', function() {

    layer.alert('每个人都有自己的梦想，我们也不例外，只是想在某个城市里，做自己喜欢的工作，看自己想看的事物，我们喜欢前端，热爱前端，想写出属于自己的博客，想设计属于自己的风格，即使目前能力有限，只因心中有梦想，我们努力走好每一步~(Samon)', { icon: 6 });
});

$('.test6').on('click', function() {

    layer.alert('Samon是lisa和陈梦的字母谐音缩写，也是我们博客的主题，从大一的懵懂，到大二的迷茫，再到如今的实训，我们找到自己喜欢的方向，做自己喜欢做的事情，写自己喜欢的代码，这样挺好~', { icon: 6 });
});

$('#test2').on('click', function() {
    layer.prompt({
        title: '放心，没人看得到你输入了什么',
        formType: 1
    }, function(pass) {
        layer.prompt({ title: '你给我们留个悄悄话呗', formType: 2 }, function(text) {
            layer.msg('你说啥？悄悄话？' + pass + ' 哦：' + text);
        });
    });
});

$('#test3').on('click', function() {
    layer.tab({
        area: ['60%', '300px'],
        tab: [{
            title: '心情语录',
            content: '此时此刻不禁让人吟诗一首：<br>一入前端深似海，<br>从此妹纸是浮云，<br>以下省略七个字，<br>。。。。。。。<br>——Samon'
        }, {
            title: '我们',
            content: '我们是谁？我们自然是我们呀！！！lisa跟陈梦呀，这都不知道~'
        }, {
            title: '以后',
            content: '以后就自己脑补吧~'
        }]
    });
});

$('#test4').on('click', function() {
    layer.msg('现在你还不了解我们的网站吗？', {
        time: 20000,
        btn: ['不', '不是', '真不是']
    });
});


$(window).scroll(function() {
    $(".slideanim").each(function() {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 500) {
            $(this).addClass("slider");
        }
    });
});
