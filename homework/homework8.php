<!DOCTYPE html>
<html>
    <head>
        <title>America's Bank</title>
        <link rel="stylesheet" href="homework8-style.css"/>
    </head>
    <body>
        <h1>Welcome to America's Bank</h1>
        <p>Please enter the following data</p>
        <form method="post" action="<?php echo(htmlspecialchars($_SERVER['PHP_SELF']));?>">
            <table>
                <tr>
                    <td><label for="name">Name:</label></td>
                    <td><input type="text" name="name" placeholder="Full Name"/></td> 
                </tr>
                <tr>
                    <td><label for="email">Email:</label></td>
                    <td><input type="text" name="email" placeholder="abc@gmail.com"/></td> 
                </tr>
                <tr>
                    <td><label for="amount">Investment Amount:</label></td>
                    <td><input type="text" name="amount" placeholder="Dollar Amount"/></td> 
                </tr>
                <tr>
                    <td><label for="years">Years to invest:</label></td>
                    <td><input type="text" name="years" placeholder="Years"/></td> 
                </tr>
                <tr>
                    <td><label for="rate">Annual Interest Rate:</label></td>
                    <td><input type="text" name="rate" placeholder="Interest Rate"/></td> 
                </tr>
            </table><br/>
            <input type="submit" value="Find Future Value"/><br/>
            <br/>
        </form>
        <?php
            if($_SERVER["REQUEST_METHOD"]=="POST"){
                $isValid = true;
                $name = htmlspecialchars($_POST['name']);
                $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
                $email = filter_var($email, FILTER_VALIDATE_EMAIL);
                $inAmount = filter_input(INPUT_POST, 'amount', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                $years = filter_input(INPUT_POST, 'years', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                $rate = filter_input(INPUT_POST, 'rate', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                if(!$email || !$inAmount || !$years || !$rate){
                    $isValid = false;
                }
                if($isValid){
                    $futureVal = $inAmount*pow((1+$rate), $years*12);
                    // echo($futureVal. "<br>". $inAmount. "<br>". $rate. "<br>". $years. "<br>");
                    echo("<label>Future Value: ");
                    printf("%.2f", $futureVal);
                    echo("</label>");
                }else{
                    echo("<label>Please make sure you have the correct input!</label>");
                }
            }
        ?>
    </body>
</html>