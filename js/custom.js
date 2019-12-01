/**
 * struct of building
 * {
 *  buildingName: string
 *  buildingImage: sting(filename)
 *  floor:[]
 * }
 * struct of floor
 * {
 *  floorName: string
 *  floorBlueprint: sting(filename)
 *  place:[]
 * }
 * struct of place
 * {
 *  placeName: string
 *  placeCapacity: string
 *  placeDrumUsage: boolean
 *  placeProjector: boolean
 *  placeMicrophone: boolean
 *  placeSpeaker: boolean
 * }
 */

//Start init

//add building
var happenFloor,happenPlace = 0
const building = [];

building.push({
  buildingName: "Dummy building",
  buildingImage: "",
  floor: []
});

//add floor
building
  .find(el => el.buildingName === building[0].buildingName)
  .floor.push({
    floorName: "Dummy floor",
    floorBlueprint: "",
    place: [],
    id:null
  });

//add place
building
  .find(el => el.buildingName === building[0].buildingName)
  .floor.find(el1 => el1.floorName === building[0].floor[0].floorName)
  .place.push({
    placeName: "Dummy place",
    placeCapacity: "50",
    placeDrumUsage: true,
    placeProjector: true,
    placeMicrophone: true,
    placeSpeaker: true,
    id:null
  });

//end init

function pushFloorDefault(
  floorNumber,
  id
) {
  building
    .find(el => el.buildingName === building[0].buildingName)
    .floor.push({
      floorName: "Dummy floor" + floorNumber,
      floorBlueprint: "",
      place: [],
      id:id
    });
}

//function for pushPlace
function pushPlace(
  placeName,
  placeCapacity,
  placeDrumUsage,
  placeProjector,
  placeMicrophone,
  placeSpeaker,
  id
) {
  building
    .find(el => el.buildingName === building[0].buildingName)
    .floor.find(el1 => el1.floorName === building[0].floor[happenFloor].floorName)
    .place.push({
      placeName: placeName,
      placeCapacity: placeCapacity,
      placeDrumUsage: placeDrumUsage,
      placeProjector: placeProjector,
      placeMicrophone: placeMicrophone,
      placeSpeaker: placeSpeaker,
      id:id
    });
}

function pushPlaceDefault(
  floorNumber
) {
  building
    .find(el => el.buildingName === building[0].buildingName)
    .floor.find(el1 => el1.floorName === building[0].floor[floorNumber].floorName)
    .place.push({
      placeName: "Dummy place",
      placeCapacity: "50",
      placeDrumUsage: true,
      placeProjector: true,
      placeMicrophone: true,
      placeSpeaker: true,
      id:null
    });
}

function deletePlace(fromFloor,fromPlace) {
  building
    .find(el => el.buildingName === building[0].buildingName)
    .floor.find(el1 => el1.floorName === building[0].floor[fromFloor].floorName)
    .place.splice(fromPlace, 1)
}

function deleteFloor(floor) {
  const deleteFloor = "#deleteFloor" + floor
  // alert("Hello" + floor);
  $("div").remove(deleteFloor);
  building
    .find(el => el.buildingName === building[0].buildingName)
    .floor.splice(floor, 1)
}

$(document).on("click", ".browse-building", function () {
  $("#img_building").click();
  $("#img_building").change(function (e) {
    var fileName = e.target.files[0].name;
    $("#file_building").val(fileName);
  });
});

function browse_blueprint(floor) {
    $(`#img_blueprint_${floor}`).click();
    $(`#img_blueprint_${floor}`).change(function (e) {
      console.log('browse upload on click', e.target);
      var fileName = e.target.files[0].name;
      $(`#file_blueprint_${floor}`).val(fileName);
    });
}

function DrumUsage(F0P0, itsFloor, itsPlace) {
}

function Projector(F0P0, itsFloor, itsPlace) {
}

function Microphone(F0P0, itsFloor, itsPlace) {
}

function Speaker(F0P0, itsFloor, itsPlace) {
}

