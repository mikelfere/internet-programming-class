<?php
    //to view escape characters in browser
    //header('Content-Type: text/plain');
    $cars = array(
        array(
            "Volvo\t", 22, 18
        ),
        array(
            "BMW\t", 15, 13
        ),
        array(
            "Saab\t", 5, 2
        ),
        array(
            "Land Rover", 17, 15
        )
    );
    foreach ($cars as $car) {
        echo $car[0]." In Stock: ".$car[1]." Sold: ".$car[2]."<br/>";
    }
    // for($i = 0; $i < 4; $i++){
    //     echo $cars[$i][0]."".$cars[$i][1]."".$cars[$i][2]."<br/>";
    // }
?>