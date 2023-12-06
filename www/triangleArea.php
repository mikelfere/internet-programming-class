<!DOCTYPE html>
<html>
    <head>
        <title>Area of a triangle</title>
    </head>
    <body>
        <form method="post" action="<?php echo(htmlspecialchars($_SERVER['PHP_SELF']));?>">
            <table>
                <tr>
                    <td><label for="base">Base of triangle</label></td>
                    <td><input type="text" name="base"/></td>
                </tr>
                <tr>
                    <td><label for="height">Height of triangle</label></td>
                    <td><input type="text" name="height"/></td>
                </tr>
            </table>
            <input type="submit" value="Find the area"/>
            <input type="reset" value="Clear" onclick="cl();"/>
        </form>
        <br/>
        <?php
            if($_SERVER['REQUEST_METHOD']=="POST"){
                $isValid = true;
                $base = filter_input(INPUT_POST, 'base', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                $height = filter_input(INPUT_POST, 'height', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                if(!$base || !$height){
                    $isValid = false;
                    echo("Enter the right type of input");
                }
                if($isValid){
                    $area = ($base * $height) / 2;
                    echo("<p id='area'>". $area. "</p>");
                    // for($i = 0; $i < 5; $i++){
                    //     echo($i. "\n");
                    // }
                }
            }
        ?>
        <script>
            function cl() {
                document.getElementById("area").innerHTML = "";
            }
        </script>
    </body>
</html>