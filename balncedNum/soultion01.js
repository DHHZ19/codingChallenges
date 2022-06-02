function balancedNum(number){
    const str = String(number);
    let leftTotal = 0, rightTotal = 0;
    for(let i=0; i<(str.length/2)-1 ; i++){
      leftTotal += Number(str[i]);
      rightTotal += Number (str[str.length-1-i]);
    }
    return leftTotal===rightTotal?'Balanced':'Not Balanced';
}
