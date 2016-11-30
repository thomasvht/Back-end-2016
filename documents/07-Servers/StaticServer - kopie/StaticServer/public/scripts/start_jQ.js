/*
 * 
 * CLiënt: verwerkt flickr images
 * 
 * 
 */

$(document).ready(function () {
    console.log("jQuery loaded");
    

    $('input[type="submit"]').on('click', function (event) {
        //event.preventDefault(); alternatief op return false
        $.ajax({
            dataType: "json",
            url: location.protocol + "//" + location.host+ "/apiData", //universeel
            data: $("#myForm").serialize(),
            success: function (json) { 
                console.log("success: " + json); //object
                $('#searchResults').empty();
                var items = json.items;
                $.each(items, function (items) {
                   // link = this.link.replace(/\\/g, "")  
                 
                    $("<li>").html(this.title + ": <br />")
                            //.append($("<a href='" + this.media.m + "'><img />").attr('src', this.media.m)+"</a>")
                            .append($("<img />").attr('src', this.media.m)) 
                            .prependTo($('#searchResults')); //title als eerste kind toevoegen
                });            
            }
        });

        return false; //verhindert de submit van de form ( type: submit)!!
    })
})