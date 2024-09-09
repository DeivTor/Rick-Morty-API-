$(document).ready(function(){
    $("#search-button").click(function(){
        searchLocation();
    })
})

function searchLocation(){
    $("#show-results").html("");

    let query = $("#search-input option:selected").text();

    $.ajax({

        url: "https://rickandmortyapi.com/api/location/?type="+query,
        type: "get",
        dataType: "json",

        success: function(result){

            if(result.results.length > 0){
                let locations = result.results;
                $.each(locations, function (i, data) {
                    $("#show-results").append(
                        `
                        <div class="col">
                            <div class="card" style="width: 18rem;">
                                <div class="card-header">${data.name}</div>
                                <div class="card-body">
                                    <p class="card-text">Type: ${data.type}</p>
                                    <p class="card-text">Dimension: ${data.dimension}</p>
                                    <p class="card-text">Residents: <span class="badge text-bg-info">${data.residents.length}</span></p>
                                </div>
                            </div>
                        </div>
                        `
                    )
                })
            } else {
                $("#show-results").append(
                    `<div class = "errors text-center">
                        <span class = "first-letter">L</span>ocation not found
                    </div>`
                )
            }

        },
        error: function(){
            $("#show-results").append(
                `<div class = "errors text-center">
                    <span class = "first-letter">Algo</span> salio mal :(
                </div>`
            )
        }
    })
}