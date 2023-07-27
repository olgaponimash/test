$( document ).ready(function() {

    

    $(".js-number").bind("change keyup keydown input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
            this.value = this.value;
        }
    });

    $(".js-scroll-block").mCustomScrollbar({
        axis:"y",
        theme:"dark"
    });
    
});