let floor = 0; // count number of floor
let place = 0;
let place_name = new Array(200)
let place_capacity = new Array(200)
let myDrumUsage = new Array(200)
let myProjector = new Array(200)
let myMicrophone = new Array(200)
let mySpeaker = new Array(200)

for (var i = 0; i < myDrumUsage.length; i++) {
  myDrumUsage[i] = new Array(200);
  myProjector[i] = new Array(200);
  myMicrophone[i] = new Array(200);
  mySpeaker[i] = new Array(200);
}

var request; // Variable to hold request
$(document).on("click", ".browse-building", function () {
  $('#img-building').click();
  $('#img-building').change(function (e) {
    var fileName = e.target.files[0].name;
    $("#file-building").val(fileName);
  });
});

$(document).on("click", ".browse-blueprint", function () {
  $('#img-blueprint').click();
  $('#img-blueprint').change(function (e) {
    var fileName = e.target.files[0].name;
    $("#file-blueprint").val(fileName);
  });
});

function DrumUsage(F0P0) {
  var DrumUsage = "#DrumUsage" + F0P0
  if ($(DrumUsage).prop("checked") === true)
    $(DrumUsage).val("1")
  else
    $(DrumUsage).val("0")
  // console.log($(DrumUsage).val())
}

function Projector(F0P0) {
  var Projector = "#Projector" + F0P0
  if ($(Projector).prop("checked") === true)
    $(Projector).val("1")
  else
    $(Projector).val("0")
  // console.log($(Projector).val())
}

function Microphone(F0P0) {
  var Microphone = "#Microphone" + F0P0
  if ($(Microphone).prop("checked") === true)
    $(Microphone).val("1")
  else
    $(Microphone).val("0")
  // console.log($(Microphone).val())
}

function Speaker(F0P0) {
  var Speaker = "#Speaker" + F0P0
  if ($(Speaker).prop("checked") === true)
    $(Speaker).val("1")
  else
    $(Speaker).val("0")
  // console.log($(Speaker).val())
}

function save_detail(F0P0) {
  var Place_Name = "#Place_Name" + F0P0
  var h5 = "#h5" + F0P0
  // console.log($("#Place-NameF0P0").val());
  if ($(Place_Name).val() == '')
    $(h5).text('Dummy Place');
  else
    $(h5).text($(Place_Name).val());
}

function View_Details(F0P0) {
  // console.log(F0P0)
  // alert("View_Details" + F0P0)
  $("#save").css({
    'display': 'block'
  });
  $("#add-place").css({
    'display': 'none'
  });
  $("#ModalTitleF0P0").text("Edit Place")
}

$(document).on("click", "#add-place", function () {
  place = place + 1
  place_h5 = "h5F0P" + place
  place_View_Detail = "View_DetailsF0P" + place
  place_onclick = "View_Details('F0P" + place + "')"

  // place_name[200]
  // place_capacity[200]

  // $('#place').append('<div class="row"> <
  //     div class = "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
  //     id = "place" >
  //     <
  //     div class = "row" >
  //     <
  //     div class = "col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" >
  //     <
  //     h5 id =' + place_h5 + '> Dummy Place </h5>
  //     </div> 
  //     <div class = "col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7" >
  //     <
  //     a href = "#"
  //     onclick = ' + place_onclick + ' id = ' + place_View_Detail + '>
  //     <
  //     span class = "dark-blue"
  //     data-toggle = "modal"
  //     data-target = "#add-place-popup" > View details </span> <
  //     /a> <
  //     /div> <
  //     /div> <
  //     /div> <
  //     /div>')
  $('#place').append('<div class="row"> <div class = "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"id = "place" ><div class = "row" ><div class = "col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" ><h5 id =' + place_h5 + '> Dummy Place </h5></div><div class = "col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7" ><a href = "#"onclick = ' + place_onclick + ' id = ' + place_View_Detail + '><span class = "dark-blue"data-toggle = "modal"data-target = "#add-place-popup" > View details </span> </a> </div> </div> </div> </div>')
})

$(document).on("click", "#add-place-popup-btn", function () {
  // $("#add-place-text").text("Add")
  // alert("add-place-popup-btn trig")
  $("#ModalTitleF0P0").text("Add Place")
  $("#add-place").css({
    'display': 'block'
  });
  $("#save").css({
    'display': 'none'
  });
})

$(document).on("click", "#add-floor", function () {
  count = count + 1;
  // alert("This is count " + count);
  $('#floor-template').append('<div class="row nothing" id="deleteFloor1"> <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> <div class="row shadow p-3 mb-3 bg-white rounded"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"> <div class="form-group"> <label for="Floor" ><span class="vdark-blue"><b>Floor</b></span></label > <input type="text" class="form-control" id="Floor" placeholder="Floor G" /> </div> <div class="form-group"> <input type="file" id="img-blueprint" name="img[]" class="file" accept="image/*" /> <label for="Blueprint" ><span class="vdark-blue"><b>Blueprint</b></span></label > <div class="input-group"> <input type="text" class="form-control" disabled placeholder="Upload File" id="file-blueprint" /> <div class="input-group-append"> <button type="button" id="btn" class="browse-blueprint btn btn-primary" > Browse... </button> </div> </div> </div> </div> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5"> <label for="Place" ><span class="vdark-blue"><b>Place</b></span></label > <div class="row"> <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5"> <h5>Dummy Place</h5> </div> <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7"> <a href="#"><span>View details</span></a> </div> </div> <div class="row"> <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" > <!-- Button trigger modal --> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-place" > Add Place </button> <!-- Modal --> <div class="modal fade" id="add-place" tabindex="-1" role="dialog" aria-labelledby="add-placeTitle" aria-hidden="true" > <div class="modal-dialog modal-dialog-centered" role="document" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title vdark-blue" id="exampleModalLongTitle" > <b>Add Place</b> </h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body"> <div class="container-fluid"> <div class="row"> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5" > <div class="form-group"> <label for="Place-Name" ><span class="vdark-blue" ><b>Place Name</b></span ></label > <input type="text" class="form-control" id="Place-Name" placeholder="DUMMY ROOM 3" /> </div> </div> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5" > <div class="form-group"> <label for="Capacity" ><span class="vdark-blue" ><b>Capacity</b></span ></label > <input type="text" class="form-control" id="Capacity" placeholder="50" /> </div> </div> <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" > <div class="form-group"> <p class="vdark-blue" style="padding-top: 80%;" > people </p> </div> </div> </div> <div class="row"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Drum_Usage" /> <label class="form-check-label" for="Drum Usage" > Drum Usage </label> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Projector" /> <label class="form-check-label" for="Projector" > Projector </label> </div> </div> </div> <div class="row"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Microphone" /> <label class="form-check-label" for="Microphone" > Microphone </label> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Speaker" /> <label class="form-check-label" for="Speaker" > Speaker </label> </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal" > Close </button> <button type="button" class="btn btn-primary"> Add </button> </div> </div> </div> </div> </div> </div> </div> <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"> <button type="button" onclick="deleteFloor1()" class="close" name="deleteFloor1" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true">&times;</span> <script> function deleteFloor1() { alert("Hello"); $("div").remove("#deleteFloor1"); } </script> </button> </div> </div> </div> </div> ');
});

$(document).on("click", "#delete-floor", function () {
  $("div").remove(".nothing");
});