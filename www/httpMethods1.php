<!DOCTYPE html>
<html>
<head>
    <title>Another php</title>
</head>
<body>
    <form method="post" action=<?php echo($_SERVER["PHP_SELF"]);?> >
        <input type="number" name="num01"/><br/>
        <br/>
        <button>Calculate</button>
    </form>
</body>
</html>