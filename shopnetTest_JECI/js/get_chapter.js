function get_chapter(chapter){
	var url=chapter
	jQuery.ajax({
			url:"php/getDataController.php",
			type:"POST",
			dataType:"json",
			data:{"page":url},
			beforeSend: function(){	
				jQuery("#extra-info").append("<div class='beforeSend'><div class='lds-ring'><div></div><div></div><div></div><div></div></div>"+
				"<label class='temp'>Cargando</label></div>")
			}
		}).done(function(oneData){
			jQuery(".beforeSend").remove()
			// console.log(oneData)
			jQuery("#extra-info").html("<div class='extra-header'>First appareance</div>"+
				"<div class='info-content'><label class='info-header'>Chapter name: </label><label class='chapter-name info-text'>"+oneData.name+"</label></div>"+
				"<div class='info-content'><label class='info-header'>Episode: </label><label class='info-text'>"+oneData.episode+"</label></div>"+
				"<div class='info-content'><label class='info-header'>Created: </label><label class=' info-text'>"+oneData.created+"</label></div>"+
				"<div class='info-content'><label class='info-header'>Air date: </label><label class='chapter-air info-text'>"+oneData.air_date+"</label></div>"
				);
		}).fail(function(oneData){

		})
	}
