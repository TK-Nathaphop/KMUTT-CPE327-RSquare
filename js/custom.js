$(document).on("click", ".browse", function() {
    // console.log("hello");
    // var file = $(this).parents().find(".file");
    // file.trigger("click");
    $('#img').click();
    // console.log(file);
    $('#img').change(function(e) {
      var fileName = e.target.files[0].name;
      // console.log(e.target.files[0]);
      $("#file").val(fileName);
  
      var reader = new FileReader();
      reader.onload = function(){
        var dataURL = reader.result;
        var output = document.getElementById('preview');
        output.src = dataURL;
      };
      reader.readAsDataURL(e.target.files[0]);
    });
  });