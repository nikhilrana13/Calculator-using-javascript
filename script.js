

function cleardisplay(){
    document.getElementById("display").value = ""
  }
  
  function displaypedekho(value){
    document.getElementById("display").value += value;
  }
  
  function calculateResult(){
    
    try {
      const result = eval(document.getElementById("display").value)
        document.getElementById("display").value = result;
  
    }catch (Error) {
      document.getElementById("display").value = 'error'
    }
    
      
  }