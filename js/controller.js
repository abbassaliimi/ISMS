$(document).ready(function () {

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
        //pushNoti();
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

