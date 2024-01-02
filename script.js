let outscr=document.getElementById("output");
    function display(num){
        outscr.value+=num; 
    }
    function del(){
        outscr.value=outscr.value.slice(0,-1);
    }
    function calculator(){
        try{
            outscr.value=eval(outscr.value);
        }
        catch(err){
        outscr.value="Invalid syntax";
        }
    }
    function clear1(){
        outscr.value="";
    }