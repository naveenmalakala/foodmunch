function loginForm(){
    let userNameEl=document.getElementById("userName");
    let userPara=document.getElementById("errorUser");
    let userValue=userNameEl.value;
    let userExp=/^[A-Za-z]+$/;
    let userStatus=false;


    let passwordEl=document.getElementById("password");
    let passwordPara=document.getElementById("errorPass");
    let passwordValue=passwordEl.value;
    let passExp=/^[A-Za-z0-9]+$/;
    let passwordStatus=false;

    let mobileEl=document.getElementById("mobile");
    let mobilePara=document.getElementById("errorMobile");
    let mobileValue=mobileEl.value;
    let mobileExp=/^[0-9]+$/;
    let mobileStatus=false;



    if(userValue === ""){
        userPara.innerHTML="Please enter your Name";
        userPara.style.color="red";
       
        userStatus=false;
    }
    else {
        if(userValue.match(userExp)){
            userPara.innerHTML="";
            userStatus=true;
        }
        else{
            userPara.innerHTML="Please Enter only Characters ";
            userPara.style.color="red";
            userStatus=false;
        }
       
    }

    if(passwordValue === ""){
        passwordPara.innerHTML="Please Enter Your Password";
        passwordPara.style.color="red";
        passwordStatus=false;
    }
    else{
        if(passwordValue.match(passExp)){
           if(passwordValue.length >= 8){
            passwordPara.innerHTML="";
            passwordStatus=true;

           }
           else{
            passwordPara.innerHTML="Please Enter more than 8 Characters";
            passwordPara.style.color="red";
            passwordStatus=false;
           }
        }
        else{
           passwordPara.innerHTML="Please Enter Correct password";
           passwordPara.style.color="red";
        }
    }

    if(mobileValue === ""){
        mobilePara.innerHTML="Please Enter Your Mobile Number";
        mobilePara.style.color="red";
        mobileStatus=false;
    }
    else{
        if(mobileValue.match(mobileExp)){
           if(mobileValue.length === 10){
            mobilePara.innerHTML="";
            mobileStatus=true;

           }
           else{
            mobilePara.innerHTML="Please Enter 10 digits";
            mobilePara.style.color="red";
            mobileStatus=false;
           }
        }
        else{
           mobilePara.innerHTML="Please Enter only digits";
           mobilePara.style.color="red";
           mobileStatus=false;
        }
    }


    if(userStatus === true && passwordStatus === true && mobileStatus === true){
        return true;
    }
    else{
        return false;
    }
}