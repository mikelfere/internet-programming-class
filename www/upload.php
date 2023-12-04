<?php
    if(isset($_POST['submit'])){
        $file = $_FILES['file'];
        $fileName = $_FILES['file']['name'];
        $fileTmpName = $_FILES['file']['tmp_name'];
        $fileSize = $_FILES['file']['size'];
        $fileError = $_FILES['file']['error'];
        $fileType = $_FILES['file']['type'];
        //explode is a function that breaks a string into an array
        //it separates it by the separator "."
        $fileExt = explode('.', $fileName);     
        $fileActualExt = strtolower(end($fileExt));
        $allowed = array('jpg', 'jpeg', 'png', 'pdf');
        if(in_array($fileActualExt, $allowed)){
            if($fileError == 0){
                if($fileSize < 10000000){
                    //uniqid() generates a unique ID based on the microtime(current time in microseconds)
                    $fileNameNew = uniqid('', true) . "." . $fileActualExt;
                    $fileDestination = 'uploads/' . $fileNameNew;
                    //if the destination file exists, it will be overwritten
                    move_uploaded_file($fileTmpName, $fileDestination);
                    header("Location:index.php?uploadsuccess");
                }else{
                    echo "too big";
                }
            }else{
                echo "there was an error uploading your file";
            }
        }else{
            echo "you cannot upload files of this type!";
        }
    }
?>