<?php		
$url = $_POST["page"];
// var_dump($url);
	 	function httpGet_method(string $url){

			$ch = curl_init();  
		    curl_setopt($ch,CURLOPT_URL,$url);
		    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
		//  curl_setopt($ch,CURLOPT_HEADER, false); 
		    $output = curl_exec($ch);
		    curl_close($ch);
		    return $output;
		}

		// $url = "https://rickandmortyapi.com/api/character/?page=".$page;

		$data = httpGet_method($url);
		echo $data;
?>