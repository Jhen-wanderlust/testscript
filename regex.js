/**
*** used of names
*** alphabet + dash(-) + period(.)
**/
function isNameKey(evt)
{
	
	if(evt.keyCode!=8 && evt.keyCode!=32)
	{
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		//var regex = /[0-9]|\./;

		// var regex = /[- . +a-zA-Z ]/;

		//20160809 - karlo - included Ñ,ñ to regex (\u00d1 \u00f1)
		var regex = /[- . +a-zA-Z \u00d1 \u00f1]/;

		if( !regex.test(key) )
		{
			theEvent.returnValue = false;	
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}

}

/**
*** used of alphanumeric
*** alphabet + numbers + dash(-) + period(.)
**/
function isAlphaNum(evt)
{
	
	if(evt.keyCode!=8 && evt.keyCode!=32)
	{
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		//var regex = /[0-9]|\./;
		var regex = /[a-zA-Z0-9]/;

		if( !regex.test(key) )
		{
			theEvent.returnValue = false;	
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}

	
}

//20191115 donita
function disallow_tag(regex="")
{
	// console.log('disallow tag');

		//20191123 donita 
	jQuery('body').find('input ,textarea').each(function(){
		    	
		
		if(!jQuery(this).hasClass('hasDialogTag'))
		{
			jQuery(this).addClass('hasDialogTag');
	    	jQuery(this).keypress(function(e){
	    		// console.log(e.keyCode);
			    if(e.keyCode == 60 || e.keyCode == 62){
			    	return false;
			    }
			 });
		}
    });

	jQuery('body').find('input:not([onpaste][ondrop][onkeypress]),textarea:not([onpaste][ondrop][onkeypress])').not('#categcde').not('#categcde').not('#modalField_apporder').not('#modalField_scrto').not('#modalField_scrfrom').each(function(){
		    
		
		if(!jQuery(this).hasClass('hasDialogTag2'))
		{	
			jQuery(this).addClass('hasDialogTag2');

	    // 	jQuery(this).keypress(function(e){
	    // 		// console.log(e.keyCode);
			  //   if(e.keyCode == 60 || e.keyCode == 62){
			  //   	return false;
			  //   }
			  // });


	    	jQuery(this).on("paste",function(e){
    		console.log("2")
    		var x = e.originalEvent.clipboardData.getData('text/plain');
    		//mica 11-18-19
    		x = x.replace(/</g, "");
    		x = x.replace(/>/g, "");
    		var newval = jQuery(e.target).val() + x;
			if(jQuery(e.target).attr('maxlength')!=undefined)
			{
				var maxlen = jQuery(e.target).attr('maxlength');
				newval = newval.substring(0,maxlen);
			}
			
			if(jQuery(e.target).prop('disabled') == true || jQuery(e.target).prop('readonly') == true)
		    {

		    }
		    else
		    {
				// e.originalEvent.dataTransfer.setData('text/plain',x);
				// Kiel 11-27-2019 - Added maxlength validation 
				if(jQuery(e.target).attr('maxlength')!=undefined)
				{
					var maxlen = jQuery(e.target).attr('maxlength');
					x = x.substring(0,maxlen);
				}
				jQuery(e.target).val(x);
				e.preventDefault();
		    }
    	});
    	//mica 11-18-19
    	jQuery(this).on("drop",function(e){
    		var x = e.originalEvent.dataTransfer.getData('text/plain');
    		//mica 11-18-19
    		x = x.replace(/</g, "");
    		x = x.replace(/>/g, "");
			var newval = jQuery(e.target).val() + x;
			if(jQuery(e.target).prop('disabled') == true || jQuery(e.target).prop('readonly') == true)
		    {

		    }
		    else
		    {
				// e.originalEvent.dataTransfer.setData('text/plain',x);
				jQuery(e.target).val(x);
				e.preventDefault();
		    }
    	});
	    }

    	
    });
}


//20191030 donita
function prevent_Event(evt)
{
	evt.preventDefault();
}


function isCheck_paste(evt, thisobj,regex)
{
	xval = evt.clipboardData.getData('text');
	switch (regex) {
		case "namekey":
			regex = /[- . +a-zA-Z \u00d1 \u00f1]/;
			break;
		case "alphanum":
			regex = /[a-zA-Z0-9]/;
			break;
		case "alphanumdash":
			regex = /[- +a-zA-Z0-9]/;
			break;
		case "numberkey":
			regex = /[0-9]/;
			break;
		case "numberkeywithperiod":
			regex = /[0-9]|\./;
			break;
		case "characterkey":
			regex = /[, . a-zA-Z]/;
			break;
		case "contactkey":
			regex = /[0-9]|\+|\(|\)|\-/;
			break;
		case "emailkey":
			// return "onblur='return isEmailKey(\"$elem_id\")' onpaste='return false'";
			break;
		default:
			regex = /[a-zA-Z \u00d1 \u00f1]/;
			break;
	}

	var newval = "";

	for (var i = 0; i < xval.length; i++) 
	{
		// console.log(xval[i]);
		if( !regex.test(xval[i]) )
		{
		}
		else
		{
			newval += xval[i];
		}
	}	
	xnewval = jQuery(thisobj).val() + newval;

	//20191112 donita
    // if(jQuery("#"+evt.target.id).prop('disabled') == true)
    //20191121 donita - use the target tag/element
    if(jQuery(evt.target).prop('disabled') == true)
    {

    }
    else
    {
		xmaxlength = jQuery(thisobj).attr('maxlength');
		xnewval = jQuery(thisobj).val() + newval;
		jQuery(thisobj).val("");
		jQuery(thisobj).val(xnewval.slice(0,xmaxlength));
		jQuery(thisobj).focus();
    }

}

function isCheck_drop(evt, thisobj,regex)
{
	xval = evt.dataTransfer.getData('text');
	switch (regex) {
		case "namekey":
			regex = /[- . +a-zA-Z \u00d1 \u00f1]/;
			break;
		case "alphanum":
			regex = /[a-zA-Z0-9]/;
			break;
		case "alphanumdash":
			regex = /[- +a-zA-Z0-9]/;
			break;
		case "numberkey":
			regex = /[0-9]/;
			break;
		case "numberkeywithperiod":
			regex = /[0-9]|\./;
			break;
		case "characterkey":
			regex = /[, . a-zA-Z]/;
			break;
		case "contactkey":
			regex = /[0-9]|\+|\(|\)|\-/;
			break;
		case "emailkey":
			// return "onblur='return isEmailKey(\"$elem_id\")' onpaste='return false'";
			break;
		default:
			regex = /[a-zA-Z \u00d1 \u00f1]/;
			break;
	}


	var newval = "";

	for (var i = 0; i < xval.length; i++) 
	{
		if( !regex.test(xval[i]) )
		{
		}
		else
		{
			newval += xval[i];
		}
	}	
	xnewval = jQuery(thisobj).val() + newval;
	if(jQuery(thisobj).attr('maxlength')!=undefined)
	{
		var maxlen = jQuery(thisobj).attr('maxlength');
		xnewval = xnewval.substring(0,maxlen);
	}
	jQuery(thisobj).val("");
	jQuery(thisobj).val(xnewval);
}
/**
*** used of alphanumeric
*** alphabet + numbers + dash(-)
**/
function isAlphaNumDash(evt)
{
	
	if(evt.keyCode!=8 && evt.keyCode!=32)
	{
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		//var regex = /[0-9]|\./;
		var regex = /[- +a-zA-Z0-9]/;

		if( !regex.test(key) )
		{
			theEvent.returnValue = false;	
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}

	
}

/**
*** number only
**/
function isNumberKey(evt)
{
	if(evt.keyCode!=8)
	{
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		//var regex = /[0-9]|\./;
		var regex = /[0-9]/;

		if( !regex.test(key) )
		{
			theEvent.returnValue = false;
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}
}

/**
*** number + period(.)
**/
function isNumberKeyWithPeriod(evt)
{
	if(evt.keyCode!=8)
	{
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		var regex = /[0-9]|\./;

		inputval=$(evt.srcElement).val()
		inputval=inputval+key;

		var period_count = (inputval.split(".").length - 1);


		if( !regex.test(key) || (evt.keyCode==46 && period_count >1))
		{
			theEvent.returnValue = false;
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}
}

function isCharacterKey(evt)
{
	
	if(evt.keyCode!=8 && evt.keyCode!=32)
	{
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		//var regex = /[0-9]|\./;
		var regex = /[, . a-zA-Z]/;

		if( !regex.test(key) )
		{
			theEvent.returnValue = false;	
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}
}
function isCharacterKey_2(evt)
{
	
	if(evt.keyCode!=8 && evt.keyCode!=32)
	{
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		//var regex = /[0-9]|\./;
		var regex = /[a-zA-Z]/;

		if( !regex.test(key) )
		{
			theEvent.returnValue = false;	
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}
}

/**
*** number + minus sign
**/
function isContactKey(evt)
{
	if(evt.keyCode!=8)
	{
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		//var regex = /[0-9]|\./;
		var regex = /[0-9]|\+|\(|\)|\-/;

		if( !regex.test(key) )
		{
			theEvent.returnValue = false;
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}
}

/**
*** validation if the inputed value is a valid email
**/
function isEmailKey(id) 
{
	var x = $('#'+id).val();
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");

	if(x.trim()=='')
	{

	}
	else
	{
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
			// alert("Not a valid e-mail address");
			alertify.alert('Not a valid e-mail address.');
			$('#'+id).val('');
		}
	}
}

/**
*** added 06262015 -jep
*** auto compute age by date inputted in DOB
**/
function ageCount(xid_dob,xid_age) {

    var date1 = new Date();

    var dob = document.getElementById(xid_dob).value;

    var new_dob_str = dob.replace(/-/g,"/");

    var date2 = new Date(new_dob_str);

    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    //Regex to validate date format (dd/mm/yyyy)
    if(dob!='')
    {
    	if (pattern.test(new_dob_str)) 
	    {
	        var today = new Date();
		    var birthDate = date2;
		    var age = today.getFullYear() - birthDate.getFullYear();
		    var m = today.getMonth() - birthDate.getMonth();
		    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		        age--;
		    }
	        //calculating age                       
	        document.getElementById(xid_age).value = age;
	        document.getElementById(xid_age).focus();
	        return true;
	    } 
	    else 
	    {
			if(dob!='')
			{
				alertify.alert("Invalid date format. format!");
				return false;
			}
	    }
    }
	else
	{
		document.getElementById(xid_age).value = 0;
	}
	
    

}

function paste_syspar_regex(evt)
{

    var textVal = jQuery(evt.target).val();
	evt.preventDefault();
    evt.returnValue = false;   
    // console.log("pass2")
	var caretPos =event.target.selectionStart;
	var caretEnd = event.target.selectionEnd;
	var textAreaTxt = jQuery(evt.target).val();
    // console.log(jQuery("#"+evt.target.id).attr('maxlength'));

    var text = null;
    if (window.clipboardData) 
      text = window.clipboardData.getData("Text");
    else if (evt && evt.clipboardData)
      text = evt.clipboardData.getData("Text");

    var validate_spechar = jQuery('#pager_spechar').val();
    validate_spechar = validate_spechar.split("");
    validate_spechar = "[\\"+validate_spechar.join('\\')+"]";

    var regex = new RegExp(validate_spechar,'mg');


    //20191106 donita
    var xmaxlen = jQuery(evt.target).attr('maxlength');

    var newstr = evt.target.value;
    var trimstr = newstr;


    //20191107 donita
    // console.log(evt.target.id);
    console.log(jQuery(evt.target).prop('disabled'))
    if(jQuery(evt.target).prop('disabled') == true || jQuery(evt.target).prop('readonly') == true)
    {

    }
    else
    {
        if( regex.test(text) )
        {

            alertify.confirm('The text you are trying to paste contains invalid character(s). Remove special character(s) and continue pasting ?',function()
            {
                evt.target.value = text.replace(regex, "");

                // //20191106 donita
                newstr = evt.target.value;
                // //mica 11-18-19
                newstr = newstr.replace(/</g, "");
                newstr = newstr.replace(/>/g, "");
                // //end
                trimstr = textVal.substring(0, caretPos) + newstr + textVal.substring( caretEnd );

                evt.target.value = trimstr;
                // // console.log(evt.target,text.replace(regex, ""));
		  		jQuery(evt.target).focus();
		   		evt.target.selectionStart = caretPos + trimstr.length
		   		evt.target.selectionEnd = caretPos + trimstr.length


            },function()
            {

            })
        }
        else
        {
            evt.target.value = text;

            //20191106 donita
            newstr = evt.target.value;
            newstr = newstr.replace(/</g, "");
            newstr = newstr.replace(/>/g, "");

            trimstr = textVal.substring(0, caretPos) + newstr + textVal.substring( caretEnd );

            evt.target.value = trimstr;
            // // console.log(evt.target,text.replace(regex, ""));
	  		
	   		evt.target.selectionStart = caretPos + trimstr.length
	   		evt.target.selectionEnd = caretPos + trimstr.length
        }
    }
	
}

function keydown_syspar_regex(evt)
{
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = theEvent.key
	
	var validate_spechar = jQuery('#pager_spechar').val();
	validate_spechar = validate_spechar.split("");
	validate_spechar = "[\\"+validate_spechar.join('\\')+"]";
	
	var regex = new RegExp(validate_spechar);

	if( regex.test(key) )
	{
		theEvent.returnValue = false;   
		if(theEvent.preventDefault) theEvent.preventDefault();
	}
}
