<!DOCTYPE html>
<html>
    <head>
        <title>Final Exam</title>
        <style>
            body{
                background-color: #AFFF33;
                color: #FF33EC;
            }

            h2{
                font-family: Algerian;
                border: 0.1em dashed;
                text-align: center;
            }
            
            #black-box{
                width: 200px;
                height: 200px;
                background-color: black;
                color: white;
                font-style: italic;
                text-align: center;
                padding-top: 2em;
                margin-left: auto;
                margin-right: auto;
            }

            table{
                width: 100%;
            }

            .td-gr-1{
                width: 60%;
            }

            #td-img, #book-text{
                text-align: center;
            }

            #author{
                font-style: italic;
            }

        </style>
    </head>
    <body>
        <h2>Final Exam 2023</h2>
        <table>
            <tr id="cen-el">
                <td class="td-gr-1"><div id="black-box">For this box you should use an event listener. On click, a new message appears.</div></td>
                <td id="td-img"><p id="book-text">The link for the files<br>in the book we used</p>
                    <a href="https://github.com/funwebdev-3rd-ed"><img src="images/book.jpg"/></a>
                </td>
            </tr>
            <tr>
                <td class="td-gr-1">
                    <form method="post" action="<?php echo(htmlspecialchars($_SERVER['PHP_SELF']))?>">
                        <h3>
                            Enter an integer between 1 and 10<br/>to calculate the factorial:
                        </h3>
                        <label for="num">N:</label>
                        <input type="text" name="num"/><br/>
                        <br/>
                        <input type="submit" name="submit"/><br/>
                        <br/>
                        <input type="reset" value="CLEAR" onclick="clc();"/>
                    </form>
                </td>
                <td>
                    <p id="author">Written by: Mikel Fere</p>
                </td>
            </tr>
        </table>
        <p id="fact">
            <?php
                if($_SERVER["REQUEST_METHOD"] == "POST"){
                    $num = filter_input(INPUT_POST, 'num', FILTER_SANITIZE_NUMBER_INT);
                    if(!$num){
                        echo("Please enter a number!");
                    }else if($num < 1 || $num > 10){
                        echo("Please enter a valid number!");
                    }else{
                        $factorial = 1;
                        $temp = $num;
                        while($temp > 1){
                            $factorial *= $temp;
                            $temp--;
                        }
                        echo("The factorial of ". $num. " is ". $factorial);
                    }
                }
            ?>
        </p>
        <script>
            blackBox = document.getElementById("black-box");
            blackBox.addEventListener("click", 
            e=>{blackBox.style.backgroundColor = "#AFFF33";
                blackBox.style.color = "#FF33EC";
                blackBox.innerHTML = "Happy New Year";});
            function clc(){
                document.getElementById("fact").innerHTML = "";
            }
        </script>
    </body>
</html>