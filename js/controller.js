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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
    .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
        console.error('Service Worker registration failed:', error);
    });
}

