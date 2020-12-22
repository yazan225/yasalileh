
function validateForm() {

  var a1 = document.getElementById("Subject").value;
  var a2 = document.getElementById("Email").value;
  var a3 = document.getElementById("ID").value;
  var a4 = document.getElementById("URL").value;
  var a5 = document.getElementById("Message").value;

   if (a1 == "") 
   alert("please fill the subject feild ! ");
   
   if (a2 == "") {
       var F1 = "empty" ;
      alert("please fill the email feild !");
    }
    
   if (a3 == "") 
   alert("please fill the id feild !");
   
   if (a4 == "")  {
 var F2 = "empty" ;
     alert("please fill the url feild !");
}

   if (a5 == "") 
   alert("please fill the message feild !");
   
/*

var z1 = document.getElementById("Subject").value;
  var z2 = document.getElementById("Email").value;
  var z3 = document.getElementById("ID").value;
  var z4 = document.getElementById("URL").value;
  var z5 = document.getElementById("Message").value;
  
      if (!isNaN(z1)){
         alert("Please Provide subject as a text");
      }

      if (!isNaN(z5)){
         alert("Please Provide message as a text");
		 
      }
	  
      if (isNaN(z3)){
         alert("Please Provide id as a number");
      }
	 
 
   var str[]=z2;
   var i,x=str.lastIndexOf("@");
   for(i=x;i<str.length;i++)
   document.write(str[i]);
      
  
*/
}
