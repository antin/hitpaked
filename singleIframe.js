<iframe id="formSubscribe" 
			allowtransparency="true" 
			frameborder=0
			 scrolling="no" 
			style="border:none; 
			width:99%; 
			height:1650px; 
			z-index:2; 
			position:absolute;
			overflow-x: hidden;
			overflow-y: hidden;" 
			src="https://docs.google.com/forms/d/e/1FAIpQLScRVq5xu5NrRDYFFGe_eKr-3ssK_AInRLWBDI-I1XZ7n6iSEw/viewform?embedded=true" 
			marginheight="0" 
			marginwidth="0">
		</iframe> 
		<iframe id="likudIframe" 
			allowtransparency="true" 
			frameborder="0" 
			scrolling="yes" 
			style="border:none; 
			width:99%; 
			height:1800px; 
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

		// for avoiding the email limit of 100 recipients per day we will set a random src for 300's users per day we will use 3 src etc 
		setFormSrc();
		
		var first = true;
		document.getElementsByTagName('iframe')[0].onload = function () {
			console.log("frame load first=" + first)
			if (!first) {
				document.getElementsByTagName('iframe')[1].style.visibility = "visible";
				document.getElementsByTagName('iframe')[0].style.visibility = "hidden";
			};
			first = false;
		};

		// for avoiding the email limit of 100 recipients per day we will set a random src for 300's users per day we will use 3 src etc 
		function setFormSrc() {
		  var frm1 = "https://docs.google.com/forms/d/e/1FAIpQLScjsdyOYuXZAyMZJQCI_myx8w5ya6OdThVvm-T_YRCQJvgOkg/viewform";
		  var frm2 = "https://docs.google.com/a/newlikud.org/forms/d/e/1FAIpQLScRVq5xu5NrRDYFFGe_eKr-3ssK_AInRLWBDI-I1XZ7n6iSEw/viewform";
		  var frm3 = "https://docs.google.com/a/newlikud.org/forms/d/e/1FAIpQLSd5YIkX71dTyJ93ebiDKqQw8PZVzA_Xcn8CxPPW0TWka4jXGg/viewform";
		  var s = frm1;
		  var range = Math.random();
		  
		  if ( range >= 0.5 && range <= 1 )
		  {
			console.log("frm2:" + frm2);
			s = frm2;
		  }
		  /*else if ( range >= 0.3 && range < 0.6 )
		  {
			console.log("frm3:" + frm3);
			s = frm3;
		  }*/
		  else
		  {
			console.log("frm1:" + frm1);
		  }
		  
		  
		  var newlikudIframe = document.getElementsByTagName('iframe')[0];
		  if ( -1 == navigator.userAgent.indexOf("MSIE") ) {
			newlikudIframe.src = s;
		  }
		  else {
			newlikudIframe.location = s;
		  }
		}

		function preLoadLikudForm() {
		  var s = "https://www.likud.org.il/register-heb/register-single-heb";
		  var likudIframe = document.getElementsByTagName('iframe')[1];
		  if ( -1 == navigator.userAgent.indexOf("MSIE") ) {
			likudIframe.src = s;
		  }
		  else {
			likudIframe.location = s;
		  }
		}
		setTimeout(preLoadLikudForm, 3000);


		</script>
