$(document).ready(function(){
           $('#loginTrigger').click(function(){
$('#loginModal').modal();
           });
           $('#registerTrigger').click(function(){
$('#registerModal').modal();
           });     

$("#petsearch").on("keyup", function() {
     var value = $(this).val().toLowerCase();
    $("#petgrid .pet-col").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });           
        });
function filterfree(chkfree) {
        if(chkfree.checked) 
        {
           var value = "free";
          $("#petgrid .pet-col").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
        }
        else
        {
          $("#petgrid .pet-col").show();
        }
    }
 function disableadoptionfee(checkfree) {
        var petfee = document.getElementById("pet-fee");
        petfee.value=0;
        petfee.disabled = !checkfree.checked ? false : true;
        if (!petfee.disabled) {
            petfee.focus();
            petfee.value=null;
        }
    }
function replaceClass(id, oldClass, newClass) {
  var elem =document.getElementById(id);
  
  if ($(elem).hasClass(oldClass)) {
    $(elem).removeClass(oldClass);
    
  }
  $(elem).addClass(newClass);
}

$(function() {
    $(document).on("change",".uploadFile", function()
    {
    		var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return;
 
        if (/^image/.test( files[0].type)){
            var reader = new FileReader(); 
            reader.readAsDataURL(files[0]);
 
            reader.onloadend = function(){ 
uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
            }
        }
      
    });
});