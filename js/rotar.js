$(function(){
	//evento al colocar el puntero del raton sobre el elemento de la lista
	$('.clsDiscos').hover(function(){
		//obtenemos la instancia del elemento
		var $objItem=$(this);
		//buscamosla imagen y la rotamos 360 grados
		$objItem.find('img').rotate({
			animateTo: 360
		});
		//buscamos la etiqueta ol y la deslizamos hacia abajo
	
	}, 

	function(){
	/*$('.clsDiscos').rotate({
			animateTo: -60
		});*/
		
	});
});