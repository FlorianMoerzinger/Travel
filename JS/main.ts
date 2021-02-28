

// the location area with the main class 


	

class Citys{

	id: number;
	image: string;
	city: string;


	constructor(a:number, b:string, c:string) {
			this.id = a;
			this.image = b;
			this.city = c;
}



	basic(){
		return`
		    <div class="col-sm-5 header d-none d-sm-block ">
		       <p class="notShowBasic">${this.id}</p>
		        <h1 class=" col-sm-8  mx-4 text-right ">${this.city}</h1>

		      <img class=" col-sm-8 " src="${this.image}" alt="asdf">
		      
		    </div>
		`
	}
// main function is there for the other two classes 
	main(){
		return`
			<div class="container-fluid col-sm-5 col-md-3 rounded-pill mb-2 ">
			<p class="notShowBasic">${this.id}</p>
			<h1 class=" text-center bg-light rounded-pill ">${this.city}</h1>
			<img class="notShowBasic" src="${this.image}" alt="asdf">
		`

	}

}

let salzburg = new Citys( 1,"./IMG/salzburg4.jpg","Salzburg");

let ljubjana = new Citys( 2,"./IMG/ljubljana_F.jpg","Ljubljana");

let stadt = [salzburg, ljubjana ];


for ( let i = 0; i < stadt.length; i++) {
console.log(stadt[i]);

document.getElementsByClassName("showcity")[0].innerHTML += (stadt[i].basic()); 
};



// *******************************************************************************************
// *******************************Resturant's part *******************************************
class Restaurant extends Citys{
	
	name: string;
	webpage: string;
	typ: string;
	phone: number;
	image: string;
	year: number;
	month:number;
	day:number;
	hour:number;
	minutes: number;

	constructor(a,b,c,e:string,f:string,g:string,h:number, i:string, x:number, j:number, k:number, l:number, m:number) {
		super(a,b,c);
		this.name = e;
		this.webpage = f;
		this.typ = g;
		this.phone = h;
		this.image= i;
		this.year = x;
		this.month = j;
		this.day = k;
		this.hour = l;
		this.minutes= m;
	}

	mainRestaurant(){
		return super.main() + `
		<!-- <div class="container-fluid"> -->
  			  
		    <div class="col-sm-12 text-center article bg-light">
		      
		      <img class=" img p-1  img_show d-none d-sm-block"src="${this.image}" alt="">
		     <h4 >${this.name}</h4>
			      <div class=" text-left " >
			      <p>WebPage: <a class="btn btn-light" href="${this.webpage}" role="button">Link</a></p>
			      <p >Typ: ${this.typ}</p>
			      <p >Phone: ${this.phone}</p>
			      <p>Created: ${this.year}.${this.month}.${this.day}  ${this.hour}:${this.minutes}</
			      </div>

		      
		    </div>			 

		</div>
		`
	}
}

let zwettler = new Restaurant(1,"./IMG/salzburg4.jpg","Salzburg", "Zwettler's", "https://www.zwettlers.com/startseite/","Wirtshaus", 98654651, "./IMG/zwettler.jpg", 27, 05, 2010 , 02,30);

let sternbreu = new Restaurant(2,"./IMG/salzburg4.jpg","Salzburg","Sternbräu", "https://www.sternbrau.com/","Wirtshaus", 213548, "./IMG/Arkadengarten.jpg", 16,02,2011,23,55);
let forum = new Restaurant(3,"./IMG/ljubljana_F.jpg","Ljubljana", "Forum", "https://www.forumbarljubljana.com/", "Bar", 554866, "./IMG/forum.png", 20, 07, 2015, 01, 54);
let dovni_bar = new Restaurant(4,"./IMG/ljubljana_F.jpg","Ljubljana", "Dovni Bar", "https://dvornibar.net/", "Bar",5656565, "./IMG/dovni_bar.jpg", 09 , 09, 2009 , 23 , 21);


let restaurants = [zwettler, sternbreu, forum, dovni_bar];
console.log(restaurants);

for ( let i = 0; i < restaurants.length; i++) {


document.getElementsByClassName("showrestaurants")[0].innerHTML += (restaurants[i].mainRestaurant()); 

}


// *******************************************************************************************
// *******************************Event's part *******************************************

class Eventt extends Citys{
	
	name: string;
	datte: string;
	time: string;
	image: string;
	year: number;
	month:number;
	day:number;
	hour:number;
	minutes: number;


	constructor(a,b,c,e:string, f:string, g:string, h:string, i:number, j:number, k:number, l:number, m:number)  {
		super(a,b,c);
		this.name = e;
		this.datte = f;
		this.time = g;
		this.image = h;
		this.year = i;
		this.month = j;
		this.day = k;
		this.hour = l;
		this.minutes= m;
	}


	mainEvent(){
		return super.main() + `
					 
	    <div class="col-sm-12 text-center article bg-light blockquote">
	      
	      <img class=" img p-1  img_show d-none d-sm-block"src="${this.image}" alt="">
	      <h4 class="">${this.name}</h4>
		      <div class= text-left>
		      <p>Date: ${this.datte}</p>
		      <p>Start: ${this.time}</p>
		      <p>Created: ${this.year}.${this.month}.${this.day}  ${this.hour}:${this.minutes}</p>
		      </div>

	      
	    </div>
		</div>
		`
	}

}

let mirabell = new Eventt(1,"./IMG/salzburg4.jpg","Salzburg","Schloss Mirabell","from march to november","8:00" ,"./IMG/mirabellgarten.jpeg", 05, 12, 2010 , 12, 30);

let michelino = new Eventt(2,"./IMG/salzburg4.jpg", "Salzburg", "Faschingskonzert mit Michelino","23.02.2020", "20:00", "./IMG/salzburg.jpg", 05,05, 2017,15, 30);

let speisemarkt = new Eventt(3,"./IMG/ljubljana_F.jpg", "Ljubljana","Speisemarkt","20.03.2020", "8:00" , "./IMG/odprta-kuhna.jpg", 01,10,2018,20, 10);

let burg = new Eventt(4,"./IMG/ljubljana_F.jpg", "Ljubljana", "Burg von Ljubljana", "daily", "9:00" , "./IMG/burg_ljub.jpg", 12,12,2017,06,14);

let events = [mirabell, michelino, speisemarkt, burg];


console.log(events);



for ( let i = 0; i < events.length; i++) {
// console.log(stadt[i]);

document.getElementsByClassName("showevents")[0].innerHTML += (events[i].mainEvent()); 
};



 $('.movementRestaurant').mousemove(function(e) {
    var x = (e.pageX * -1 / 5), y = (e.pageY * -1 / 5);
    $(this).css('background-position', x + 'px ' + y + 'px');
})



 $('.movementEvent').mousemove(function(e) {
    var x = (e.pageX * -4 / 8), y = (e.pageY * -4 / 8);
    $(this).css('background-position', x + 'px ' + y + 'px');
})













