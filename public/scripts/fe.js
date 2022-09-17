





$( "#Account" ).click(  function(){

    
     
    $("#Account").addClass("active")
    $("#Pool").removeClass("active")
    $("#please2").show();
    $("#please").hide()
    Intrest();
   
});

 $( "#Pool" ).click(function(){
 $("#Account").removeClass("active")
 $("#Pool").addClass("active")
 $("#please").show();
 $("#please2").hide()
 

});
 function vipshow(){
     
     $("#vip").show();
     $("#please2").hide()
 }

 function shares_show(){
     
     $("#shares").show();
     $("#please2").hide()
 }

 function close_vip(){
    
     $("#vip").hide();
     $("#please2").show()
     
 }
 function shares_close(){
     
     $("#shares").hide();
     $("#please2").show()
     
 }

 function withdraw() {
     
     $("#withdraw_div").addClass("active");
     $("#record_div").removeClass("active");
     $("#exchange_div").removeClass("active");
     $("#withdraw_div").show();
     $("#exchange_div").hide();
     $("record_div").hide();

 }
 function exchange() {
     
     $("#withdraw_div").removeClass("active");
     $("#record_div").removeClass("active");
     $("#exchange_div").addClass("active");
     $("#exchange_div").show();
     $("#withdraw_div").hide();
     $("record_div").hide();

 }

 function records() {
     
     $("#withdraw_div").removeClass("active");
     $("#record_div").addClass("active");
     $("#exchange_div").removeClass("active");
     $("#record_div").show();
     
     $("#withdraw_div").hide();
     $("#exchange_div").hide();

 }


