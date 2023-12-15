$(document).ready(function(){
    $("#form1").submit(function()
    {
        var first=$('#form6Example1').val();
        var last=$('#form6Example2').val();
        var email=$('#form6Example3').val();
        var select=$('#form6Example4').val();
        var suggest=$('#form6Example5').val();
        var suggest1=$('#form6Example6').val();
       
        if(first ==""){
            $('#error').html("*Please Enter Your First Name");
            return false;
        }
        else if(last ==""){
            $('#error1').html("*Please Enter Last Name");
            $('#error').html("");
            return false;
        }
        else if(email ==""){
            $('#error2').html("*Please Enter your Address");
            $('#error1').html("");
            $('#error').html("");
            return false;
        }
        else if(select ==""){
            $('#error3').html("*Please Enter your Address");
            $('#error2').html("");
            $('#error1').html("");
            $('#error').html("");
            return false;
        }
        else if(suggest ==""){
            $('#error4').html("*Please fill this box");
            $('#error3').html("");
            $('#error2').html("");
            $('#error1').html("");
            $('#error').html("");
            return false;
        }
        else if(suggest1 ==""){
            $('#error4').html("*Please fill this box");
            $('#error3').html("");
            $('#error2').html("");
            $('#error1').html("");
            $('#error').html("");
            $('#error').html("");
            return false;
        }
        else{
            return true;
        }
    });
});