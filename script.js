
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




const form = document.getElementById("form");
var nameField = document.getElementById("name");
var namelabel  = document.getElementById("name-label");
var nameerror = document.getElementById("name-error");
var emailField = document.getElementById("mail");
var emaillabel = document.getElementById("mail-label");
var emailerror = document.getElementById("e-error"); 
var detailField = document.getElementById("detail")
var detaillabel = document.getElementById("detail-label");
var detailerror = document.getElementById("d-error");

function validatename()
{
    if(nameField.value===""){
    nameerror.innerHTML="please enter the  name";
    nameField.style.border="2px solid red";
    return false;
    }
    else if(nameField.value.length<4 || nameField.value.length>15){
        nameerror.innerHTML="Characters of the  name should be Min 4 and Max 15";
        nameField.style.border="2px solid red";
        return false;
    }

    else{
        nameerror.innerHTML="";
        nameField.style.border="2px solid green";
        return true; 

    }

}

function validateemail()
{
    if(emailField.value===""){
        emailerror.innerHTML="please enter the E-Mail id";
        emailField.style.border="2px solid red";
        return false;
        }

        else if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailerror.innerHTML = "please enter a  valid E-mail ID";
            emailField.style.border = "2px solid red";
            return false;
         }
    
        else{
            emailerror.innerHTML="";
            emailField.style.border="2px solid green";
            return true; 
    
        }
}

function validatedetail(){
    
    
        if(detailField.value===""){
        detailerror.innerHTML="please enter the Details";
        detailField.style.border="2px solid red";
        return false;
        }

        else if(detailField.value.length<300 || detailField.value.length>300){
            detailerror.innerHTML="Details should have contain atleast 300 words";
            detailField.style.border="2px solid red";
            return false;
        }

       
    
        else{
            detailerror.innerHTML="";
            detailField.style.border="2px solid green";
            return true; 
    
        }
    
    }


form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
   });

function checkinput(){
    const namevalue = nameField.value.trim();
    const emailvalue = emailField.value.trim();
    const detailvalue = detailField.value.trim();

    document.write(" Name:"+" "+namevalue + "<br>");
    document.write("Email id:"+" " + emailvalue + "<br>");
    document.write("Details:"+" " + detailvalue + "<br>");

}
