<script type="text/javascript" language="javascript">
    function ValidateIt() {
      if (document.getElementById('ddlProblemCategory').value == 0) {
           alert("Please fill some value");
           return false;
      }
           return true;
    }
    function DisableIt() {
        if (ValidateIt() == true)
          document.getElementById('btnSaveProblem').disabled = true;
    }  
</script>