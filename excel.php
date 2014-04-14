<?php  
    header('Content-Type: application/force-download');  
    header('Content-disposition: attachment; filename=export.xls');  
    header("Pragma: ");  
    header("Cache-Control: ");  
    echo $_REQUEST['hiddendata'];  
?>  