$(document).ready(function(){

	$.get('load.php',
		function(data){
			var data = JSON.parse(data);
			$('.stagezoekenden').html( data.stagezoekenden );
			$('.stageplaatsen').html( data.stageplaatsen );
		});

	$('#stagaire').on('click', function(){
		swal({   
			title: "Awesome!",
			text: '<div id="mc_embed_signup"><form action="//stagein.us14.list-manage.com/subscribe/post?u=e6e6609f5afaac9814bb4f7c1&amp;id=0f26dba48e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate stagaire_form" target="_blank" novalidate><div id="mc_embed_signup_scroll"><div class="mc-field-group"><label for="mce-EMAIL">Uw e-mail<span class="asterisk">*</span></label><input type="email" placeholder="john@doe.com" name="EMAIL" class="required email email_stagaire" id="mce-EMAIL"></div><div id="mce-responses" class="clear"><div class="response" id="mce-error-response" style="display:none"></div><div class="response" id="mce-success-response" style="display:none"></div></div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e6e6609f5afaac9814bb4f7c1_0f26dba48e" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" style="display: none;" class="confirm"></div></div></form></div><!--End mc_embed_signup-->',   
			html: true,
			type: "info",   
			showCancelButton: true,   
			closeOnConfirm: false, 
			animation: "pop",  
			showConfirmButton: true,
			showCancelButton: true, 
			showLoaderOnConfirm: true,
		}, function(){   
			var email = $('.email_stagaire').val();
			//if (email === false) return false;      
			if (email === "") {     
				swal.showInputError("U hebt geen email adres opgegeven");     
				return false   
			}

			//$('.stagaire_form').submit();
			$.ajax({
				type: "GET", // GET & url for json slightly different
			    url: "//stagein.us14.list-manage.com/subscribe/post-json?u=e6e6609f5afaac9814bb4f7c1&id=0f26dba48e&c=?",
			    data: $('.stagaire_form').serialize(),
			    dataType    : 'json',
			    contentType: "application/json; charset=utf-8",
			    error       : function(err) {  },

		        success     : function(data) {
		            if (data.result != "success") {
		            	return swal("Humm,..", "Bummer er ging wat mis :(", "error");
		            } else {
						return swal("Nice!", "U bent succesvol geregistreerd: " + email, "success");
			
		            }
		        }
			});

		});
	});

	


	$('#bedrijf').on('click', function(){
		swal({   
			title: "Awesome!",
			text: '<div id="mc_embed_signup"><form action="//stagein.us14.list-manage.com/subscribe/post?u=e6e6609f5afaac9814bb4f7c1&amp;id=0f26dba48e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate bedrijf_form" target="_blank" novalidate><div id="mc_embed_signup_scroll"><div class="mc-field-group"><label for="mce-EMAIL">Uw e-mail<span class="asterisk">*</span></label><input type="email" placeholder="john@doe.com" name="EMAIL" class="required email email_bedrijf" id="mce-EMAIL"></div><div id="mce-responses" class="clear"><div class="response" id="mce-error-response" style="display:none"></div><div class="response" id="mce-success-response" style="display:none"></div></div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e6e6609f5afaac9814bb4f7c1_0f26dba48e" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" style="display: none;" class="confirm"></div></div></form></div><!--End mc_embed_signup-->',   
			html: true,
			type: "info",   
			showCancelButton: true,   
			closeOnConfirm: false, 
			animation: "pop",  
			showConfirmButton: true,
			showCancelButton: true, 
			showLoaderOnConfirm: true,
		}, function(){   
			var email = $('.email_bedrijf').val();
			//if (email === false) return false;      
			if (email === "") {     
				swal.showInputError("U hebt geen email adres opgegeven");     
				return false   
			}

			$.ajax({
				type: "GET", // GET & url for json slightly different
			    url: "//stagein.us14.list-manage.com/subscribe/post-json?u=e6e6609f5afaac9814bb4f7c1&id=a2e75c0e9d&c=?",
			    data: $('.bedrijf_form').serialize(),
			    dataType    : 'json',
			    contentType: "application/json; charset=utf-8",
			    error       : function(err) { },

		        success     : function(data) {
		            if (data.result != "success") {
		            	return swal("Humm,..", "Bummer er ging wat mis :(", "error");
		            } else {
						return swal("Nice!", "U bent succesvol geregistreerd: " + email, "success");
		            }
		        }
			});

		});
	});
});