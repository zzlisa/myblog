$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  if($('#menu').hasClass('nav-transform')){
	  if (scrollTop > 30) {
	    $('#menu').addClass('default').removeClass('alternative');
	  } else {
	    $('#menu').addClass('alternative').removeClass('default');
	  }
  }
});


$(function() {
  var message = {

    message: [
      'Web Design',
      'Made By Samon',
      'We are Sunny Girls',
    ],
    counterS: 0,
    counterL: 0,
    deleteS: false,

    init: function() {
      this.cacheElem();
      this.type();
    },

    cacheElem: function() {
      this.$text = $('.text');
    },

    type: function() {
      var message   = this.message[this.counterS],
          that      = this,
          speed     = 0;

      message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
      if(this.message[this.counterS] != message && !this.deleteS) {
        this.$text.text(message);
        speed = 90;
      }
      else {
        this.deleteS = true;
        speed = this.message[this.counterS] == message ? 1500 : 40;
        this.$text.text(message);
        if (message == '') {
          this.deleteS = false;
          this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
        }
      }
      setTimeout(function(){that.type()}, speed);
    }
  };
  message.init();
});


function RSSWidget (url){

  rss              = this;
  rss.FEED_URL     = url;

  rss.RSSTIME     = new Array(); //create a new array
  rss.widgetHolder = $('.rss-widget');
  rss.storiesLimit = 1;

  $.ajax({
    url      : 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(rss.FEED_URL),
    dataType : 'json',
    success  : function (data) {
      if (data.responseData.feed && data.responseData.feed.entries) {
        $.each(data.responseData.feed.entries, function (i, e) {
          rss.RSSTIME.push({ //add objects to the array
            title: e.title,
            author: e.author,
            snip: e.contentSnippet,
            content: e.content || "",
            link: e.link
          });
        });

        if(rss.storiesLimit > rss.RSSTIME.length)
          rss.storiesLimit = rss.RSSTIME.length;

        for(var i=0; i<rss.storiesLimit; i++){
          rss.renderBlogItem(rss.RSSTIME[i]);
        }

        $('.rss-widget li').each(function () {
          var delay = ($(this).index()/rss.storiesLimit) + 's';
          $(this).css({
              webkitAnimationDelay: delay,
              mozAnimationDelay: delay,
              animationDelay: delay
          });
        });


      }
    }
  });

  rss.renderBlogItem = function (object){
    var item  = '<div class="blog-item">';
        item += '<h4 class="blog-item-latest">Latest Blog Post</h4><br>';
        item += '<a href="'+ object.link +'">';
        item += '<h3 class="blog-item-title">' + object.title + '</h3>';
        item += '<div class="blog-item-author">' + object.author + '</div>';
        // item += '<div class="blog-item-more">' + '<i class="material-icons">keyboard_arrow_right</i>' + '</div>';
        item += '</a>';
        item += '</div>';

    rss.widgetHolder.append(item);
  }

}

$('.test1').on('click', function(){
	
  layer.alert( '我们的团队由两个成员组成，我们的网站的主题是一个博客，我们共做了七页，用了很多动画，我们坚信，只要你努力工作，就会有效果的，希望我们能享受我们的工作。',{icon: 6});
});
$('.test2').on('click', function(){
	
  layer.alert( '我叫张利飒，大家可以叫我lisa，我喜欢美好的事物，比如音乐，比如旅游，比如漂亮的网站，这次的网站，还请大家提出不足的地方！',{icon: 6});
});
$('.test3').on('click', function(){
	
  layer.alert( '我是一名web前端的初学者，我喜欢音乐和电影，我也喜欢美食，我会好好学习。也希望各位多多指教！',{icon: 6});
});