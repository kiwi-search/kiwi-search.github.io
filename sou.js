$(document).ready(function() {
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
        $(".wd").focus();
    }
    $(".sou li").click(function() {
        var dt = $(this).attr('data-s');
        wd = $(".wd").val();
        if (dt == "google") {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.qwant.com/";
            } else {
                $("form").attr('action', 'https://www.qwant.com/');
                $(".wd").attr("name","q");
                $(".t").val("g");
                $("form").submit();
            }
        }
    });
   );
});
