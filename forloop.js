// question 1

for(let i=1;i<=10;i++){
    console.log(i)
  }
  
  // question 2
  
  for(let i=1;i<=20;i++){
    if(i%2==0){
      console.log("its even number "+ i)
    }
    else{
      console.log("its odd number "+ i)
    }
  }
  
  // question 4
  
  let sum=0
  for(i=1;i<=50;i++){
    sum=sum+i
  }
  console.log(sum)
  
  // question 5
  
  let fizz=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100]
  
  for(let each in fizz){
    if(each%3==0 && each%5==0){
        console.log("fizzBuzz")
    }
    else if(each%3==0){
      console.log("fizz")
    }
     else if(each%5==0){
      console.log("buzz")
    }
  else{
    console.log(each)
  }
  }
  
  
  // question 8
  
  let a=5
  let vowel="JavaScript is fun"
  
  for(let all of vowel){
    if(all=="a" || all=="e" || all=="i" || all=="o" || all=="u"){
      a=a+all
    }
  }
      console.log("vowels are " + (a.length-1))
      
  // question 9
  
  let value=10
  let star =" \n"
  for(let i=1;i<=value;i++){
    for(let j=1;j<=i;j++){
      star=star+"*"
    }
      star=star+"\n"
  }
  console.log(star)
  
  
  // question 7
     
  for(i=2;i<=5;i++){
    if(i!=1){
      let isprime=true
      for(j=2;j<i;j++){
        if(i%j==0){
          isprime=false
        }
      }
      if(isprime){
        console.log("It is a prime number" + i)
      }
      else{
        console.log("It is not a prime number" + i)
      }
    }
  }
    
  // question 6
      
  let input="Rithin"
  let r = " "
  for(let i=input.length-1;i>=0;i--){
     r=r+input[i]
  }
   console.log(r)
  
  // question 3
  
  let x=prompt("Enter the value")
  
  for(i=1;i<=10;i++){
    console.log(x + " * " + i + " = " + x*i)
  }
   
  //  question 10
   
  let numbers=[1,2,2,3,4,4,5]
  
  for(let n of numbers){
    let count = 0
    for(let m of numbers){
      if(n==m){
        count=count+1
      }
    }
    if(count>1){
      console.log("The duplicate is " + n)
      }
  }
  
  
  
  
  