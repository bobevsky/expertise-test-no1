renderer([
{
    'selector': 'menu-main'
},{
    'selector': 'banner',
    'component': 'big-banner-with-inner',
    'template': 'banner',
    'templaterenderobj':{
        'show-big-banner': true,
        'show-small-banner': false
    }
},{
    'selector': 'banner',
    'component': 'small-banner-no-inner',
    'template': 'banner',
    'templaterenderobj':{
        'show-small-banner': true,
        'show-big-banner': false
    }
},{
    'selector': 'floating-banner'
},{
    'selector': 'content-list'
},{
    'selector': 'logo-slider'
},{
    'selector': 'articles-cont',
    'component': 'single-article-text-first',
    'template': 'articles-cont',
    'templaterenderobj':{
        'show-single-article-text-first': true,
        'show-multiple-articles': false,
        'show-single-article-img-first': false
    }
},{
    'selector': 'articles-cont',
    'component': 'multiple-articles',
    'template': 'articles-cont',
    'templaterenderobj':{
        'show-single-article-text-first': false,
        'show-multiple-articles': true,
        'show-single-article-img-first': false
    }
},{
    'selector': 'articles-cont',
    'component': 'single-article-img-first',
    'template': 'articles-cont',
    'templaterenderobj':{
        'show-single-article-text-first': false,
        'show-multiple-articles': false,
        'show-single-article-img-first': true
    }
},{
    'selector': 'flex-vid',
    'component': 'flex-vid-advanced',
    'template': 'flex-vid-advanced'
},{
    'selector': 'article-content'
},{
    'selector': 'article-widget',
    'component': 'widget-with-img',
    'template': 'article-widget',
    'templaterenderobj':{
        'show-widget-with-img': true,
        'show-widget-no-img': false
    }
},{
    'selector': 'article-widget',
    'component': 'widget-no-img',
    'template': 'article-widget',
    'templaterenderobj':{
        'show-widget-no-img': true,
        'show-widget-with-img': false
    }
},{
    'selector': 'footer'
},{
    'selector': 'scripts'
},{
    'selector': 'social-share'
}]);