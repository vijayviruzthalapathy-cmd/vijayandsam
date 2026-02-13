let correctPassword = "8.06.2005";

function checkPassword(){
    let input = document.getElementById("passwordInput").value;
    if(input === correctPassword){
        document.getElementById("lockScreen").style.display="none";
        document.getElementById("mainContent").style.display="block";
        document.getElementById("bgMusic").play();
    } else {
        alert("Wrong date 😜 Try again!");
    }
}

// NO button escape
let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", function(){
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerHeight;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    yesBtn.style.transform="scale(1.2)";
});

// YES click action
yesBtn.addEventListener("click", function(){
    startEffects();
    startSlideshow();
    document.getElementById("voiceMessage").play();
});

// Hearts + Confetti
function startEffects(){
    setInterval(()=>{
        let heart=document.createElement("div");
        heart.innerHTML="💖";
        heart.style.position="absolute";
        heart.style.left=Math.random()*100+"%";
        heart.style.top="-10px";
        heart.style.fontSize="30px";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),4000);
    },300);
}

// Slideshow
function startSlideshow(){
    document.getElementById("slideshow").style.display="block";
    let slides=document.getElementsByClassName("slide");
    let i=0;
    function showSlides(){
        for(let j=0;j<slides.length;j++){
            slides[j].style.display="none";
        }
        i++;
        if(i>slides.length){
            document.getElementById("finalMessage").style.display="block";
            return;
        }
        slides[i-1].style.display="block";
        setTimeout(showSlides,2000);
    }
    showSlides();
}
