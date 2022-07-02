jQuery(function ($) {
    $(document).ready(function () {

        //setup before functions
        var typingTimer;                //timer identifier
        var doneTypingInterval = 1000;  //time in ms, 5 seconds for example
        var $input = $('#search_form_input');

        //on keyup, start the countdown
        $input.on('keyup', function () {
            clearTimeout(typingTimer);
            //typingTimer = setTimeout(doneTyping, doneTypingInterval);
            typingTimer = setTimeout(searchInElastic, doneTypingInterval);
        });

        //on keydown, clear the countdown
        $input.on('keydown', function () {
            clearTimeout(typingTimer);
        });

        function searchInElastic(){
            var baseUrl = $("#base_url").val();
            var query_search = $("#search_form_input").val();
            $.ajax({
                type: "post",
                url: '/api/search',
                data: {query_search:query_search},
                success: function(response){
                    console.log(response)
                }
            });
        }

        //user is "finished typing," do something
        function doneTyping () {
           $("#search_result").removeClass('hidden_search_form');
        }


        $input.focusout(function(){
            $("#search_result").addClass('hidden_search_form');
        });
    })
})
