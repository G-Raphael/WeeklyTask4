//counter functions
var countNumber = document.getElementById("countN").innerHTML = 0; 
function increase(countN)
        {
        countNumber++; 
        document.getElementById("countN").innerHTML = countNumber;
        if (countNumber>0) {
            document.getElementById('countN').style.color = 'green';
        }
        else if (countNumber==0) {
            document.getElementById('countN').style.color = 'black';
        }
        else {
            document.getElementById('countN').style.color = 'red';
        }
        //document.getElementById('countN').style.color = 'green';
        //return;
    }
        
    

function decrease(countN){
        countNumber--;    
        document.getElementById("countN").innerHTML = countNumber;
        if (countNumber<0) {
            document.getElementById('countN').style.color = 'red';
        }
        else if (countNumber==0) {
            document.getElementById('countN').style.color = 'black';
        }
        else {
            document.getElementById('countN').style.color = 'green';
        }
       //return;
    };

function reset(countN){
    countNumber = 0;    
    document.getElementById("countN").innerHTML = countNumber;
    document.getElementById('countN').style.color = 'black';
    //return;
};
/*if ( Document.getElementById("countN").innerHTML==0);{
    Document.getElementById("countN").innerHTML.style.color = 'red';
};
*/





 