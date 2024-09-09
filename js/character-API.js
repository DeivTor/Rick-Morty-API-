
$(document).ready(function(){
    $("#search-button").click(function(){
        searchCharacter();
    })
})

function searchCharacter(){
    $("#show-results").html("");
    let query = $("#search-input").val();

    if(query != ""){
        $.ajax({
            
            url: "https://rickandmortyapi.com/api/character/?name=" + query,
            type: "get",
            dataType: "json",
            
            success: function (result){
                
                if(result.results.length > 0){
                    let data = result.results;
                    $.each(data, function (i, characters) {
                        $("#show-results").append(
                            `
                            <div class="col d-flex justify-content-center align-items-center">
                                <div class="card mb-3" style="max-width: 540px;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                                <img src="${characters.image}" class="img-fluid rounded-start card-img-full" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">${characters.name}</h5>
                                                <p class="card-text">${characters.status}</p>
                                                <div class="row justify-content-between">
                                                    <div class="col-10 justify-content-start">
                                                        <p class="card-text"><small class="text-place">${characters.origin.name}</small></p>
                                                    </div>
                                                    <div class="col-2 justify-content-start">
                                                        <span class="badge text-bg-info">#${characters.id}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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