function save_detail(F0P0, itsFloor, itsPlace) {
  var my_Place_Name = `#Place_NameF${happenFloor}P0`;
  var up_save_h5 = `#h5F${happenFloor}P${happenPlace}`;
  my_Place_Name = `#Place_NameF${happenFloor}P0`
  my_Capacity = `#CapacityF${happenFloor}P0`
  my_DrumUsage = `#DrumUsageF${happenFloor}P0`
  my_Projector = `#ProjectorF${happenFloor}P0`
  my_Microphone = `#MicrophoneF${happenFloor}P0`
  my_Speaker = `#SpeakerF${happenFloor}P0`
  // console.log($("#Place-NameF0P0").val());
  building[0].floor[happenFloor].place[happenPlace].placeName = $(my_Place_Name).val()
  building[0].floor[happenFloor].place[happenPlace].placeCapacity = $(my_Capacity).val()
  building[0].floor[happenFloor].place[happenPlace].placeDrumUsage = $(my_DrumUsage).prop("checked")
  building[0].floor[happenFloor].place[happenPlace].placeProjector = $(my_Projector).prop("checked")
  building[0].floor[happenFloor].place[happenPlace].placeMicrophone = $(my_Microphone).prop("checked")
  building[0].floor[happenFloor].place[happenPlace].placeSpeaker = $(my_Speaker).prop("checked")
  $(up_save_h5).text($(my_Place_Name).val());
}

function delete_detail(F0P0, itsFloor, itsPlace) {
  deletePlace(happenFloor, happenPlace)

  currentFloor = building[0].floor[happenFloor];
  curPlaces = currentFloor.place;
  $(`#placeF${happenFloor}`).html('')

  curPlaces.forEach((e, i) => {

    $(`#placeF${happenFloor}`).append(
      `<div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h5 id = "h5F${happenFloor}P${i}">${e.placeName}</h5>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <a href = "#"
            onclick = "${`View_Details('F${happenFloor}P${i}','${happenFloor}','${i}')`}"
            id = "View_DetailsF${happenFloor}P${i}" >
              <span class="dark-blue" data-toggle="modal"
                data-target="#add_place_popup_F${happenFloor}">View details</span>
            </a>
          </div>
        </div>`
    )
  });
}

function View_Details(F0P0, itsFloor, itsPlace) {
  let my_add_place,my_delete_place,my_save_place
  happenFloor = itsFloor
  happenPlace = itsPlace
  const curPlaces = building[0].floor[itsFloor].place[itsPlace]
  my_add_place = "#add_placeF" + itsFloor;
  my_save_place = "#save_placeF" + itsFloor
  my_delete_place = "#delete_placeF" + itsFloor
  $(my_save_place).css({
    display: "block"
  });
  $(my_delete_place).css({
    display: "block"
  });
  $(my_add_place).css({
    display: "none"
  });
  my_ModalTitle = `#ModalTitleF${itsFloor}P0`
  my_Place_Name = `#Place_NameF${itsFloor}P0`
  my_Capacity = `#CapacityF${itsFloor}P0`
  my_DrumUsage = `#DrumUsageF${itsFloor}P0`
  my_Projector = `#ProjectorF${itsFloor}P0`
  my_Microphone = `#MicrophoneF${itsFloor}P0`
  my_Speaker = `#SpeakerF${itsFloor}P0`
  $(my_ModalTitle).text("Edit Place");
  $(my_Place_Name).val(curPlaces.placeName)
  $(my_Capacity).val(curPlaces.placeCapacity)
  $(my_DrumUsage).prop("checked", curPlaces.placeDrumUsage)
  $(my_Projector).prop("checked", curPlaces.placeProjector)
  $(my_Microphone).prop("checked", curPlaces.placeMicrophone)
  $(my_Speaker).prop("checked", curPlaces.placeSpeaker)
}

