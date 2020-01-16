var body = document.querySelector("body");
var btn = document.querySelectorAll(".para")
var para = document.querySelectorAll(".showcase div")

for(i = 0; i < para.length; i++){
	para[i].classList.add("d-none");
	para[1].classList.remove("d-none");
	btn[1].style.borderColor = "orange";
}

// seting indeces function
function setIndex(items){
	for(i =0; i < items.length; i++){
		items[i].setAttribute('index', i)
	}
}

function imgChange(imgBtn, img,imgs){
	if(imgBtn.getAttribute("index") != img.getAttribute("index")){	
		img.classList.add("hide");	
		img.classList.remove("show");			
		setTimeout(()=>{
			imgs.forEach((item)=>{
		if(item.getAttribute('index') != imgBtn.getAttribute('index')){	
			item.className += " d-none";
		}else{
			item.classList.remove("hide");
			item.classList.remove("d-none");
			item.classList.add("show");
		}	
		});					
			},400);
				}	
}

// connecting paragraph and buttons  
function attr(items){
	items.forEach((item)=>{
		item.addEventListener("click", (e)=>{
			for(i = 0; i < items.length; i++){
				items[i].setAttribute("clicked", false);
				e.target.setAttribute("clicked", true);	
				items[i].getAttribute("clicked") == "true" ?
				items[i].style.borderColor = "orange":items[i].style.borderColor = "#fff";
				imgChange(e.target, para[i], para);				
			}	            			
		})		
	})
}

setIndex(para);
setIndex(btn);
attr(btn);


