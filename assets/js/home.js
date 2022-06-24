jQuery(function ($) {
    $(document).ready(function () {
        //setup before functions
        var typingTimer;                //timer identifier
        var doneTypingInterval = 1000;  //time in ms, 5 seconds for example
        var $input = $('#search_form_input');

        //on keyup, start the countdown
        $input.on('keyup', function () {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        });

        //on keydown, clear the countdown
        $input.on('keydown', function () {
            clearTimeout(typingTimer);
        });

        //user is "finished typing," do something
        function doneTyping () {
           $("#search_result").removeClass('hidden_search_form');
        }


        $input.focusout(function(){
            $("#search_result").addClass('hidden_search_form');
        });
    })
})
