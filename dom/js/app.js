(function(){
	$(function(){
		/*console.log('Document Ready');
		var h1 = $('h1');
		//debugger
		h1.html('Hola a todos');
		debugger
		var p = $ ('<p>');
		p.html('este es un parrafo nuevo');
		/*$('body').append(p);*/
		/*$('.container').append(p);
		p.addClass('text.danger');

		$('button').click(function(e){
			//console.log('Me Gusta', e)
			//cambia el color
		//$('button').addClass('btn-primary');

		//$('button').removeClass('btn-default');
		$('button').toggleClass('btn-primary');
		
		});*/
		var id = 0;
		$('form').submit(function(e){


				console.log('Procesando Formulario');
				e.preventDefault();
				id++;

				var moneda = $(this).serializeArray();
				console.log(moneda[0].value);
				console.log(moneda[1].value);
				console.log(moneda[2].value);
				var comp;
				var vent;
					var dinero = moneda[0].value;
					if (/^[a-zA-Z]+$/.test(dinero)==false) {
						alert ('Este campo solo acepta letras')
						$('#denominacion').val('').focus();
						return false;

					}

					function camposLibre(){
						$('#comp').val('').focus();
						$('#vent').val('');

					}

					if (Number(moneda[1].value)> 0 && Number(moneda[2].value)>0) {
						comp = parseFloat (moneda[1].value);
						vent = parseFloat (moneda[2].value);
					} else {
						alert("El numero ingresado debe ser Positivo")

						camposLibre();
						return false;

					}

					if (comp >= vent) {
						alert("Monto ingresado no es valido, el valor de la compra debe ser menor al del venta")
						camposLibre();
						return false;

					} else {



				var row = '<tr>';
				row +='<td>'+id;
				row +='<td>'+moneda[0].value;
				row +='<td>'+moneda[1].value;
				row +='<td>'+moneda[2].value;

				$('table tbody').append(row);
				$('form').trigger("reset");

			}

		});
	});
		

})();

