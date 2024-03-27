"use strict"
// form body 
let formBody = document.getElementById("sub-body");
//
let frontIdUpload = document.getElementById("front-id-card");
let fidContainer = document.querySelector("#fid-container");
let errorf = document.getElementById("fid-error");
let fidImageDisplay = document.getElementById("fid-image-display");
//
let bidContainer = document.querySelector("#bid-container");
let errorb = document.getElementById("bid-error");
let bidImageDisplay = document.getElementById("bid-image-display");
let backIdUpload = document.getElementById("back-id-card");
//
let sidContainer = document.querySelector("#sid-container");
let errors = document.getElementById("sid-error");
let sidImageDisplay = document.getElementById("sid-image-display");
let selfieIdUpload = document.getElementById("selfie-id-card");

//form tags
const firstName = document.getElementById("fn"); //required
const lastName = document.getElementById("ln"); //required
const emailAddress = document.getElementById("email"); //required
const homeAddress = document.getElementById("ha"); //required
const phoneNum = document.getElementById("pn"); //required
const nameAgeOfOccupant = document.getElementById("occ");
const Reason = document.getElementById("reas");
const workStatusGroup = document.getElementsByName('work-status');
const maritalStatusGroup = document.getElementsByName('marital-status'); 
const ssn = document.getElementById("ssn"); //required
const kidsGroup = document.getElementsByName("kids");
const petssGroup = document.getElementsByName("pets");
const carGroup = document.getElementsByName("car");
const occupation = document.getElementById("occupation"); //required
const dob = document.getElementById("dob"); //required
const section8AppliGroup = document.getElementsByName('8applicant'); 
const rentToOwnGroup = document.getElementsByName('rent-to-own');
const moveInDate = document.getElementById("dateToMoveIn"); //required
const noOfOccupants = document.getElementById("noOfOccupants"); //required
const checkOutDate = document.getElementById("check-out"); //required
const payBeforeMoveIn = document.getElementsByName('pay-before-moving-in'); 
const paymentMethod = document.getElementsByName('payment-method');
const terms = document.getElementsByName('termsagree')


const  fileHandler = (file, name, type, err, req) => {
    if(type.split("/")[0] !== "image") {
        //file type error
        err.innerText = "please upload an image file";
        return false;
    }
    err.innerText ='';
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        //image and file name
        let imageContainer = document.createElement("figure");
        let img = document.createElement("img");
        img.src = reader.result;
        imageContainer.appendChild(img);
        imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
        req.appendChild(imageContainer);
    };
} ;

//upload Button 
frontIdUpload.addEventListener('change', ()=> {
    fidImageDisplay.innerHTML='';
    Array.from(frontIdUpload.files).forEach((file)=>{
        fileHandler(file, file.name, file.type, errorf, fidImageDisplay);
    });
})
//
backIdUpload.addEventListener('change', ()=> {
    bidImageDisplay.innerHTML='';
    Array.from(backIdUpload.files).forEach((file)=>{
        fileHandler(file, file.name, file.type, errorb, bidImageDisplay);
    });
})
//
selfieIdUpload.addEventListener('change', ()=> {
    sidImageDisplay.innerHTML='';
    Array.from(selfieIdUpload.files).forEach((file)=>{
        fileHandler(file, file.name, file.type, errors, sidImageDisplay);
    });
})



//drag and drop
fidContainer.addEventListener("dragenter", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    fidContainer.classList.add("active");
}, false
);
fidContainer.addEventListener("dragleave", (e) =>{
    e.preventDefault();
    e.stopPropagation();
    fidContainer.classList.remove("active");
}, false);
fidContainer.addEventListener("dragover", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    fidContainer.classList.add("active");
}, false
);
fidContainer.addEventListener("drop", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    fidContainer.classList.remove("active");
    let draggedData = e.dataTransfer;
    let files = draggedData.files;
    fidImageDisplay.innerHTML='';
    Array.from(files).forEach((file)=>{
        fileHandler(file, file.name, file.type, errorf, fidImageDisplay);
    });

}, false
);
//
bidContainer.addEventListener("dragenter", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    bidContainer.classList.add("active");
}, false
);
bidContainer.addEventListener("dragleave", (e) =>{
    e.preventDefault();
    e.stopPropagation();
    bidContainer.classList.remove("active");
}, false);
bidContainer.addEventListener("dragover", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    bidContainer.classList.add("active");
}, false
);
bidContainer.addEventListener("drop", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    bidContainer.classList.remove("active");
    let draggedData = e.dataTransfer;
    let files = draggedData.files;
    bidImageDisplay.innerHTML='';
    Array.from(files).forEach((file)=>{
        fileHandler(file, file.name, file.type, errorb, bidImageDisplay);
    });

}, false
);
//
sidContainer.addEventListener("dragenter", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    sidContainer.classList.add("active");
}, false
);
sidContainer.addEventListener("dragleave", (e) =>{
    e.preventDefault();
    e.stopPropagation();
    sidContainer.classList.remove("active");
}, false);
sidContainer.addEventListener("dragover", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    sidContainer.classList.add("active");
}, false
);
sidContainer.addEventListener("drop", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    sidContainer.classList.remove("active");
    let draggedData = e.dataTransfer;
    let files = draggedData.files;
    sidImageDisplay.innerHTML='';
    Array.from(files).forEach((file)=>{
        fileHandler(file, file.name, file.type, errors, sidImageDisplay);
    });

}, false
);


window.onload = () => {
    errorf.innerText = "";
    errorb.innerText = "";
    errors.innerText = "";
};
//Take data from form
const getCheckedRadio = (groupNode) => {
  let checkedRadio = Array.from(groupNode).find((radio)=>radio.checked);
  return checkedRadio.value;
}




