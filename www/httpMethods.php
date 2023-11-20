<html>
<head>
    <title>Another php</title>
</head>
<body>
    <!-- Action attribute specifies where to send the form data, where the form is submitted -->
    <!-- The method attribute specifies the http method to be used when submitting the form data -->
    <form method="get">
        Name: <input type="text" name="usern"/><br/>
        <br/>
        <input type="submit" value="Submit"/>
    </form><br/>
    <?php 
        // Get requests remain in the browser history and
        // Get requests can be bookmarked
        // Get requests should never be used when dealing with sensitive data
        // Get requests have length restrictions
        // Get requests are only used to request data, not modify
        
        // $namme = $_GET["usern"];
        // echo("Hello".$namme);

        //isset() returns true if something is in the get method
        if(isset($_GET["usern"])){
            $namme = $_GET["usern"];
            echo("Hello ".$namme);
        }
    ?>
</body>
</html>