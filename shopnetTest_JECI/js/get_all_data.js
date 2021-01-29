function get_all_data(page){
	var url= page || "https://rickandmortyapi.com/api/character/?page=1";
console.log(page);
jQuery.ajax({
		url:"php/getDataController.php",
		type:"POST",
		dataType:"json",
		data:{"page":url},
		beforeSend: function(){	
				// jQuery("#characters").append("<div class='beforeSend'><div class='lds-ring'><div></div><div></div><div></div><div></div></div>"+
				// "<label class='temp'>Cargando</label></div>")
			}
	}).done(function(data){
		// jQuery(".beforeSend").remove()
		if(data.info.next != null){
			jQuery("#next").attr("value",data.info.next)
		}else{
			jQuery("#next").attr("value",'end of the list')
		}
		if(data.results){
			data.results.forEach(function(element){
				jQuery("#characters").append(
					"<div class='character-card' id='"+element.id+"' value='"+element.episode[0]+"'>"+
						"<div class='character-content'>"+
							"<div class='character-photo'><img src="+element.image+"></div>"+
							"<div class='character-info'>"+
								"<div class='name-character'>"+element.name+"</div>"+
								"<div class='info-content'><label class='info-header'>Especie: </label><label class='specie-character info-text'>"+element.species+"</label></div>"+
								"<div class='info-content'><label class='info-header'>Estado: </label> <label class='status-character info-text'>"+element.status+"</label><div class='icon "+element.status+"'></div></div>"+
								"<div class='info-content'><label class='info-header'>Ultima ubicación: </label><label class='location-character info-text'>"+element.location.name+"</h2></div>"+
							"</div>"+
						"</div>"+
					"</div>")

			})
		}


	}).fail(function(data){

	})
}
