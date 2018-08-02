var mediTota = 0;
$("#botonAddMed").on("click", function() {
    mediTota += 1;
    var linea = "";
    linea += '<div class="Medicamento' + mediTota + ' medEst">';
    linea += '<span><a><i data-numMed="' + mediTota + '" class="material-icons eliminar">cancel</i></a></span>';
    linea += '<div class="input-field col">';
    linea += '<input id="med' + mediTota + '" type="text" class="validate med">';
    linea += '<label for="med' + mediTota + '">Nombre del Medicamento</label>';
    linea += '</div>';
    linea += '<div class="input-field col">';
    linea += '<input id="dos' + mediTota + '" type="text" class="validate dos">';
    linea += '<label for="dos' + mediTota + '">Dosis del medicamento</label>';
    linea += '</div>';
    linea += '<div class="input-field col">';
    linea += '<input id="fre' + mediTota + '" type="text" class="validate fre">';
    linea += '<label for="fre' + mediTota + '">Frecuencia del medicamento</label>';
    linea += '</div>';
    linea += '<hr></hr>';
    linea += '</div>';
    $("#Medicamentos").append(linea);
    $("div.Medicamento" + mediTota).css({
        display: "none"
    });
    $("div.Medicamento" + mediTota).fadeIn(300);


});

$(document).on("click", "i.eliminar", function() {
    var idMed = $(this).data("nummed");
    $("div.Medicamento" + idMed).fadeOut(300, function() {
        $(this).remove();
    });
    mediTota -= 1;
});