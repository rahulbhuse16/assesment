function pattern(n){
    var sum=0;
    var ld=0;
    while(n!=0){
        ld=n%10;
        sum +=ld;
        n=Math.floor(n/10);
    
    }
    for(var i=1;i<=sum;i++){
        if(i % 20==0){
            console.log("FizzBuzz");
        }
        else if(i % 5==0){
            console.log("Buzz");
        }
        else if((i % 4==0)){
            console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }
}
pattern(7666054838)