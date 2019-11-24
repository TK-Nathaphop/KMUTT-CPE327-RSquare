var sequence = 0;
$(document).on("click", ".browse-building", function() {
  $('#img-building').click();
  $('#img-building').change(function(e) {
    var fileName = e.target.files[0].name;
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
  $('#img-blueprint').click();
  $('#img-blueprint').change(function(e) {
    var fileName = e.target.files[0].name;
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

$(document).on("click", "#add-floor", function() {
  $('#floor-template').append('<div class="row"> <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> <div class="row shadow p-3 mb-3 bg-white rounded"> <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"> <div class="form-group"> <label for="Floor"><span class="vdark-blue"><b>Floor</b></span></label> <input type="text" class="form-control" id="Floor" placeholder="Floor G"> </div> <div class="form-group"> <input type="file" id="img-blueprint" name="img[]" class="file" accept="image/*"> <label for="Blueprint"><span class="vdark-blue"><b>Blueprint</b></span></label> <div class="input-group"> <input type="text" class="form-control" disabled placeholder="Upload File" id="file-blueprint"> <div class="input-group-append"> <button type="button" id="btn" class="browse-blueprint btn btn-primary">Browse...</button> </div> </div> </div> </div> <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"> <label for="Place"><span class="vdark-blue"><b>Place</b></span></label> <div class="row"> <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"> <h5>Dummy Place</h5> </div> <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"> <a href="#"><span>View details</span></a> </div> </div> <div class="row"> <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> <!-- Button trigger modal --> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-place"> Add Place </button> <!-- Modal --> <div class="modal fade" id="add-place" tabindex="-1" role="dialog" aria-labelledby="add-placeTitle" aria-hidden="true"> <div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title vdark-blue" id="exampleModalLongTitle"><b>Add Place</b></h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body"> <div class="container-fluid"> <div class="row"> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5"> <div class="form-group"> <label for="Place-Name"><span class="vdark-blue"><b>Place Name</b></span></label> <input type="text" class="form-control" id="Place-Name" placeholder="DUMMY ROOM 3"> </div> </div> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5"> <div class="form-group"> <label for="Capacity"><span class="vdark-blue"><b>Capacity</b></span></label> <input type="text" class="form-control" id="Capacity" placeholder="50"> </div> </div> <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"> <div class="form-group"> <p class="vdark-blue" style="padding-top: 80%;">people</p> </div> </div> </div> <div class="row"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Drum_Usage"> <label class="form-check-label" for="Drum Usage"> Drum Usage </label> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Projector"> <label class="form-check-label" for="Projector"> Projector </label> </div> </div> </div> <div class="row"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Microphone"> <label class="form-check-label" for="Microphone"> Microphone </label> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Speaker"> <label class="form-check-label" for="Speaker"> Speaker </label> </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary">Add</button> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> ');
});
$(document).on("click", "#delete-floor", function() {
  alert("Hello! I am an delete-floor");
});