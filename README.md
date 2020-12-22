 <!DOCTYPE html>
<html lang="en">
<head>
<script src="jsfile.js"></script>
</head>
<style>

body {
  font-family: Arial, Helvetica, sans-serif;
  float: center;
}

header {
  background-color: black;
  padding: 1px;
  text-align: center;
  font-size: 7px;
  color: white;
  width: 100%;
}

form{
  padding: 4px;
  font-size: 18px;
  margin : 1% 10%;
}

input{
    width: 100%;
    border-style: solid;
    border-color: rgb(0, 200, 255);
    padding: 10px;
    margin : 0% 0%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}


input[type=submit] {
  background-color:rgb(0, 0, 70); 
  color: white;
  border: none;
  border-radius: 22px;
  cursor: pointer;
  width: 13%;
  margin : 10% 43%;
}

input[type=submit]:hover {
  background-color: rgb(0, 0, 40);
}

footer {
  background-color: black;
  padding: 1px;
  text-align: center;
  font-size: 11px;
  color: white;
  float : center;
  width: 100%;
}

textarea{

    border-style: solid;
    border-color: rgb(0, 200, 255);
    padding: 5px;
	width: 100%;
	height: auto;
 }
 
 label{
   width: 100%;
   border-color: rgb(112, 200, 255);
   padding: 4px;
   height: auto;
   width: 230px;
   text-align: center;
 }
 

</style>
<body>
	
	<p><a href="https://yazan225.github.io/">Visit my old page !</a></p>
	
<header>
  <h2>Contact Me</h2>
</header>

 <form name="myForm" method="post" onsubmit="return validateForm()">
    
  <label onsubmit="checkInputIsText()" for="Subject">Subject *</label><br>
  
  <input type="subject" id="Subject" name="Subject" ><br>
 
  <label for="Email">Email *</label><br> 
  
  <input type="email" id="Email" name="Email"><br>
  
  <label for="ID">ID * </label><br> 
  
  <input type="id" id="ID" name="ID"><br>
  
  <label for="URL">URL * </label><br> 
  
  <input type="url" id="URL" name="URL"  ><br>
  
  <label for="message">  Message * </label><br>
   
  <textarea id="message" name="message" style="width:500px; height:200px;" > </textarea>
  
  <input type="submit" value="Submit">
  
 </form>

<footer>
  <h2>@Copy Right 2020</h2>
</footer>
</body>
</html>
