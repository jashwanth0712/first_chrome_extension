function start(){
    if(document.querySelector("tbody")){
        window.removeEventListener('DOMSubtreeModified',start);
        fnAdd_button();
    }

    function fnAdd_button(){
        console.log("found ",document.getElementsByClassName("zA"))
        console.log("tbody is ",document.querySelector("tbody"))
        let i=0;
        console.log("iteration number ",i);
        temp=document.createElement("button");
        h=document.createElement("h2");
        h.text="h";
        temp.appendChild(h);
        document.getElementsByClassName("zA")[0].appendChild(temp);
        console.log("Added")

    }
    
};

window.addEventListener('DOMSubtreeModified', start);