// compile user inputs
const compiler = () => {
  let data = `
  1. <b> First name: </b> ${firstName.value} <br/><br/>
     <b> Last name:  </b> ${lastName.value} <br/><br/>
  2. <b> Email: </b> ${emailAddress.value} <br/><br/>
  3. <b> You current home address. </b> <br/><br/>
     <b> Ans: </b> ${homeAddress.value} <br/><br/>
  4. <b> Phone number: </b> ${phoneNum.value} <br/><br/>
  5. <b> Name and age of occupants moving in, including your self. </b> <br/><br/>
     <b> Ans: </b> ${nameAgeOfOccupant.value} <br/><br/>
  6. <b> Reason for leaving your current home. </b> <br/><br/>
     <b> Ans: </b> ${Reason.value} <br/><br/>
  7. <b> Your work status: </b> ${getCheckedRadio(workStatusGroup)}. <br/><br/>
  8. <b> Marital status: </b> ${getCheckedRadio(maritalStatusGroup)}. <br/><br/>
  9. <b> SSN: </b> ${ssn.value} <br/><br/>
  10. <b> Do you have kids? </b> <br/><br/>
     <b> Ans: </b> ${getCheckedRadio(kidsGroup)} <br/><br/>
  11. <b> Do you have pets? </b> <br/><br/>
     <b> Ans: </b> ${getCheckedRadio(petssGroup)} <br/><br/>
  12. <b> Do you have car? </b> <br/><br/>
     <b> Ans: </b>  ${getCheckedRadio(carGroup)} <br/><br/>
  13. <b> Present Occupation: </b> ${occupation.value}. <br/><br/>
  14. <b> Date of birth: </b>  ${dob.value}. <br/><br/>
  15. <b> Are you a section 8 applicant? </b> <br/><br/>
     <b> Ans: </b> ${getCheckedRadio(section8AppliGroup)} <br/><br/>
  16. <b> Are you interested in rent to own? </b> <br/><br/>
     <b> Ans: </b> ${getCheckedRadio(rentToOwnGroup)} <br/><br/>
  17. <b> When would you like to start staying? </b> <br/><br/>
     <b> Ans: </b> ${moveInDate.value} <br/><br/>
  18. <b> How many people would be staying in the apartment, including yourself? </b> <br/><br/>
     <b> Ans: </b> ${noOfOccupants.value} <br/><br/>
  19. <b> Do you agree to pay the rent before you move in? </b> <br/><br/>
     <b> Ans: </b> ${getCheckedRadio(payBeforeMoveIn)} <br/><br/>
  20. <b> When will you check out? </b> <br/><br/>
     <b> Ans: </b> ${checkOutDate.value} <br/><br/>
  21. <b> Method of payment ($70 to be paid through Cash app, zelle, Apple Pay or Paypal which is refundable) </b> <br/><br/>
     <b> Ans: </b> ${getCheckedRadio(paymentMethod)} <br/><br/>
     <b> Terms & Conditions : ${getCheckedRadio(terms)}`; 
  return data;
}

// checks if user filled the required spaces else displays error

// function to check the file are uploaded
function checkFile(file) {
    if ( file.files.length !== 0 ) return 'filled';
    if (file.files.length == 0) return '';
}
const checkData = () => {
    let loop = [];
    [ 
        [firstName.value, 'priority1' ], 
        [lastName.value, 'priority1' ], 
        [emailAddress.value, 'priority2' ],
        [Reason.value, 'priority3' ],
        [checkFile(frontIdUpload), 'priority4' ],
        [checkFile(backIdUpload), 'priority5' ],
        [checkFile(selfieIdUpload), 'priority6' ],
        [homeAddress.value, 'priority7' ], 
        [phoneNum.value, 'priority8' ], 
        [ssn.value, 'priority9' ], 
        [occupation.value, 'priority10' ], 
        [dob.value, 'priority11' ],
        [noOfOccupants, 'priority12' ],
        [moveInDate, 'priority13' ],
        [checkOutDate, 'priority14' ]
    ].forEach((data)=>{
        let req = document.getElementById(data[1]);

        if( data[0] == '' || data[0] == undefined ) {

            req.style.visibility = 'visible';
            loop.push(false)

        } else if( data[0] !== '' ) {
            req.style.visibility = 'hidden';
            loop.push(true);
        };
    })
    if (loop.includes(false)) {
    //    formBody.scrollTop = 0;
       formBody.scrollTo({top:0, behavior:'smooth'});
       return false;
    }

}

// compiles the image file just as they are added
let frontId ;
let backId ;
let selfieId ;
function compileFile(fileName) {
    let file = event.srcElement.files[0];

    const reader = new FileReader();

    reader.readAsBinaryString(file);
    reader.onload = function () {
        let dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
        let fileCat = {
                name : file.name,
                data : dataUri
            }
         console.log(fileCat);
         if (fileName == 'fd') frontId = fileCat;
         if (fileName == 'bd') backId = fileCat;
         if (fileName == 'sd') selfieId = fileCat;
    }

    reader.onerror = function() {
        console.log('there are some errors');
    }

}
const securityToken = '80ff09f8-6336-4864-989e-834474c8b1b6';
function sendEmail() {
   if ( checkData() !== false ) {
    Email.send({
        SecureToken : securityToken,
        To : 'aliman2952003@gmail.com',
        From : 'aliman2952003@outlook.com',
        Subject : "test mail",
        Body : compiler(),
        Attachments : [
            frontId,
            backId,
            selfieId
        ]
    }).then(
        message => console.log(`Email transaction status ${message=='Ok'?'Success':message}`)
    );
   }
}