function balancedNum(number)
{
    let str_number = String(number);
    let sumleft = 0;
    let sumright = 0;
    
    while (str_number.length > 2) {
        sumleft += parseInt(str_number.charAt(0));
        sumright += parseInt(str_number.charAt(str_number.length-1));
        
        str_number = str_number.slice(1, str_number.length-1);
    };
    
    return sumleft === sumright ? "Balanced" : "Not Balanced";
}