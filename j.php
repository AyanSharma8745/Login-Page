<?php

//sare form ki values ko fetch krne ke liye
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website= $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)) {
   //agar email or message khaali nahi hai to
  if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //agar email valid hai to 
     $reciever = "beautifulworld7744@gmail.com"; //email receiver 
    $subject = "From : $name <$email> "; // name <email dikhega> 
    $body = "name : $Name \n email : $email \n phone : $phone \n website : $website \n message : $message\n\n Regards \n $name"; //msg
    $sender = "From: $email"; //sender ki email
    if(mail($reciever,$subject,$body,$Sender)){
      //mail inbuilt fun hai php ka mail bhejne k liye
    echo "Your message has been sent successfully";
    }else {
      echo "sorry ,failed to send your message";
    }
  } else {
    echo "Enter a valid email address";
  }
} else {
//or agar empty hai to ye msg
  echo "Email and password field is required";
}
?>