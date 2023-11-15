<?php
    $user = "Mikel";
?>
<!doctype html>
<html>
    <head>
        <title>Example from Chapter 12</title>
</head>
<body>
    <h1>Welcome <?php echo $user;?></h1>
    <p>
        The server date is
        <?php 
            echo "<strong>";
            echo date("d/m/y");
            echo "</strong>";
        ?></p>
    </body>
</html>