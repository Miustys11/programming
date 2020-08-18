<?php
$number = [1,2,3,4,5,6,3,2,7];
    
    function max_number($array) {
        
        $max = $array[0];
        
        for ($i = 0; $i < count($array); $i++) {
            if ($array[$i] > $max) {
                $max = $array[$i];
            }
        }
        
        return $max;
    }
    
    $num = max_number($number);
    
    echo $num;
?>