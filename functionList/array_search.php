<?php
// Your code here!

    $numbers = [1,2,3,4,5,6,3,2,7];
    
    function array_search2($a, $number) {
        
        $index = 0;
        
        foreach ($number as $num) {
            
            if ($num === $a) {
                return $index;
            }
            
            $index++;
        }
        
        return "false";
    }
    
    $n = array_search2(2, $numbers);
    echo $n;
?>
