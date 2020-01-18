jQuery.noConflict();

jQuery(window).load(function() {
	
	jQuery('.masonrywrap').isotope({
		animationOptions: {
		  duration: 750
		},
		animationEngine : 'best-available',
		itemSelector: '.masonry_item'
	});
	
	jQuery('.slider_wrap').flexslider({
    animation: "slide",
	controlNav: false,
	directionNav: true,
	prevText: "Prev",    
	nextText: "Next",
	keyboard: true,
	mousewheel: true
  });
	
});

jQuery(document).ready(function() {
   
	//// Start Scroll Top Function //// 
	jQuery(window).bind('scroll', function(){
		if(jQuery(this).scrollTop() > 200) {
		jQuery(".backtotop").fadeIn('3000');
		}
		if(jQuery(this).scrollTop() < 199){
			jQuery(".backtotop").fadeOut('3000');
		}
	});
	
	jQuery('.backtotop').live('click', function(){
		jQuery("html, body").animate({scrollTop:0}, 'slow');
	});
	//// End Scroll Top Function ////   
	
	//// Start twitter settings ////
	jQuery(function(){
		jQuery(".twitterbody").tweet({
		  join_text: "auto",
		  username: "UBLDesigns",
		  avatar_size: 48,
		  count: 3,
		  auto_join_text_default: "we said,",
		  auto_join_text_ed: "we",
		  auto_join_text_ing: "we were",
		  auto_join_text_reply: "we replied",
		  auto_join_text_url: "we were checking out",
		  loading_text: "loading tweets..."
		});
	});
	//// End twitter settings ////
	
	//// Slider Navigation Effect ////
	jQuery(".slider_wrap").mouseenter(function(){
        jQuery(".flex-direction-nav a",this).fadeIn();
    }).mouseleave(function(){
        jQuery(".flex-direction-nav a",this).fadeOut();
    });
	//// Slider Navigation Effect ////
	
	
	//// navigation ////
	jQuery("<select />").appendTo(".menu");
	jQuery("<option />", {"selected": "selected","value"   : "","text" : "Navigation Menu"}).appendTo(".menu select");
	jQuery(".menu ul li a").each(function() {
		
		var el = jQuery(this);
		jQuery("<option />", {"value"   : el.attr("href"),"text"    : el.text()}).appendTo(".menu select");
	});
	
	jQuery(".menu select").change(function() {
		
		window.location = jQuery(this).find("option:selected").val();
	});
	//// navigation ////
	//// pagination ////
	jQuery("<select />").appendTo(".pagination");
	jQuery("<option />", {"selected": "selected","value"   : "","text" : "Pagination Menu"}).appendTo(".pagination select");
	jQuery(".pagination ul li a").each(function() {
		
		var el = jQuery(this);
		jQuery("<option />", {"value"   : el.attr("href"),"text"    : el.text()}).appendTo(".pagination select");
	});
	
	jQuery(".pagination select").change(function() {
		
		window.location = jQuery(this).find("option:selected").val();
	});
	//// pagination ////
	
	// fancybox settings ////
	jQuery("a.fancyboxnumber").fancybox({
		'titlePosition'		: 'outside',
		'overlayColor'		: '#fe7539',
		'overlayOpacity'	: 0.9
	});
	// fancybox settings ////
	
	//// Slideout sidebar ////
	jQuery('.slideinsidebar_button').live('click',function () {
		jQuery('.slideinsidebar').animate({marginLeft:'0px'},1000).queue(function(next) { jQuery('.slideinsidebar_button').attr('class','slideinsidebar_buttonminus'); next(); });
		jQuery('.slideinsidebar_button img').delay(500).attr('src','images/slidebuttonminus.jpg');
		
	});
	
	jQuery('.slideinsidebar_buttonminus').live('click',function () {
		jQuery('.slideinsidebar').animate({marginLeft:'-330px'},1000).queue(function(next) { jQuery('.slideinsidebar_buttonminus').attr('class','slideinsidebar_button'); next(); });
		jQuery('.slideinsidebar_buttonminus img').delay(500).attr('src','images/slidebutton.jpg');
		
	});
	//// Slideout sidebar ////
	
	//portfolio filter ////
	jQuery('.portfolio-filter a').click(function(){
            var selector = jQuery(this).attr('data-filter');
            jQuery('.masonrywrap').isotope({ filter: selector });
            return false;
     });
	 //portfolio filter ////
	 
	 //// Start Tabs Function ////
	jQuery('.tab').click(function () {
		jQuery('.tabs_container > .tabs > li.active').removeClass('active');
		jQuery(this).parent().slideDown('slow').addClass('active');
		jQuery('.tabs_container > .tab_contents_container > div.tab_contents_active').slideUp('slow').removeClass('tab_contents_active');
		var getdata = jQuery(this).attr('data-tab');
		jQuery(getdata).slideDown('slow').addClass('tab_contents_active');
	});
	//// End Tabs Function ////
	
	//// Start Accordian Function ////
	jQuery('.accordionwrap .accordioncontent').hide();
	jQuery('.accordionwrap .accordiontitle:first-child').addClass('active').next().show();
	
	jQuery('.accordionwrap .accordiontitle').click(function() {
		if(jQuery(this).next().is(':hidden')) {
			jQuery(this).parent().find(".accordiontitle").removeClass('active').next().slideUp('fast');
			jQuery(this).toggleClass('active').next().slideDown('fast');
		}
		return false;
	});
	//// End Accordian Function ////
	
/*
 * AJAX Section
 * This function will handle the contact process through AJAX
 */
 jQuery('#slickform').submit(
	function slickcontactparse() {
		
		// EMAIL VALIDATION FUNCTION
		var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		
		// EDIT THIS SECTION IF DIFFERENT FORM ELEMENTS
		// Values
		var successmessage = "Thank you for email, we will be in contact soon!";
		var failedmessage = "There was a problem, please try again!";
		var usersemail = jQuery('#email');
		var usersname = jQuery('#name');
		var userscomment = jQuery('#commentarea');
		var isvalid = 1;
		var url = "contact.php";
		
		//Checking information is correct before sending data
		
		
		//CHECKING EMAIL IS PRESENT AND IS VALID
		if (usersemail.val() == "" || usersemail.val() == "email...") {
			jQuery(".contactmessage").html('Please Enter Your Email').fadeIn().delay(1000).fadeOut();
			jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			return false;
		}
		
		//CHECKING NAME IS PRESENT
		if (usersname.val() == "" || usersname.val() == "name...") {
			jQuery(".contactmessage").html('Please Enter Your Name').fadeIn().delay(1000).fadeOut();
			jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			return false;
		}
		
		//CHECKING COMMENT IS PRESENT
		if (userscomment.val() == "" || userscomment.val() == "Comment...") {
			jQuery(".contactmessage").html('Please Enter Your Message').fadeIn().delay(1000).fadeOut();
			jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			return false;
		}
		
		var valid = emailReg.test(usersemail.val());
		
		if(!valid) {
			jQuery(".contactmessage").html('Please Enter Your A Valid Email').fadeIn().delay(1000).fadeOut();
			jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			return false;
		}
		//CHECKING EMAIL IS PRESENT AND IS VALID
		
		/* 
		 *
		 * POSTING DATA USING AJAX AND
		 * THEN RETREIVING DATA FROM PHP SCRIPT
		 *
		*/
		
		jQuery.post(url,{ usersname: usersname.val(), usersemail: usersemail.val(), userscomment: userscomment.val(), isvalid: isvalid } , function(data) {
			
			if(data == 'success'){
				jQuery("#email").val('');
				jQuery("#commentarea").val('');
				jQuery("#name").val('');
				jQuery(".contactmessage").html(successmessage).fadeIn().delay(1000).fadeOut();
				jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			
			} else {
				jQuery(".contactmessage").html(failedmessage).fadeIn().delay(1000).fadeOut();
				jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
				return false;
				
			}
			
		});
		
		/* 
		 *
		 * POSTING DATA USING AJAX AND
		 * THEN RETREIVING DATA FROM PHP SCRIPT
		 *
		*/
		
	}
	
);
/*
 * AJAX Section
 * This function will handle the contact process through AJAX
 */

});

// Google maps api settings //
jQuery(window).load(function() {
	
/* Google Maps */
	loadGoogleMaps();
	
});

function initGoogleMaps() {
	/* Google Maps Init */
	var myLatlng = new google.maps.LatLng(-37.817942, 144.964977);
	var myOptions = {
		zoom: 16,
		center: myLatlng,
		popup: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("googlemap"), myOptions);
	
	var marker = new google.maps.Marker({
		position: myLatlng, 
		map: map,
		title:"Our Company Location"
	});
	google.maps.event.addListener(marker, 'click', function() {
		map.setZoom(17);
	});
}
  
function loadGoogleMaps() {
	/* Google Maps Load */
	if(jQuery('#googlemap').length != 0){
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initGoogleMaps";
		document.body.appendChild(script);
	}
}