var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth() + 1;
var year = fecha.getFullYear();

if (dia < 10) dia = "0" + dia;
if (mes < 10) mes = "0" + mes;

var fechaact = dia + "/" + mes + "/" + year;

function agregarTexto(data, imprimir) {

    var doc = new jsPDF({ unit: 'mm', format: [210, 279] });

    var matchQueri = window.matchMedia("(max-width: 800px)").matches;

    doc.setFontSize(13);
    /* Nombre */
    doc.text(25, 34, data.nombre);
    /* fecha */
    doc.text(164, 34, fechaact);
    /* edad */
    doc.text(95, 45, data.edad);
    /* peso */
    doc.text(127, 45, data.peso);
    /* tall */
    doc.text(162, 45, data.talla);
    /* temperatura */
    doc.text(198, 45, data.temp);

    doc.setFontSize(11);

    var linea = 56;

    for (var i = 0; i < data.medicamento.length; i++) {

        doc.text(23, linea, data.medicamento[i]);

        linea += 7;
    }

    if (!matchQueri) {
        doc.autoPrint();
        var url = doc.output('datauristring');
        document.getElementById("docPdf").setAttribute("src", url);

    } else {
        window.open(doc.output('dataurlstring'));

    }

}

$(document).ready(function() {

    $("#enviar").on("click", function() {
        var index = 0;
        var id = "";
        var ind = 0;
        var cadena = '';
        var data = {
            nombre: "",
            edad: "",
            peso: "",
            talla: "",
            temp: "",
            medicamento: []
        };
        $("input").each(function() {
            if (index == 0) data.nombre = $(this).val();
            if (index == 1) data.edad = $(this).val();
            if (index == 2) data.peso = $(this).val();
            if (index == 3) data.talla = $(this).val();
            if (index == 4) data.temp = $(this).val();
            if (index >= 5) {
                ind++;
                if (ind < 3) cadena += $(this).val() + ', ';
                else cadena += $(this).val();
                if (ind == 3) {
                    data.medicamento.push(cadena);
                    cadena = '';
                    ind = 0;
                }


            }
            index++;
        });

        agregarTexto(data, true);
    });
});
