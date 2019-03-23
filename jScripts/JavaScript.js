
$(document).ready(function () {

    $.getJSON("json.json", function (json) {
        $("#h5p1").html(json.h5.inner[0]);
        $("#h5p2").html(json.h5.inner[1]);
        $("#h5p3").html(json.h5.inner[2]);
        $("#h5p4").html(json.h5.inner[3]);
        $("#h5p5").html(json.h5.inner[4]);
        $("#h5p6").html(json.h5.inner[5]);
        $("#h5p7").html(json.h5.inner[6]);
    });

  
    $("#page2").hide();

    $("#btn1").click(function () {
        $("#page1").hide();
        $("#page2").show();
    });


    var amountPressed = 0;


    $(".multipleChoices").click(function () {
        if ($(event.target).hasClass('pressed')) {
            $(event.target).css("background-color", "#3B8686");
            $(event.target).css("color", "white");
            $(event.target).removeClass('pressed')
            amountPressed--;
        }

        else {
            $(event.target).css("background-color", "white");
            $(event.target).css("color", "black");
            $(event.target).addClass('pressed');
            amountPressed++;  
        }

        if (amountPressed == 4) {
            $(event.target).css("background-color", "#3B8686");
            $(event.target).css("color", "white");
            $(event.target).removeClass('pressed');
            amountPressed = 3;
            alert("בחרת בכמות המקסימלית של האופציות");
        }
    });


    $(".slider").slider().slider("pips");

    var levels = ["1", "", "", "", "5"];


    $(".slider")
        .slider({

            max: 5,
            min: 1,
            value: 1,
            orientation: "horizontal",
            range: "min",
            animate: true,

        })
        .slider("pips", {
            rest: "label",
            labels: levels
        });

    $(".slider").css('background', 'rgb(255,255,255)');
    $(".slider").css('border', 'none');
    $(".slider").css('border-radius', '50px');
    $(".slider").css('outline', 'none');
    $(".slider").css('height', '10px');
    $(".ui-slider-ranger").css('background', 'white');
    $(".slider").css('box-shadow', 'inset 0 0 0px 1px rgba(0, 0, 0, 0.80)');
    $(".slider .ui-slider-handle").css('border-radius', '50%');
    $(".slider .ui-slider-handle").css('outline', 'none');
    $(".slider .ui-slider-handle").css('border', 'none');
    $(".slider .ui-slider-pip .ui-slider-label").css('color', '#fff');





  $("#sortable1").sortable({
        placeholder: 'drop-placeholder'
    });


    $("#sortable1").sortable();


  
    
    new Sortable(document.getElementsByClassName('sortable')[0]);

    $('.dropdown-radio').find('input').change(function () {
        var dropdown = $(this).closest('.dropdown');
        var radioname = $(this).attr('name');
        var checked = 'input[name=' + radioname + ']:checked';

        //update the text
        var checkedtext = $(checked).closest('.dropdown-radio').text();
        dropdown.find('button').text(checkedtext);

        //retrieve the checked value, if needed in page 
        var thisvalue = dropdown.find(checked).val();
        alert(thisvalue);
    });


  
});