function add_place(floor) {
  happenFloor = floor
  my_Place_Name = `#Place_NameF${floor}P0`
  my_Capacity = `#CapacityF${floor}P0`
  my_DrumUsage = `#DrumUsageF${floor}P0`
  my_Projector = `#ProjectorF${floor}P0`
  my_Microphone = `#MicrophoneF${floor}P0`
  my_Speaker = `#SpeakerF${floor}P0`
  pushPlace(
    $(my_Place_Name).val(),
    $(my_Capacity).val(),
    $(my_DrumUsage).prop("checked"),
    $(my_Projector).prop("checked"),
    $(my_Microphone).prop("checked"),
    $(my_Speaker).prop("checked"),
    null
  )
  const currentFloor = building[0].floor[floor];
  const curPlaces = currentFloor.place;

  $(`#placeF${floor}`).html('')

  curPlaces.forEach((e, i) => {

    $(`#placeF${floor}`).append(
      `<div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h5 id = "h5F${floor}P${i}">${e.placeName}</h5>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <a href = "#"
            onclick = "${`View_Details('F${floor}P${i}','${floor}','${i}')`}"
            id = "View_DetailsF${floor}P${i}" >
              <span class="dark-blue" data-toggle="modal"
                data-target="#add_place_popup_F${floor}">View details</span>
            </a>
          </div>
        </div>`
    )
  });
}

function add_place_edit(floor,place,capacity,drum,projector,microphone,speaker,id) {
  happenFloor = floor;
  pushPlace(place,capacity,drum,projector,microphone,speaker,id)
  const currentFloor = building[0].floor[floor];
  const curPlaces = currentFloor.place;

  $(`#placeF${floor}`).html('')

  curPlaces.forEach((e, i) => {

    $(`#placeF${floor}`).append(
      `<div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h5 id = "h5F${floor}P${i}">${e.placeName}</h5>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <a href = "#"
            onclick = "${`View_Details('F${floor}P${i}','${floor}','${i}')`}"
            id = "View_DetailsF${floor}P${i}" >
              <span class="dark-blue" data-toggle="modal"
                data-target="#add_place_popup_F${floor}">View details</span>
            </a>
          </div>
        </div>`
    )
  });
}

function add_place_popup_btn(floor) {
  happenFloor = floor
  $("#ModalTitleF0P0").text("Add Place");
  my_add_place = "#add_placeF" + floor
  my_save_place = "#save_placeF" + floor
  my_delete_place = "#delete_placeF" + floor
  $(my_add_place).css({
    display: "block"
  });
  $(my_delete_place).css({
    display: "none"
  });
  $(my_save_place).css({
    display: "none"
  });
}

