$(document).ready(function () {

    $("#monthViewBtn_cvtms").click(function(){
        $("#cvtms_week").slideUp("fast", function(){
            $("#cvtms_month").slideDown("fast", function(){
                $("#monthViewBtn_cvtms").hide();
                $("#weekViewBtn_cvtms").show();
            });
        });
    });

    $("#weekViewBtn_cvtms").click(function(){
        $("#cvtms_month").slideUp("fast", function(){
            $("#cvtms_week").slideDown("fast", function(){
                $("#weekViewBtn_cvtms").hide();
                $("#monthViewBtn_cvtms").show();
            });
        });
    });

    $("#monthViewBtn_iscd").click(function(){
        $("#iscd_week").slideUp("fast", function(){
            $("#iscd_month").slideDown("fast", function(){
                $("#monthViewBtn_iscd").hide();
                $("#weekViewBtn_iscd").show();
            });
        });
    });

    $("#weekViewBtn_iscd").click(function(){
        $("#iscd_month").slideUp("fast", function(){
            $("#iscd_week").slideDown("fast", function(){
                $("#weekViewBtn_iscd").hide();
                $("#monthViewBtn_iscd").show();
            });
        });
    });

    $("#monthViewBtn_sacs").click(function(){
        $("#sacs_week").slideUp("fast", function(){
            $("#sacs_month").slideDown("fast", function(){
                $("#monthViewBtn_sacs").hide();
                $("#weekViewBtn_sacs").show();
            });
        });
    });

    $("#weekViewBtn_sacs").click(function(){
        $("#sacs_month").slideUp("fast", function(){
            $("#sacs_week").slideDown("fast", function(){
                $("#weekViewBtn_sacs").hide();
                $("#monthViewBtn_sacs").show();
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

document.addEventListener("DOMContentLoaded", function () {

    const hoverableRows = document.querySelectorAll("tr.notiRow");
  
    hoverableRows.forEach(row => {
      row.addEventListener("mouseenter", () => {
        row.classList.add("highlightRow");
      });
  
      row.addEventListener("mouseleave", () => {
        row.classList.remove("highlightRow");
      });
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

