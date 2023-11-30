<!DOCTYPE html>
<html>
    <head>
        <title>Building a calculator</title>
    </head>
    <body>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>">
            <input type="text" name="num1" placeholder="Number one"/><br/>
            <br/>
            <select name="operator">
                <option value="a">+</option>
                <option value="b">-</option>
                <option value="c">*</option>
                <option value="d">/</option>
            </select><br/>
            <br/>
            <input type="text" name="num2" placeholder="Number two"/>
            <input type="submit" value="Calculate"/>
            <input type="button" value="Reset" onclick="clearOut();"/>
        </form>
        
        <p id="result">
        <?php 
            if($_SERVER['REQUEST_METHOD']=="POST"){
                $result;
                $doCalc = true;
                if(filter_input(INPUT_POST, 'num1', FILTER_SANITIZE_NUMBER_FLOAT) &&
                filter_input(INPUT_POST, 'num2', FILTER_SANITIZE_NUMBER_FLOAT, 0)){
                    $num1 = $_POST["num1"];
                    $num2 = $_POST["num2"];
                }else{
                    $doCalc = false;
                    $result = "Fill in all fields!";
                }
                $op = $_POST["operator"];
                if($doCalc){
                    switch($op){
                        case "a":
                            $result = "Result = ". ($num1 + $num2);
                            break;
                        case "b":
                            $result = "Result = ". ($num1 - $num2);
                            break;
                        case "c":
                            $result = "Result = ". ($num1 * $num2);
                            break;
                        case "d":
                            $result = "Result = ". ($num1 / $num2);
                            break;
                    }
                }
                echo($result);
            }
        ?></p>
        <script>
            function clearOut(){
                document.getElementById("result").innerHTML = "";
            }
        </script>
    </body>
</html>