const form = document.querySelector('form'),
statusTxt = form.querySelector('.button-area span');
form.onsubmit = (e) => {
  e.preventDefault(); //msg ko rok rha submit hone se
  statusTxt.style.color = '#0d6efd';
  statusTxt.style.display = "block";
 
  let xhr = new XMLHttpRequest(); //naya xhr obj bana 
  xhr.open("POST","j.php" ,true); //post req bhejna hai msg.php naam ki file me ..usi complaint-form folder me new file banani hai msg.php nam ki
  
  
  xhr.onload = () => { //ajax use krna haio
    if(xhr.readyState == 4 && xhr.status == 200) { //readystate 4 or status 200 mtlb koi error nhi hai
      
      let response = xhr.response; //response store kr rhe xhr ka 
      //agar error hua to red me color change ho jayega nhi to form reset ho jayega 
      if(response.indexOf("Email and password field is required") != -1 || response.indexOf("Enter a valid email address") || response.indexOf("sorry ,failed to send your message")) {
       statusTxt.style.color = "red"; 
      }else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000); //status text ko hide kr dega 3 seconds k bad agar message send hua to 
      }

      statusTxt.innerText = response; //response ko statusTxt me display kr do
    }
  } 
  let formData = new FormData(form); //Formdata obj bana
  xhr.send(formData); //FormData obj send krna hai
}