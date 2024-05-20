// a sample html file of the website for testing purposes

export const htmlPage = `<!doctype html>
<html class="no-js" lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>On This Day - Today in History, Film, Music and Sport</title>
<script>!function(){"use strict";var e=window.location.search.substring(1).split("&");const t=e=>e.replace(/\s/g,""),o=e=>new Promise((t=>{if(!("msCrypto"in window)&&"https:"===location.protocol&&"crypto"in window&&"TextEncoder"in window){const o=(new TextEncoder).encode(e);crypto.subtle.digest("SHA-256",o).then((e=>{const o=Array.from(new Uint8Array(e)).map((e=>("00"+e.toString(16)).slice(-2))).join("");t(o)}))}else t("")}));for(var n=0;n<e.length;n++){var r="adt_ei",i=decodeURIComponent(e[n]);if(0===i.indexOf(r)){var a=i.split(r+"=")[1];if((e=>{const t=e.match(/((?=([a-zA-Z0-9._!#$%+^&*()[\]<>-]+))\x02@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);return t?t[0]:""})(t(a.toLowerCase()))){o(a).then((t=>{t.length&&(localStorage.setItem(r,t),localStorage.setItem("adt_emsrc","url"),e.splice(n,1),history.replaceState(null,"","?"+e.join("&")))}));break}}}}();</script><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDNCSZD');</script>
<script>(function(w,d){w.adthrive=w.adthrive||{};w.adthrive.cmd=w.adthrive.cmd||[];w.adthrive.plugin="adthrive-ads-manual";w.adthrive.host="ads.adthrive.com";var s=d.createElement("script");s["async"]=true;s.referrerpolicy="no-referrer-when-downgrade";s.src="https://"+w.adthrive.host+"/sites/62ead37e2fcc4218efe2c8f5/ads.min.js?referrer="+w.encodeURIComponent(w.location.href)+"&cb="+Math.floor(Math.random()*100+1);var n=d.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n)})(window,document);</script>
<link rel="stylesheet" href="/_assets/css/main.css?v37" type="text/css" media="all">
<link rel="preload" href="/_assets/fonts/proximanova.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/_assets/fonts/proximanova-bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="/favicon.ico">
<meta name="apple-mobile-web-app-title" content="On This Day">
<meta name="application-name" content="On This Day">
<meta name="msapplication-TileColor" content="#0f1217">
<meta name="theme-color" content="#0f1217">
<style>
.header--large:before{content:'';display:block;position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to bottom,transparent 0%,rgba(0,0,0,0.6) 100%)}
.header--large:after{content:'';display:block;background-color:rgba(0,0,0,.5);position:absolute;top:0;right:0;bottom:0;left:0}
.header--large .header__content{text-align:center;padding:6px 21px 15px;max-width:1170px;margin:0 auto}
.header--large .site-nav--categories{bottom:0}.header__content .search__item,.header__content .search__button .button-label{display:none}.header__content .search__item:first-child,.header__content .search__item:last-child{display:block}
.site-name{font-size:22px;font-weight:700;line-height:50px}
.content-heading{padding-bottom:9px}
.content-heading h2{font-size:38px}
.header-text{position:relative;z-index:10;color:#fff;font-weight:600;margin-bottom:9px;display:none}
.featured-article img{margin:0 auto}.featured-article .poi__heading{padding:15px 5px}.featured-article .section--icon{margin:0 10px 0 0!important}.featured-article .linked_text{font-size:20px;padding:10px 0}.featured-article .linked_date{font-size:18px;margin:15px}
@media(min-width:48em){.header--large{background-image:url(/images/header-bg-1200.jpg)}.header--large .header__content{padding:30px 22px}.header--large .header__content .header-text{display:inline;font-size:22px}.content-heading{border:0}.content-heading h2{padding-top:29px;margin:0 0 11px 150px;text-align:left;width:60%}.header__content .search__item{display:inline-block;vertical-align:top;font-size:16px;width:20%}.header__content .search__item:first-child{display:inline-block;width:100%;margin-bottom:10px}.header__content .search__item:last-child{display:inline-block;width:20%}.header__content .search__button .button-label{display:block}}
@media(min-width:64em){.header--large .header__content .header-text{font-size:26px}.content-heading h2{width:70%}.header__content .search__item{width:13.190184%}.header__content .search__item:first-child{width:33.8445808%;margin-bottom:0}.header__content .search__item:last-child{width:13.2924335%;border-right:0}.featured-article img{float:right;margin:-130px 0 0 30px}.featured-article .poi__heading{max-width:880px;padding:24px 18px}.featured-article .linked_text{font-size:26px;padding-top:0}.featured-article .linked_date{font-size:22px}}
@media(min-width:75em){.header--large .header__content{padding:30px 0 91px}.content-heading h2{font-size:42px;margin-left:158px}.header__content .search__item{width:11.025641%}.header__content .search__item:first-child{width:41.3675214%}.header__content .search__item:last-child{width:14.5299145%}.header--large .search-result__container{left:unset;right:unset}.site-name{line-height:60px}}
@media(max-width:767px){.header__content .search__button{width:48px;background-size:28px;position:absolute;top:0;right:0}}
</style>
<meta name="description" content="Find out what happened today or any day in history with On This Day. Historical events, birthdays, deaths, photos and famous people, from 4000 BC to today.">
<link rel="canonical" href="https://www.onthisday.com/">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@OnThisDaycom">
<meta property="fb:admins" content="647215231">
<meta property="og:type" content="website">
<meta property="og:site_name" content="On This Day">
<meta property="og:title" content="On This Day - Today in History, Film, Music and Sport">
<meta property="og:url" content="https://www.onthisday.com/">
<meta property="og:description" content="Find out what happened on any date or day in history with On This Day. Explore historical events, birthdays, deaths and famous people, from 4000 BC to today.">
<meta property="og:image" content="https://www.onthisday.com/images/header-bg-1200.jpg">
</head>
<body class="site-logo-visible">
<header class="header header--large"><nav class="site-nav site-nav--primary"><div class="wrapper">
<div class="header__left-block"><button class="site-nav__button site-nav__categories-toggle" id="#nav" title="Show Menu"><span class="accessibility">Menu</span><span class="icon-bar-1"></span><span class="icon-bar-2"></span><span class="icon-bar-3"></span></button></div>
<div class="site-nav__button site-nav__channels-toggle"><a class="site-nav__logo" href="/"><h1 class="site-name"><span class="logo"></span>On This Day</h1></a></div>
<ul class="site-nav__toggle-menu">
<li><button class="site-nav__button site-nav__calendar-toggle" id="#calendar" title="Show Calendar">
<span class="accessibility">Calendar</span></button></li>
<li><a href="/search.php" class="site-nav__button site-nav__search-toggle" id="#search" title="Show Search">
<span class="accessibility">Search</span></a></li></ul>
<div class="new-nav-wrap">
<p class="site-nav__title">Today in History</p>
<ul class="site-nav__list site-nav__list--categories">
<li class="site-nav__item"><a href="/today/events.php" class="site-nav__link">Historical Events</a></li>
<li class="site-nav__item"><a href="/today/birthdays.php" class="site-nav__link">Birthdays</a></li>
<li class="site-nav__item"><a href="/today/deaths.php" class="site-nav__link">Deaths</a></li>
<li class="site-nav__item"><a href="/today/weddings-divorces.php" class="site-nav__link">Weddings</a></li>
<li class="site-nav__item" style="margin-top:10px"><a href="/today/american-history.php" class="site-nav__link" aria-label="American" style="margin:0 9px;display:inline"><img src="/images/flags/united-states.svg" width="34" height="22" loading="lazy" alt=""></a>
<a href="/today/british-history.php" class="site-nav__link" aria-label="British" style="margin:0 9px;display:inline"><img src="/images/flags/united-kingdom.svg" width="34" height="22" loading="lazy" alt=""></a>
<a href="/today/canadian-history.php" class="site-nav__link" aria-label="canadian" style="margin:0 9px;display:inline"><img src="/images/flags/canada.svg" width="34" height="22" loading="lazy" alt=""></a>
<a href="/today/french-history.php" class="site-nav__link" aria-label="French" style="margin:0 9px;display:inline"><img src="/images/flags/france.svg" width="34" height="22" loading="lazy" alt=""></a>
<a href="/today/german-history.php" class="site-nav__link" aria-label="German" style="margin:0 9px;display:inline"><img src="/images/flags/germany.svg" width="34" height="22" loading="lazy" alt=""></a>
<a href="/today/indian-history.php" class="site-nav__link" aria-label="Indian" style="margin:0 9px;display:inline"><img src="/images/flags/india.svg" width="34" height="22" loading="lazy" alt=""></a>
</li></ul><ul class="site-nav__list site-nav__list--channels" id="channels">
<li class="site-nav__item site-nav__item--history"><a href="/history/" class="site-nav__link">History</a></li>
<li class="site-nav__item site-nav__item--film-tv"><a href="/film-tv/" class="site-nav__link">Film &amp; TV</a></li>
<li class="site-nav__item site-nav__item--music"><a href="/music/" class="site-nav__link">Music</a></li>
<li class="site-nav__item site-nav__item--sport"><a href="/sport/" class="site-nav__link">Sport</a></li></ul>
<p class="site-nav__title" style="clear:both; border-top: 15px #0f1216 solid;">Explore</p>
<ul class="site-nav__list site-nav__list--categories">
<li class="site-nav__item"><a href="/calendar.php" class="site-nav__link">Calendar</a></li>
<li class="site-nav__item"><a href="/dates-by-year.php" class="site-nav__link">List of Years</a></li>
<li class="site-nav__item"><a href="/articles.php" class="site-nav__link">Articles</a></li></ul>
</div></div></nav>
<nav class="site-nav site-nav--categories site-nav--categories-2" id="nav">
<div class="wrapper">
<ul class="site-nav__list site-nav__list--categories">
<li class="site-nav__item site-nav__item--heading"><span class="site-nav__link">Today in History</span></li>
<li class="site-nav__item"><a href="/today/events.php" class="site-nav__link">Events</a></li>
<li class="site-nav__item"><a href="/today/birthdays.php" class="site-nav__link">Birthdays</a></li>
<li class="site-nav__item"><a href="/today/deaths.php" class="site-nav__link">Deaths</a></li>
<li class="site-nav__item"><a href="/today/american-history.php" class="site-nav__link" aria-label="American"><img src="/images/flags/united-states.svg" height="19" width="32" alt="" loading="lazy" title="Today in American History" style="margin: 0 0 -4px 0;"></a></li>
<li class="site-nav__item"><a href="/today/british-history.php" class="site-nav__link" aria-label="British"><img src="/images/flags/united-kingdom.svg" height="19" width="32" alt="" loading="lazy" title="Today in British History" style="margin: 0 0 -4px 0;"></a></li>
<li class="site-nav__item"><a href="/today/canadian-history.php" class="site-nav__link" aria-label="canadian"><img src="/images/flags/canada.svg" height="19" width="32" alt="" loading="lazy" title="Today in canadian History" style="margin: 0 0 -4px 0;"></a></li>
<li class="site-nav__item"><a href="/today/french-history.php" class="site-nav__link" aria-label="French"><img src="/images/flags/france.svg" height="19" width="32" alt="" loading="lazy" title="Today in French History" style="margin: 0 0 -4px 0;"></a></li>
<li class="site-nav__item arrow_li"><a href="/day/may/19" class="button arrow_btn arrow_btn-left">19 May</a></li>
<li class="site-nav__item arrow_li"><a href="/day/may/21" class="button arrow_btn arrow_btn-right">May 21</a></li>
</ul></div></nav>
<div class="header__content">
<span class="header-text">Vasco da Gama Reaches India, Nine Kings in a Room and My Fair Lady</span>
<form method="post" action="/search.php">
<ul class="search__list">
<li class="search__item"><input name="text" type="text" autocomplete="off" minlength="2" placeholder="Enter Date, Event or Person" value="" class="search__text" aria-label="Date, Event or Person"></li>
<li class="search__item"><select name="day" class="search__select" aria-label="Day">
<option>All Days</option>
<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></li>
<li class="search__item">
<select name="month" class="search__select" aria-label="Month">
<option value="all" selected="selected">All Months</option>
<option value="1">January</option><option value="2">February</option><option value="3">March</option><option value="4">April</option><option value="5">May</option><option value="6">June</option><option value="7">July</option><option value="8">August</option><option value="9">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select></li>
<li class="search__item"><input name="year" type="number" placeholder="All Years" min="1" max="2050" aria-label="Year"></li>
<li class="search__item">
<select name="type" class="search__select" aria-label="Entry Type">
<option value="all">All Types</option><option value="e">Events</option><option value="b">Birthdays</option><option value="d">Deaths</option><option value="w">Weddings</option></select></li>
<li class="search__item"><button aria-label="Search" class="search__button"><span class="button-label">Search</span></button></li></ul><input type="hidden" name="searchBox" value="H"></form></div></header>
<main class="content">
<section class="content-heading"><header><div class="wrapper">
<time datetime="2024-05-20" class="date-large" ><span class="month">May</span><span class="date">20</span></time>
<div class="arrow arrow-left"><a href="day/may/19" title="Previous Day">&lt;&lt;</a></div>
<h2>Today in History</h2>
<div class="arrow arrow-right"><a href="day/may/21" title="Next Day">&gt;&gt;</a></div>
<button class="full-calendar__toggle" id="#full-calendar">Calendar</button></div></header></section>
<div class="section section--full-calendar no-padding-top" id="full-calendar" style="display:none">
<div class="wrapper"><ul class="calendar-nav"><li class="calendar-nav__single-item">May</li></ul>
<ul class="full-calendar__list">
<li><a href="/day/may/1">1</a></li><li><a href="/day/may/2">2</a></li><li><a href="/day/may/3">3</a></li><li><a href="/day/may/4">4</a></li><li><a href="/day/may/5">5</a></li><li><a href="/day/may/6">6</a></li><li><a href="/day/may/7">7</a></li><li><a href="/day/may/8">8</a></li><li><a href="/day/may/9">9</a></li><li><a href="/day/may/10">10</a></li><li><a href="/day/may/11">11</a></li><li><a href="/day/may/12">12</a></li><li><a href="/day/may/13">13</a></li><li><a href="/day/may/14">14</a></li><li><a href="/day/may/15">15</a></li><li><a href="/day/may/16">16</a></li><li><a href="/day/may/17">17</a></li><li><a href="/day/may/18">18</a></li><li><a href="/day/may/19">19</a></li><li><span class="current_date">20</span></li><li><a href="/day/may/21">21</a></li><li><a href="/day/may/22">22</a></li><li><a href="/day/may/23">23</a></li><li><a href="/day/may/24">24</a></li><li><a href="/day/may/25">25</a></li><li><a href="/day/may/26">26</a></li><li><a href="/day/may/27">27</a></li><li><a href="/day/may/28">28</a></li><li><a href="/day/may/29">29</a></li><li><a href="/day/may/30">30</a></li><li><a href="/day/may/31">31</a></li></ul>
<select class="calendar-date-select calendar-select" onchange="location = this.options[this.selectedIndex].value;" aria-label="Day">
<option value="/day/may/1">1</option><option value="/day/may/2">2</option><option value="/day/may/3">3</option><option value="/day/may/4">4</option><option value="/day/may/5">5</option><option value="/day/may/6">6</option><option value="/day/may/7">7</option><option value="/day/may/8">8</option><option value="/day/may/9">9</option><option value="/day/may/10">10</option><option value="/day/may/11">11</option><option value="/day/may/12">12</option><option value="/day/may/13">13</option><option value="/day/may/14">14</option><option value="/day/may/15">15</option><option value="/day/may/16">16</option><option value="/day/may/17">17</option><option value="/day/may/18">18</option><option value="/day/may/19">19</option><option disabled selected>20</option><option value="/day/may/21">21</option><option value="/day/may/22">22</option><option value="/day/may/23">23</option><option value="/day/may/24">24</option><option value="/day/may/25">25</option><option value="/day/may/26">26</option><option value="/day/may/27">27</option><option value="/day/may/28">28</option><option value="/day/may/29">29</option><option value="/day/may/30">30</option><option value="/day/may/31">31</option></select>
</div>
<div class="wrapper" style="margin:0 auto 5px">
<ul class="type-list">
<li class="show-desktop"><a href="#" class="active">Summary</a></li><li  class="show-both"><a href="/today/events.php" class="">Events</a></li><li  class="show-both"><a href="/today/birthdays.php" class="">Birthdays</a></li><li  class="show-both"><a href="/today/deaths.php" class="">Deaths</a></li><li class="show-desktop"><a href="/today/weddings-divorces.php" class="">Weddings</a></li><li class="show-mobile"><a href="/film-tv/" class="">Film &amp; TV</a></li><li class="show-mobile"><a href="/music/" class="">Music</a></li><li class="show-mobile"><a href="/sport/" class="">Sport</a></li></ul></div>
</div>
<div class="section no-padding-top no-padding-bottom"><div class="wrapper">
<header class="section__heading header-history"><a href="today/events.php" class="section__link"><h3><span class="channel-icon history"></span>Historical Events</h3></a></header>
<ul class="event-list event-list--with-advert">
<li class="event"><a href="/events/date/1498" class="date">1498</a> Portuguese explorer <a href="/people/vasco-da-gama">Vasco da Gama</a> arrives at Calicut, India becoming the first European to reach India by sea</li>
<li class="event"><a href="/events/date/1609" class="date">1609</a> <a href="/people/william-shakespeare">William Shakespeare</a>'s Sonnets are first published in London, perhaps illicitly, by publisher Thomas Thorpe</li>
<li class="event"><a href="/events/date/1862" class="date">1862</a> US President <a href="/people/abraham-lincoln">Abraham Lincoln</a> signs into law the Homestead Act to provide cheap land for the settlement of the American West (80 million acres by 1900)</li>
</ul>
<div class="event-list__banner"><div class="cafemedia-onthisday-sidebar-tall"></div></div>
<ul class="event-list event-list--with-advert">
<li class="event"><div class="event-photo"><a href="/photos/nine-kings-in-one-room"><figure><picture><source media="(min-width:600px)" srcset="/images/photos/nine-kings.jpg?w=600 1x, /images/photos/nine-kings.jpg 2x" width="600" height="437"><img src="/images/photos/nine-kings.jpg?w=390" srcset="/images/photos/nine-kings.jpg?w=780 2x"  width="390" height="284" alt="Nine sovereigns of Europe meet at the funeral of Edward VII"></picture></figure><div class="photo-title">Nine Kings in One Room</div></a></div>
<a href="/events/date/1910" class="date">1910</a> Funeral for Britain's King <a href="/people/edward-vii">Edward VII</a> held in Westminster Abbey, has one of the <a href="/photos/nine-kings-in-one-room">largest assemblages of European royalty</a></li>
<li class="event"><a href="/events/date/1927" class="date">1927</a> At 7:40 AM, <a href="/people/charles-lindbergh">Charles Lindbergh</a> takes off from New York to cross the Atlantic for Paris, aboard Spirit of St Louis in the 1st solo nonstop transatlantic flight</li>
<li class="event"><b>1927</b> Treaty of Jeddah is signed between the United Kingdom and <a href="/people/ibn-saud">Ibn Saud</a> recognizing the independence of the Kingdom of Hejaz and Nejd, the forerunner of Saudi Arabia</li>
<li class="event"><a href="/events/date/1990" class="date">1990</a> Hubble Space Telescope sends its 1st photographs from space</li>
<li class="text-center" style="padding-top:15px"><a href="today/events.php" class="button button--center">Historical Events Today</a>
<a href="events/date/2024" class="button button--center background-people">Events in 2024</a></li>
</ul>
<header class="section__heading header-film-tv event-list--with-advert"><a href="/film-tv/" class="section__link"><h3><span class="channel-icon film-tv"></span>Today in Film &amp; TV</h3></a></header>
<ul class="event-list event-list--with-advert">
<li class="event"><a href="/film-tv/events/date/1891" class="date">1891</a> 1st public display of <a href="/people/thomas-edison">Thomas Edison</a>'s prototype kinetoscope to members of the National Federation of Women's Club</li>
</ul>
<header class="section__heading header-music event-list--with-advert"><a href="/music/" class="section__link"><h3><span class="channel-icon music"></span>Today in Music</h3></a></header>
<ul class="event-list event-list--with-advert">
<li class="event"><a href="/music/events/date/1983" class="date">1983</a> "Every Breath You Take" single released by The Police (Billboard Song of the Year, 1983)</li>
</ul>
<header class="section__heading header-sport event-list--with-advert"><a href="/sport/" class="section__link"><h3><span class="channel-icon sport"></span>Today in Sport</h3></a></header>
<ul class="event-list event-list--with-advert">
<li class="event"><a href="/sport/events/date/1900" class="date">1900</a> Second modern Summer Olympics (Games of the II Olympiad) opens in Paris and continues for 5 months</li>
</ul>
<span class="list-clearfix"></span></div></div>
<div class="sponsor--center"></div><section class="section section--highlight section--did-you-know"><div class="wrapper">
<header><h3 class="did-you-know__heading"><img class="section--icon" src="/images/did-you-know.svg" loading="lazy" width="69" height="69" alt="Do you know this fact about today?">Did You Know?</h3></header>
<p>The six ton chandelier of the Palais Garnier opera house in Paris falls on the crowd resulting in the death of one and the injury of many others</p>
<p class="fun-fact"><a href="/date/1896/may/20">May 20, 1896</a></p></div></section>
<div class="section section--alt no-padding-bottom"><div class="wrapper">
<header class="section__heading"><a href="today/birthdays.php" class="section__link"><h3>Famous Birthdays</h3></a></header>
<ul class="photo-list">
<li class="photo-list__item"><a href='people/toussaint-louverture'><img src="/images/people/toussaint-louverture.jpg"  srcset="/images/people/toussaint-louverture.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Toussaint Louverture<br><span class="black">1743 - 1803</span></a></li>
<li class="photo-list__item"><a href='people/john-stuart-mill'><img src="/images/people/john-stuart-mill.jpg"  srcset="/images/people/john-stuart-mill.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">John Stuart Mill<br><span class="black">1806 - 1873</span></a></li>
<li class="photo-list__item"><a href='people/jimmy-stewart'><img src="/images/people/jimmy-stewart.jpg"  srcset="/images/people/jimmy-stewart.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">James Stewart<br><span class="black">1908 - 1997</span></a></li>
<li class="photo-list__item"><a href='people/william-hewlett'><img src="/images/people/william-hewlett.jpg"  srcset="/images/people/william-hewlett.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Bill Hewlett<br><span class="black">1913 - 2001</span></a></li>
<li class="photo-list__item"><a href='people/moshe-dayan'><img src="/images/people/moshe-dayan.jpg"  srcset="/images/people/moshe-dayan.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Moshe Dayan<br><span class="black">1915 - 1981</span></a></li>
<li class="photo-list__item"><a href='people/dietrich-mateschitz'><img src="/images/people/dietrich-mateschitz-sml.jpg"  loading="lazy" width="180" height="225" alt="">Dietrich Mateschitz<br><span class="black">1944 - 2022</span></a></li>
</ul><span class="text-center"><a href="today/birthdays.php" class="button button--center">Famous Birthdays Today</a></span>
<header class="section__heading"><a href="today/celebrity-birthdays.php" class="section__link"><h3>Celebrity Birthdays</h3></a></header>
<ul class="photo-list">
<li class="photo-list__item"><a href='people/stan-mikita'><img src="/images/people/stan-mikita.jpg"  srcset="/images/people/stan-mikita.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Stan Mikita<br><span class="black">1940 - 2018</span></a></li>
<li class="photo-list__item"><a href='people/joe-cocker'><img src="/images/people/joe-cocker.jpg"  srcset="/images/people/joe-cocker.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Joe Cocker<br><span class="black">1944 - 2014</span></a></li>
<li class="photo-list__item"><a href='people/cher'><img src="/images/people/cher.jpg"  srcset="/images/people/cher.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Cher<br><span class="black">78th Birthday</span></a></li>
<li class="photo-list__item"><a href='people/louis-theroux'><img src="/images/people/louis-theroux.jpg"  srcset="/images/people/louis-theroux.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Louis Theroux<br><span class="black">54th Birthday</span></a></li>
<li class="photo-list__item"><a href='people/chris-froome'><img src="/images/people/chris-froome.jpg"  srcset="/images/people/chris-froome.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Chris Froome<br><span class="black">39th Birthday</span></a></li>
</ul><span class="text-center"><a href="today/celebrity-birthdays.php" class="button button--center">Celebrity Birthdays Today</a></span></div></div>
<div class="sponsor--center"></div>
<section class="section section--highlight section--did-you-know"><div class="wrapper">
<header><h3 class="did-you-know__heading"><img class="section--icon" src="/images/comedian.svg" loading="lazy" width="69" height="69" alt="">
        <span class="poi__heading-txt">Fun Fact About Today</span></h3></header>
<p><a href="/people/levi-strauss">Levi Strauss</a> and Jacob Davis patent the first blue jeans with copper rivets</p>
<p class="fun-fact"><a href="/date/1873/may/20">May 20, 1873</a></p></div></section>
<div class="section no-padding-bottom"><div class="wrapper"><header class="section__heading"><a href="today/weddings-divorces.php" class="section__link"><h3>Famous Weddings</h3></a></header>
<ul class="event-list">
<li class="event"><a href="/weddings/date/491" class="date">491</a> New Byzantine Emperor Anastasius I Dicorus marries Ariadne, widow of previous Emperor Zeno and daughter of Leo I</li>
<li class="event"><a href="/weddings/date/1756" class="date">1756</a> Prime Minister of Great Britain <a href="/people/frederick-north">Frederick North</a> (24) weds heiress Anne Speke</li>
<li class="event"><a href="/weddings/date/1968" class="date">1968</a> "The Who" guitarist and songwriter <a href="/people/pete-townshend">Pete Townshend</a> (23) weds Karen Astley in England</li>
</ul></div><span class="text-center"><a href="today/weddings-divorces.php" class="button button--center">Weddings &amp; Divorces Today</a></span></div>
<div class="sponsor--center"></div><div class="section section--alt no-padding-bottom"><div class="wrapper">
<header class="section__heading"><a href="today/deaths.php" class="section__link"><h3>Famous Deaths in History</h3></a></header>
<ul class="photo-list">
<li class="photo-list__item"><a href='people/christopher-columbus'><img src="/images/people/christopher-columbus.jpg"  srcset="/images/people/christopher-columbus.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Christopher Columbus<br><span class="black">1451 - 1506</span></a></li>
<li class="photo-list__item"><a href='people/marquis-de-lafayette'><img src="/images/people/marquis-de-lafayette.jpg"  srcset="/images/people/marquis-de-lafayette.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Marquis de Lafayette<br><span class="black">1757 - 1834</span></a></li>
<li class="photo-list__item"><a href='people/stephen-jay-gould'><img src="/images/people/stephen-jay-gould.jpg"  srcset="/images/people/stephen-jay-gould.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Stephen Jay Gould<br><span class="black">1941 - 2002</span></a></li>
<li class="photo-list__item"><a href='people/randy-savage'><img src="/images/people/randy-savage.jpg"  srcset="/images/people/randy-savage.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Randy Savage<br><span class="black">1952 - 2011</span></a></li>
<li class="photo-list__item"><a href='people/robin-gibb'><img src="/images/people/robin-gibb.jpg"  srcset="/images/people/robin-gibb.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Robin Gibb<br><span class="black">1949 - 2012</span></a></li>
<li class="photo-list__item"><a href='people/niki-lauda'><img src="/images/people/niki-lauda.jpg"  srcset="/images/people/niki-lauda.jpg?w=360 2x" loading="lazy" width="180" height="225" alt="">Niki Lauda<br><span class="black">1949 - 2019</span></a></li>
</ul><span class="text-center"><a href="today/deaths.php" class="button button--center">Famous Deaths Today</a>
<a href="deaths/date/2024" class="button button--center background-people">Deaths in 2024</a></span></div></div>
<div class="section no-padding-bottom"><div class="wrapper">
<div class="featured-article"><a href="/articles/my-fair-ladys-special-day"><header class="section__heading"><h3 class="poi__heading"><img class="section--icon" src="/images/article.svg" loading="lazy" width="69" height="69" alt="Featured Article">
        <span class="poi__heading-txt">My Fair Lady's Special Day <span class="poi__date">(Featured Article)</span></span></h3></header>
<img src="/images/articles/audrey-hepburn-my-fair-lady-sml.jpg" loading="lazy" width="270" height="225" alt=""><p class="linked_text">This was a day to remember for Eliza Doolittle, the 'My Fair Lady' of the stage and film musical that won and broke hearts. <span class="linked_date">May 20, 1956</span></p><span class="list-clearfix"></span></a></div>
</div></div>
<div class="sponsor--footer"></div><br><div class="pagination"><div class="wrapper"><ul class="pagination__list">
<li class="pagination__item"><a href="day/may/19" class="pagination__link pagination__link--left">19 May</a></li>
<li class="pagination__item pagination__item--title"><b><a href="calendar.php" class="pagination__link">Calendar</a></b></li>
<li class="pagination__item"><a href="day/may/21" class="pagination__link pagination__link--right">May 21</a></li>
</ul></div></div>
<div class="section no-padding-bottom">
<div class="wrapper"><header class="section__heading"><a href="/people/by-nationality.php" class="section__link"><h2>Famous People by Country</h2></a></header>
<ul class="photo-list">
<li class="photo-list__item"><a href="/people/nationality/american"><img src="/images/people/george-washington.jpg" loading="lazy" width="180" height="225" alt="George Wshington">American</a></li>
<li class="photo-list__item"><a href="/people/nationality/british"><img src="/images/people/winston-churchill.jpg" loading="lazy" width="180" height="225" alt="Winston Churchill">British</a></li>
<li class="photo-list__item"><a href="/people/nationality/canadian"><img src="/images/people/frederick-banting.jpg" loading="lazy" width="180" height="225" alt="Frederick Banting">Canadian</a></li>
<li class="photo-list__item"><a href="/people/nationality/french"><img src="/images/people/joan-of-arc.jpg" loading="lazy" width="180" height="225" alt="Joan of Arc">French</a></li>
<li class="photo-list__item"><a href="/people/nationality/german"><img src="/images/people/otto-von-bismarck.jpg" loading="lazy" width="180" height="225" alt="Otto von Bismarck">German</a></li>
<li class="photo-list__item"><a href="/people/nationality/russian"><img src="/images/people/ivan-the-terrible.jpg" loading="lazy" width="180" height="225" alt="Ivan the Terrible">Russian</a></li>
</ul></div>
 </div></main>
<div class="calendar section--full-calendar" id="calendar" style="display:none">
<div class="wrapper"><ul class="calendar-nav"><li class="calendar-nav__single-item">May</li></ul>
<ul class="full-calendar__list">
<li><a href="/day/may/1">1</a></li><li><a href="/day/may/2">2</a></li><li><a href="/day/may/3">3</a></li><li><a href="/day/may/4">4</a></li><li><a href="/day/may/5">5</a></li><li><a href="/day/may/6">6</a></li><li><a href="/day/may/7">7</a></li><li><a href="/day/may/8">8</a></li><li><a href="/day/may/9">9</a></li><li><a href="/day/may/10">10</a></li><li><a href="/day/may/11">11</a></li><li><a href="/day/may/12">12</a></li><li><a href="/day/may/13">13</a></li><li><a href="/day/may/14">14</a></li><li><a href="/day/may/15">15</a></li><li><a href="/day/may/16">16</a></li><li><a href="/day/may/17">17</a></li><li><a href="/day/may/18">18</a></li><li><a href="/day/may/19">19</a></li><li><span class="current_date">20</span></li><li><a href="/day/may/21">21</a></li><li><a href="/day/may/22">22</a></li><li><a href="/day/may/23">23</a></li><li><a href="/day/may/24">24</a></li><li><a href="/day/may/25">25</a></li><li><a href="/day/may/26">26</a></li><li><a href="/day/may/27">27</a></li><li><a href="/day/may/28">28</a></li><li><a href="/day/may/29">29</a></li><li><a href="/day/may/30">30</a></li><li><a href="/day/may/31">31</a></li></ul>
<select class="calendar-date-select calendar-select" onchange="location = this.options[this.selectedIndex].value;" aria-label="Day">
<option value="/day/may/1">1</option><option value="/day/may/2">2</option><option value="/day/may/3">3</option><option value="/day/may/4">4</option><option value="/day/may/5">5</option><option value="/day/may/6">6</option><option value="/day/may/7">7</option><option value="/day/may/8">8</option><option value="/day/may/9">9</option><option value="/day/may/10">10</option><option value="/day/may/11">11</option><option value="/day/may/12">12</option><option value="/day/may/13">13</option><option value="/day/may/14">14</option><option value="/day/may/15">15</option><option value="/day/may/16">16</option><option value="/day/may/17">17</option><option value="/day/may/18">18</option><option value="/day/may/19">19</option><option disabled selected>20</option><option value="/day/may/21">21</option><option value="/day/may/22">22</option><option value="/day/may/23">23</option><option value="/day/may/24">24</option><option value="/day/may/25">25</option><option value="/day/may/26">26</option><option value="/day/may/27">27</option><option value="/day/may/28">28</option><option value="/day/may/29">29</option><option value="/day/may/30">30</option><option value="/day/may/31">31</option></select>
<select class="calendar-type-select calendar-select" style="background-color:#1e252d; width:100%; height:42px; margin-bottom:5px; text-indent:100%" onchange="location = this.options[this.selectedIndex].value;" aria-label="Entry Type">
<option disabled selected>Summary</option><option value="/today/events.php">Events</option><option value="/today/birthdays.php">Birthdays</option><option value="/today/deaths.php">Deaths</option><option value="/today/weddings-divorces.php">Weddings</option><option value="/film-tv/">Film &amp; TV</option><option value="/music/">Music</option><option value="/sport/">Sport</option></select><ul class="calendar-type-list">
<li><a href="#" class="active">Summary</a></li><li><a href="/today/events.php" class="">Events</a></li><li><a href="/today/birthdays.php" class="">Birthdays</a></li><li><a href="/today/deaths.php" class="">Deaths</a></li><li><a href="/today/weddings-divorces.php" class="">Weddings</a></li><li class="show-mobile"><a href="/film-tv/" class="">Film &amp; TV</a></li><li class="show-mobile"><a href="/music/" class="">Music</a></li><li class="show-mobile"><a href="/sport/" class="">Sport</a></li></ul></div>
<span class="text-center full-content__button"><a href="/calendar.php" class="button">Full Calendar</a></span></div>
<div class="search section--search" id="search" style="display:none">
<div class="wrapper">
<form method="post" action="/search.php">
<ul class="search__list">
<li class="search__item"><input name="text" type="text" autocomplete="off" minlength="2" placeholder="Enter Date, Event or Person" value="" class="search__text" aria-label="Date, Event or Person"></li>
<li class="search__item"><select name="day" class="search__select" aria-label="Day">
<option>All Days</option>
<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></li>
<li class="search__item">
<select name="month" class="search__select" aria-label="Month">
<option value="all" selected="selected">All Months</option>
<option value="1">January</option><option value="2">February</option><option value="3">March</option><option value="4">April</option><option value="5">May</option><option value="6">June</option><option value="7">July</option><option value="8">August</option><option value="9">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select></li>
<li class="search__item"><input name="year" type="number" placeholder="All Years" min="1" max="2050" aria-label="Year"></li>
<li class="search__item">
<select name="type" class="search__select" aria-label="Entry Type">
<option value="all">All Types</option><option value="e">Events</option><option value="b">Birthdays</option><option value="d">Deaths</option><option value="w">Weddings</option></select></li>
<li class="search__item"><button aria-label="Search" class="search__button"><span class="button-label">Search</span></button></li></ul><input type="hidden" name="searchBox" value="M"></form>&nbsp;
</div></div>
<div class="footer__search">
<div class="wrapper">
<p>Search the largest and most accurate independent site for today in history.</p>
<form method="post" action="/search.php">
<ul class="search__list">
<li class="search__item"><input name="text" type="text" autocomplete="off" minlength="2" placeholder="Enter Date, Event or Person" value="" class="search__text" aria-label="Date, Event or Person"></li>
<li class="search__item"><select name="day" class="search__select" aria-label="Day">
<option>All Days</option>
<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></li>
<li class="search__item">
<select name="month" class="search__select" aria-label="Month">
<option value="all" selected="selected">All Months</option>
<option value="1">January</option><option value="2">February</option><option value="3">March</option><option value="4">April</option><option value="5">May</option><option value="6">June</option><option value="7">July</option><option value="8">August</option><option value="9">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select></li>
<li class="search__item"><input name="year" type="number" placeholder="All Years" min="1" max="2050" aria-label="Year"></li>
<li class="search__item">
<select name="type" class="search__select" aria-label="Entry Type">
<option value="all">All Types</option><option value="e">Events</option><option value="b">Birthdays</option><option value="d">Deaths</option><option value="w">Weddings</option></select></li>
<li class="search__item"><button aria-label="Search" class="search__button"><span class="button-label">Search</span></button></li></ul><input type="hidden" name="searchBox" value="B"></form></div></div>
<footer class="footer">
<div class="footer__nav">
<div class="wrapper"><ul>
<li><a href="/about.php">About</a></li>
<li><a href="/contact.php">Contact</a></li>
<li><a href="/corrections.php">Corrections</a></li>
<li><a href="/privacy.php">Privacy</a></li>
</ul></div></div>
<div class="footer__subscribe">Get Our Daily Email</div>
<form action="/newsletter/" method="post" name="subscribe-form"><ul class="subscribe__list">
<li class="subscribe__item"><input type="email" name="email" class="subscribe__input" placeholder="Email Address" autocomplete="email" required aria-label="Email Address"></li>
<li class="subscribe__item"><button type="submit" name="subscribe" class="subscribe__button" aria-label="Add Me">Add<span> Me</span>!</button></li>
</ul></form>
<ul class="social-icons"><li class="social-icons__item"><a href="https://www.facebook.com/OnThisDaycom" class="social-icons__link" target="_blank" rel="noopener"><img src="/images/facebook.svg" loading="lazy" width="30" height="30" alt="On This Day on Facebook" title="On This Day on Facebook"></a></li>
<li class="social-icons__item"><a href="https://www.instagram.com/onthisdaycom/" class="social-icons__link" target="_blank" rel="noopener"><img src="/images/instagram.svg" loading="lazy" width="30" height="30" alt="On This Day on Instagram" title="On This Day on Instagram"></a></li>
<li class="social-icons__item"><a href="https://twitter.com/OnThisDaycom" class="social-icons__link" target="_blank" rel="noopener"><img src="/images/twitter.svg" loading="lazy" width="30" height="30" alt="On This Day on Twitter" title="On This Day Twitter"></a></li></ul>
<p class="footer__copyright">&copy; 2000-2024 On This Day Pte. Ltd.</p>
</footer>
<script async src="/_assets/js/main.js?v6"></script>
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
</script>
<script type="application/ld+json"> {
"@context": "http://schema.org",
"@graph": [{
"@id": "https://www.onthisday.com#organization",
"@type": "Organization",
"url": "https://www.onthisday.com",
"name": "On This Day",
"logo": {
"@type": "ImageObject",
"@id": "https://www.onthisday.com/#logo",
"url": "https://www.onthisday.com/images/on-this-day-logo.jpg",
"height": "370",
"width": "370",
"caption": "On This Day"},
"legalName": "On This Day Pte. Ltd.",
"foundingDate": "2000-12-22",
"slogan": "The largest, most accurate site for today in history.",
"sameAs": ["https://www.facebook.com/OnThisDaycom/","https://www.instagram.com/onthisdaycom/","https://twitter.com/onthisdaycom"]
}, {
"@context": "http://schema.org",
"@id": "https://www.onthisday.com#website",
"@type": "WebSite",
"url": "https://www.onthisday.com",
"name": "On This Day",
"alternateName": "OnThisDay.com",
"description": "Find out what happened today or any day in history with On This Day. Historical events, birthdays, deaths, photos and famous people, from 4000 BC to today.",
"publisher": {"@id": "https://www.onthisday.com#organization"}
}]}
</script>
</body>
</html>`;

