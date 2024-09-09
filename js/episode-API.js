
$(document).ready(function(){
    $("#search-button").click(function(){
        searchCharacter();
    })
})

function searchCharacter(){
    $("#show-results").html("");
    let query = $("#search-input option:selected").text();

    if(query != ""){
        $.ajax({
            
            url: "https://rickandmortyapi.com/api/episode/?episode=" + query,
            type: "get",
            dataType: "json",
            
            success: function (result){
                
                if(result.results.length > 0){
                    let data = result.results;
                    $.each(data, function (i, episodes) {
                        $("#show-results").append(
                            `
                            <div class="col">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header text-center">${episodes.episode.substring(3,6)}</div>
                                    <div class="card-body">
                                        <p class="card-text">Name: ${episodes.name}</p>
                                        <p class="card-text">Air date: ${episodes.air_date}</p>
                                        <p class="card-text">Characters: <span class="badge text-bg-info">${episodes.characters.length}</span></p>
                                    </div>
                                </div>
                            </div>
                            `
                        )
                    })
                }
            },
            error: function () {
                $("#show-results").html(
                    `<div class = "errors text-center">
                        <span class = "first-letter">P</span>ersonaje no encontrado
                    </div>`
                )
            }
        });
    } else {
        $("#show-results").html(
            `<div class = "errors text-center">
                <span class = "first-letter">P</span>ersonaje invalido
            </div>`
        )
    }
}