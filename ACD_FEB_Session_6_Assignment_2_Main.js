var response="";
function multiples(){
for(i=1;i<=100;i++)
    {
        
        if(i%3 === 0)
            {
                if(i%5 === 0)
                    {
                        
                        response=response+ i+ " FizzBuzz "+ " <br> ";
                        
                    }
                else
                    {
                        response=response+ i+ " Fizz "+ " <br> ";
                       
                    }
            }
        else if(i%5 === 0)
        {
             response=response+ i+ " Buzz "+ " <br> ";
           
        }
        else
        {
            response=response+ i + " <br> ";
           
        }
        document.getElementById("result").innerHTML=response;
    }
};
multiples();