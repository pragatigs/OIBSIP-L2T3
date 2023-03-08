ip=document.getElementById("inputtodo");
add=document.getElementById("addtodo");
todo=document.getElementById("todo");
done=document.getElementById("done");
function added(){
    if(ip.value==''){
        alert('Enter a task');
    }
    else{
        var br = document.createElement('br');
        newt=document.createElement("p");
        newt.setAttribute('id','newt');
        newt.setAttribute('class','newt');
        newt.innerText="- "+ip.value;
        todo.appendChild(newt);
        ip.value='';
        db=document.createElement("button");
        db.setAttribute('id','cbtn');
        db.setAttribute('class','cbtn');
        db.innerText='Done';
         todo.appendChild(db);
         todo.appendChild(br);
         for(j=0;j<document.querySelectorAll(".newt").length;j++){
            document.querySelectorAll(".newt")[j].addEventListener("click",function(event){
                event.currentTarget.style.marginTop="0px";
                event.currentTarget.nextElementSibling.style.display="none";
                event.currentTarget.nextElementSibling.remove();
                event.currentTarget.style.display="none";
                event.currentTarget.remove();
            })
         }
         for(i=0;i<document.querySelectorAll(".cbtn").length;i++){
            document.querySelectorAll(".cbtn")[i].addEventListener("click",function(event){
                dt=document.createElement("p");
                dt.innerText=event.currentTarget.previousElementSibling.innerText;
                done.appendChild(dt);
                event.currentTarget.previousElementSibling.style.display="none";
                event.currentTarget.previousElementSibling.style.marginTop="0px";
                event.currentTarget.style.display="none";
                event.currentTarget.style.marginTop="0px";
                event.currentTarget.remove();
            })
         }
    }
}
