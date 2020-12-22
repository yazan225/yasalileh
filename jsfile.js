      
	  
	  
	  function validateForm() {
   var x;
   x=true;
  if (document.myForm.Subject.value == "") {
	alert("subject must be filled out");
	x=false;
	}
	  if (document.myForm.Email.value == "") {
	alert("Email must be filled out");
	x=false;
	}
	  if (document.myForm.ID.value == "") {
	alert("ID must be filled out");
	x=false;
	}
	  if (document.myForm.URL.value == "") {
	alert("URL must be filled out");
	x=false;
	}
	  if (document.myForm.message.value == "") {
	alert("message must be filled out");
	x=false;
	}
	
	
    return x;
}

function checkInputIsText1(){
   var valid;
   valid = true;
      if (!isNaN(document.myForm.Subject.value)){
         alert("Please Provide subject as a text");
		 valid=false;
      }
	  return valid;
   }
      function checkInputIsText2(){
   var valid;
   valid = true;
      if (!isNaN(document.myForm.message.value)){
         alert("Please Provide message as a text");
		 valid=false;
      }
	  return valid;
   }

     function checkInputIsNumber(){
   var valid;
   valid = true;
      if (isNaN(document.myForm.ID.value)){
         alert("Please Provide id as a number");
		 valid=false;
      }
	  return valid;
   }
   
   
   function ExtractDomainName (){
   
   var str[]=document.myForm.Email.value;
   var i,x=str.lastIndexOf("@");
   for(i=x;i<str.length;i++){
   document.write(str[i]);
      }
   }


  function IsEmpty() {

      if (document.form.question.value == " ") {
        alert("please fill it! ");
      }
      return;
    }
  

  
  
  
