$(document).on("click", ".browse-building", function() {
    // console.log("hello");
    // var file = $(this).parents().find(".file");
    // file.trigger("click");
    $('#img-building').click();
    // console.log(file);
    $('#img-building').change(function(e) {
      var fileName = e.target.files[0].name;
      // console.log(e.target.files[0]);
      $("#file-building").val(fileName);
  
      var reader = new FileReader();
      reader.onload = function(){
        var dataURL = reader.result;
        var output = document.getElementById('preview');
        output.src = dataURL;
      };
      reader.readAsDataURL(e.target.files[0]);
    });
  });
$(document).on("click", ".browse-blueprint", function() {
    // console.log("hello");
    // var file = $(this).parents().find(".file");
    // file.trigger("click");
    $('#img-blueprint').click();
    // console.log(file);
    $('#img-blueprint').change(function(e) {
      var fileName = e.target.files[0].name;
      // console.log(e.target.files[0]);
      $("#file-blueprint").val(fileName);
  
      var reader = new FileReader();
      reader.onload = function(){
        var dataURL = reader.result;
        var output = document.getElementById('preview');
        output.src = dataURL;
      };
      reader.readAsDataURL(e.target.files[0]);
    });
  });