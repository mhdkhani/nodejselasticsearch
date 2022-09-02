jQuery(function ($) {
    $(document).ready(function () {

        var typingTimer;
        var doneTypingInterval = 1000;
        var $input = $('#search_form_input');

        //on keyup, start the countdown
        $input.on('keyup', function () {
            clearTimeout(typingTimer);
            $("#search_result").addClass('hidden_search_form');
            typingTimer = setTimeout(searchInElastic, doneTypingInterval);
        });

        //on keydown, clear the countdown
        $input.on('keydown', function () {
            clearTimeout(typingTimer);
        });

        function searchInElastic(){
            var baseUrl = $("#base_url").val();
            var ul = $("#search_result_items").empty();
            var ul1 = document.getElementById('search_result_items')
            var query_search = $("#search_form_input").val();
            $.ajax({
                type: "post",
                url: '/api/search',
                data: {query_search:query_search},
                success: function(response){
                    if (response.items.length > 0 ){
                        var i;
                        var items = response.items;
                        for (i = 0; i < items.length; ++i) {
                            var li = document.createElement("li");
                            li.appendChild(document.createTextNode(items[i].name));
                            li.setAttribute("id", items[i].sku);
                            ul1.appendChild(li);
                        }
                    }else{
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode('there is no items'));
                        li.setAttribute("id", 'no_item_found');
                        ul1.appendChild(li);
                    }
                    $("#search_result").removeClass('hidden_search_form');
                }
            });
        }

        //user is finished typing, do something
        function doneTyping () {
           $("#search_result").removeClass('hidden_search_form');
        }


        $input.focusout(function(){
            $("#search_result").addClass('hidden_search_form');
        });
    })
})
