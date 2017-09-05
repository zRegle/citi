$(document).ready(function () {
    $(".avatars-placeholder").click(function () {
        $(".team-member-info").css("display","none");
        //reset all avatars
       $(".avatars-img").css({
           "width":"175px",
           "box-shadow":"none"
       });
       $(".avatars-outline").css("margin-left","15px");
       $(".team-name").css("margin-left","33%");
       //adjust the clicked avatars
       $(this).children("img").css({
           "width":"200px",
       });
       $(this).children(".avatars-outline").css("margin-left","25px");
        $(".team-name").css("margin-left","35%");
       //show corresponding team members
        var id="team"+$(this).attr("id");
       $("#"+id).css("display","block");
    });
});