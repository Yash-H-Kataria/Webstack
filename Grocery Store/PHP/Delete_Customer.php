<?php

    include "Connection.php";
    $ID=$_GET["ID"];
    $result=$con->query("Delete from customer_registration where CustomerID=$ID");
    if($result==true)
    {
        echo ('<script> alert("Data Deleted Successfully"); </script>');
        // header("location:ViewCandidates.php");
        ?>
                <script type="text/javascript">
                window.location.href= "Customer_Registration_Using_PHP.php";
                </script>
        <?php
    }
    else
    {
        echo ('<script> alert("Data NOT Deleted Successfully"); </script>');
        echo "$result->error";
        ?>
                <script type="text/javascript">
                window.location.href= "Customer_Registration_Using_PHP.php";
                </script>
        <?php
    }
?>