var button = document.querySelector("#add");
var stranger = document.querySelector("h3");
var flag = 0;
button.addEventListener("click",function(){
    if(flag == 0){
        stranger.innerHTML = "friend";
        stranger.style.color = "green";
        button.innerHTML="remove friend"
        flag = 1;
    }else{
        stranger.innerHTML = "stranger";
        stranger.style.color = "red";
        button.innerHTML="add friend"
        flag = 0;
    }
})