function add_floor() {
  
  pushFloorDefault(building[0].floor.length,null)
  const willBeFloor = (building[0].floor.length) - 1;
  const currentFloor = building[0].floor[willBeFloor];
  pushPlaceDefault(willBeFloor,null)
  const curPlaces = currentFloor.place;
  // alert("This is floor ");
  $("#floor-template").append(
`<div class="row nothing" id="deleteFloor${willBeFloor}">
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div class="row shadow p-3 mb-3 bg-white rounded">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div class="form-group">
          <label for="Floor${willBeFloor}"><span class="dark-blue"><b>Floor</b></span></label>
          <input type="text" class="form-control" id="Floor${willBeFloor}" placeholder="Floor G" name="Floor${willBeFloor}" />
        </div>
        <div class="form-group">
          <input type="file" id="img_blueprint_${willBeFloor}" name="img[]" class="file" accept="image/*" />
          <label for="Blueprint"><span class="dark-blue"><b>Blueprint</b></span></label>
          <div class="input-group">
            <input type="text" class="form-control" disabled placeholder="Upload File" id="file_blueprint_${willBeFloor}" />
            <div class="input-group-append">
              <button onclick="browse_blueprint('${willBeFloor}')" type="button" id="btn" class="browse-blueprint btn btn-dark-blue">
                Browse...
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label for="Place"><span class="dark-blue"><b>Place</b></span></label>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="placeF${willBeFloor}">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <h5 id="h5F${willBeFloor}P0">Dummy Place</h5>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                <a href="#" onclick="View_Details('F${willBeFloor}P0','${willBeFloor}','0')" id="View_DetailsF${willBeFloor}P0">
                  <span class="dark-blue" data-toggle="modal" data-target="#add_place_popup_F${willBeFloor}">View details</span>
                </a>
              </div>
            </div>

          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <!-- Button trigger modal -->
            <button onclick="add_place_popup_btn('${willBeFloor}')" type="button" class="btn btn-dark-blue" data-toggle="modal" data-target="#add_place_popup_F${willBeFloor}" id="add_place_popup_btn_F${willBeFloor}">
              Add Place
            </button>

            <!-- Modal -->
            <div class="modal fade" id="add_place_popup_F${willBeFloor}" tabindex="-1" role="dialog" aria-labelledby="add_place_popup_F${willBeFloor}_Title" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title vdark-blue">
                      <b id="ModalTitleF${willBeFloor}P0" style="padding-left: 1px;">Add Place</b>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                          <div class="form-group">
                            <label for="Place_NameF${willBeFloor}P0"><span class="dark-blue"><b>Place
                                  Name</b></span></label>
                            <input type="text" class="form-control" id="Place_NameF${willBeFloor}P0" placeholder="Dummy place" name="Place_NameF${willBeFloor}P0" />
                          </div>
                        </div>
                        <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                          <div class="form-group">
                            <label for="Capacity"><span class="dark-blue"><b>Capacity</b></span></label>
                            <input type="text" class="form-control" id="CapacityF${willBeFloor}P0" placeholder="50" />
                          </div>
                        </div>
                        <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                          <div class="form-group">
                            <p class="vdark-blue" style="padding-top: 80%;">
                              people
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <div class="form-check">
                            <input onclick="DrumUsage('F${willBeFloor}P0','${willBeFloor}','0')" class="form-check-input" type="checkbox" value="1" id="DrumUsageF${willBeFloor}P0" name="DrumUsageF${willBeFloor}P0"/>
                            <label class="form-check-label" for="DrumUsageF${willBeFloor}P0">
                              Drum Usage
                            </label>
                          </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <div class="form-check">
                            <input onclick="Projector('F${willBeFloor}P0','${willBeFloor}','0')" class="form-check-input" type="checkbox" value="1" id="ProjectorF${willBeFloor}P0" name="ProjectorF${willBeFloor}P0"/>
                            <label class="form-check-label" for="ProjectorF${willBeFloor}P0">
                              Projector
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <div class="form-check">
                            <input onclick="Microphone('F${willBeFloor}P0','${willBeFloor}','0')" class="form-check-input" type="checkbox" value="1" id="MicrophoneF${willBeFloor}P0" name="MicrophoneF${willBeFloor}P0" />
                            <label class="form-check-label" for="MicrophoneF${willBeFloor}P0">
                              Microphone
                            </label>
                          </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <div class="form-check">
                            <input onclick="Speaker('F${willBeFloor}P0','${willBeFloor}','0')" class="form-check-input" type="checkbox" value="1" id="SpeakerF${willBeFloor}P0" name="SpeakerF${willBeFloor}P0" />
                            <label class="form-check-label" for="SpeakerF${willBeFloor}P0">
                              Speaker
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button onclick="add_place('${willBeFloor}')" type="button" class="btn btn-dark-blue" id="add_placeF${willBeFloor}" data-dismiss="modal" style="display: block;">
                      <span id="add_place_text_F${willBeFloor}">Add</span>
                    </button>
                    <button onclick="delete_detail('F${willBeFloor}P0','${willBeFloor}','0')" type="button" class="btn btn-outline-dark-blue" id="delete_placeF${willBeFloor}" data-dismiss="modal" style="display: block;">
                      <span id="add_place_text_F${willBeFloor}">Delete</span>
                    </button>
                    <button onclick="save_detail('F${willBeFloor}P0','${willBeFloor}','0')" type="button" class="btn btn-dark-blue" id="save_placeF${willBeFloor}" data-dismiss="modal" style="display: block;">
                      <span id="add_place_text_F${willBeFloor}">Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
        <button type="button" onclick="deleteFloor('${willBeFloor}')" class="close" name="deleteFloor${willBeFloor}" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</div>`);
}

function init_edit()
{
  deleteFloor(0);
}

