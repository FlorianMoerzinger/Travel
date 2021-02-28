// the location area with the main class 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Citys = /** @class */ (function () {
    function Citys(a, b, c) {
        this.id = a;
        this.image = b;
        this.city = c;
    }
    Citys.prototype.basic = function () {
        return "\n\t\t    <div class=\"col-sm-5 header d-none d-sm-block \">\n\t\t       <p class=\"notShowBasic\">" + this.id + "</p>\n\t\t        <h1 class=\" col-sm-8  mx-4 text-right \">" + this.city + "</h1>\n\n\t\t      <img class=\" col-sm-8 \" src=\"" + this.image + "\" alt=\"asdf\">\n\t\t      \n\t\t    </div>\n\t\t";
    };
    // main function is there for the other two classes 
    Citys.prototype.main = function () {
        return "\n\t\t\t<div class=\"container-fluid col-sm-5 col-md-3 rounded-pill mb-2 \">\n\t\t\t<p class=\"notShowBasic\">" + this.id + "</p>\n\t\t\t<h1 class=\" text-center bg-light rounded-pill \">" + this.city + "</h1>\n\t\t\t<img class=\"notShowBasic\" src=\"" + this.image + "\" alt=\"asdf\">\n\t\t";
    };
    return Citys;
}());
var salzburg = new Citys(1, "./IMG/salzburg4.jpg", "Salzburg");
var ljubjana = new Citys(2, "./IMG/ljubljana_F.jpg", "Ljubljana");
var stadt = [salzburg, ljubjana];
for (var i = 0; i < stadt.length; i++) {
    console.log(stadt[i]);
    document.getElementsByClassName("showcity")[0].innerHTML += (stadt[i].basic());
}
;
// *******************************************************************************************
// *******************************Resturant's part *******************************************
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(a, b, c, e, f, g, h, i, x, j, k, l, m) {
        var _this = _super.call(this, a, b, c) || this;
        _this.name = e;
        _this.webpage = f;
        _this.typ = g;
        _this.phone = h;
        _this.image = i;
        _this.year = x;
        _this.month = j;
        _this.day = k;
        _this.hour = l;
        _this.minutes = m;
        return _this;
    }
    Restaurant.prototype.mainRestaurant = function () {
        return _super.prototype.main.call(this) + ("\n\t\t<!-- <div class=\"container-fluid\"> -->\n  \t\t\t  \n\t\t    <div class=\"col-sm-12 text-center article bg-light\">\n\t\t      \n\t\t      <img class=\" img p-1  img_show d-none d-sm-block\"src=\"" + this.image + "\" alt=\"\">\n\t\t     <h4 >" + this.name + "</h4>\n\t\t\t      <div class=\" text-left \" >\n\t\t\t      <p>WebPage: <a class=\"btn btn-light\" href=\"" + this.webpage + "\" role=\"button\">Link</a></p>\n\t\t\t      <p >Typ: " + this.typ + "</p>\n\t\t\t      <p >Phone: " + this.phone + "</p>\n\t\t\t      <p>Created: " + this.year + "." + this.month + "." + this.day + "  " + this.hour + ":" + this.minutes + "</\n\t\t\t      </div>\n\n\t\t      \n\t\t    </div>\t\t\t \n\n\t\t</div>\n\t\t");
    };
    return Restaurant;
}(Citys));
var zwettler = new Restaurant(1, "./IMG/salzburg4.jpg", "Salzburg", "Zwettler's", "https://www.zwettlers.com/startseite/", "Wirtshaus", 98654651, "./IMG/zwettler.jpg", 27, 05, 2010, 02, 30);
var sternbreu = new Restaurant(2, "./IMG/salzburg4.jpg", "Salzburg", "Sternbräu", "https://www.sternbrau.com/", "Wirtshaus", 213548, "./IMG/Arkadengarten.jpg", 16, 02, 2011, 23, 55);
var forum = new Restaurant(3, "./IMG/ljubljana_F.jpg", "Ljubljana", "Forum", "https://www.forumbarljubljana.com/", "Bar", 554866, "./IMG/forum.png", 20, 07, 2015, 01, 54);
var dovni_bar = new Restaurant(4, "./IMG/ljubljana_F.jpg", "Ljubljana", "Dovni Bar", "https://dvornibar.net/", "Bar", 5656565, "./IMG/dovni_bar.jpg", 09, 09, 2009, 23, 21);
var restaurants = [zwettler, sternbreu, forum, dovni_bar];
console.log(restaurants);
for (var i = 0; i < restaurants.length; i++) {
    document.getElementsByClassName("showrestaurants")[0].innerHTML += (restaurants[i].mainRestaurant());
}
// *******************************************************************************************
// *******************************Event's part *******************************************
var Eventt = /** @class */ (function (_super) {
    __extends(Eventt, _super);
    function Eventt(a, b, c, e, f, g, h, i, j, k, l, m) {
        var _this = _super.call(this, a, b, c) || this;
        _this.name = e;
        _this.datte = f;
        _this.time = g;
        _this.image = h;
        _this.year = i;
        _this.month = j;
        _this.day = k;
        _this.hour = l;
        _this.minutes = m;
        return _this;
    }
    Eventt.prototype.mainEvent = function () {
        return _super.prototype.main.call(this) + ("\n\t\t\t\t\t \n\t    <div class=\"col-sm-12 text-center article bg-light blockquote\">\n\t      \n\t      <img class=\" img p-1  img_show d-none d-sm-block\"src=\"" + this.image + "\" alt=\"\">\n\t      <h4 class=\"\">" + this.name + "</h4>\n\t\t      <div class= text-left>\n\t\t      <p>Date: " + this.datte + "</p>\n\t\t      <p>Start: " + this.time + "</p>\n\t\t      <p>Created: " + this.year + "." + this.month + "." + this.day + "  " + this.hour + ":" + this.minutes + "</p>\n\t\t      </div>\n\n\t      \n\t    </div>\n\t\t</div>\n\t\t");
    };
    return Eventt;
}(Citys));
var mirabell = new Eventt(1, "./IMG/salzburg4.jpg", "Salzburg", "Schloss Mirabell", "from march to november", "8:00", "./IMG/mirabellgarten.jpeg", 05, 12, 2010, 12, 30);
var michelino = new Eventt(2, "./IMG/salzburg4.jpg", "Salzburg", "Faschingskonzert mit Michelino", "23.02.2020", "20:00", "./IMG/salzburg.jpg", 05, 05, 2017, 15, 30);
var speisemarkt = new Eventt(3, "./IMG/ljubljana_F.jpg", "Ljubljana", "Speisemarkt", "20.03.2020", "8:00", "./IMG/odprta-kuhna.jpg", 01, 10, 2018, 20, 10);
var burg = new Eventt(4, "./IMG/ljubljana_F.jpg", "Ljubljana", "Burg von Ljubljana", "daily", "9:00", "./IMG/burg_ljub.jpg", 12, 12, 2017, 06, 14);
var events = [mirabell, michelino, speisemarkt, burg];
console.log(events);
for (var i = 0; i < events.length; i++) {
    // console.log(stadt[i]);
    document.getElementsByClassName("showevents")[0].innerHTML += (events[i].mainEvent());
}
;
$('.movementRestaurant').mousemove(function (e) {
    var x = (e.pageX * -1 / 5), y = (e.pageY * -1 / 5);
    $(this).css('background-position', x + 'px ' + y + 'px');
});
$('.movementEvent').mousemove(function (e) {
    var x = (e.pageX * -4 / 8), y = (e.pageY * -4 / 8);
    $(this).css('background-position', x + 'px ' + y + 'px');
});
