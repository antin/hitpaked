
<iframe onkeypress="debugFunction(event)"id="formSubscribe" 
			allowtransparency="true" 
			frameborder=0
			 scrolling="no" 
			style="border:none; 
			width:99%; 
			height:2180px; 
			z-index:2; 
			position:absolute;
			overflow-x: hidden;
			overflow-y: hidden;" 
			src="https://docs.google.com/forms/d/e/1FAIpQLScxkcMUd4_l-A5q4FrTw5MwDlF_W8qUbrEkdqvYhoiMLh9d1Q/viewform?fbzx=6372075017715457586" 
			marginheight="0" 
			marginwidth="0">
		</iframe> 
		<iframe id="likudIframe" 
			allowtransparency="true" 
			frameborder="0" 
			scrolling="yes" 
			style="border:none; 
			width:99%; 
			height:2500px; 
			z-index:3; 
			visibility:hidden;
			overflow-x: hidden;
			position:absolute" 
			src="" 
			marginheight="0" 
			marginwidth="0">
		</iframe>
			
		
		<script type="text/javascript">
		
		function debugFunction() {
						 						
				if (document.getElementsByTagName('iframe')[1].style.visibility === "visible"){
						  
						document.getElementsByTagName('iframe')[1].style.visibility = "hidden"; 
				} else {
					
					document.getElementsByTagName('iframe')[1].style.visibility = "visible";
				}
						
		}

		var first = true;
		var preloaded = false;
		document.getElementsByTagName('iframe')[0].onload = function (event) {
			console.log("frame load first=" + first + 'event.target: '+ event.target)
			if (!first) {
				document.getElementsByTagName('iframe')[1].style.visibility = "visible";
				document.getElementsByTagName('iframe')[0].style.visibility = "hidden";
				
			};
			first = false;
		};


		function preloadLikudCouple() {
		  var s = "https://www.likud.org.il/register-heb/register-couple-heb";
		  var likudIframe = document.getElementsByTagName('iframe')[1];
		  if ( -1 == navigator.userAgent.indexOf("MSIE") ) {
			likudIframe.src = s;
		  }
		  else {
			likudIframe.location = s;
		  }
		  preloaded = true;
		}
		
		if (!preloaded){
			setTimeout(preloadLikudCouple, 4000);
		}

		</script>
