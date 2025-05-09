$(document).ready(function () {

    // // jQuery CORS example
    // $.ajax({
    //     xhrFields:{
    //         withCredentials: true
    //     },
    //     type: "GET",
    //     url: "https://bepi.mpob.gov.my/admin2/price_local_daily_view_cpo_msia.php?more=Y&jenis=3M"
    // }).done(function(data){
    //     console.log(data);
    // });

    var settings = {
        'cache': false,
        'dataType': "jsonp",
        "async": true,
        "crossDomain": true,
        "url": "https://bepi.mpob.gov.my/admin2/price_local_daily_view_cpo_msia.php?more=Y&jenis=3M",
        "method": "GET",
        "headers": {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);

    });



    $("#monthViewBtn").click(function(){
        $("#cvtms_week").slideUp("fast", function(){
            $("#cvtms_month").slideDown("fast", function(){
                $("#monthViewBtn").hide();
                $("#weekViewBtn").show();
            });
        });
    });

    $("#weekViewBtn").click(function(){
        $("#cvtms_month").slideUp("fast", function(){
            $("#cvtms_week").slideDown("fast", function(){
                $("#weekViewBtn").hide();
                $("#monthViewBtn").show();
            });
        });
    });

    $("#allNotiBtn").click(function(){
        $("#dashSelected").hide();
        $("#notiSelected").show();
        $("#dashContent").hide();
        $("#notiContent").show();
    });

    $("#dashBtn").click(function(){
        $("#notiSelected").hide();
        $("#dashSelected").show();
        $("#notiContent").hide();
        $("#dashContent").show();
    });

    $("#openCVTMS").click(function(){
        pushNoti();
    });
});

function pushNoti(){
    Notification.requestPermission().then(perm => {
    if (perm === "granted") {
        const noti = new Notification("ISMS", {
            body: "CVTMS - New case"
        });
    }
    });

    //setInterval(pushNoti, 30000);
}

