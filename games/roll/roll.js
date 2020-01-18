var roll1 = document.querySelector("#roll1");
var roll2 = document.querySelector("#roll2");
var roll3 = document.querySelector("#roll3");
var rollBtn = document.querySelector(".hand-container > div > div");
var screen = document.querySelector(".screen");
var screenElement = document.querySelectorAll(".screen > p");
var user = document.querySelector('.m-head > p');
var betScreen = document.querySelector('.hand-container div:nth-child(2) > p');
var plusBtn = document.querySelector('#plus');
var minusBtn = document.querySelector('#minus');
var spinSound = new Audio('./audio/spin.mp3');
var stopSound = new Audio('./audio/stop.mp3');


one = 0;
two = 0;
three = 0;

total = 60;
roll = 0;
bet = 10;

var name = prompt('Your name: ');
if(name == '' || player == null){
	name = "Player";
}

user.innerHTML = name +': ' + total +'$ | Bet: ' + bet + '$';
betScreen.innerHTML ='Bet: ' + bet + '$';

// random for images
function rollNumbers(times, range, img, arr){
	for(i = 0; i < times; i++){
		setTimeout(()=>{			
			img.src = arr[Math.floor(Math.random() * range)];			
		},i * 100 / 2);	
	}
	setTimeout(()=>{
		stopSound.play();
	}, (times-1)*100/2);
}
// set three item with class and innerhtml
function addClassToMany(container, item, cls, sym){
   container.innerHTML = 
	`<${item} class="${cls}"> ${sym} </${item}>
	 <${item} class="${cls}"> ${sym} </${item}>
	 <${item} class="${cls}"> ${sym} </${item}>`;
}

// plus btn function
function plusEvent(){
	plusBtn.addEventListener('click', ()=>{
		if(bet < total){
			bet += 10;
			betScreen.innerHTML ='Bet: ' + bet + '$';
		}
	});
}

// minus btn function
function minusEvent(){
	minusBtn.addEventListener('click', ()=>{
		if(bet > 10){
			bet -= 10;
			betScreen.innerHTML ='Bet: ' + bet + '$';
		}
	});
}

plusEvent();
minusEvent();

shapes = {0: "./simg/7.jpg", 1: "./simg/banana.jpg", 2: "./simg/bar.jpg", 3: "./simg/bigwin.jpg",
4: "./simg/cherry.jpg", 5: "./simg/lemon.jpg",6: "./simg/orange.jpg", 7: "./simg/qq.jpg", 8: "./simg/waterm.jpg"};

rollBtn.addEventListener("click", ()=>{
	if(total > 0){
		if(bet <= total){
			spinSound.play();
			rollNumbers(30, 9, roll1, shapes);
			rollNumbers(40, 9, roll2, shapes);
			rollNumbers(50, 9, roll3, shapes);
			user.innerHTML = name +': ' + total +'$ | Bet: ' + bet + '$';
			rollBtn.classList.add("trans");
			setTimeout(()=>{
				rollBtn.classList.remove("trans");
			},1000);
			addClassToMany(screen,'p', 'rot', '*');
			function wait(){
			let promise = new Promise((resolve, reject)=>{
				setTimeout(()=>{			
					resolve();
				},2500);
			});
			return promise;
			}

			wait().then(()=>{
				one = roll1.getAttribute('src');
				two = roll2.getAttribute('src');
				three = roll3.getAttribute('src');
				addClassToMany(screen,'p', '', '-');
			}).then(()=>{
				if(one == two && one == three){
					screen.innerHTML = `WooooooW, ${bet ** 2}$ added to your cash`;
					total += bet ** 2;
				}else if(one == two || one == three || two == three){
					screen.innerHTML = `You Win, ${bet * 2}$ added to your cash`;
					total += bet * 2;
				}else{
					screen.innerHTML = `You lost ${bet}$`;
					total -= bet;
				}
				user.innerHTML = name +': ' + total +'$ | Bet: ' + bet + '$';
				spinSound.pause();
				spinSound.currentTime = 0;
			});
		}else{
			bet = total;
			betScreen.innerHTML ='Bet: ' + bet + '$';
		}
	}else{
		screen.innerHTML = "You have no more money!";
		con = confirm("Reste game?")
		if(con == true){
			total += 60;
			user.innerHTML = name +': ' + total +'$ | Bet: ' + bet + '$';
			addClassToMany(screen,'p', '', '-');
		}
	}
});



