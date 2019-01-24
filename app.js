$(document).ready(function() {
    $("#addtask").click(function(e) {
        blurModalBcgr();
        e.preventDefault();
    });


    $("#savechanges").click(function() {
        $('#exampleModal').modal('toggle');
        unBlurModalBcgr();
    });




    //The following code is only for styling modal background with blur effect
    function blurModalBcgr() {
        $('.blurmodalbckr').css("filter","blur(4px)");
    }
    function unBlurModalBcgr() {
        $('.blurmodalbckr').css("filter","");
    }
    $("#xclose").click(function(e) {
        unBlurModalBcgr();
        e.preventDefault();
    });
    $("#closeModal").click(function(e) {
        unBlurModalBcgr();
        e.preventDefault();
    });
});