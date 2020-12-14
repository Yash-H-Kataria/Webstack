<?php
    include "Connection.php";

    $Name="";
    $EmailID="";
    $Gender="";
    $Address="";
    $Phone="";
    $Username="";
    $ID="";
    if(isset($_GET["ID"]))
    {
        $ID=$_GET["ID"];
        $result=$con->query("Select * from customer_registration where CustomerID=$ID");
        if($result==true)
        {
            while($Value=$result->fetch_assoc())
            {
                $Name=$Value["Name"];
                $EmailID=$Value["EmailID"];
                $Gender=$Value["Gender"];
                $Address=$Value["Address"];
                $Phone=$Value["Contact"];
                $Username=$Value["Username"];
            }
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Y-Mart Grocery Store - Customer Registration Using PHP</title>
    <link rel="stylesheet" href="../css/bootstrap.css" />
    <link rel="stylesheet" href="../css/MyStyle.css" />
    <link rel="stylesheet" href="../fonts/glyphicons-halflings-regular.svg" />
</head>

<body>
    <header>
        <nav>
            <nav id="header-nav" class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <div class="navbar-brand pull-left">
                            <a href="index.html">
                                <h1>Y-Mart</h1>
                            </a>
                        </div>

                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#collapsable-nav" aria-expanded="false">
                            <span class="sr-only">Toggle Navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <div id="collapsable-nav" class="collapse navbar-collapse">
                        <ul id="nav-list" class="nav navbar-nav navbar-right">
                            <li>
                                <a href="../index.html">
                                    <span class="glyphicon glyphicon-home"></span><br class="hidden-xs" />
                                    Home</a>
                                <hr class="visible-xs" />
                            </li>
                            <li>
                                <a href="../products.html">
                                    <span class="glyphicon glyphicon-th"></span><br class="hidden-xs" />
                                    Products</a>
                                <hr class="visible-xs" />
                            </li>
                            <li>
                                <a href="../aboutus.html">
                                    <span class="glyphicon glyphicon-bookmark"></span><br class="hidden-xs" />
                                    About Us</a>
                                <hr class="visible-xs" />
                            </li>
                            <li>
                                <a href="../login.html">
                                  <span class="glyphicon glyphicon-user "></span><br class="hidden-xs"> Account</a>
                                <hr class="visible-xs" />
                              </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    </header>

    <section class="regForm">
        <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7" >
            <?php

                $result=$con->query("Select * from customer_registration");
                if($result==true)
                {
                   echo "<h2 style='margin-top:10%;text-align:center;color:#e9322e;'>Customer Details</h2><br/><div class='Customerrecordtable'>
                   <table border='2'>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Contact No</th>
                            <th>Username</th>
                        </tr>";
                    while($Value=$result->fetch_assoc())
                    {
                        echo '<tr>';
                        echo '<td><a href="Customer_Registration_Using_PHP.php?ID='.$Value["CustomerID"].'">Update</a></td>';
                        echo "<td>".$Value["CustomerID"]."</td>";
                        echo "<td>".$Value["Name"]."</td>";
                        echo "<td>".$Value["EmailID"]."</td>";
                        echo "<td>".$Value["Gender"]."</td>";
                        echo "<td>".$Value["Address"]."</td>";
                        echo "<td>".$Value["Contact"]."</td>";
                        echo "<td>".$Value["Username"]."</td>";
                        echo '<td><a href="Delete_Customer.php?ID='.$Value["CustomerID"].'">Delete</a></td>';
                        echo "</tr>";

                    }    
                    echo "</table></div>";     
                }
                else
                {
                    echo "<div style='color: white;margin-top: 5%;font-size:40px;'>No Data Have Been Inserted</div>";
                }
            ?>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" style="background-color: white;border-radius: 10px;width: 38%; margin-top: 2%;margin-left: 50px;" >
            <form action="" method="POST">
                <table>
                    <tr style="visibility: collapse;">
                        <th>Customer ID</th>
                        <td>
                            <input type="text" id="CustomerID" name="CustomerID" value="<?php echo $ID; ?>" />
                        </td>
                    </tr>
                    <tr>
                        <th>Full Name</th>
                        <td>
                            <input type="text" id="Name" name="Name" placeholder="Enter Full Name" value="<?php echo $Name; ?>"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Email ID</th>
                        <td>
                            <input type="text" id="Email" name="Email" placeholder="Enter Email ID" value="<?php echo $EmailID; ?>"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>
                            <input type="radio" id="Male" name="Gender" value="Male" <?php if($Gender=='Male'){echo 'checked';} ?> />
                            <label for="Male">Male</label>
                            <input type="radio" id="Female" name="Gender" value="Female" <?php if($Gender=='Female'){echo 'checked';} ?>/>
                            <label for="Female">Female</label>
                            <input type="radio" id="Transgender" name="Gender" value="Transgender" <?php if($Gender=='Transgender'){echo 'checked';} ?>/>
                            <label for="Transgender">Transgender</label>
                        </td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>
                            <textarea id="Address" name="Address" placeholder="Enter Address"><?php echo $Address; ?></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>Contact No.</th>
                        <td>
                            <input type="text" id="Phone" name="Phone" placeholder="Enter Contact No" value="<?php echo $Phone; ?>" />
                        </td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>
                            <input type="text" id="Username" name="Username" placeholder="Enter Username" value="<?php echo $Username; ?>" />
                        </td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>
                            <input type="password" id="Password" name="Password" />
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-left: 25%;">
                            <button style="
                                font-size: 25px;
                                padding: 10px;
                                background-color: #e9322e;
                                color: #fce786;" type="submit" enabled id="Insert" name="btnInsert">
                                Insert
                            </button>
                        </td>
                        <td style="padding-left: 25%;">
                            <button style="
                                font-size: 25px;
                                padding: 10px;
                                background-color: #e9322e;
                                color: #fce786;" type="submit" id="Update" name="btnUpdate">
                                Update
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </section>
    <?php
        
        if(isset($_POST["btnInsert"]))
        {
            $NewName=$_POST["Name"];
            $NewEmailID=$_POST["Email"];
            $NewGender=$_POST["Gender"];
            $NewAddress=$_POST["Address"];
            $NewPhone=$_POST["Phone"];
            $NewUsername=$_POST["Username"];
            $NewPassword=$_POST["Password"];
            
            if($_POST["Password"] != "")
            {
                $result=$con->query("Insert into customer_registration(Name, EmailID, Gender, Address, Contact, Username, Password) values('$NewName','$NewEmailID','$NewGender','$NewAddress','$NewPhone','$NewUsername','$NewPassword')");

                if($result==true)
                {
                    echo('<script> alert("Data Inserted Successfully"); </script>');
                    // header("Location: http://www.example.com/another-page.php");
                    // exit();
                    ?>
                    <script type="text/javascript">
                    window.location.href= window.location.href;
                    </script>
                    
                    <?php
                }
                else
                {
                    echo ('<script>alert("Data NOT Inserted Successfully"); </script>');
                    echo $con->error;
                }
                //  mysqli_query($link,"Insert into customer_registration values(NULL,'$_POST[Name]','$_POST[Email]','Male','$_POST[Address]','$_POST[Phone]','$_POST[Username]','$_POST[Password]');");
            
            }
        }
        else if(isset($_POST["btnUpdate"]))
        {
            $NewName=$_POST["Name"];
            $NewEmailID=$_POST["Email"];
            $NewGender=$_POST["Gender"];
            $NewAddress=$_POST["Address"];
            $NewPhone=$_POST["Phone"];
            $NewUsername=$_POST["Username"];
            $NewPassword=$_POST["Password"];

            $result=$con->query("Update customer_registration set Name='$NewName',EmailID='$NewEmailID',Gender='$NewGender',Address='$NewAddress',Contact='$NewPhone',Username='$NewUsername' where CustomerID=$ID");

                if($result==true)
                {
                    echo('<script> alert("Data Updated Successfully"); </script>');
                    // header("Location: http://www.example.com/another-page.php");
                    // exit();
                    ?>
                    <script type="text/javascript">
                    window.location.href= window.location.href;
                    </script>
                    
                    <?php
                }
                else
                {
                    echo ('<script>alert("Data NOT Updated Successfully"); </script>');
                    echo $con->error;
                }
            // mysqli_query($link,"update mca10 set firstname='$_POST[lastname]' where firstname='$_POST[firstname]'");
        }
    
    ?>

    <script src="../js/jquery-3.1.0.min.js"></script>
    <script src="../js/bootstrap.js"></script>
    <!-- <script src="../js/registrationValidation.js"></script> -->
</body>

</html>