function add_floor_edit(id)
{
  pushFloorDefault(building[0].floor.length,id);
  console.log(building[0].floor.length)
  const willBeFloor = (building[0].floor.length-1);
  $("#floor-template").append(
`<div class="row nothing" id="deleteFloor${willBeFloor}">
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div class="row shadow p-3 mb-3 bg-white rounded">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div class="form-group">
          <label for="Floor${willBeFloor}"><span class="dark-blue"><b>Floor</b></span></label>
          <input type="text" class="form-control" id="Floor${willBeFloor}" placeholder="Floor G" name="Floor${willBeFloor}" />
        </div>
        <div class="form-group">
          <input type="file" id="img_blueprint_${willBeFloor}" name="img[]" class="file" accept="image/*" />
          <label for="Blueprint"><span class="dark-blue"><b>Blueprint</b></span></label>
          <div class="input-group">
            <input type="text" class="form-control" disabled placeholder="Upload File" id="file_blueprint_${willBeFloor}" />
            <div class="input-group-append">
              <button onclick="browse_blueprint('${willBeFloor}')" type="button" id="btn" class="browse-blueprint btn btn-dark-blue">
                Browse...
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label for="Place"><span class="dark-blue"><b>Place</b></span></label>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="placeF${willBeFloor}">
            
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <!-- Button trigger modal -->
            <button onclick="add_place_popup_btn('${willBeFloor}')" type="button" class="btn btn-dark-blue" data-toggle="modal" data-target="#add_place_popup_F${willBeFloor}" id="add_place_popup_btn_F${willBeFloor}">
              Add Place
            </button>

            <!-- Modal -->
            <div class="modal fade" id="add_place_popup_F${willBeFloor}" tabindex="-1" role="dialog" aria-labelledby="add_place_popup_F${willBeFloor}_Title" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title vdark-blue">
                      <b id="ModalTitleF${willBeFloor}P0" style="padding-left: 1px;">Add Place</b>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                          <div class="form-group">
                            <label for="Place_NameF${willBeFloor}P0"><span class="dark-blue"><b>Place
                                  Name</b></span></label>
                            <input type="text" class="form-control" id="Place_NameF${willBeFloor}P0" placeholder="Dummy place" name="Place_NameF${willBeFloor}P0" />
                          </div>
                        </div>
                        <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                          <div class="form-group">
                            <label for="Capacity"><span class="dark-blue"><b>Capacity</b></span></label>
                            <input type="text" class="form-control" id="CapacityF${willBeFloor}P0" placeholder="50" />
                          </div>
                        </div>
                        <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                          <div class="form-group">
                            <p class="vdark-blue" style="padding-top: 80%;">
                              people
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <div class="form-check">
                            <input onclick="DrumUsage('F${willBeFloor}P0','${willBeFloor}','0')" class="form-check-input" type="checkbox" value="1" id="DrumUsageF${willBeFloor}P0" name="DrumUsageF${willBeFloor}P0"/>
                            <label class="form-check-label" for="DrumUsageF${willBeFloor}P0">
                              Drum Usage
                            </label>
                          </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <div class="form-check">
                            <input onclick="Projector('F${willBeFloor}P0','${willBeFloor}','0')" class="form-check-input" type="checkbox" value="1" id="ProjectorF${willBeFloor}P0" name="ProjectorF${willBeFloor}P0"/>
                            <label class="form-check-label" for="ProjectorF${willBeFloor}P0">
                              Projector
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <div class="form-check">
                            <input onclick="Microphone('F${willBeFloor}P0','${willBeFloor}','0')" class="form-check-input" type="checkbox" value="1" id="MicrophoneF${willBeFloor}P0" name="MicrophoneF${willBeFloor}P0" />
                            <label class="form-check-label" for="MicrophoneF${willBeFloor}P0">
                              Microphone
                            </label>
                          </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                          <div class="form-check">
                            <input onclick="Speaker('F${willBeFloor}P0','${willBeFloor}','0')" class="form-check-input" type="checkbox" value="1" id="SpeakerF${willBeFloor}P0" name="SpeakerF${willBeFloor}P0" />
                            <label class="form-check-label" for="SpeakerF${willBeFloor}P0">
                              Speaker
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button onclick="add_place('${willBeFloor}')" type="button" class="btn btn-dark-blue" id="add_placeF${willBeFloor}" data-dismiss="modal" style="display: block;">
                      <span id="add_place_text_F${willBeFloor}">Add</span>
                    </button>
                    <button onclick="delete_detail('F${willBeFloor}P0','${willBeFloor}','0')" type="button" class="btn btn-outline-dark-blue" id="delete_placeF${willBeFloor}" data-dismiss="modal" style="display: block;">
                      <span id="add_place_text_F${willBeFloor}">Delete</span>
                    </button>
                    <button onclick="save_detail('F${willBeFloor}P0','${willBeFloor}','0')" type="button" class="btn btn-dark-blue" id="save_placeF${willBeFloor}" data-dismiss="modal" style="display: block;">
                      <span id="add_place_text_F${willBeFloor}">Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
        <button type="button" onclick="deleteFloor('${willBeFloor}')" class="close" name="deleteFloor${willBeFloor}" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</div>`);
}

