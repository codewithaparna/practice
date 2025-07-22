
let num = Number(prompt("Enter the number of boxes"));
let count=1;

if(num<=12)
{

    while(count<=num)
    {
      document.write(`<div class="root">${count}</div>`);
      count++;
    }
    
}

else{
    document.write(`<h1>"Oops! Please enter a number from 1 to 12."</h1>`);
}

