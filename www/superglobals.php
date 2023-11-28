<!DOCTYPE html>
<html>
    <head>
        <title>Superglobals</title>
    </head>
    <body>
    <!-- %22%3E%3Cscript%3Ealert('')%3C/script%3E
        "><script>alert('')</script> 
        closes action before it does anything and then runs some script   -->
        <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
            Name: <input type="text" name="nam"/>
            <input type="submit" value="Submit"/>
        </form>
        <?php

            //This is used for security reasons. It is possible for hackers to
            //modify your forms or write code that bypasses your UI completely
            //Accessing a PHP script using the wrong method might be an indication
            //that there is a hack
            if($_SERVER['REQUEST_METHOD']=="POST"){
                $name = $_POST['nam'];
                //empty() checks if the variable is set and if it is null ("", 0, 0.0 "0", []) -> false
                //isset() just checks if it is set
                //is_numeric() checks if a variable is a number or a numeric string
                if(empty($name)){
                    echo "name is empty";
                }else{
                    echo $name;
                }
            }
            // echo $_SERVER['DOCUMENT_ROOT'];
            // echo "<br/>";
            // echo $_SERVER['PHP_SELF'];
            // echo "<br/>";
            // echo $_SERVER['SERVER_NAME'];
            // echo "<br/>";
            // echo $_SERVER['SERVER_METHOD'];
            // echo "<br/>";
            // echo $_GET['nam'];
        ?>
    </body>
</html>