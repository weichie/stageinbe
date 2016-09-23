$(document).ready(function(){
	$('#stagaire').on('click', function(){
		swal({   
			title: "Awesome!",   
			text: "Blijf op de hoogte wanneer we launchen",   
			type: "input",   
			showCancelButton: true,   
			closeOnConfirm: false,   
			animation: "pop",   
			inputPlaceholder: "Uw email adres" 
		}, function(inputValue){   
			if (inputValue === false) return false;      
			if (inputValue === "") {     
				swal.showInputError("U hebt geen email adres opgegeven");     
				return false   
			}      
			swal("Nice!", "U bent succesvol geregistreerd: " + inputValue, "success"); 
		});
	});

	$('#bedrijf').on('click', function(){
		swal({   
			title: "Awesome!",   
			text: "Blijf op de hoogte wanneer we launchen",   
			type: "input",   
			showCancelButton: true,   
			closeOnConfirm: false,   
			animation: "pop",   
			inputPlaceholder: "Uw email adres" 
		}, function(inputValue){   
			if (inputValue === false) return false;      
			if (inputValue === "") {     
				swal.showInputError("U hebt geen email adres opgegeven");     
				return false   
			}      
			swal("Nice!", "U bent succesvol geregistreerd: " + inputValue, "success"); 
		});
	});
});