function sendAll(select) {
  willBeFloor = (building[0].floor.length);
  updateData();
  if(select == 1)
    sendJSONAdd();
  else
    sendJSONEdit();
  sendIMG(willBeFloor);
}

function sendIMG(numberFloor) {
  let myNumberFloor = numberFloor;
  let img_blueprint_id
  console.log("img send", myNumberFloor);
  const formData = new FormData();
  const img_building = document.getElementById("img_building").files[0];
  // const img_blueprint_0 = document.getElementById("img_blueprint_0").files[0];
  formData.append("myNumberFloor", myNumberFloor);
  formData.append("img_building", img_building);
  
  for (let index = 0; index < myNumberFloor; index++) {
    img_blueprint_id = "img_blueprint_" + index
    formData.append(img_blueprint_id, document.getElementById(img_blueprint_id).files[0]);
  }

  fetch("uploadfile.php", {
    method: "POST",
    body: formData
  }).then(async res => {
    //   debugging
    const data = await res.text();
    console.log("img res", data);
  });
}

function sendJSONAdd() {
  const Building_Name0 = $("#Building_Name0").val();
  const Floor0 = $("#Floor0").val();
  const DrumUsageF0P0 = $("#DrumUsageF0P0").prop("checked");
  fetch("add_building.php", {
    method: "POST",
    body: JSON.stringify(
      building
    )
  }).then(async res => {
    //   debugging
    const data = await res.text();
    console.log("server res" + data);
    location.replace("Adminpage.html");
  });
}

function sendJSONEdit() {
  const Building_Name0 = $("#Building_Name0").val();
  const Floor0 = $("#Floor0").val();
  const DrumUsageF0P0 = $("#DrumUsageF0P0").prop("checked");
  fetch("edit_building.php", {
    method: "POST",
    body: JSON.stringify(
      building
    )
  }).then(async res => {
    //   debugging
    const data = await res.text();
    console.log("server res" + data);
    location.replace("Adminpage.html");
  });
}

function updateData() {
  const floorTemplate = 'Floor'
  const blueprintTemplate = 'file_blueprint_'
  const n = building[0].floor.length
  const floor = building[0].floor
  let container = document.getElementById('floor-template');
  const mappedFloor = floor.map((e, i) => {
    return {
      ...e,
      floorName: document.getElementById(floorTemplate + i).value,
      floorBlueprint: $("#" + blueprintTemplate + i).val()
    }
  })
  building[0].floor = mappedFloor
  building[0].buildingName = document.getElementById('Building_Name0').value
  building[0].buildingImage = $("#file_building").val()
}

function DeleteData(building_id)
{
  fetch("deleteBuilding.php", {
    method: "POST",
    body: JSON.stringify(
      building_id
    )
  }).then(async res => {
    //   debugging
    const data = await res.text();
    console.log("server res" + data);
    location.replace("Adminpage.html");
  });
}