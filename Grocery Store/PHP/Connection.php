<?php

$con=new mysqli("localhost","root","","grocerystore");
if(isset($con->connect_error))
{
    die("<div>Connection Not Established with the Database..!!</div>");
}
// $link=mysqli_connect("localhost","root","") or die(mysqli_error($link));
// mysqli_select_db($link,"grocerystore") or die(mysqli_error($link));

?>