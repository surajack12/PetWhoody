$(document).ready(function(){
           $('#loginTrigger').click(function(){
$('#loginModal').modal();
           });
           $('#registerTrigger').click(function(){
$('#registerModal').modal();
           });
           $('#btn-free').click(function(){
            
            replaceClass("btn-free","visible","invisible");
            replaceClass("btn-notfree","invisible","visible");
             });
           $('#btn-notfree').click(function(){
            replaceClass("btn-notfree","visible","invisible");
            replaceClass("btn-free","invisible","visible");
           });
        });
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