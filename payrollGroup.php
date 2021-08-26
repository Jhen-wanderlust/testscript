
<html>
	<head>

		<script type="text/javascript" src="../lib/jquery/1.10.4/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="../lib/jquery/1.10.4/js/jquery-ui-1.10.4.custom.min.js"></script>
<link type="text/css" rel="stylesheet" href="../lib/jquery/1.8.9/css/green_style/jquery-ui-1.8.21.custom.css">

<!--validation-->
<!--
<script src="../lib/jquery/jquery.validationEngine-en.js" type="text/javascript"></script>
<script src="../lib/jquery/jquery.validationEngine.js" type="text/javascript"></script>
<link rel="stylesheet" href="../lib/jquery/validationEngine.jquery.css" type="text/css" media="screen" title="no title" charset="utf-8" />
-->

<!--autonumeric-->
<script type="text/javascript" src="../lib/jquery/jquery.autonumeric.js"></script>

<!--splitter-->
<!--
<script src="../lib/jquery/jquery.splitter.js" type="text/javascript"></script>
<script src="../lib/jquery/jquery.cookie.js" type="text/javascript"></script>
-->

<!--spinner-->
<!--
<script type="text/javascript" src="../lib/jquery/ui.spinner.min.js"></script>
-->

<!--table-hover-->
<link rel='stylesheet' type='text/css' media='screen' href='css_pay/table.css'/>
<!-- <link rel='stylesheet' type='text/css' media='screen' href='css_pay/layout_body_.css'/> -->
<!-- <link rel='stylesheet' type='text/css' media='screen' href='css_pay/layout_header_.css'/> -->

<link rel='stylesheet' type='text/css' media='screen' href='css_pay/main.css'/>
<!-- <link rel='stylesheet' type='text/css' media='screen' href='css_pay/global_style.css'/> -->

<link rel='stylesheet' type='text/css' media='screen' href='css_pay/layout_body_lst.css'/>
<link rel='stylesheet' type='text/css' media='screen' href='css_pay/layout_header_lst.css'/>

<!-- <link rel='stylesheet' type='text/css' media='screen' href='css_pay/layout.css'/> -->
<script type="text/javascript" src="javascript/sha1.js"></script>
<script src = "javascript/greaterdate_function.js" type="text/javascript"></script>
<script src="javascript/jquery.tablesorter.min.js" type="text/javascript"></script>
<script type="text/javascript" src="javascript/jquery.equalHeight.js"></script>

<!--pager-->
<!--
<script type="text/javascript" src="./lib/jquery_new/jquery-1.11.0.min.js"></script>
-->
<script type="text/javascript" src="pager/pager.js"></script>
<link rel="stylesheet" href="../css/modified_layout.css" type="text/css" media="screen" />
<link rel="stylesheet" href="../css/pager.css" type="text/css" media="screen" />
<link rel="stylesheet" href="../css/pager_v2.css" type="text/css" media="screen" />
<script src="javascript/custom_modal.js" type="text/javascript"></script>
<script src="javascript/jquery.blockUI.js" type="text/javascript"></script>

<!--alertify.js-->

<script src="../lib/alertify/alertify.min.js"></script>
<!-- include the core styles -->
<link rel="stylesheet" href="../lib/alertify/css/alertify.min.css" />
<!-- include a theme, can be included into the core instead of 2 separate files -->
<link rel="stylesheet" href="../lib/alertify/css/themes/bootstrap.min.css" />

<!-- karlo 20161116 -->
<script src="javascript/searchmodal/searchable.js" type="text/javascript"></script>

<!-- karlo 20161219 -->
<!-- <script type="text/javascript" src="javascript/webcamjs-master2/webcam.js"></script> -->

<!-- added 20170327 -jep -->
<script type="text/javascript" src="javascript/regex-loader.js"></script>

<link type="text/css" rel="stylesheet" href="../lib/jquery/Datatable/jquery.dataTables.min.css">
<!-- <link type="text/css" rel="stylesheet" href="../lib/jquery/jquery.dataTables.css"> -->
<script type="text/javascript" src="../lib/jquery/Datatable/jquery.dataTables.js"></script>
<script type="text/javascript" src="../lib/jquery/Datatable/jquery.dataTables.min.js"></script>

<script type="text/javascript" src="../lib/jquery/Datatable/dataTables.responsive.js"></script>
<link type="text/css" rel="stylesheet" href="../lib/jquery/Datatable/responsive.dataTables.css">


<link type="text/css" rel="stylesheet" href="../javascript/lst_freeze_table/lst_freeze_table.css">
<script type="text/javascript" src="../javascript/lst_freeze_table/lst_freeze_table.js"> </script>

<style type="text/css">
	
	.applist_button,
	.dash_btn_container figure .img_con,
	.dash_btn_container figure .img_con_2,
	.panel-header,
	header#header,
	.theme_header,
	#hris_sub_container ul figure,
	.dbg_empstatico,
	::-webkit-scrollbar,
	::-webkit-scrollbar-thumb,
	.gp,
	.ui-widget-header,
	.fc-day-header,
	.div_border_front2 table:nth-child(2) input[type="button"],
	.ui-widget-header,
	.button1{
		background: #627d4d !important;
	}

	.div_border_front2 table:nth-child(2) input[type="button"],
	.head_title,
	.ui-widget-header,
	/*.ui-dialog .ui-dialog-buttonpane button,*/
	._program li,
	.button1,
	._figure span:first-child ,
	#vc_history_link {
		color: #fff !important;
	}

	.dc_empstatico,
	#forgot,
	#hris_sub_container header{
		color: ;  /* colored */
	}


	.fc-day-header
	{
		color : white !important;;
	}

	.head_title,
	.apptitle,
	.head_title1,
	.apptitle1 {
		text-transform: uppercase;
	}
</style><input type="hidden" value="" id="server_err_list_user_session_err">
<input type="hidden" value="" id="server_err_list_sql_err">
<input type="hidden" value="12-10-2019" id="pwd_date_expired">

<script type="text/javascript">
	var lstv_errorHandlerValidated=0;

	jQuery(document).ready(function()
	{
		if(jQuery('#server_err_list_user_session_err').val()!="")
		{

		    userSessionErrHandler(jQuery('#server_err_list_user_session_err').val());
		}
		else if( jQuery('#server_err_list_sql_err').val()!="")
		{

			sqlErrHandler(jQuery('#server_err_list_sql_err').val());
		}
	})

	function userSessionErrHandler(errorcode)
	{
	  	if(lstv_errorHandlerValidated==0)
	  	{
	  		if(errorcode=="0a46453dc2fb96ac3fe194c788a331d7b7d149c3") //initial login
		    {
		      alertify.alert('Initial Login. You are required to change your password.',function(){
		          window.open('util_set_password.php','_self');
		        });
		    }
		    else if(errorcode=="c8c6cbbef8b1cf3dea3ce00a2dddf1c837f34750") //password has been reset
		    {
		      alertify.alert('Your password has been reset. You are required to change your password.',function(){
		          window.open('util_set_password.php','_self');
		        });
		    }
		    else if(errorcode=="cd5ce33cf637740d1feeeced5d5bd30830e545e1") //password near to expired
		    {
		      alertify.alert('Your password will expire on '+jQuery('#pwd_date_expired').val());
		    }
		    else if(errorcode=="3fa02d249aa151013b03059d2e2490cb9536844c") //password expired
		    {
		      alertify.alert('Password has already expired.',function(){
		          window.open('util_set_password.php','_self');
		        });
		    }
	  		else if(errorcode=="e9367cf5c4f4a928b943c0335365afe3411fd753") //session_expired
		    {
		      alertify.alert('The system has been idle for too long, you need to Login again.',function(){
		          window.open('../login_view.php','_self');
		        });
		    }
		    else if(errorcode=="228c66c5495e196abf5e45e6d8c58182b6f0ac80") //someone logged in
		    {
		      alertify.alert('Someone login in this account.',function(){
		          window.open('../login_view.php','_self');
		        });
		    }
		    else if(errorcode=="76cb0c0d6ca6541d727e90fd9fb9b93f2b552c10") //must login
		    {
		      alertify.alert('You must login first.',function(){
		          window.open('../login_view.php','_self');

		        });
		    }
	  	}

	  	lstv_errorHandlerValidated=1;
	}

	function sqlErrHandler(responseText)
	{
		alertify.alert(responseText);
	}

	$( window ).ajaxError(function( event, jqxhr, settings, thrownError )
	{
		jQuery.unblockUI();
		console.log(thrownError);
		if(jqxhr.responseText!=undefined)
		{
			var json_parse = JSON.parse(jqxhr.responseText);
			if(json_parse.user_session_err!=undefined)
			{
				userSessionErrHandler(json_parse.user_session_err);
			}
			else if(json_parse.sql_err!=undefined)
			{
				sqlErrHandler(json_parse.sql_err);
			}
			else
			{
				alertify.alert(jqxhr.responseText);
			}
		}
	})

	function validatePageDataReq(page)
	{
		alertify.alert('Required data for this page are missing. Please try again.',function()
		{
			window.location=page;
		})
	}
</script>		
		<title>Web Payroll</title>	
		<link REL="SHORTCUT ICON" HREF="../img/lst.png">	
		<!-- <link REL="SHORTCUT ICON" HREF="../images/lst_logo.ico"> -->
		<!-- <META http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> -->
		<META http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="keywords" content="Lee Systems Technology Ventures">
		<script src="../lib/js/hideshow.js" type="text/javascript"></script>
		<script src="javascript/regex.js" type="text/javascript"></script>
		<link href='css_pay/main.css' type='text/css' rel='stylesheet'>
		<link rel="stylesheet" type="text/css" href="../lib/font-awesome-4.6.2/css/font-awesome.min.css"/>

		<!-- Modified Checkbox and Radio Button josef/karlo -->
	    <link href='css_pay/mod_checkbox_radiobtn.css' type='text/css' rel='stylesheet'>
		<script src="../lib/mod_checkbox_radiobtn.js" type="text/javascript"></script>

		<link type="text/css" href="../css/new_style.css" rel="stylesheet" />

		<script src="javascript/jquery.freezetablecolumns.1.1.js"></script>
		<!-- <script src="../lib/cntxtmen.js"></script> -->
		<link rel="stylesheet" type="text/css" href="../css/contextmenu.css">

		<!-- added 20160419 -jep -->
		<!-- <link href='css_pay/global_style.css' type='text/css' rel='stylesheet'> -->

		<!-- added 20161228 -jep -->
		<script src="../lib/jquery.inputmask.bundle.js"></script>
		<script type="text/javascript" src="javascript/format_masking.js"></script>

		<!-- added 20170321 -jep -->
		<script src="javascript/datepicker-readonly.js" type="text/javascript"></script>

		<!-- added 20170327 -jep -->
		<script type="text/javascript" src="javascript/regex-loader.js"></script>

		<style>
			#tbl_entry {
				width: 100%;
				background-color: lightgray;
			}

			#tbl_entry .tbody {
				max-height: 400px;
				/* height: auto; */
				overflow-y: auto;
			}

			.header_btn {
				padding: 10px 0 2px 0;
			}

			.header_col {
				width: 100%;
			}
			.div_paygroup_holder
			{
				height: 250px; 
				border: 1px solid gainsboro; 
				margin-bottom: 5px;
				overflow-y: auto;
				overflow-x: hidden;
				min-width: 400px;
			}


			table._inc_payGrp {
		        border: 1px solid #bbb;
		        height: auto;
		        border-collapse: collapse;
		        background: #f1f1f1;
		        width: 98%;
		    }

		    table._inc_payGrp {
				border-collapse: collapse;
				border: 1px solid #bbb;
			}
			table._inc_payGrp th {
				background: #bbb;
			}
			table._inc_payGrp tr:nth-child(odd){
				background: #ddd;
			}
			table._inc_payGrp tr:nth-child(even){
				background: #eee;
			}
			table._inc_payGrp td {
				padding: 5px 0;
			}


			 td label {
			    text-transform: capitalize;
			  }
			
			.tblcontrol
			{
				margin-bottom: 30px;
			}

			.numfield
			{
				text-align: right;
			}

			div#right, table#tbl_navigation{
				margin-bottom: 50px;
			}

			td input.table-td-field{
				border: 1px solid transparent;
				background-color: transparent;
			}

			.left-align
			{
				text-align: left !important;
			}

			.right-align
			{
				text-align: right !important;	
			}

			.center-align
			{
				text-align: center !important;		
			}


			* 
			{
				letter-spacing: 0.04em;
			}

			.ui-dialog .ui-dialog-titlebar-close span
			{
				   margin: -8px;
			}

			#menu_panel {
				 display:none;
			}

			#mensub {
				 display:none;
			}
			.ui-dialog,
			.ui-dialog .ui-dialog-titlebar {
			    border-radius: 0;
			}
			.ui-corner-all {
				/*box-shadow: 0 1px 2px #666;*/
			}
			#fixd_con {
				width: 1240px;
				margin: 0 auto;
				position: relative;
			}
			.ui-dialog {
			    box-shadow: 0 0 10px rgba(0,0,0,0.8);
			}
			.ui-corner-all {
				padding: 0;
				border: none;
			}
			.ui-widget-header {
				background: #627d4d;
				color: #fff;
			}
			.ui-tabs .ui-tabs-nav .ui-tabs-anchor {
			    padding: .65em !important;
			}
			.ui-dialog .ui-dialog-buttonpane button {
				background: #627d4d;
				color: #fff;
			}
			.alertify .ajs-dimmer {
				z-index: 1002;
			}
			#dash_con {
			    width: 1240px;
			    height: auto;
			    margin: 0 auto 50px;
			}
			#sidebar h3 i {
			    float: right;
			    padding: 0 15px 0;
			    font-weight: bold;
			    font-size: 18px;
			    color: #999;
			}
			#sidebar h3:hover i {
			    float: right;
			    padding: 0 15px 0;
			    font-weight: bold;
			    font-size: 18px;
			    color: #111;
			    animation: move 1.5s 1;
			    -moz-animation: move 1.5s 1;
			    -webkit-animation: move 1.5s 1;
			}
			.ui-tooltip {
				background: rgba(0,0,0,0.5);
				color: #fff;
				box-shadow: none;
			}
			.ui-tooltip::before {
			    content: '';
			    border-bottom: 12px solid rgba(0,0,0,0.5);
			    border-left: 10px solid transparent;
			    border-right: 10px solid transparent;
			    position: absolute;
			    top: -12px;
			    left: 0;
			    right: 0;
			    margin: 0 auto;
			    width: 1px;
			}
			#main .module header h3 {
				text-align: center;
			}

			._left {
				/*float: left;*/
				vertical-align: top;
				display: inline-block;
			}
			._right {
				/*float: right;*/
				vertical-align: top;
				display: inline-block;
			}
			p._ex {
				color: #aaa;
				font-weight: normal !important;
			}

			@keyframes move {
				20% {
					transform: translateX(-10px);
				}
				40% {
					transform: translateX(5px);
				}
				60% {
					transform: translateX(-1px);
				}
				80% {
					transform: translateX(2px);
				}
				100%{
					transform: translateX(0px);
				}
			}
			@-moz-keyframes move {
				20% {
					transform: translateX(-10px);
				}
				40% {
					transform: translateX(5px);
				}
				60% {
					transform: translateX(-1px);
				}
				80% {
					transform: translateX(2px);
				}
				100%{
					transform: translateX(0px);
				}
			}
			@-webkit-keyframes move {
				20% {
					transform: translateX(-10px);
				}
				40% {
					transform: translateX(5px);
				}
				60% {
					transform: translateX(-1px);
				}
				80% {
					transform: translateX(2px);
				}
				100%{
					transform: translateX(0px);
				}
			}
			._pointer {
				cursor: pointer;
			}
			.cms_content p {
				font-weight: normal;
			}
			#secondary_bar {
				transition: all 0.3s;
			}
			input.require,
			select.require {
				padding: 5px;
				width: 100%;
				min-width: 220px;
				border-radius: 3px;
				border: 1px solid #bbb;
			}
			input.class_date {
				padding: 5px;
				width: 100%;
				min-width: 220px;
			}
			#pager_modal,
			.ui-dialog {
				z-index: 1000;
			}
			#pager_modal table td:first-child {
			    padding: 10px;
			    white-space: nowrap;
			}
			div#ui-datepicker-div {
				border: 1px solid #bbb;
				z-index: 1002 !important;
			}
			.site_title a img {
			    width: 45px;
			    padding: 5px 0;
			}
			.ui-autocomplete {
				width: 300px;
			}

			._left fieldset,
			._right fieldset {
				padding: 5px;
			}
			._inc_payGrp {
				border-collapse: collapse;
				border: 1px solid #bbb;

				margin: 5px auto 10px;
			}
			table._inc_payGrp tr:nth-child(odd) {
				background: #eee;
			}
			table._inc_payGrp tr:nth-child(even) {
				background: #f1f1f1;
			}
			table._inc_payGrp td {
				cursor: default;
				text-align: center;
				margin: 0 auto;
			}
			table._inc_payGrp tr:nth-child(odd) {
				background: #eaeaea;
			}
			table._inc_payGrp tr:nth-child(even) {
				background: #f4f4f4;
			}
		    fieldset label {
		        width: 100% !important;
		    }
			fieldset label,
			table {
				font-size: 14px;
			}
			fieldset legend {
				/*font-size: 16px !important;*/
				font-weight: 700;
				color: #3e582a;
			}

			/* ----------- PROJECT ASSIGNMENT RULES ------------*/
			.modal_inpt_width {
				width: 250px !important;
			}
			div#newprojdialog fieldset label,
			.empsearch {
				float: unset !important;
				display: inline-block !important;
			}
			div#newprojdialog fieldset select {
				margin: 0;
				/*padding: 6px 2px;*/
				height: 32px;
			}
			div#newprojdialog .inputblock:first-child {
				padding-bottom: 15px;
			}

			/* ------------------------------------------------ */

			.flexigrid div.bDiv td div {
			    padding: 10px 1px !important;
			    font-size: 15px !important;
			}

			/* ---------------- Freeze Table ------------------ */

			/*#maincontainer */
			#tbl_ot-region1,
			#tbl_ot-region2,

			#tbl_freeze-region1,
			#tbl_freeze-region2 {
				overflow: hidden !important;
			}

			#tbl_ot-region4,
			#tbl_freeze-region4 {
				height: 100% !important;
			}

			#tbl_ot-region4, #tbl_freeze-region4 {
				overflow-x: scroll !important;
			}

			#tbl_ot-region3 div , #tbl_freeze-region3 div {
				overflow-x: scroll !important;
			}

			.tblfreeze tr th, .tblfreeze tr td {
			    text-align: left;
			}

			#tbl_ot-region2 table,
			#tbl_freeze-region2 table {
				text-align: left;
			}
			#tbl_ot-region3 table,
			#tbl_freeze-region3 table {
				text-align: center;
			}

			#tbl_ot-region1,
			#tbl_ot-region2,
			#tbl_ot-region3,
			#tbl_ot-region4,

			#tbl_freeze-region1,
			#tbl_freeze-region2,
			#tbl_freeze-region3,
			#tbl_freeze-region4 {
				/*overflow-x: auto !important;*/
			}

			#tbl_ot-region1 colgroup col:nth-child(),
			#tbl_ot-region2 colgroup col:nth-child(),
			#tbl_ot-region3 colgroup col:nth-child(),
			#tbl_ot-region4 colgroup col:nth-child(),

			#tbl_freeze-region1 colgroup col:nth-child(),
			#tbl_freeze-region2 colgroup col:nth-child(),
			#tbl_freeze-region3 colgroup col:nth-child(),
			#tbl_freeze-region4 colgroup col:nth-child() {
				/*overflow-x: auto !important;*/
			}

			#tbl_ot-region1 div,
			#tbl_ot-region2 div,
			#tbl_ot-region4 div,

			#tbl_freeze-region2 div,
			#tbl_freeze-region4 div {
				float: left;
			}

			#tbl_ot-region1,
			#tbl_ot-region3,

			#tbl_freeze-region1,
			#tbl_freeze-region3 {
				/*box-shadow: 1px 0 10px rgba(0,0,0,0.5);*/
				border-right: 1px solid rgba(0,0,0,0.35);
				overflow: hidden !important;
			}
			div#tbl_ot-row1,
			div#tbl_freeze-row1 {
				background: #aaa !important;
			}
			#tbl_ot-region1 table th,
			#tbl_ot-region2 table th,

			#tbl_freeze-region1 table th,
			#tbl_freeze-region2 table th {
				background: #aaa !important;
			}
			#tbl_ot-region1 table td,
			#tbl_ot-region2 table td,

			#tbl_freeze-region1 table td,
			#tbl_freeze-region2 table td {
				/*background: #ccc !important;*/
				background: #aaa !important;
			}


			#maincontainer table {
				/*border: 1px solid #ccc !important;*/
				font-size: 13px;
				/*table-layout: unset !important;*/
			}
			#maincontainer table tr:nth-child(odd) {
				background: #fff;
			}
			#maincontainer table tr:nth-child(even) {
				background: #dadada;
			}
			div#tbl_ot-div,
			div#tbl_freeze-div {
				box-shadow: 0 1px 3px #888 !important;
			}
			._back_btn {
				position: absolute;
				margin: 8px;
			}
			input[type="text"]:disabled,
			input[type="text"]:readonly {
				cursor: not-allowed;
			}
			input[type="checkbox"],
			input[type="radio"],
			fieldset label {
				vertical-align: middle;
				display: inline-block;
			}
			footer {
				float: unset !important;
			}

			.dis_chk_radio {
				opacity: 0.5;
			}
			.dis_opa_blur {
				opacity: 0.5;
				/*background: #aaa !important;*/
				color: #000;
			}
			.dis_opa_blur,
			.dis_opa_blur label,
			.dis_opa_blur input[type=checkbox] {
				cursor: default !important;
			}
			.dis_opa_blur label:after {
				border-color: #fff !important;
			}
			/*.checkbox_container:hover label.dis_hover:after {
				opacity: 0 !important;
			}*/

			.checkbox_container > .class_disable {
				opacity: 0.5;
			}
			.disabled {
				color: #333333 !important;
				background-color: #e6e6e6 !important;
			}
			.disabled:hover {
				color: #333333 !important;
				background-color: #e6e6e6 !important;
			}

			.bnkcrdng_table {
				background: #f9f9f9;
				box-shadow: 0 1px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.05);

				/*vertical-align: top;*/
				/*display: inline-block;*/
			}
			.bnkcrdng_table h4 {
				font-size: 18px;
			}
			.bnkcrdng_table .alttable strong {
				white-space: nowrap;
			}
			.bnkcrdng_table header {
				padding: 10px;
				font-size: 18px;
				font-weight: bold;
				font-family: arial;
				color: #000;
				border-bottom: 1px solid #ddd;
			}

			._inc_payGrp td:first-child .checkbox_container {
				margin: 0 auto;
			}
			form#myform {
				margin: 0 auto 50px;
			}
			
			.sidebar_con {
				opacity: 0;
				left: -23%;
				z-index: 20;
			}
			.sidebar_con,
			#menu2,
			#div_menu {
				transition: left 0.3s, opacity 0.5s;
			}
			.slideltr {
				/*transform: translateX(100%) !important;*/
				left: 0 !important;
				opacity: 1 !important;
			}
			.slideltrv2 {
				/*transform: translateX(0) !important;*/
				/*left: 0;*/
			}

			.save:focus,.exit:focus,.print:focus
			{
				/*box-shadow: 0 0 10px rgba(3, 28, 74, 0.88), 0 0 20px rgba(6, 18, 80, 0.64), 0 0 40px rgba(11, 21, 95, 0.28);	*/
			}
			._fixed {
				overflow: hidden !important;
			}

			.MonthDatePicker .ui-datepicker-month
			{
			    display:none;   
			}
			.HideTodayButton .ui-datepicker-buttonpane .ui-datepicker-current
			{
			    visibility:hidden;
			}

			.hide-calendar .ui-datepicker-calendar
			{
				display:none!important;
				visibility:hidden!important
			}

			i.datepicker_clear_btn
			{
				margin-left:-20px;
				color: #00207b;
				font-size: 15px;
			}

			#vc_history_link
			{
				color: white;
			}

			.btn-printd
			{
				width: 220px;
				padding: 5px;
				cursor: pointer;
			}

			.paycode_container .btn-printd:hover
			{
			    background: #627d4d;
			    color: #fff;
			    cursor: pointer;
			}


			.save_exit{
				position: absolute;
			    top: 0px;
			    bottom: 0px;
			    right: 85px;
			    margin: auto;
			}

			.exit_save{
				position: absolute;
			    top: 0px;
			    bottom: 0px;
			    right: 10px;
			    margin: auto;
			}


			.head_logo{
				width: auto; height: 50px;
			}

			.head_title {
				font-size: 2em;
				align-self: center;
				margin-left: 20px;
				/*color: #fff;*/
			}

			.flex {
				display: flex;
			}

			.lst_freeze_table_container .thead {
				z-index: 5 !important;
			}
		</style>

		<script type="text/javascript">
			alertify.defaults.glossary.title="Web Payroll";
			jQuery(window).ready(function()
			{
				blockui();
				jQuery("script").removeAttr('src').text('LSTV');
		        jQuery("script").remove();
			})

			jQuery(window).load(function()
			{
				jQuery('#main').fadeIn();
				jQuery.unblockUI();
			})

			var skip_page_ajax=[];
			skip_page_ajax.push("menu_view_ajax.php"); 

			jQuery(function(){

				jQuery(document).ajaxSend(function (event, jqxhr, settings)
				{
					if(jQuery.inArray(settings.url, skip_page_ajax) == -1)
					{
						blockui();
					}
				});

				jQuery(document).ajaxSuccess(function (event, jqxhr, settings)
				{
					if(jQuery.inArray(settings.url, skip_page_ajax) == -1)
					{
						jQuery.unblockUI();
					}
				});

				// jQuery.ajaxSetup({
				//   xhr: function() {
				//         var xhr = new window.XMLHttpRequest();
				//         xhr.upload.addEventListener("progress", function(evt) {
				//             if (evt.lengthComputable) {
				//                 var percentComplete = (evt.loaded / evt.total) * 100;

				//                 // console.log(evt,'upload');
				//                 console.log(percentComplete,'upload');
				//                 //Do something with upload progress here
				//             }
				//        }, false);

				//        xhr.addEventListener("progress", function(evt) {
				//            if (evt.lengthComputable) {
				//                var percentComplete = (evt.loaded / evt.total) * 100;

				//                console.log(percentComplete,'progress');
				//                //Do something with download progress
				//            }
				//        }, false);

				//        return xhr;
				//     },
				// });
				
				var elementPosition = jQuery('#secondary_bar').offset();

				if(jQuery('td.tooltip').hasClass('left'))
				{
					jQuery('td.tooltip').removeClass('left');
				}
				else
				{

				}

				$('.sidebar_con, ._menu2, #slide_right_con, .bub_sub_con, #hris_container li figure').contextmenu(function() {
				    // return false;
				});

				$(".date-picker-year").datepicker({
			        changeMonth: false,
			        changeYear: true,
			        showButtonPanel: true,
			        dateFormat: "yy",
			        beforeShow: function (e, t) {
			            $(this).datepicker("hide");
			            $("#ui-datepicker-div").addClass("hide-calendar");
						$("#ui-datepicker-div").addClass('MonthDatePicker');
						$("#ui-datepicker-div").addClass('HideTodayButton');
			        },
					onClose: function(dateText, inst){
						var n = Math.abs($("#ui-datepicker-div .ui-datepicker-year :selected").val() - 1) + 2;
						 $(this).datepicker("setDate", new Date(null, n, null));
					}
			    });

			    jQuery('body').on('focus','.hasDatepicker',function()
			    {
			    	if(!jQuery(this).hasClass('lstv-changed'))
			    	{
					    jQuery(this).datepicker("option", "dateFormat", "mm-dd-yy");
					    jQuery(this).datepicker("option", "changeMonth", true);
					    jQuery(this).datepicker("option", "changeYear", true);
					    jQuery(this).datepicker("option", "yearRange", "1901:2041");
					    jQuery(this).addClass("lstv-changed");
					}
			    })
			    // jQuery('#menu2').hide();
			    load_page2('FIL00');
			    // var bodyheight = $(document).height()-90;
				 // $("#sidebar").height(bodyheight);
				 // $("#menu2").height(bodyheight);

				 // console.log($('form#myform').height());

				 var minhyt = jQuery('form#myform');
				 // alert(minhyt.height());
				 if(jQuery('form#myform').height() >= 580)
				 {
				 	minhyt.css('min-height','640px');
				 }
				 else
				 {
				 	minhyt.css('min-height','unset');
				 }

			});
			
		// $(window).resize(function() {
			 // var bodyheight = $(document).height()-90;
			 // $("#sidebar").height(bodyheight);
			 // $("#menu2").height(bodyheight);
		// });

		 //    document.onkeydown = function (e) {
		 //    	var keycode =e.keyCode;
			//     if (keycode  == 123) { // F12 Disabled
			// 		return false;
			//     }
			// }
		 //    document.onkeyup = function (e) {
		 //   		var keycode =e.keyCode;
			//     if (keycode  == 123) { // F12 Disabled
			// 		return false;
			//     }
			// }

		function lbl_menu_click(xsender)
		{
		    // jQuery('#sidebar').toggle('slide' , {direction : "left"} , 350);
		    // jQuery('#menu2').toggle('slide' , {direction : "left"} , 350);
		    // jQuery('#menu_panel').hide();
		    // jQuery('#sidebar2').hide();


				var sidebarV = jQuery('.sidebar_con');
				if(sidebarV.is(':visible'))
				{
				    jQuery('body').css({
				    	'overflow-y': 'auto',
				    	'overflow-x': 'hidden'

				    });
				    // alert('auto!');
				}
				else
				{
				    jQuery('body').css(
				    	'overflow', 'hidden'
				    	
				    );
				    // alert('hidden!');
				}

			    // jQuery('.sidebar_con').toggle('slide' , {direction : "left"}, 250);
			    // jQuery('#menu2').toggle('slide' , {direction : "left"} , 270);
			    jQuery('.sidebar_con').toggleClass('slideltr');
			    jQuery('#menu2').toggleClass('slideltr');

			    jQuery('#menu_panel').hide();
		}
		
		function lbl_menu2_click(xsender)
		{
		    // jQuery('#menu_panel').toggle('slide', { direction: "up"}, 500);
		    // jQuery('#sidebar').hide();
		    // jQuery('#sidebar2').hide();
		}

		function menu_click(xmenu,xself,men1,men2,xpage)
		{
			start_preloader()
		
			jQuery('#menu'+xself).css('background','#e5fded')
			jQuery('#menu'+xself).css('color','black')
			jQuery('#menu'+men1).css('background','blue')
			jQuery('#menu'+men1).css('color','white')
			jQuery('#menu'+men2).css('color','white')
			jQuery('#menu'+men2).css('background','blue')
			
			jQuery.ajax({
				type : 'post',
				data : {xpage_uri : xpage},
				url : 'index.php',
				success : function (xretobj) {
					
					jQuery('#main').html(xretobj);
					end_preloader();
				}
			});
		}
			
		function logout_click()
		{
			//~ var x = confirm('Do you wish to Logout?');
			//~ if(x)
			//~ {
			    // var logoutForm = document.createElement("form");
			    // logoutForm.method = "POST"; // or "post" if appropriate
			    // logoutForm.action = "../login_applist.php";
			    // logoutForm.submit();
			    document.forms.myform.target    = "_self";
			 	document.forms.myform.action = "../login_applist.php";
			 	document.forms.myform.submit();
			 //~ }
			 //~ else
			 //~ {
			    //~ // return false;
			 //~ }
		}

		function logout_click2()
		{
			var x = alertify.confirm('Do you wish to go back to applist?', function() {
				// var logoutForm = document.createElement("form");
			 //    logoutForm.method = "POST"; // or "post" if appropriate
			 //    logoutForm.action = "../login_applist.php";
			 //    logoutForm.submit();
				document.forms.myform.target    = "_self";
			 	document.forms.myform.action = "../login_applist.php";
			 	document.forms.myform.submit();

				jQuery(".ajs-primary .print").text("Ok");
				jQuery(".ajs-primary .exit").text("Cancel");

			}, function() {

				jQuery(".ajs-primary .print").text("Ok");
				jQuery(".ajs-primary .exit").text("Cancel");
				
			});
			jQuery(".ajs-primary .print").text("Yes");
			jQuery(".ajs-primary .exit").text("No");
		}

		function logout_click3()
		{

                alertify.confirm('Are you sure you want to logout?',function()
                    {
                        blockui();
                        
                        var xdata= "txt_action=logout";
                        jQuery.ajax({
                            type : 'post',
                            data : xdata,
                            url : '../login_proc.php',
                            success : function (xretobj)
                            {
                                window.open('../login_view.php','_self')
                            }
                        });
                    });

			// var x = alertify.confirm('Do you wish to Logout?', function() 
			// {

			// 	document.forms.myform.target    = "_self";
			//  	document.forms.myform.action = "../login_view.php";
			//  	document.forms.myform.submit();

			// 	jQuery(".ajs-primary .print").text("Ok");
			// 	jQuery(".ajs-primary .exit").text("Cancel");

			// }, function() {

			// 	jQuery(".ajs-primary .print").text("Ok");
			// 	jQuery(".ajs-primary .exit").text("Cancel");
				
			// });
			// jQuery(".ajs-primary .print").text("Yes");
			// jQuery(".ajs-primary .exit").text("No");
		}

		function updateCalendarClearButton()
		 {
		 	$('.hasDatepicker').each(function()
		 	{
		 		if($(this).next('i.fa-times').length==0)
		 		{
		 			// alert('test');
		 			$(this).after('<i class="fa fa-times datepicker_clear_btn" aria-hidden="true"></i>');
		 		}
		 	})

		 	$('.hasDatepicker').next('.datepicker_clear_btn').on('click',function()
		 	{	
		 		 $.datepicker._clearDate( $(this).prev('.hasDatepicker') );
		 	});
		 }

		jQuery('.numeric-price').on('input', function (event) { 
            this.value = this.value.replace(/[^0-9,.]/g, '');
        });

        jQuery('.numeric-number').on('input', function (event) { 
            this.value = this.value.replace(/[^0-9]/g, '');
        });


        //20190719 donita
        function validateFloatKeyPress(el, evt,dec_number) 
		{
			var dec_places = dec_number - 1;
		    var charCode = (evt.which) ? evt.which : event.keyCode;
		    var number = el.value.split('.');
		    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
		        return false;
		    }
		    //just one dot (thanks ddlab)
		    if(number.length>1 && charCode == 46){
		         return false;
		    }
		    //get the carat position
		    var caratPos = getSelectionStart(el);
		    var dotPos = el.value.indexOf(".");
		    if( caratPos > dotPos && dotPos>-1 && (number[1].length > dec_places)){
		        return false;
		    }
		    return true;
		}

		function getSelectionStart(o) {
		    if (o.createTextRange) {
		        var r = document.selection.createRange().duplicate()
		        r.moveEnd('character', o.value.length)
		        if (r.text == '') return o.value.length
		        return o.value.lastIndexOf(r.text)
		    } else return o.selectionStart
		}


		 updateCalendarClearButton();

		</script>
		
		<!-- 20190606 gian karlo - validates security code and redirects-->
		
	</head>

	<body style="margin : 0;background-color:white;height:auto">
		<input type="hidden" id="txtcomcode" value="WEBPAYONEDB">
		<div class='context-menu' style="display:none">
			<div class="_about">
				<h2>Payroll</h2>
			</div>
		</div>
	<div id="preLoader"><p></p></div>
		<!-- 9-16-14-->
		<header id="header">
			<hgroup id="fixd_con" class="flex">
				<!-- <div><h1 class="site_title"><a href="main.php"><img src="../img/lst.png"></a></h1></div> -->
				<a href="main.php"><img class="head_logo" src="../img/lst.png"></a>
				<!-- <div><h2 class="section_title">System Subsidiary</h2></div> -->
				<span class="head_title">System Subsidiary</span>
				<div class="_program">
					<ul>
						<li>Payroll</li>
						<li>
							<a href="print_git_version_pdf.php" target="_blank" id="vc_history_link">v2021.02.06.01</a>
						</li>
					</ul>
				</div>
			</hgroup>
		</header> <!-- end of header bar -->
		
		<section id="secondary_bar">
		  <div id="fixd_con">
			<div class="user" >
			    <p>
				<label id="toggle" class="menu_label" onclick='lbl_menu_click(this);'>MENU</label>
			    </p>
			</div>
			<div class="breadcrumbs_container">
			    <article class="breadcrumbs" id="breadcrumbs"></article>
			</div>
			<div>
			    <table class='tbl_user' width=100% cellspacing=0 cellpadding=0;>
				<tr>
					<td  width='5%'><a href="help/help.php" target='_blank'>HELP</td></td>
				    <td width='14%' style='text-align: right;font-size:14px'>ADMIN</td><td width='2%'><i style="padding:0 2px 0 15px" class="fa fa-user" aria-hidden="true"></i></td><td width='15%' style='text-align: right;'><p onclick='logout_click2();' >Back to Applist</p></td>				</tr>
			    </table>
			</div>
		</section>
		
		<div id = "div_menu">
			<!-- <div class="sidebar_con" style="display:none"> -->
			<div class="sidebar_con">
				<aside id="sidebar" class="sidebar column"  style='width:12%;float:left;min-width:300px'>
				    	<script type='text/javascript'>
		jQuery(document).ready(function(){	
			load_bc('mf_payrollgrp.php');
			//~ jQuery('.hover').hover(
			//~ function(){jQuery(this).css('opacity','.5')},
			//~ 
			//~ function(){jQuery(this).css('opacity','1')}
			//~ 
			//~ );
			
			load_menu('');
		});
		
		function test()
		{
			jQuery(' .toggle').hide();

			jQuery('.toggle_main').click(function()
			{
				alert("test1");
			
			});
		}

		function load_submenu(xsubmenu,xaccordion)
		{
			jQuery.ajax({
				dataType : 'json',
				type : 'post',
				url : 'ajax_menu',
				data : {menu : xsubmenu , accordion : xaccordion, mentyp : 'submenu'},
				success : function (xretobj)
				{
					jQuery('#div_menus').html(xretobj);
					
					if (xaccordion == 'true')
					{
						jQuery('#sidemenu').accordion({
							collapsible: true,
							hideOnStartup: true,
							active: 0,
							fillSpace : true
						});
					}
				}
			});
		}

		function load_menu(mensub)
		{
         	//~ alert(mensub);
			console.log(mensub);

			jQuery.ajax({
				type : 'post',
				url : 'ajax_menu.php',
				data : {mentyp : 'menu', mensub2:mensub},
				success : function (xretobj)
				{
					//~ console.log(xretobj);
					jQuery('#sidebar').append(xretobj);
					get_function();
				}
			});
		}

		// function load_page(xurl,cap)
		function load_page(xurl,xid)
		{	
         	//~ alert(xurl,cap);
			//~ load_bc("current",xurl);

			// console.log(xurl);
			// console.log(cap);

			// return false;

			document.forms.myform.action= xurl;
			document.forms.myform.method= "POST";
			document.forms.myform.target = '_self';
			document.forms.myform.hid_men_id.value = xid; // 20171005 added by karlo
			document.forms.myform.submit();
		}

		function load_page2(xmensub)
		{	
            //~ alert(xmensub);
			jQuery.ajax({
				url:"menu_view_ajax.php",
				type:"post",
				dataType:'json',
				data: {mensub : xmensub},
				success:function(response){
					//~ alert(response);
					//~ alert(response.menwidth);
					jQuery(".test").css('background-color', "");
					jQuery("h3").removeClass("active");
					jQuery("#"+xmensub).css('background-color', "white");
					jQuery('#menu2').html(response.form);
					jQuery('#menu2').css('width', response.menwidth);
					if(response.menwidth!="80%")
					{
						jQuery('#menu2').css('border-right', '1px solid #9BA0AF');
					}
					else
					{
						jQuery('#menu2').css('border-right', '0');
					}
				},
				error:function(e){
					console.log(e);
				}
			});
		}

		// function load_bc(url)
		// {
		// //~ alert(cap);
		// 	var params = "url="+url;
		// 		//~ alert(url);
		// 		jQuery.ajax({
		// 		url:"cm_bread_ajax.php",
		// 		type:"post",
		// 		dataType:'json',
		// 		data: params,
		// 		success:function(response){
		// 			jQuery('#breadcrumbs').html(response);
		// 		},
		// 		error:function(e){
		// 		console.log(e);
		// 		}
		// 		});
		// }

		function load_bc(url,cap)
		{
		 	var params = "url="+url+"&cap="+cap;
			//~ alert(url);
			jQuery.ajax({
			url:"cm_bread_ajax.php",
			type:"post",
			dataType:'json',
			data: params,
			success:function(response){
				jQuery('#breadcrumbs').html(response);

				jQuery('.breadcrumbs_container').fadeIn();
			},
			error:function(e){
			console.log(e);
			}
			});
		}

		function load_sub(mensub)
		{
			jQuery('#sidebar').hide();
			
			jQuery.ajax({
				type : 'post',
				dataType:'json',
				url : 'ajax_mensub.php',
				data : {xmensub : mensub},
				success : function (xretobj)
				{
					console.log(xretobj);
					jQuery('#sidebar2').append(xretobj);
					//~ jQuery('#sidebar').height('100%');
					//~ get_function();
				}
			});
			jQuery('#sidebar2').toggle('fast');
		}
		function backtomain()
		{
		    jQuery('#sidebar2').hide();
		    jQuery('#sidebar2 h3').remove();
		    jQuery('#sidebar2 hr').remove();
		    jQuery('#sidebar').toggle('fast');
		}
		
	</script>
				</aside>
			</div>
			<!-- <style>
a{
color:black;
}
p{
font-size:15px;
font-weight:700;
}
</style>
 -->

 
<style>
	a{
		color: #131313;
	}
	p{
		font-size:15px;
		font-weight:700;
	}
	._menu2 {
		/*display: none;*/
		z-index: 1002;
		position: absolute;
		float: left;
		width: 1520px;
		min-width: 920px !important;
		margin-left: 299px;
		background: #fff;
		height: 100%;
		/*height: 580px;*/
		border: none !important;
		overflow-x: hidden;
		overflow-y: auto;  
		white-space: nowrap;
		padding-left: 20px;
		box-sizing: border-box;

		opacity: 0;

		left: -100%;

		/*transform: translateX(-140%);*/
		z-index: 10;
	}
	#menu2_sub {
	    width: 100%;
	    min-width: 570px;
	    height: 87%;
	    min-height: 580px;
	    overflow: auto;
	}
	._1 {
		line-height: 0.8;
	}
</style>

<div id='menu2' class='_menu2'>
	<br>
	<center>
	<div id='menu2_sub'>
	</div>
	<br>
	</div>
	<input type='hidden' name='mensub' id='mensub' value=''>
		</div>

		<!-- 20190606 gian karlo - reminder for security code status-->
		<!-- Start Security Code Notifier -->

	<div id="lbl_bypass_seccode" style="width: 100%;height: 30px;
				background-color: #fff1c9;margin-top: 1px;text-align: center;font-size: 14px;display: flex;align-items: center;justify-content: center;">

		<img src="bridge/images/sign-warning-icon.png" style="width: 20px;height:20px;">&nbsp;
		<div>
								Security code is currently being bypassed for testing purposes.
					</div>

	</div>
<!-- End Security Code Notifier -->
	<div id="main" style="height:auto;display: none">
	
	
	</script>

		<form name = 'myform' id='myform' style='width:100%;float:right;' method='POST'  autocomplete="off">
    	<input type='hidden' name='hid_men_id'><script type='text/javascript'>
    blockui();
	jQuery(document).ready(function(){
        $.unblockUI();
	  //~ var cap='Other Earnings File';
		//~ parent.load_bc('current',cap);
	  jQuery("#dialog").dialog({
            modal : true,
            width : 1000,
            height: 640,
            title : "Payroll Group",
            autoOpen:false,
            closeOnEscape : false,
            resizable : false,
            open : function (){
            jQuery('.ui-dialog-titlebar-close').hide();
            },
            buttons : 
              {
                "Save" : function (){},
                "Close" : function () { }
              }
	    });
	  jQuery('#div_weekly').tabs();
	  jQuery('#div_semi').tabs();
	  jQuery('#div_monthly').tabs();
	  jQuery('#div_other').tabs();
	  
	  hidetabs();
	  jQuery('#div_weekly').css('display','block');
	  jQuery("#sel_paycycle").change(function()
	  	{
	  		hidetabs();
	  		changetabs(jQuery(this).val());
	  	});

    });

	function changetabs(x)
	{
		jQuery('.contentdiv').css('display','block');
		if(x == 'Weekly')
  		{
			jQuery("#div_weekly").css("display","block")
  		}
  		else if(x == 'Semi-Monthly')
  		{
			jQuery("#div_semi").css("display","block")
  		}
  		else if(x == 'Monthly')
  		{
  			jQuery("#div_monthly").css("display","block")
  		}
  		else if(x == 'Other')
  		{
  			jQuery("#div_other").css("display","block")
  		}
  		else
  		{
  			jQuery('.contentdiv').css('display','none');
  		}
	}
	function hidetabs()
	{
		jQuery('.contentdiv').css('display','none');
		jQuery('.contentdiv > div').css('display','none');
	}
	function resetitem()
	{
		jQuery('.contentdiv input[type=checkbox]').prop('checked',false);
		jQuery("#dialog input[type=text]").val('');
		jQuery("#dialog select").val('');
		jQuery("#txtrecid").val('0');
		jQuery("#xpar").val('Add');
	}
    function add_new_item()
    {
    	resetitem();
	  	hidetabs();
    	modPagerBtn2('add','save_data()','Save','#dialog','mf_button()');
    	jQuery("#dialog").dialog('open');
    }
    function edit_dataitem_click(recid, xedit=true)
    {
    	resetitem();
	  	hidetabs();
	  	fillitems(recid);
        jQuery("#dialog").dialog('open');
    	if(xedit) modPagerBtn2('edit','save_data("Edit")','Save','#dialog','mf_button()');
        else { disable_all() }
    }
    function fillitems(recid)
    {
    	var xdata = "recid="+recid+"&event_action=fill_fld";
    	jQuery.ajax({
    		dataType : 'json',
    		type : 'post',
    		url : 'payrollgrp_ajax.php',
    		data : xdata,
    		async : false,
            beforeSend:function()
            {
                blockui();
            },
    		success : function(xret)
    		{
                $.unblockUI();
    			if(xret.msg = 'success')
    			{
    				jQuery("#txtrecid").val(recid);
                    // alert(jQuery("#txtrecid").val());
    				jQuery("#xpar").val("Edit");
    				jQuery("#sel_paycycle").val(xret.cbo_paycycle);
    				jQuery("#txt_paygroup").val(xret.txt_paygroup);
    				jQuery("#cbo_bankcode").val(xret.cbo_bankcode);
    				jQuery("#cbo_curcde").val(xret.cbo_curcde);	
                    jQuery.each(xret.def1, function(key, value) {
                        var xtab_name = getTabName(key.toLowerCase());
                        jQuery("#"+xtab_name+" .chk_computetax").prop("checked",(value.computetax == 1));
                        jQuery("#"+xtab_name+" .chk_computesss").prop("checked",(value.computesss == 1));
                        jQuery("#"+xtab_name+" .chk_computeph").prop("checked",(value.computeph == 1));
                        jQuery("#"+xtab_name+" .chk_computepi").prop("checked",(value.computepi == 1));
                        jQuery("#"+xtab_name+" .chk_autobasic").prop("checked",(value.autobasic == 1));
                        jQuery("#"+xtab_name+" .chk_autopiece").prop("checked",(value.autopiece == 1));
                        jQuery("#"+xtab_name+" .cbo_taxtype").val(value.taxtype);
                    });
                    jQuery.each(xret.def2, function(key, value) {
                        var xtab_name = getTabName(value.cycleno.toLowerCase());
                        console.log("#"+xtab_name+"_"+value.tablename+"_"+(value.code).replace(' ', '_'));
                        jQuery("#"+xtab_name+"_"+value.tablename+"_"+(value.code).replace(' ', '_')).prop("checked","checked");
                    });
    				
    				changetabs(xret.cbo_paycycle);
    			}
    			else
    			{
    				mf_button();
    			}
    		}
    	});
    }
    function getTabName(xval)
    {
    	var xtab_name = "";
		switch(xval)
		{
			case "other" :
				xtab_name = "other";
				break;
			case "monthly" :
				xtab_name = "monthly";
				break;
			case "1st week":
				xtab_name = "fweek";
				break;
			case "2nd week":
				xtab_name = "sweek";
				break;
			case "3rd week":
				xtab_name = "tweek";
				break;
			case "4th week":
				xtab_name = "foweek";
				break;
			case "5th week":
				xtab_name = "fiweek";
				break;
			case "1st half":
				xtab_name = "fhalf";
				break;
			case "2nd half":
				xtab_name = "shalf";
				break;
		}
		return xtab_name;
    }
    function save_data(xpar='Add')
    {
    	var xcbo_paycycle = jQuery("#sel_paycycle").val();
    	var xtxt_paygroup = jQuery("#txt_paygroup").val().trim();
    	var xcbo_bankcode = jQuery("#cbo_bankcode").val();
    	var xcbo_curcde = jQuery("#cbo_curcde").val();
    	var xrecid = jQuery("#txtrecid").val();
    	var xdata = "";
        console.log(xrecid);
    	if(xtxt_paygroup == "")
        {
            alertify.alert("Payroll Group is required.");
            jQuery("#txt_paygroup").focus()
            return;
        }
        else if (xcbo_paycycle == "")
        {
            alertify.alert("Payroll Cycle is required.");
            jQuery("#sel_paycycle").focus()
            return;
        }
        else if (xpar == "Add")
        {
        	xdata = "txt_paygroup="+xtxt_paygroup+"&event_action=check_paygrp";
        	jQuery.ajax({
        		dataType : 'json',
        		type : 'post',
        		url : 'payrollgrp_ajax.php',
        		data : xdata,
                beforeSend : function()
                {
                    blockui();
                },
        		success : function (xretobj) 
                {
                    $.unblockUI();
        			if(xretobj.msg == 'success')
                    {

                        save_data_paygrp(xpar);
                    }
                    else
                    {
                        alertify.alert(xretobj.log);
                    }
        		},
                error : function()
                {
                    $.unblockUI();
                    alertify.alert("Error occurred. Please try again.");
                }
        	});
        }
        else
        {

            xdata = "txt_paygroup="+xtxt_paygroup+"&recid="+xrecid+"&event_action=check_paygrp";
        	jQuery.ajax({
        		dataType : 'json',
        		type : 'post',
        		url : 'payrollgrp_ajax.php',
        		data : xdata,
                beforeSend : function()
                {
                    blockui();
                },
        		success : function (xretobj) 
                {
                    if(xretobj.msg == 'success')
                    {
                        xdata = "txt_paygroup="+xtxt_paygroup+"&recid="+xrecid+"&event_action=update_paygrp";
                        jQuery.ajax({
                            dataType : 'json',
                            type : 'post',
                            url : 'payrollgrp_ajax.php',
                            data : xdata,
                            success : function (xretobj2) {
                                $.unblockUI();
                                save_data_paygrp(xpar);
                            },
                            error : function() 
                            {
                                $.unblockUI();
                                alertify.alert("Error occurred. Please try again.");
                            }
                        });
                    }
                    else
                    {
                        $.unblockUI();
                        alertify.alert(xretobj.log);
                    }
        		},
                error : function()
                {
                    $.unblockUI();
                    alertify.alert("Error occurred. Please try again.");
                }
        	});

        }

        
    }

    function save_data_paygrp(xpar)
    {
    	var xdata = jQuery("#dialog *").serialize() +"&event_action=save_paygrp";
        jQuery.ajax({
        	dataType : 'json',
    		type : 'post',
    		url : 'payrollgrp_ajax.php',
    		data : xdata,
    		async : false,
            beforeSend : function() {
                blockui();
            },
    		success : function (e) {
                    $.unblockUI();
    			if(e == "success")
    			{
                    $('#dialog').dialog('close');
    				alertify.alert("Payroll Group Successfully " + xpar + "ed",function(){
    					document.forms.myform.action   = 'mf_payrollgrp.php';
	                    document.forms.myform.target    = '_self';
	                    document.forms.myform.submit();
    				});
    			}
                else {
                    alertify.alert(e);
                }
    		},
    		error: function (a,b,c) {
                    $.unblockUI();
                alertify.alert("Error occurred. Please try again.");
    		}
        });
    }
    function mf_button()
	{
		jQuery('#dialog').dialog('close');
	}
	function save_pay()
	{
		var xdata= jQuery('#add_pay *').serialize()+'&curcde=PHP&event_action=save';

        jQuery.ajax({
          dataType : 'json',
          type : 'post',
          data : xdata,
          url : 'mf_payrollgrp_view_defaults_save_paygroupdef_ajax.php',
          success : function (xretobj)
          {
            alert(xretobj);
            document.forms.myform.action   = 'mf_payrollgrp.php';
            document.forms.myform.target    = '_self';
            document.forms.myform.submit();
          },
          error:function(xhs,error2,error3)
          {
            alert(error2);
          }
        });
	}
	function add_paygroup()
	{
		
		var xdata='event_action=view';



                jQuery.ajax({
                  dataType : 'json',
                  type : 'post',
                  data : xdata,
                  url : 'mf_payrollgrp_view_defaults_save_paygroupdef_ajax.php',
                  success : function (xretobj)
                  {
                    jQuery('#add_pay').dialog({
					autoOpen:false,
					closeOnEscape:false,
					draggable:false,
					resizable:false,
					title:"Add Paygroup",
					width:400,
					height:230,
					open : function (){
						jQuery('.ui-dialog-titlebar-close').hide();
					},
					buttons:{
						
						"Save" : function (){   },
						"Close":function(){
							
						}
					}
					
				});
                    
                    modPagerBtn2('add','save_pay()','Save','#add_pay','pay_button()');
                    jQuery("#add_pay").html(xretobj);
                    jQuery("#add_pay").dialog('open');
                   
                  },
                  error:function(xhs,error2,error3)
                  {
                    alert(error2);
                  }
                });

	}
	function pay_button(modalid)
	{
		jQuery('#txtbank').val('');
		jQuery('#txtpay').val('');
		jQuery('#txtcycle').val('');
		jQuery('#add_pay').dialog('close');

	}
	function default_dataitem_click()
	{	

	    var xid = jQuery('#pager_active_id').val();

	    var xparams = jQuery('#myform *').serialize()+'&xrecid='+xid+'&xaction=save';
	    // alert(xparams);
	    jQuery.ajax({
		    dataType : 'json',
		    type : 'post',
		    url : 'mf_payrollgrp_validatepaytran_ajax.php',
		    data : xparams,
		    success : function (xretobj)
		    {
			    // console.
				
			    if (xretobj != "success")
			    {
					alert(xretobj);
			    }
			    else
			    {
					
					document.forms.myform.item_id.value = xid;
					document.forms.myform.target = '_blank';
					document.forms.myform.action = 'mf_payrollgrp_view_defaults.php';
					document.forms.myform.submit();
			    }
		    }
	    });
	
	}
	function delete_paygroup_data(recid,paygroup)
	{
        alertify.confirm("Delete Payroll Group File record?",function() {
    		var xdata = "recid="+recid+"&paygroup="+paygroup+"&event_action=checkIfExist";
    		jQuery.ajax({
    			dataType : 'json',
    			type : 'post',
    			url : 'payrollgrp_ajax.php',
    			data : xdata,
                beforeSend : function() 
                {
                    blockui();
                },
    			success : function(ret1) 
                {
                    $.unblockUI();
    				if(ret1.msg == 'success')
    				{
                        alertify.alert(ret1.log, function() {
                            document.forms.myform.action = "mf_payrollgrp.php";
                            document.forms.myform.target = "_self";
                            document.forms.myform.submit();
                        });
    					
    				}
    				else
    				{
    					alertify.alert(ret1.log);
    				}
    			},
                error : function() 
                {
                    $.unblockUI();
                    alertify.alert('Error occurred. Please try again.');
                }
    		});
        }, function() {
            // alertify.alert("Delete aborted.");
        });
	}
	function inquire_record(xrecid)
    {
        edit_dataitem_click(xrecid, false);
    }
    function disable_all()
    {
        jQuery("#dialog *").addClass("disabled").prop("disabled", true);
        jQuery("#dialog").dialog({
            buttons : 
              {
                "Close" : function () {
                            jQuery("#dialog *").removeClass("disabled").prop("disabled", false);
                            mf_button();
                        }
              }
        });
    }
</script>
<style type="text/css">
	.filterdiv {
		float: left;
		clear: both;
		width: 100%;
		padding-left: 30px;
		padding-bottom: 20px;
		box-sizing: border-box;
	}
	.contentdiv {
		 width:100%; 
		 overflow-x:hidden; 
		 overflow-y:auto;
	}
	.contentdiv > div {
		 width:100%; 
		 overflow-x:hidden; 
		 overflow-y:auto;
	}
	.defaults {
		 display:inline-block; 
		 width:24.3%;
		 min-height: 150px;
		 max-height: 150px;
		 overflow: auto;
	}
	#dialog select,#dialog input[type=text] {
		width: 150px;
		height: 35px;
		border-radius: 3px;
		border: 1px solid #ccc;
		color: unset;
	}
	.clb {
		word-wrap: break-word;
	}

    .contentdiv label {
        font-weight: 100;
    }
    .contentdiv fieldset {
        overflow: hidden;
    }
    .contentdiv .clb_allowance,
    .contentdiv .clb_otherearnings,
    .contentdiv .clb_otherdeductions ,
    .contentdiv .clb_loans {
        overflow: auto;
        height: 145px;
    }
    .contentdiv td {
        vertical-align: top;
    }
</style>        
<input type='hidden' name='event_action'>
<!-- <input type='hidden' name="txtrecid" id="txtrecid" value='0'> -->
<div id='add_pay' style='display:none'>
</div>
<input type='hidden' name='item_id' id='item_id' >

<center>
<div id='mypager' style='width:75%'>
	<article id='pager_article' class='pager-module2' style='min-width:820px;max-width:1280px;width:100%'>
							<header>
								<h3 class='tabs_involved' id='lbl_title'>Payroll Group File</h3>
							</header>
							<div class='tab_container'><div id='div_pager' class='pager tab_content'><table id='pager_container1' class='pager_container1'>
			<tr>
			<td class='container1-left'><input type='button' name='add_btn' id='add_btn' class='save' value='Add' onclick="add_new_item()" /> <input type='button' id='pager_default_print' class='print' style='width:auto' value='Print Preview' onclick='print_item()'/><input type='button' id='pager_default_export' class='print' style='width:auto' value='Export' onclick='export_item()'/></td></td>
			<td class='container1-right' style=''><select name='pager_search' id='pager_search'><option selected value='paygroup'>Payroll Group</option></select><input type='text' name='pager_search_input' id='pager_search_input' value='' maxlength='50' onkeypress='regex(event,"code")'/><input type='button' id='pager_search_btn' class='search' value='Search' onclick='pager_search()'></td>
			</tr>
			</table><table id='datatable' class='hoverTable'><thead style='font-size:14px'><tr><th class='header ' style='width:px;'>Payroll Group</th><th class='header' style='width:145px'>Action</th></tr></thead><tbody style='font-size:12px'><tr id='102' class='odd'><td id='paygroup' value='Semi-Monthly' type="text" style='''>Semi-Monthly</td><td style='width:'><input type='button' name='view_btn' id='view_btn' class='print' value='Inquire' onclick="inquire_record('102')" /> <input type='button' name='edit_btn' id='edit_btn' class='save' value='Edit' onclick="edit_dataitem_click('102')" /> <input type='button' name='delete_btn' id='delete_btn' class='exit' value='Delete' onclick="delete_paygroup_data('102','Semi-Monthly')" /> </td></tr><tr id='106' class='even'><td id='paygroup' value='Weekly' type="text" style='''>Weekly</td><td style='width:'><input type='button' name='view_btn' id='view_btn' class='print' value='Inquire' onclick="inquire_record('106')" /> <input type='button' name='edit_btn' id='edit_btn' class='save' value='Edit' onclick="edit_dataitem_click('106')" /> <input type='button' name='delete_btn' id='delete_btn' class='exit' value='Delete' onclick="delete_paygroup_data('106','Weekly')" /> </td></tr></tbody></table><table id='pager_container2' class='pager_container2' style='font-size:10px'>
			<tr>
				<td class='container2-left'><div class='pager_selector' id="lbl_pager_selector">Page : <select id='pager_selector' style='font-size:10px'><option selected value='1'>1</option></select> of 1</div></td>
				<td class='container2-center'><div class='pager_navigator'>
			<input class='pager_btn' id='pager_first' type='button' value='First' readonly/>
			<input class='pager_btn' id='pager_prev' type='button' value='Previous' readonly/>
			<input class='pager_btn' id='pager_next' type='button' value='Next' readonly/>
			<input class='pager_btn' id='pager_last' type='button' value='Last' readonly/></div></td>
				<td class='container2-right'><div class='pager_limiter' id="lbl_pager_limiter">Row(s) per Page : <select id='pager_limiter' style='font-size:10px'><option selected value='10'>10</option><option  value='20'>20</option><option  value='50'>50</option><option  value='100'>100</option></select></div></td>
			</tr>
			<tr style='display:none'>
				<td colspan='3'>
					<table>
					<tr><td>total_pages: <input type='text' id='pager_totalpages' value='1'/></td></tr>
					<tr><td>current_page: <input type='text' name='pager_page' id='pager_page' value='1'/></td></tr>
					<tr><td>current_limit: <input type='text' name='pager_limit' id='pager_limit' value='10'/></td></tr>
					<tr><td>active_id: <input type='text' id='pager_active_id' name='pager_active_id'/></td></tr>
					<tr><td><input type='text' id='pager_fields' name='pager_fields' value='paygroup'></td></tr>
					<tr><td><input type='text' id='pager_headers' name='pager_headers' value='Payroll Group'></td></tr>
					<tr><td><input type='text' id='pager_table' name='pager_table' value='paygroupfile'></td></tr>
					<tr><td><input type='text' id='pager_table_id' name='pager_table_id' value='recid'></td></tr>;
					<tr><td><input type='text' id='pager_xlink' name='pager_xlink' value=''></td></tr>
					<tr><td><input type='text' id='pager_xfield' name='pager_xfield' value='paygroup'></td></tr>
					<tr><td><input type='text' id='pager_title' name='pager_title' value='Payroll Group File'>
					<tr><td><input type='text' id='check_val' name='check_val' value=''>
						<input type='text' id='print_flds' name='print_flds' value='Array'>
						<input type='text' id='print_header' name='print_header' value='Array'>
						</td>
					</tr><tr><td>Payroll Group : <input type='text' id='pager_paygroup' /></td></tr></table></td></tr>
			</table></div></article><div id='pager_modal' style='display:none;'><table style='font-size:12px;font-family:arial'><tr><td colspan='2'><input type='hidden' id='modalField_recid' name='modalField[recid]' /></td></tr><tr><td id="lbl_paygroup">Payroll Group </td><td class='tooltip'><input onpaste='return false' onkeypress='regex(event,"code")' type='text' class='required pager_class  input ' maxlength='20' id='modalField_paygroup' name='modalField[paygroup]'  style='width:250px; padding: 0 5 !important; text-indent: 0 !important; '/></td></tr></table></div>
			<script type='text/javascript'>


				jQuery(document).ready(function(){

					$('body').find('#pager_modal').find('.pager_modal_numField').autoNumeric(
					{
						mNum:18,
						mDec:2
					});

					jQuery('.txtdate').datepicker({ dateFormat : 'mm-dd-yy', changeYear : true, changeMonth : true })
					jQuery('#txtchk').click(function(){
						
					   document.forms.myform.pager_page.value=page;
			           document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
			           document.forms.myform.method='post';
			           document.forms.myform.target='_self';
			           document.forms.myform.submit();
			        });

			        jQuery('#chk_term').click(function(){
						
					   document.forms.myform.pager_page.value=page;
			           document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
			           document.forms.myform.method='post';
			           document.forms.myform.target='_self';
			           document.forms.myform.submit();
					});
					
					jQuery('#chk_inc').click(function(){
						
						document.forms.myform.pager_page.value=page;
						document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
						document.forms.myform.method='post';
						document.forms.myform.target='_self';
						document.forms.myform.submit();
					 });





				});

				var fields = jQuery('#pager_fields').val().split(',');
				var headers = jQuery('#pager_headers').val().split(',');
				var table = jQuery('#pager_table').val();
				var table_id = jQuery('#pager_table_id').val();
				var xlink_id = jQuery('#pager_xlink').val();
				var xfield = jQuery('#pager_xfield').val();

				var totalpages = jQuery('#pager_totalpages').val();
				var page = jQuery('#pager_page').val();

				var pager_keys = new Array();

				jQuery('#div_pager #datatable tbody tr:eq(0) td').each(function(key,val){

					pager_keys[pager_keys.length] = jQuery(val).attr('id');

				});

				jQuery('#pager_modal input[type=checkbox]').each(function(key,val){

					jQuery(this).click(function(){
						var xbool = jQuery(this).prop('checked');
						var xid = jQuery(this).attr('id');
						if(xbool == true){
							jQuery('#checkbox_'+xid).val('1');
						}
						else{
							jQuery('#checkbox_'+xid).val('0');
						}
					});
				});
				
				function addRow(x)
				{
					var xtitle = jQuery('#pager_title').val();
					var x = '';
					var y = [];
					var hasErr=false;

					$('#pager_modal .required').each(function()
					{
						// if($(this).val().trim()=='')
						// {
						// 	hasErr=true;
						// }

						if ($.trim(jQuery(this).val()) == '') 
				        {
				            isValid = false;
				            hasErr=true;
				            jQuery(this).addClass('input_hasErr');
				        }
					})

					if(hasErr)
					{
						alertify.alert('Fill up blanks.');
						return false;
					}
					else
					{
						jQuery("#pager_modal .pager_modal_numField").each(function()
						{
							$(this).val($(this).val().replace(/,/g,''));
						})

						jQuery(x).prop('disabled','disabled');
						// var addParams = jQuery('#pager_modal *').serialize()+"&table="+table+"&table_id="+table_id+"&fields="+fields+"&pager_xlink="+xlink_id+"&pager_event_action=add";
						var addParams = jQuery('#pager_modal *').serialize()+"&table="+table+"&table_id="+table_id+"&head="+headers+"&fields="+fields+"&pager_xlink="+xlink_id+"&pager_event_action=add&title="+xtitle+"&validate="+x+"&filterflds="+y;
									
						jQuery.ajax({
							url:'class/pager_handler.php',
							type:'post',
							dataType:'json',
							data: addParams,
							beforeSend : function (){ 
				                blockui();
				            },
							success:function(response){
				                $.unblockUI();
								if(response.msg == 'failed')
								{
									alertify.alert(response.log);
								}
								else
								{
									alertify.alert(response.log, function() {
										jQuery('#pager_modal table input').val('');
										jQuery('#pager_modal').dialog('close');
										pager_reload();
									});
								}
								jQuery(x).prop('disabled','');


							},
							error:function(e){

				                $.unblockUI();
								alertify.alert('Error occured Please try again.');
								jQuery(x).prop('disabled','');
							}
						});
					}

					
				}
				
				function updateRow(x)
				{
					var xtitle = jQuery('#pager_title').val();
					var x = '';
					var y = [];
					jQuery(x).prop('disabled','disabled');

					jQuery("#pager_modal .pager_modal_numField").each(function()
					{
						$(this).val($(this).val().replace(/,/g,''));
					})


					var updateParams = jQuery("#pager_modal *").serialize()+"&table="+table+"&table_id="+table_id+"&fields="+fields+"&pager_xlink="+xlink_id+"&pager_event_action=update&fieldname="+xfield+"&title="+xtitle+"&validate="+x+"&filterflds="+y;
							
							console.log(updateParams);
					jQuery.ajax({
						url:'class/pager_handler.php',
						type:'post',
						dataType:'json',
						data: updateParams,
						beforeSend : function (){ 
			                blockui();
			            },
						success:function(response){
			                $.unblockUI();
			                if(response.msg == 'failed')
			                {
			                	alertify.alert(response.log);
			                }
			                else
			                {
								alertify.alert(response.log, function() {
										pager_reload();
								});
							}
							jQuery(x).prop('disabled','');
						},
						error:function(e){
			                $.unblockUI();
							alertify.alert('Error occured Please try again.'); 
							jQuery(x).prop('disabled','');
						}
					});
				}

				function modPagerBtn(par)
				{
					if(par=='add')
					{
						jQuery('#pager_default_add').prop('disabled','');
						var xfunc = 'addRow(this)';
						var xtitle = 'Save';
					}
					else if(par=='edit')
					{
						jQuery('#pager_default_edit').prop('disabled','');
						var xfunc = 'updateRow(this)';
						var xtitle = 'Save';
					}
					else if(par=='view')
					{
						jQuery('#pager_default_view').prop('disabled','');
					}

					jQuery('.ui-dialog .ui-dialog-buttonpane .ui-button').remove();

					if(par != 'view')
					{
						var btn = "<input type='button' id='btn_diag_save' class='save' style='height:30px;' onclick='"+xfunc+"' value='"+xtitle+"'>";
						btn += "<input type='button' id='btn_diag_close' class='exit' style='height:30px;' onclick='closePagerModal()' value='Close'>";
					}
					else
					{
						var btn = "<input type='button' id='btn_diag_close' class='exit' style='height:30px;' onclick='closePagerModal()' value='Close'>";	
					}
					jQuery('.ui-dialog-buttonset').append(btn);
				}

				function closePagerModal()
				{
					jQuery('#pager_modal').dialog('close');
				}

				function add_item(){
					
					jQuery('#pager_modal input').val('');
					jQuery('#pager_default_add').prop('disabled','disabled');

					jQuery('#pager_modal .pager_class').each(function()
					{
						$(this).prop('disabled',false);
						$(this).removeClass('disabled');
					})

					jQuery('#pager_modal').dialog({
						title:'Add',
						width: '380',
						height: '200',
						draggable:false,
						resizable:false,
						autoOpen:false,
						modal : true,
						open:function(){jQuery('.ui-dialog-titlebar-close').hide();},
						buttons:{

							"Save":function(){},
							"Close":function(){}
						}
					}).dialog('open');
					
					modPagerBtn('add');
				}

				//20190813 donita
				function view_item(){
					
					jQuery('#pager_default_view').prop('disabled','disabled');
					var active_id = jQuery('#pager_active_id').val();
					
					jQuery("#modalField_recid").val(active_id);

					if(active_id == ''){
						
						alert('No row selected!');
						
						return false;
					}
					
					jQuery('#div_pager #datatable tbody tr').each(function(key,val){

						var xactive = jQuery(val).attr('id');

						
						
						if(active_id == xactive){

							for(var i=0;i<pager_keys.length;i++){

								var hidden_type = jQuery(val).find('#'+pager_keys[i]).attr('hidden_type');

								if(hidden_type == 'checkbox'){
									var dataval = jQuery(val).find('#'+pager_keys[i]).attr('value');
									if(dataval == 'Y' || dataval == '1'){
										jQuery('#modalField_'+pager_keys[i]).prop('checked',true);
										jQuery('#checkbox_modalField_'+pager_keys[i]).val('1');
									}
									else{
										jQuery('#checkbox_modalField_'+pager_keys[i]).val('0');
									}
								}
								else{
									var dataval = jQuery(val).find('#'+pager_keys[i]).attr('value');
									jQuery('#modalField_'+pager_keys[i]).val(dataval);	

								}
							}										
						}
					
					});


					jQuery('#pager_modal .pager_modal_numField').each(function()
					{
						$(this).focus().blur();
					})

					jQuery('#pager_modal .pager_class').each(function()
					{
						$(this).prop('disabled',true);
						$(this).addClass('disabled');
					})



					 
										
					jQuery('#pager_modal').dialog({
						title:'View',
						width: '380',
						height: '200',
						draggable:false,
						resizable:false,
						autoOpen:false,
						modal:true,
						closeOnEscape:false,
						open:function(){jQuery('.ui-dialog-titlebar-close').hide();},
						buttons:{
							"Close":function(){ closePagerModal()}
						}
					}).dialog('open');

					modPagerBtn('view');

				}


				function edit_item(){
					
					jQuery('#pager_default_edit').prop('disabled','disabled');
					var active_id = jQuery('#pager_active_id').val();
					
					jQuery("#modalField_recid").val(active_id);

					if(active_id == ''){
						
						alert('No row selected!');
						
						return false;
					}
					
					jQuery('#div_pager #datatable tbody tr').each(function(key,val){

						var xactive = jQuery(val).attr('id');
						
						if(active_id == xactive){

							for(var i=0;i<pager_keys.length;i++){

								var hidden_type = jQuery(val).find('#'+pager_keys[i]).attr('hidden_type');

								if(hidden_type == 'checkbox'){
									var dataval = jQuery(val).find('#'+pager_keys[i]).attr('value');
									if(dataval == 'Y' || dataval == '1'){
										jQuery('#modalField_'+pager_keys[i]).prop('checked',true);
										jQuery('#checkbox_modalField_'+pager_keys[i]).val('1');
									}
									else{
										jQuery('#checkbox_modalField_'+pager_keys[i]).val('0');
									}
								}
								else{
									var dataval = jQuery(val).find('#'+pager_keys[i]).attr('value');
									jQuery('#modalField_'+pager_keys[i]).val(dataval);	

								}
							}										
						}
					
					});


					jQuery('#pager_modal .pager_modal_numField').each(function()
					{
						$(this).focus().blur();
					})


					jQuery('#pager_modal .pager_class').each(function()
					{
						$(this).prop('disabled',false);
						$(this).removeClass('disabled');
					})

										
					jQuery('#pager_modal').dialog({
						title:'Edit',
						width: '380',
						height: '200',
						draggable:false,
						resizable:false,
						autoOpen:false,
						modal:true,
						closeOnEscape:false,
						open:function(){jQuery('.ui-dialog-titlebar-close').hide();},
						buttons:{

							"Save":function(){},
							"Close":function(){}
						}
					}).dialog('open');


					
					modPagerBtn('edit');
				}

				function delete_item(){
					jQuery('#pager_default_delete').prop('disabled','disabled');
					
					var active_id = jQuery('#pager_active_id').val();

					jQuery("#modalField_recid").val(active_id);
					
					if(active_id == ''){
						
						alertify.alert('No row selected!');
						
						return false;
					}

					jQuery('#div_pager #datatable tbody tr').each(function(key,val){

						var xactive = jQuery(val).attr('id');

						if(active_id == xactive){

							for(var i=0;i<pager_keys.length;i++){
								var dataval = jQuery(val).find('#'+pager_keys[i]).attr('value');
								jQuery('#modalField_'+pager_keys[i]).val(dataval);
							}										
						}
					});
					
					jQuery('#pager_modal').hide();
					var xtitle = jQuery('#pager_title').val();
					
					var con = alertify.confirm('Delete '+xtitle+' record?',
					
					function()
      				{
      					
						jQuery('#pager_default_delete').prop('disabled','');
						blockui();
						var deleteParams = jQuery('#pager_modal *').serialize()+"&table="+table+"&table_id="+table_id+"&fields="+fields+"&pager_xlink="+xlink_id+"&pager_event_action=delete&fieldname="+xfield+"&title="+xtitle;
						
						jQuery.ajax({
							url:'class/pager_handler.php',
							type:'post',
							dataType:'json',
							data: deleteParams,
							success:function(response){
								$.unblockUI();
								if(response.msg == 'failed')
								{
									if(response.message!='' && response.message!=undefined)
									{
										alertify.alert(response.message)
									}
									else{
										alertify.alert('Record already used in another transactions.')
									}
								}
								else
								{     
									alertify.alert('Successfully Deleted '+xtitle+' entry.',function(){	
										pager_reload();
									});
								}
							},
							error:function(e){
			                	$.unblockUI();
								alertify.alert('Error occured Please try again.');
							}
						});
					},
				    function(closeEvent)
				    {

						jQuery('#pager_default_delete').prop('disabled','');
				    	// alertify.alert('Deletion aborted');
				    }); 
						
					
				}
	
				jQuery('#pager_selector').change(function(){
					document.forms.myform.pager_page.value=this.value;
					document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_self';
					document.forms.myform.submit();
				});

				jQuery('#pager_limiter').change(function(){
					
					document.forms.myform.pager_page.value='1';
					document.forms.myform.pager_limit.value=this.value;
					document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_self';
					document.forms.myform.submit();
				});

				jQuery('#pager_next').click(function(){

					if(page == totalpages){
						page = totalpages;
					}
					else{
						page = parseInt(jQuery('#pager_page').val()) + 1;
					}

					document.forms.myform.pager_page.value=page;
					document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_self';
					document.forms.myform.submit();



					
				});
				
				jQuery('#pager_prev').click(function(){
					
					if(page == 1){
						page = 1;
					}
					else{
						page = parseInt(jQuery('#pager_page').val()) - 1;
					}
					
					document.forms.myform.pager_page.value=page;
					document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_self';
					document.forms.myform.submit();
				});
				
				jQuery('#pager_first').click(function(){
					
					document.forms.myform.pager_page.value=1;
					document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_self';
					document.forms.myform.submit();
				});

				jQuery('#pager_last').click(function(){
					
					document.forms.myform.pager_page.value=totalpages;
					document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_self';
					document.forms.myform.submit();
				});

				jQuery('#pager_search_btn').click(function(){
					document.forms.myform.pager_page.value=1;
					document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_self';
					document.forms.myform.submit();
				})

				function pager_reload()
				{
					document.forms.myform.action='/online_test/web_standard_onedb/webapp/payroll/mf_payrollgrp.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_self';
					document.forms.myform.submit();
				}

				function print_item()
				{
					document.forms.myform.action='mf_print.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_blank';
					document.forms.myform.submit();
				
				}

				function export_item()
				{
					document.forms.myform.action='mf_export.php';
					document.forms.myform.method='POST';
					document.forms.myform.target='_blank';
					document.forms.myform.submit();
				
				}

				function pager_check_all(obj)
				{
					var ischecked = jQuery(obj).prop('checked');
					if(ischecked)
					{
						jQuery('.pager_checker_body').prop('checked',true);
					}
					else
					{
						jQuery('.pager_checker_body').prop('checked',false);
					}
				}
				function pager_check_header() 
				{
					var ischecked = jQuery('.pager_checker_body:checked').length == jQuery('.pager_checker_body').length;
					jQuery('#pager_checker_head').prop('checked', ischecked);

				}
				function regex(evt,filter)
				{
					var regex = '';

					if(filter=='symbol')
					{
						regex = /[- . a-zA-Z0-9]/;
					}
					else if(filter=='number')
					{
						regex = /[0-9]/;
					}
					else if(filter=='numberwithperiod')
					{
						regex = /[0-9 .]/;
					}
					else if(filter=='name')
					{
						regex = /[- . a-zA-Z]/;
					}
					else if(filter=='code')
					{
						regex = /[a-zA-Z0-9 . -]/;
					}
				    if(evt.keyCode!=8 && evt.keyCode!=32)
					{
						var theEvent = evt || window.event;
						var key = theEvent.keyCode || theEvent.which;
						key = String.fromCharCode( key );
						//var regex = /[0-9]|\./;
						//var regex = /[- . a-zA-Z]/;

						if( !regex.test(key) )
						{
							theEvent.returnValue = false;	
							if(theEvent.preventDefault) theEvent.preventDefault();
						}
					}
				}jQuery('#div_pager #datatable tbody tr').each(function(key,val){
				
						jQuery(val).hover(function(){

							var active_id = jQuery(this).attr('id');
							
							jQuery('#pager_active_id').val(active_id);
							
							for(var i=0;i<pager_keys.length;i++){
								var dataval = jQuery(val).find('#'+pager_keys[i]).attr('value');
								jQuery('#pager_'+pager_keys[i]).val(dataval);
							}
							
						});
					});</script></div>
<div id="dialog" style="display:none">

	<input type='hidden' name="fld[txtrecid]" id="txtrecid" value='0'>
	<input type='hidden' name="fld[xpar]" id="xpar" value='Add'>
	<div class="filterdiv">
		<table border='0'>
			<tr>
				<td width="150px" id="lbl_paygroup">Payroll Group</td><td width="20px"></td>
				<td width="150px" id="lbl_paycycle">Payroll Cycle</td><td width="20px"></td>
				<td width="150px" id="lbl_bank" hidden >Bank</td><td width="20px"></td>
				<td width="150px" id="lbl_curreny" hidden >Currency</td>
			</tr>
			<tr>
				<td><input type="text" name="fld[txt_paygroup]" id="txt_paygroup" autocomplete="Off" class="input required" maxlength='50' onkeypress='return isCodeKey(event);' onpaste='return false;'></td><td></td>
				<td>
					<select name="fld[cbo_paycycle]" id="sel_paycycle" class="input required">
                        <option value=''></option>
						<option value="Weekly">Weekly</option>
						<option value="Semi-Monthly">Semi-Monthly</option>
						<option value="Monthly">Monthly</option>
						<option value="Other">Other</option>
					</select>
				</td><td></td>
				<td>
					<select name="fld[cbo_bankcode]" id="cbo_bankcode" hidden >
						<option value='BNK-0000000000000011' >BDO</option><option value='BNK-0000000000000008' >BPI</option><option value='BNK-0000000000000005' >CASH</option><option value='BNK-0000000000000012' >CBC</option><option value='BNK-0000000000000007' >CBS</option><option value='BNK-0000000000000004' >LAND BANK</option><option value='BNK-0000000000000002' >MALAYAN BANK</option><option value='BNK-0000000000000013' >METROBANK</option><option value='BNK-0000000000000001' >PNB</option><option value='BNK-0000000000000003' >RBANK</option><option value='BNK-0000000000000009' >RCBC</option><option value='BNK-0000000000000006' >SBA</option><option value='BNK-0000000000000010' >UCPB</option>					</select>
				</td><td hidden></td>
				<td>
					<select name="fld[cbo_curcde]" id="cbo_curcde" hidden >
						<option value='CUR-0000000000000001' >PHP</option>					</select>
				</td>
			</tr>
		</table>
	</div>
	<div class="contentdiv">
		<div id="div_other">
			<ul style="font-size:12px;" class='lst_ul'>
			<li id="btnother"><a href="#other">Other</a></li>			</ul>
			<div id="other">
   				<div class="contentdiv1" style="float:left; clear:both; width:100%">
					<fieldset style="text-align:left;padding-left:20px">
						<legend id="lbl_other_chkdefault">Check Defaults</legend>
						<table border="0">
							<tr>
								<td width="20px"><input type="checkbox" name="other[chk_computesss]" id="other[chk_computesss]" class="chk_computesss"></td>
								<td><label for="other[chk_computesss]" id="lbl_other_sss">SSS</label></td>	
								<td width="100px"></td>
								<td width="20px"><input type="checkbox" name="other[chk_autobasic]" id="other[chk_autobasic]" class="chk_autobasic"></td>
								<td colspan="4"><label for="other[chk_autobasic]" id="lbl_other_combasic">Auto Compute Basic (for Semi-Monthly and Monthly)</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="other[chk_computeph]" id="other[chk_computeph]" class="chk_computeph"></td>
								<td><label for="other[chk_computeph]" id="lbl_other_ph">PhilHealth</label></td>	
								<td></td>
								<td><input type="checkbox" name="other[chk_autopiece]" id="other[chk_autopiece]" class="chk_autopiece"></td>
								<td colspan="4"><label for="other[chk_autopiece]" id="lbl_other_piecerate">Auto Load Piece Rates</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="other[chk_computepi]" id="other[chk_computepi]" class="chk_computepi"></td>
								<td><label for="other[chk_computepi]" id="lbl_other_pagibig">Pag-Ibig</label></td>    
								<td></td>
								<td colspan="5" id="lbl_other_taxtable">Tax Table to Use</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="other[chk_computetax]" id="other[chk_computetax]" class="chk_computetax"></td>
								<td><label for="other[chk_computetax]" id="lbl_other_tax">Tax</label></td>	
								<td></td>
								<td colspan="2">
									<select name="other[cbo_taxtype]" class="cbo_taxtype" id="sel_other_taxtype">
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
										<option value="Semi-Monthly">Semi-Monthly</option>
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
									</select>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div class="contentdiv2" style="float:left; clear:both; width:100%">
					<fieldset class="defaults">
						<legend id="lbl_other_def_allow">Default Allowances</legend>
						<div name="other[clb_allowance]" class="clb_allowance"><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="other[allowancefile][ALW-0000000000000009]" id="other_AllowanceFile_ALW-0000000000000009" value="ALW-0000000000000009" >
                                            </td>
                                            <td>
                                                <label for="other_AllowanceFile_ALW-0000000000000009" id="lbl_other_AllowanceFile_ALW-0000000000000009"> Allowance Setup</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="other[allowancefile][ALW-0000000000000008]" id="other_AllowanceFile_ALW-0000000000000008" value="ALW-0000000000000008" >
                                            </td>
                                            <td>
                                                <label for="other_AllowanceFile_ALW-0000000000000008" id="lbl_other_AllowanceFile_ALW-0000000000000008"> Allowance-1</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="other[allowancefile][ALW-0000000000000010]" id="other_AllowanceFile_ALW-0000000000000010" value="ALW-0000000000000010" >
                                            </td>
                                            <td>
                                                <label for="other_AllowanceFile_ALW-0000000000000010" id="lbl_other_AllowanceFile_ALW-0000000000000010"> Inactive Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="other[allowancefile][ALW-0000000000000004]" id="other_AllowanceFile_ALW-0000000000000004" value="ALW-0000000000000004" >
                                            </td>
                                            <td>
                                                <label for="other_AllowanceFile_ALW-0000000000000004" id="lbl_other_AllowanceFile_ALW-0000000000000004"> Internet Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="other[allowancefile][ALW-0000000000000006]" id="other_AllowanceFile_ALW-0000000000000006" value="ALW-0000000000000006" >
                                            </td>
                                            <td>
                                                <label for="other_AllowanceFile_ALW-0000000000000006" id="lbl_other_AllowanceFile_ALW-0000000000000006"> Load Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="other[allowancefile][ALW-0000000000000005]" id="other_AllowanceFile_ALW-0000000000000005" value="ALW-0000000000000005" >
                                            </td>
                                            <td>
                                                <label for="other_AllowanceFile_ALW-0000000000000005" id="lbl_other_AllowanceFile_ALW-0000000000000005"> Meal Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="other[allowancefile][ALW-0000000000000007]" id="other_AllowanceFile_ALW-0000000000000007" value="ALW-0000000000000007" >
                                            </td>
                                            <td>
                                                <label for="other_AllowanceFile_ALW-0000000000000007" id="lbl_other_AllowanceFile_ALW-0000000000000007"> OB Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_other_def_earn">Default Earnings</legend>
						<div name="other[clb_otherearnings]" class="clb_otherearnings"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="other[otherearnings][EAR-0000000000000003]" id="other_EarningsFile_EAR-0000000000000003" value="EAR-0000000000000003" >
                                                </td>
                                                <td>
                                                    <label for="other_EarningsFile_EAR-0000000000000003" id="lbl_other_EarningsFile_EAR-0000000000000003"> Inactive Earnings
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="other[otherearnings][EAR-0000000000000002]" id="other_EarningsFile_EAR-0000000000000002" value="EAR-0000000000000002" >
                                                </td>
                                                <td>
                                                    <label for="other_EarningsFile_EAR-0000000000000002" id="lbl_other_EarningsFile_EAR-0000000000000002"> Other Earnings Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="other[otherearnings][EAR-0000000000000001]" id="other_EarningsFile_EAR-0000000000000001" value="EAR-0000000000000001" >
                                                </td>
                                                <td>
                                                    <label for="other_EarningsFile_EAR-0000000000000001" id="lbl_other_EarningsFile_EAR-0000000000000001"> SAMPLE
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_other_def_ded">Default Deductions</legend>
						<div name="other[clb_otherdeductions]" class="clb_otherdeductions"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="other[otherdeductions][DED-0000000000000007]" id="other_DeductionsFile_DED-0000000000000007" value="DED-0000000000000007" >
                                                </td>
                                                <td>
                                                    <label for="other_DeductionsFile_DED-0000000000000007" id="lbl_other_DeductionsFile_DED-0000000000000007"> 1-Generic Data new
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="other[otherdeductions][DED-0000000000000004]" id="other_DeductionsFile_DED-0000000000000004" value="DED-0000000000000004" >
                                                </td>
                                                <td>
                                                    <label for="other_DeductionsFile_DED-0000000000000004" id="lbl_other_DeductionsFile_DED-0000000000000004"> DAMAGES LOSS
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="other[otherdeductions][DED-0000000000000008]" id="other_DeductionsFile_DED-0000000000000008" value="DED-0000000000000008" >
                                                </td>
                                                <td>
                                                    <label for="other_DeductionsFile_DED-0000000000000008" id="lbl_other_DeductionsFile_DED-0000000000000008"> Deduction Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="other[otherdeductions][DED-0000000000000009]" id="other_DeductionsFile_DED-0000000000000009" value="DED-0000000000000009" >
                                                </td>
                                                <td>
                                                    <label for="other_DeductionsFile_DED-0000000000000009" id="lbl_other_DeductionsFile_DED-0000000000000009"> Inactive Deduction
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_other_def_loan">Default Loan Amortizations</legend>
						<div name="other[clb_loans]" class="clb_loans"><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="other[loansfile][LON-0000000000000002]" id="other_LoansFile_LON-0000000000000002" value="LON-0000000000000002" >
                                        </td>
                                        <td>
                                            <label for="other_LoansFile_LON-0000000000000002" id="lbl_other_LoansFile_LON-0000000000000002"> Inactive Loans</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="other[loansfile][LON-0000000000000001]" id="other_LoansFile_LON-0000000000000001" value="LON-0000000000000001" >
                                        </td>
                                        <td>
                                            <label for="other_LoansFile_LON-0000000000000001" id="lbl_other_LoansFile_LON-0000000000000001"> sample1</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div></div>
					</fieldset>
				</div>
   			</div>		</div>
		<div id="div_monthly">
			<ul style="font-size:12px;" class='lst_ul'>
			<li id="btnmonthly"><a href="#monthly">Monthly</a></li>			</ul>
			<div id="monthly">
   				<div class="contentdiv1" style="float:left; clear:both; width:100%">
					<fieldset style="text-align:left;padding-left:20px">
						<legend id="lbl_monthly_chkdefault">Check Defaults</legend>
						<table border="0">
							<tr>
								<td width="20px"><input type="checkbox" name="monthly[chk_computesss]" id="monthly[chk_computesss]" class="chk_computesss"></td>
								<td><label for="monthly[chk_computesss]" id="lbl_monthly_sss">SSS</label></td>	
								<td width="100px"></td>
								<td width="20px"><input type="checkbox" name="monthly[chk_autobasic]" id="monthly[chk_autobasic]" class="chk_autobasic"></td>
								<td colspan="4"><label for="monthly[chk_autobasic]" id="lbl_monthly_combasic">Auto Compute Basic (for Semi-Monthly and Monthly)</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="monthly[chk_computeph]" id="monthly[chk_computeph]" class="chk_computeph"></td>
								<td><label for="monthly[chk_computeph]" id="lbl_monthly_ph">PhilHealth</label></td>	
								<td></td>
								<td><input type="checkbox" name="monthly[chk_autopiece]" id="monthly[chk_autopiece]" class="chk_autopiece"></td>
								<td colspan="4"><label for="monthly[chk_autopiece]" id="lbl_monthly_piecerate">Auto Load Piece Rates</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="monthly[chk_computepi]" id="monthly[chk_computepi]" class="chk_computepi"></td>
								<td><label for="monthly[chk_computepi]" id="lbl_monthly_pagibig">Pag-Ibig</label></td>    
								<td></td>
								<td colspan="5" id="lbl_monthly_taxtable">Tax Table to Use</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="monthly[chk_computetax]" id="monthly[chk_computetax]" class="chk_computetax"></td>
								<td><label for="monthly[chk_computetax]" id="lbl_monthly_tax">Tax</label></td>	
								<td></td>
								<td colspan="2">
									<select name="monthly[cbo_taxtype]" class="cbo_taxtype" id="sel_monthly_taxtype">
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
										<option value="Semi-Monthly">Semi-Monthly</option>
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
									</select>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div class="contentdiv2" style="float:left; clear:both; width:100%">
					<fieldset class="defaults">
						<legend id="lbl_monthly_def_allow">Default Allowances</legend>
						<div name="monthly[clb_allowance]" class="clb_allowance"><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="monthly[allowancefile][ALW-0000000000000009]" id="monthly_AllowanceFile_ALW-0000000000000009" value="ALW-0000000000000009" >
                                            </td>
                                            <td>
                                                <label for="monthly_AllowanceFile_ALW-0000000000000009" id="lbl_monthly_AllowanceFile_ALW-0000000000000009"> Allowance Setup</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="monthly[allowancefile][ALW-0000000000000008]" id="monthly_AllowanceFile_ALW-0000000000000008" value="ALW-0000000000000008" >
                                            </td>
                                            <td>
                                                <label for="monthly_AllowanceFile_ALW-0000000000000008" id="lbl_monthly_AllowanceFile_ALW-0000000000000008"> Allowance-1</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="monthly[allowancefile][ALW-0000000000000010]" id="monthly_AllowanceFile_ALW-0000000000000010" value="ALW-0000000000000010" >
                                            </td>
                                            <td>
                                                <label for="monthly_AllowanceFile_ALW-0000000000000010" id="lbl_monthly_AllowanceFile_ALW-0000000000000010"> Inactive Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="monthly[allowancefile][ALW-0000000000000004]" id="monthly_AllowanceFile_ALW-0000000000000004" value="ALW-0000000000000004" >
                                            </td>
                                            <td>
                                                <label for="monthly_AllowanceFile_ALW-0000000000000004" id="lbl_monthly_AllowanceFile_ALW-0000000000000004"> Internet Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="monthly[allowancefile][ALW-0000000000000006]" id="monthly_AllowanceFile_ALW-0000000000000006" value="ALW-0000000000000006" >
                                            </td>
                                            <td>
                                                <label for="monthly_AllowanceFile_ALW-0000000000000006" id="lbl_monthly_AllowanceFile_ALW-0000000000000006"> Load Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="monthly[allowancefile][ALW-0000000000000005]" id="monthly_AllowanceFile_ALW-0000000000000005" value="ALW-0000000000000005" >
                                            </td>
                                            <td>
                                                <label for="monthly_AllowanceFile_ALW-0000000000000005" id="lbl_monthly_AllowanceFile_ALW-0000000000000005"> Meal Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="monthly[allowancefile][ALW-0000000000000007]" id="monthly_AllowanceFile_ALW-0000000000000007" value="ALW-0000000000000007" >
                                            </td>
                                            <td>
                                                <label for="monthly_AllowanceFile_ALW-0000000000000007" id="lbl_monthly_AllowanceFile_ALW-0000000000000007"> OB Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_monthly_def_earn">Default Earnings</legend>
						<div name="monthly[clb_otherearnings]" class="clb_otherearnings"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="monthly[otherearnings][EAR-0000000000000003]" id="monthly_EarningsFile_EAR-0000000000000003" value="EAR-0000000000000003" >
                                                </td>
                                                <td>
                                                    <label for="monthly_EarningsFile_EAR-0000000000000003" id="lbl_monthly_EarningsFile_EAR-0000000000000003"> Inactive Earnings
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="monthly[otherearnings][EAR-0000000000000002]" id="monthly_EarningsFile_EAR-0000000000000002" value="EAR-0000000000000002" >
                                                </td>
                                                <td>
                                                    <label for="monthly_EarningsFile_EAR-0000000000000002" id="lbl_monthly_EarningsFile_EAR-0000000000000002"> Other Earnings Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="monthly[otherearnings][EAR-0000000000000001]" id="monthly_EarningsFile_EAR-0000000000000001" value="EAR-0000000000000001" >
                                                </td>
                                                <td>
                                                    <label for="monthly_EarningsFile_EAR-0000000000000001" id="lbl_monthly_EarningsFile_EAR-0000000000000001"> SAMPLE
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_monthly_def_ded">Default Deductions</legend>
						<div name="monthly[clb_otherdeductions]" class="clb_otherdeductions"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="monthly[otherdeductions][DED-0000000000000007]" id="monthly_DeductionsFile_DED-0000000000000007" value="DED-0000000000000007" >
                                                </td>
                                                <td>
                                                    <label for="monthly_DeductionsFile_DED-0000000000000007" id="lbl_monthly_DeductionsFile_DED-0000000000000007"> 1-Generic Data new
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="monthly[otherdeductions][DED-0000000000000004]" id="monthly_DeductionsFile_DED-0000000000000004" value="DED-0000000000000004" >
                                                </td>
                                                <td>
                                                    <label for="monthly_DeductionsFile_DED-0000000000000004" id="lbl_monthly_DeductionsFile_DED-0000000000000004"> DAMAGES LOSS
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="monthly[otherdeductions][DED-0000000000000008]" id="monthly_DeductionsFile_DED-0000000000000008" value="DED-0000000000000008" >
                                                </td>
                                                <td>
                                                    <label for="monthly_DeductionsFile_DED-0000000000000008" id="lbl_monthly_DeductionsFile_DED-0000000000000008"> Deduction Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="monthly[otherdeductions][DED-0000000000000009]" id="monthly_DeductionsFile_DED-0000000000000009" value="DED-0000000000000009" >
                                                </td>
                                                <td>
                                                    <label for="monthly_DeductionsFile_DED-0000000000000009" id="lbl_monthly_DeductionsFile_DED-0000000000000009"> Inactive Deduction
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_monthly_def_loan">Default Loan Amortizations</legend>
						<div name="monthly[clb_loans]" class="clb_loans"><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="monthly[loansfile][LON-0000000000000002]" id="monthly_LoansFile_LON-0000000000000002" value="LON-0000000000000002" >
                                        </td>
                                        <td>
                                            <label for="monthly_LoansFile_LON-0000000000000002" id="lbl_monthly_LoansFile_LON-0000000000000002"> Inactive Loans</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="monthly[loansfile][LON-0000000000000001]" id="monthly_LoansFile_LON-0000000000000001" value="LON-0000000000000001" >
                                        </td>
                                        <td>
                                            <label for="monthly_LoansFile_LON-0000000000000001" id="lbl_monthly_LoansFile_LON-0000000000000001"> sample1</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div></div>
					</fieldset>
				</div>
   			</div>		</div>
		<div id="div_semi">
			<ul style="font-size:12px;" class='lst_ul'>
			<li id="btnfhalf"><a href="#fhalf">1st Half</a></li><li id="btnshalf"><a href="#shalf">2nd Half</a></li>			</ul>
			<div id="fhalf">
   				<div class="contentdiv1" style="float:left; clear:both; width:100%">
					<fieldset style="text-align:left;padding-left:20px">
						<legend id="lbl_fhalf_chkdefault">Check Defaults</legend>
						<table border="0">
							<tr>
								<td width="20px"><input type="checkbox" name="fhalf[chk_computesss]" id="fhalf[chk_computesss]" class="chk_computesss"></td>
								<td><label for="fhalf[chk_computesss]" id="lbl_fhalf_sss">SSS</label></td>	
								<td width="100px"></td>
								<td width="20px"><input type="checkbox" name="fhalf[chk_autobasic]" id="fhalf[chk_autobasic]" class="chk_autobasic"></td>
								<td colspan="4"><label for="fhalf[chk_autobasic]" id="lbl_fhalf_combasic">Auto Compute Basic (for Semi-Monthly and Monthly)</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="fhalf[chk_computeph]" id="fhalf[chk_computeph]" class="chk_computeph"></td>
								<td><label for="fhalf[chk_computeph]" id="lbl_fhalf_ph">PhilHealth</label></td>	
								<td></td>
								<td><input type="checkbox" name="fhalf[chk_autopiece]" id="fhalf[chk_autopiece]" class="chk_autopiece"></td>
								<td colspan="4"><label for="fhalf[chk_autopiece]" id="lbl_fhalf_piecerate">Auto Load Piece Rates</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="fhalf[chk_computepi]" id="fhalf[chk_computepi]" class="chk_computepi"></td>
								<td><label for="fhalf[chk_computepi]" id="lbl_fhalf_pagibig">Pag-Ibig</label></td>    
								<td></td>
								<td colspan="5" id="lbl_fhalf_taxtable">Tax Table to Use</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="fhalf[chk_computetax]" id="fhalf[chk_computetax]" class="chk_computetax"></td>
								<td><label for="fhalf[chk_computetax]" id="lbl_fhalf_tax">Tax</label></td>	
								<td></td>
								<td colspan="2">
									<select name="fhalf[cbo_taxtype]" class="cbo_taxtype" id="sel_fhalf_taxtype">
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
										<option value="Semi-Monthly">Semi-Monthly</option>
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
									</select>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div class="contentdiv2" style="float:left; clear:both; width:100%">
					<fieldset class="defaults">
						<legend id="lbl_fhalf_def_allow">Default Allowances</legend>
						<div name="fhalf[clb_allowance]" class="clb_allowance"><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fhalf[allowancefile][ALW-0000000000000009]" id="fhalf_AllowanceFile_ALW-0000000000000009" value="ALW-0000000000000009" >
                                            </td>
                                            <td>
                                                <label for="fhalf_AllowanceFile_ALW-0000000000000009" id="lbl_fhalf_AllowanceFile_ALW-0000000000000009"> Allowance Setup</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fhalf[allowancefile][ALW-0000000000000008]" id="fhalf_AllowanceFile_ALW-0000000000000008" value="ALW-0000000000000008" >
                                            </td>
                                            <td>
                                                <label for="fhalf_AllowanceFile_ALW-0000000000000008" id="lbl_fhalf_AllowanceFile_ALW-0000000000000008"> Allowance-1</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fhalf[allowancefile][ALW-0000000000000010]" id="fhalf_AllowanceFile_ALW-0000000000000010" value="ALW-0000000000000010" >
                                            </td>
                                            <td>
                                                <label for="fhalf_AllowanceFile_ALW-0000000000000010" id="lbl_fhalf_AllowanceFile_ALW-0000000000000010"> Inactive Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fhalf[allowancefile][ALW-0000000000000004]" id="fhalf_AllowanceFile_ALW-0000000000000004" value="ALW-0000000000000004" >
                                            </td>
                                            <td>
                                                <label for="fhalf_AllowanceFile_ALW-0000000000000004" id="lbl_fhalf_AllowanceFile_ALW-0000000000000004"> Internet Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fhalf[allowancefile][ALW-0000000000000006]" id="fhalf_AllowanceFile_ALW-0000000000000006" value="ALW-0000000000000006" >
                                            </td>
                                            <td>
                                                <label for="fhalf_AllowanceFile_ALW-0000000000000006" id="lbl_fhalf_AllowanceFile_ALW-0000000000000006"> Load Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fhalf[allowancefile][ALW-0000000000000005]" id="fhalf_AllowanceFile_ALW-0000000000000005" value="ALW-0000000000000005" >
                                            </td>
                                            <td>
                                                <label for="fhalf_AllowanceFile_ALW-0000000000000005" id="lbl_fhalf_AllowanceFile_ALW-0000000000000005"> Meal Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fhalf[allowancefile][ALW-0000000000000007]" id="fhalf_AllowanceFile_ALW-0000000000000007" value="ALW-0000000000000007" >
                                            </td>
                                            <td>
                                                <label for="fhalf_AllowanceFile_ALW-0000000000000007" id="lbl_fhalf_AllowanceFile_ALW-0000000000000007"> OB Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_fhalf_def_earn">Default Earnings</legend>
						<div name="fhalf[clb_otherearnings]" class="clb_otherearnings"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fhalf[otherearnings][EAR-0000000000000003]" id="fhalf_EarningsFile_EAR-0000000000000003" value="EAR-0000000000000003" >
                                                </td>
                                                <td>
                                                    <label for="fhalf_EarningsFile_EAR-0000000000000003" id="lbl_fhalf_EarningsFile_EAR-0000000000000003"> Inactive Earnings
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fhalf[otherearnings][EAR-0000000000000002]" id="fhalf_EarningsFile_EAR-0000000000000002" value="EAR-0000000000000002" >
                                                </td>
                                                <td>
                                                    <label for="fhalf_EarningsFile_EAR-0000000000000002" id="lbl_fhalf_EarningsFile_EAR-0000000000000002"> Other Earnings Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fhalf[otherearnings][EAR-0000000000000001]" id="fhalf_EarningsFile_EAR-0000000000000001" value="EAR-0000000000000001" >
                                                </td>
                                                <td>
                                                    <label for="fhalf_EarningsFile_EAR-0000000000000001" id="lbl_fhalf_EarningsFile_EAR-0000000000000001"> SAMPLE
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_fhalf_def_ded">Default Deductions</legend>
						<div name="fhalf[clb_otherdeductions]" class="clb_otherdeductions"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fhalf[otherdeductions][DED-0000000000000007]" id="fhalf_DeductionsFile_DED-0000000000000007" value="DED-0000000000000007" >
                                                </td>
                                                <td>
                                                    <label for="fhalf_DeductionsFile_DED-0000000000000007" id="lbl_fhalf_DeductionsFile_DED-0000000000000007"> 1-Generic Data new
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fhalf[otherdeductions][DED-0000000000000004]" id="fhalf_DeductionsFile_DED-0000000000000004" value="DED-0000000000000004" >
                                                </td>
                                                <td>
                                                    <label for="fhalf_DeductionsFile_DED-0000000000000004" id="lbl_fhalf_DeductionsFile_DED-0000000000000004"> DAMAGES LOSS
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fhalf[otherdeductions][DED-0000000000000008]" id="fhalf_DeductionsFile_DED-0000000000000008" value="DED-0000000000000008" >
                                                </td>
                                                <td>
                                                    <label for="fhalf_DeductionsFile_DED-0000000000000008" id="lbl_fhalf_DeductionsFile_DED-0000000000000008"> Deduction Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fhalf[otherdeductions][DED-0000000000000009]" id="fhalf_DeductionsFile_DED-0000000000000009" value="DED-0000000000000009" >
                                                </td>
                                                <td>
                                                    <label for="fhalf_DeductionsFile_DED-0000000000000009" id="lbl_fhalf_DeductionsFile_DED-0000000000000009"> Inactive Deduction
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_fhalf_def_loan">Default Loan Amortizations</legend>
						<div name="fhalf[clb_loans]" class="clb_loans"><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="fhalf[loansfile][LON-0000000000000002]" id="fhalf_LoansFile_LON-0000000000000002" value="LON-0000000000000002" >
                                        </td>
                                        <td>
                                            <label for="fhalf_LoansFile_LON-0000000000000002" id="lbl_fhalf_LoansFile_LON-0000000000000002"> Inactive Loans</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="fhalf[loansfile][LON-0000000000000001]" id="fhalf_LoansFile_LON-0000000000000001" value="LON-0000000000000001" >
                                        </td>
                                        <td>
                                            <label for="fhalf_LoansFile_LON-0000000000000001" id="lbl_fhalf_LoansFile_LON-0000000000000001"> sample1</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div></div>
					</fieldset>
				</div>
   			</div><div id="shalf">
   				<div class="contentdiv1" style="float:left; clear:both; width:100%">
					<fieldset style="text-align:left;padding-left:20px">
						<legend id="lbl_shalf_chkdefault">Check Defaults</legend>
						<table border="0">
							<tr>
								<td width="20px"><input type="checkbox" name="shalf[chk_computesss]" id="shalf[chk_computesss]" class="chk_computesss"></td>
								<td><label for="shalf[chk_computesss]" id="lbl_shalf_sss">SSS</label></td>	
								<td width="100px"></td>
								<td width="20px"><input type="checkbox" name="shalf[chk_autobasic]" id="shalf[chk_autobasic]" class="chk_autobasic"></td>
								<td colspan="4"><label for="shalf[chk_autobasic]" id="lbl_shalf_combasic">Auto Compute Basic (for Semi-Monthly and Monthly)</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="shalf[chk_computeph]" id="shalf[chk_computeph]" class="chk_computeph"></td>
								<td><label for="shalf[chk_computeph]" id="lbl_shalf_ph">PhilHealth</label></td>	
								<td></td>
								<td><input type="checkbox" name="shalf[chk_autopiece]" id="shalf[chk_autopiece]" class="chk_autopiece"></td>
								<td colspan="4"><label for="shalf[chk_autopiece]" id="lbl_shalf_piecerate">Auto Load Piece Rates</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="shalf[chk_computepi]" id="shalf[chk_computepi]" class="chk_computepi"></td>
								<td><label for="shalf[chk_computepi]" id="lbl_shalf_pagibig">Pag-Ibig</label></td>    
								<td></td>
								<td colspan="5" id="lbl_shalf_taxtable">Tax Table to Use</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="shalf[chk_computetax]" id="shalf[chk_computetax]" class="chk_computetax"></td>
								<td><label for="shalf[chk_computetax]" id="lbl_shalf_tax">Tax</label></td>	
								<td></td>
								<td colspan="2">
									<select name="shalf[cbo_taxtype]" class="cbo_taxtype" id="sel_shalf_taxtype">
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
										<option value="Semi-Monthly">Semi-Monthly</option>
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
									</select>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div class="contentdiv2" style="float:left; clear:both; width:100%">
					<fieldset class="defaults">
						<legend id="lbl_shalf_def_allow">Default Allowances</legend>
						<div name="shalf[clb_allowance]" class="clb_allowance"><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="shalf[allowancefile][ALW-0000000000000009]" id="shalf_AllowanceFile_ALW-0000000000000009" value="ALW-0000000000000009" >
                                            </td>
                                            <td>
                                                <label for="shalf_AllowanceFile_ALW-0000000000000009" id="lbl_shalf_AllowanceFile_ALW-0000000000000009"> Allowance Setup</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="shalf[allowancefile][ALW-0000000000000008]" id="shalf_AllowanceFile_ALW-0000000000000008" value="ALW-0000000000000008" >
                                            </td>
                                            <td>
                                                <label for="shalf_AllowanceFile_ALW-0000000000000008" id="lbl_shalf_AllowanceFile_ALW-0000000000000008"> Allowance-1</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="shalf[allowancefile][ALW-0000000000000010]" id="shalf_AllowanceFile_ALW-0000000000000010" value="ALW-0000000000000010" >
                                            </td>
                                            <td>
                                                <label for="shalf_AllowanceFile_ALW-0000000000000010" id="lbl_shalf_AllowanceFile_ALW-0000000000000010"> Inactive Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="shalf[allowancefile][ALW-0000000000000004]" id="shalf_AllowanceFile_ALW-0000000000000004" value="ALW-0000000000000004" >
                                            </td>
                                            <td>
                                                <label for="shalf_AllowanceFile_ALW-0000000000000004" id="lbl_shalf_AllowanceFile_ALW-0000000000000004"> Internet Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="shalf[allowancefile][ALW-0000000000000006]" id="shalf_AllowanceFile_ALW-0000000000000006" value="ALW-0000000000000006" >
                                            </td>
                                            <td>
                                                <label for="shalf_AllowanceFile_ALW-0000000000000006" id="lbl_shalf_AllowanceFile_ALW-0000000000000006"> Load Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="shalf[allowancefile][ALW-0000000000000005]" id="shalf_AllowanceFile_ALW-0000000000000005" value="ALW-0000000000000005" >
                                            </td>
                                            <td>
                                                <label for="shalf_AllowanceFile_ALW-0000000000000005" id="lbl_shalf_AllowanceFile_ALW-0000000000000005"> Meal Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="shalf[allowancefile][ALW-0000000000000007]" id="shalf_AllowanceFile_ALW-0000000000000007" value="ALW-0000000000000007" >
                                            </td>
                                            <td>
                                                <label for="shalf_AllowanceFile_ALW-0000000000000007" id="lbl_shalf_AllowanceFile_ALW-0000000000000007"> OB Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_shalf_def_earn">Default Earnings</legend>
						<div name="shalf[clb_otherearnings]" class="clb_otherearnings"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="shalf[otherearnings][EAR-0000000000000003]" id="shalf_EarningsFile_EAR-0000000000000003" value="EAR-0000000000000003" >
                                                </td>
                                                <td>
                                                    <label for="shalf_EarningsFile_EAR-0000000000000003" id="lbl_shalf_EarningsFile_EAR-0000000000000003"> Inactive Earnings
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="shalf[otherearnings][EAR-0000000000000002]" id="shalf_EarningsFile_EAR-0000000000000002" value="EAR-0000000000000002" >
                                                </td>
                                                <td>
                                                    <label for="shalf_EarningsFile_EAR-0000000000000002" id="lbl_shalf_EarningsFile_EAR-0000000000000002"> Other Earnings Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="shalf[otherearnings][EAR-0000000000000001]" id="shalf_EarningsFile_EAR-0000000000000001" value="EAR-0000000000000001" >
                                                </td>
                                                <td>
                                                    <label for="shalf_EarningsFile_EAR-0000000000000001" id="lbl_shalf_EarningsFile_EAR-0000000000000001"> SAMPLE
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_shalf_def_ded">Default Deductions</legend>
						<div name="shalf[clb_otherdeductions]" class="clb_otherdeductions"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="shalf[otherdeductions][DED-0000000000000007]" id="shalf_DeductionsFile_DED-0000000000000007" value="DED-0000000000000007" >
                                                </td>
                                                <td>
                                                    <label for="shalf_DeductionsFile_DED-0000000000000007" id="lbl_shalf_DeductionsFile_DED-0000000000000007"> 1-Generic Data new
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="shalf[otherdeductions][DED-0000000000000004]" id="shalf_DeductionsFile_DED-0000000000000004" value="DED-0000000000000004" >
                                                </td>
                                                <td>
                                                    <label for="shalf_DeductionsFile_DED-0000000000000004" id="lbl_shalf_DeductionsFile_DED-0000000000000004"> DAMAGES LOSS
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="shalf[otherdeductions][DED-0000000000000008]" id="shalf_DeductionsFile_DED-0000000000000008" value="DED-0000000000000008" >
                                                </td>
                                                <td>
                                                    <label for="shalf_DeductionsFile_DED-0000000000000008" id="lbl_shalf_DeductionsFile_DED-0000000000000008"> Deduction Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="shalf[otherdeductions][DED-0000000000000009]" id="shalf_DeductionsFile_DED-0000000000000009" value="DED-0000000000000009" >
                                                </td>
                                                <td>
                                                    <label for="shalf_DeductionsFile_DED-0000000000000009" id="lbl_shalf_DeductionsFile_DED-0000000000000009"> Inactive Deduction
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_shalf_def_loan">Default Loan Amortizations</legend>
						<div name="shalf[clb_loans]" class="clb_loans"><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="shalf[loansfile][LON-0000000000000002]" id="shalf_LoansFile_LON-0000000000000002" value="LON-0000000000000002" >
                                        </td>
                                        <td>
                                            <label for="shalf_LoansFile_LON-0000000000000002" id="lbl_shalf_LoansFile_LON-0000000000000002"> Inactive Loans</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="shalf[loansfile][LON-0000000000000001]" id="shalf_LoansFile_LON-0000000000000001" value="LON-0000000000000001" >
                                        </td>
                                        <td>
                                            <label for="shalf_LoansFile_LON-0000000000000001" id="lbl_shalf_LoansFile_LON-0000000000000001"> sample1</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div></div>
					</fieldset>
				</div>
   			</div>		</div>
		<div id="div_weekly">
			<ul style="font-size:12px;" class='lst_ul'>
			<li id="btnfweek"><a href="#fweek">1st Week</a></li><li id="btnsweek"><a href="#sweek">2nd Week</a></li><li id="btntweek"><a href="#tweek">3rd Week</a></li><li id="btnfoweek"><a href="#foweek">4th Week</a></li><li id="btnfiweek"><a href="#fiweek">5th Week</a></li>			</ul>
			<div id="fweek">
   				<div class="contentdiv1" style="float:left; clear:both; width:100%">
					<fieldset style="text-align:left;padding-left:20px">
						<legend id="lbl_fweek_chkdefault">Check Defaults</legend>
						<table border="0">
							<tr>
								<td width="20px"><input type="checkbox" name="fweek[chk_computesss]" id="fweek[chk_computesss]" class="chk_computesss"></td>
								<td><label for="fweek[chk_computesss]" id="lbl_fweek_sss">SSS</label></td>	
								<td width="100px"></td>
								<td width="20px"><input type="checkbox" name="fweek[chk_autobasic]" id="fweek[chk_autobasic]" class="chk_autobasic"></td>
								<td colspan="4"><label for="fweek[chk_autobasic]" id="lbl_fweek_combasic">Auto Compute Basic (for Semi-Monthly and Monthly)</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="fweek[chk_computeph]" id="fweek[chk_computeph]" class="chk_computeph"></td>
								<td><label for="fweek[chk_computeph]" id="lbl_fweek_ph">PhilHealth</label></td>	
								<td></td>
								<td><input type="checkbox" name="fweek[chk_autopiece]" id="fweek[chk_autopiece]" class="chk_autopiece"></td>
								<td colspan="4"><label for="fweek[chk_autopiece]" id="lbl_fweek_piecerate">Auto Load Piece Rates</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="fweek[chk_computepi]" id="fweek[chk_computepi]" class="chk_computepi"></td>
								<td><label for="fweek[chk_computepi]" id="lbl_fweek_pagibig">Pag-Ibig</label></td>    
								<td></td>
								<td colspan="5" id="lbl_fweek_taxtable">Tax Table to Use</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="fweek[chk_computetax]" id="fweek[chk_computetax]" class="chk_computetax"></td>
								<td><label for="fweek[chk_computetax]" id="lbl_fweek_tax">Tax</label></td>	
								<td></td>
								<td colspan="2">
									<select name="fweek[cbo_taxtype]" class="cbo_taxtype" id="sel_fweek_taxtype">
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
										<option value="Semi-Monthly">Semi-Monthly</option>
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
									</select>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div class="contentdiv2" style="float:left; clear:both; width:100%">
					<fieldset class="defaults">
						<legend id="lbl_fweek_def_allow">Default Allowances</legend>
						<div name="fweek[clb_allowance]" class="clb_allowance"><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fweek[allowancefile][ALW-0000000000000009]" id="fweek_AllowanceFile_ALW-0000000000000009" value="ALW-0000000000000009" >
                                            </td>
                                            <td>
                                                <label for="fweek_AllowanceFile_ALW-0000000000000009" id="lbl_fweek_AllowanceFile_ALW-0000000000000009"> Allowance Setup</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fweek[allowancefile][ALW-0000000000000008]" id="fweek_AllowanceFile_ALW-0000000000000008" value="ALW-0000000000000008" >
                                            </td>
                                            <td>
                                                <label for="fweek_AllowanceFile_ALW-0000000000000008" id="lbl_fweek_AllowanceFile_ALW-0000000000000008"> Allowance-1</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fweek[allowancefile][ALW-0000000000000010]" id="fweek_AllowanceFile_ALW-0000000000000010" value="ALW-0000000000000010" >
                                            </td>
                                            <td>
                                                <label for="fweek_AllowanceFile_ALW-0000000000000010" id="lbl_fweek_AllowanceFile_ALW-0000000000000010"> Inactive Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fweek[allowancefile][ALW-0000000000000004]" id="fweek_AllowanceFile_ALW-0000000000000004" value="ALW-0000000000000004" >
                                            </td>
                                            <td>
                                                <label for="fweek_AllowanceFile_ALW-0000000000000004" id="lbl_fweek_AllowanceFile_ALW-0000000000000004"> Internet Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fweek[allowancefile][ALW-0000000000000006]" id="fweek_AllowanceFile_ALW-0000000000000006" value="ALW-0000000000000006" >
                                            </td>
                                            <td>
                                                <label for="fweek_AllowanceFile_ALW-0000000000000006" id="lbl_fweek_AllowanceFile_ALW-0000000000000006"> Load Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fweek[allowancefile][ALW-0000000000000005]" id="fweek_AllowanceFile_ALW-0000000000000005" value="ALW-0000000000000005" >
                                            </td>
                                            <td>
                                                <label for="fweek_AllowanceFile_ALW-0000000000000005" id="lbl_fweek_AllowanceFile_ALW-0000000000000005"> Meal Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fweek[allowancefile][ALW-0000000000000007]" id="fweek_AllowanceFile_ALW-0000000000000007" value="ALW-0000000000000007" >
                                            </td>
                                            <td>
                                                <label for="fweek_AllowanceFile_ALW-0000000000000007" id="lbl_fweek_AllowanceFile_ALW-0000000000000007"> OB Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_fweek_def_earn">Default Earnings</legend>
						<div name="fweek[clb_otherearnings]" class="clb_otherearnings"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fweek[otherearnings][EAR-0000000000000003]" id="fweek_EarningsFile_EAR-0000000000000003" value="EAR-0000000000000003" >
                                                </td>
                                                <td>
                                                    <label for="fweek_EarningsFile_EAR-0000000000000003" id="lbl_fweek_EarningsFile_EAR-0000000000000003"> Inactive Earnings
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fweek[otherearnings][EAR-0000000000000002]" id="fweek_EarningsFile_EAR-0000000000000002" value="EAR-0000000000000002" >
                                                </td>
                                                <td>
                                                    <label for="fweek_EarningsFile_EAR-0000000000000002" id="lbl_fweek_EarningsFile_EAR-0000000000000002"> Other Earnings Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fweek[otherearnings][EAR-0000000000000001]" id="fweek_EarningsFile_EAR-0000000000000001" value="EAR-0000000000000001" >
                                                </td>
                                                <td>
                                                    <label for="fweek_EarningsFile_EAR-0000000000000001" id="lbl_fweek_EarningsFile_EAR-0000000000000001"> SAMPLE
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_fweek_def_ded">Default Deductions</legend>
						<div name="fweek[clb_otherdeductions]" class="clb_otherdeductions"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fweek[otherdeductions][DED-0000000000000007]" id="fweek_DeductionsFile_DED-0000000000000007" value="DED-0000000000000007" >
                                                </td>
                                                <td>
                                                    <label for="fweek_DeductionsFile_DED-0000000000000007" id="lbl_fweek_DeductionsFile_DED-0000000000000007"> 1-Generic Data new
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fweek[otherdeductions][DED-0000000000000004]" id="fweek_DeductionsFile_DED-0000000000000004" value="DED-0000000000000004" >
                                                </td>
                                                <td>
                                                    <label for="fweek_DeductionsFile_DED-0000000000000004" id="lbl_fweek_DeductionsFile_DED-0000000000000004"> DAMAGES LOSS
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fweek[otherdeductions][DED-0000000000000008]" id="fweek_DeductionsFile_DED-0000000000000008" value="DED-0000000000000008" >
                                                </td>
                                                <td>
                                                    <label for="fweek_DeductionsFile_DED-0000000000000008" id="lbl_fweek_DeductionsFile_DED-0000000000000008"> Deduction Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fweek[otherdeductions][DED-0000000000000009]" id="fweek_DeductionsFile_DED-0000000000000009" value="DED-0000000000000009" >
                                                </td>
                                                <td>
                                                    <label for="fweek_DeductionsFile_DED-0000000000000009" id="lbl_fweek_DeductionsFile_DED-0000000000000009"> Inactive Deduction
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_fweek_def_loan">Default Loan Amortizations</legend>
						<div name="fweek[clb_loans]" class="clb_loans"><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="fweek[loansfile][LON-0000000000000002]" id="fweek_LoansFile_LON-0000000000000002" value="LON-0000000000000002" >
                                        </td>
                                        <td>
                                            <label for="fweek_LoansFile_LON-0000000000000002" id="lbl_fweek_LoansFile_LON-0000000000000002"> Inactive Loans</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="fweek[loansfile][LON-0000000000000001]" id="fweek_LoansFile_LON-0000000000000001" value="LON-0000000000000001" >
                                        </td>
                                        <td>
                                            <label for="fweek_LoansFile_LON-0000000000000001" id="lbl_fweek_LoansFile_LON-0000000000000001"> sample1</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div></div>
					</fieldset>
				</div>
   			</div><div id="sweek">
   				<div class="contentdiv1" style="float:left; clear:both; width:100%">
					<fieldset style="text-align:left;padding-left:20px">
						<legend id="lbl_sweek_chkdefault">Check Defaults</legend>
						<table border="0">
							<tr>
								<td width="20px"><input type="checkbox" name="sweek[chk_computesss]" id="sweek[chk_computesss]" class="chk_computesss"></td>
								<td><label for="sweek[chk_computesss]" id="lbl_sweek_sss">SSS</label></td>	
								<td width="100px"></td>
								<td width="20px"><input type="checkbox" name="sweek[chk_autobasic]" id="sweek[chk_autobasic]" class="chk_autobasic"></td>
								<td colspan="4"><label for="sweek[chk_autobasic]" id="lbl_sweek_combasic">Auto Compute Basic (for Semi-Monthly and Monthly)</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="sweek[chk_computeph]" id="sweek[chk_computeph]" class="chk_computeph"></td>
								<td><label for="sweek[chk_computeph]" id="lbl_sweek_ph">PhilHealth</label></td>	
								<td></td>
								<td><input type="checkbox" name="sweek[chk_autopiece]" id="sweek[chk_autopiece]" class="chk_autopiece"></td>
								<td colspan="4"><label for="sweek[chk_autopiece]" id="lbl_sweek_piecerate">Auto Load Piece Rates</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="sweek[chk_computepi]" id="sweek[chk_computepi]" class="chk_computepi"></td>
								<td><label for="sweek[chk_computepi]" id="lbl_sweek_pagibig">Pag-Ibig</label></td>    
								<td></td>
								<td colspan="5" id="lbl_sweek_taxtable">Tax Table to Use</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="sweek[chk_computetax]" id="sweek[chk_computetax]" class="chk_computetax"></td>
								<td><label for="sweek[chk_computetax]" id="lbl_sweek_tax">Tax</label></td>	
								<td></td>
								<td colspan="2">
									<select name="sweek[cbo_taxtype]" class="cbo_taxtype" id="sel_sweek_taxtype">
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
										<option value="Semi-Monthly">Semi-Monthly</option>
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
									</select>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div class="contentdiv2" style="float:left; clear:both; width:100%">
					<fieldset class="defaults">
						<legend id="lbl_sweek_def_allow">Default Allowances</legend>
						<div name="sweek[clb_allowance]" class="clb_allowance"><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="sweek[allowancefile][ALW-0000000000000009]" id="sweek_AllowanceFile_ALW-0000000000000009" value="ALW-0000000000000009" >
                                            </td>
                                            <td>
                                                <label for="sweek_AllowanceFile_ALW-0000000000000009" id="lbl_sweek_AllowanceFile_ALW-0000000000000009"> Allowance Setup</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="sweek[allowancefile][ALW-0000000000000008]" id="sweek_AllowanceFile_ALW-0000000000000008" value="ALW-0000000000000008" >
                                            </td>
                                            <td>
                                                <label for="sweek_AllowanceFile_ALW-0000000000000008" id="lbl_sweek_AllowanceFile_ALW-0000000000000008"> Allowance-1</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="sweek[allowancefile][ALW-0000000000000010]" id="sweek_AllowanceFile_ALW-0000000000000010" value="ALW-0000000000000010" >
                                            </td>
                                            <td>
                                                <label for="sweek_AllowanceFile_ALW-0000000000000010" id="lbl_sweek_AllowanceFile_ALW-0000000000000010"> Inactive Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="sweek[allowancefile][ALW-0000000000000004]" id="sweek_AllowanceFile_ALW-0000000000000004" value="ALW-0000000000000004" >
                                            </td>
                                            <td>
                                                <label for="sweek_AllowanceFile_ALW-0000000000000004" id="lbl_sweek_AllowanceFile_ALW-0000000000000004"> Internet Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="sweek[allowancefile][ALW-0000000000000006]" id="sweek_AllowanceFile_ALW-0000000000000006" value="ALW-0000000000000006" >
                                            </td>
                                            <td>
                                                <label for="sweek_AllowanceFile_ALW-0000000000000006" id="lbl_sweek_AllowanceFile_ALW-0000000000000006"> Load Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="sweek[allowancefile][ALW-0000000000000005]" id="sweek_AllowanceFile_ALW-0000000000000005" value="ALW-0000000000000005" >
                                            </td>
                                            <td>
                                                <label for="sweek_AllowanceFile_ALW-0000000000000005" id="lbl_sweek_AllowanceFile_ALW-0000000000000005"> Meal Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="sweek[allowancefile][ALW-0000000000000007]" id="sweek_AllowanceFile_ALW-0000000000000007" value="ALW-0000000000000007" >
                                            </td>
                                            <td>
                                                <label for="sweek_AllowanceFile_ALW-0000000000000007" id="lbl_sweek_AllowanceFile_ALW-0000000000000007"> OB Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_sweek_def_earn">Default Earnings</legend>
						<div name="sweek[clb_otherearnings]" class="clb_otherearnings"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="sweek[otherearnings][EAR-0000000000000003]" id="sweek_EarningsFile_EAR-0000000000000003" value="EAR-0000000000000003" >
                                                </td>
                                                <td>
                                                    <label for="sweek_EarningsFile_EAR-0000000000000003" id="lbl_sweek_EarningsFile_EAR-0000000000000003"> Inactive Earnings
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="sweek[otherearnings][EAR-0000000000000002]" id="sweek_EarningsFile_EAR-0000000000000002" value="EAR-0000000000000002" >
                                                </td>
                                                <td>
                                                    <label for="sweek_EarningsFile_EAR-0000000000000002" id="lbl_sweek_EarningsFile_EAR-0000000000000002"> Other Earnings Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="sweek[otherearnings][EAR-0000000000000001]" id="sweek_EarningsFile_EAR-0000000000000001" value="EAR-0000000000000001" >
                                                </td>
                                                <td>
                                                    <label for="sweek_EarningsFile_EAR-0000000000000001" id="lbl_sweek_EarningsFile_EAR-0000000000000001"> SAMPLE
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_sweek_def_ded">Default Deductions</legend>
						<div name="sweek[clb_otherdeductions]" class="clb_otherdeductions"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="sweek[otherdeductions][DED-0000000000000007]" id="sweek_DeductionsFile_DED-0000000000000007" value="DED-0000000000000007" >
                                                </td>
                                                <td>
                                                    <label for="sweek_DeductionsFile_DED-0000000000000007" id="lbl_sweek_DeductionsFile_DED-0000000000000007"> 1-Generic Data new
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="sweek[otherdeductions][DED-0000000000000004]" id="sweek_DeductionsFile_DED-0000000000000004" value="DED-0000000000000004" >
                                                </td>
                                                <td>
                                                    <label for="sweek_DeductionsFile_DED-0000000000000004" id="lbl_sweek_DeductionsFile_DED-0000000000000004"> DAMAGES LOSS
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="sweek[otherdeductions][DED-0000000000000008]" id="sweek_DeductionsFile_DED-0000000000000008" value="DED-0000000000000008" >
                                                </td>
                                                <td>
                                                    <label for="sweek_DeductionsFile_DED-0000000000000008" id="lbl_sweek_DeductionsFile_DED-0000000000000008"> Deduction Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="sweek[otherdeductions][DED-0000000000000009]" id="sweek_DeductionsFile_DED-0000000000000009" value="DED-0000000000000009" >
                                                </td>
                                                <td>
                                                    <label for="sweek_DeductionsFile_DED-0000000000000009" id="lbl_sweek_DeductionsFile_DED-0000000000000009"> Inactive Deduction
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_sweek_def_loan">Default Loan Amortizations</legend>
						<div name="sweek[clb_loans]" class="clb_loans"><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="sweek[loansfile][LON-0000000000000002]" id="sweek_LoansFile_LON-0000000000000002" value="LON-0000000000000002" >
                                        </td>
                                        <td>
                                            <label for="sweek_LoansFile_LON-0000000000000002" id="lbl_sweek_LoansFile_LON-0000000000000002"> Inactive Loans</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="sweek[loansfile][LON-0000000000000001]" id="sweek_LoansFile_LON-0000000000000001" value="LON-0000000000000001" >
                                        </td>
                                        <td>
                                            <label for="sweek_LoansFile_LON-0000000000000001" id="lbl_sweek_LoansFile_LON-0000000000000001"> sample1</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div></div>
					</fieldset>
				</div>
   			</div><div id="tweek">
   				<div class="contentdiv1" style="float:left; clear:both; width:100%">
					<fieldset style="text-align:left;padding-left:20px">
						<legend id="lbl_tweek_chkdefault">Check Defaults</legend>
						<table border="0">
							<tr>
								<td width="20px"><input type="checkbox" name="tweek[chk_computesss]" id="tweek[chk_computesss]" class="chk_computesss"></td>
								<td><label for="tweek[chk_computesss]" id="lbl_tweek_sss">SSS</label></td>	
								<td width="100px"></td>
								<td width="20px"><input type="checkbox" name="tweek[chk_autobasic]" id="tweek[chk_autobasic]" class="chk_autobasic"></td>
								<td colspan="4"><label for="tweek[chk_autobasic]" id="lbl_tweek_combasic">Auto Compute Basic (for Semi-Monthly and Monthly)</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="tweek[chk_computeph]" id="tweek[chk_computeph]" class="chk_computeph"></td>
								<td><label for="tweek[chk_computeph]" id="lbl_tweek_ph">PhilHealth</label></td>	
								<td></td>
								<td><input type="checkbox" name="tweek[chk_autopiece]" id="tweek[chk_autopiece]" class="chk_autopiece"></td>
								<td colspan="4"><label for="tweek[chk_autopiece]" id="lbl_tweek_piecerate">Auto Load Piece Rates</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="tweek[chk_computepi]" id="tweek[chk_computepi]" class="chk_computepi"></td>
								<td><label for="tweek[chk_computepi]" id="lbl_tweek_pagibig">Pag-Ibig</label></td>    
								<td></td>
								<td colspan="5" id="lbl_tweek_taxtable">Tax Table to Use</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="tweek[chk_computetax]" id="tweek[chk_computetax]" class="chk_computetax"></td>
								<td><label for="tweek[chk_computetax]" id="lbl_tweek_tax">Tax</label></td>	
								<td></td>
								<td colspan="2">
									<select name="tweek[cbo_taxtype]" class="cbo_taxtype" id="sel_tweek_taxtype">
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
										<option value="Semi-Monthly">Semi-Monthly</option>
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
									</select>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div class="contentdiv2" style="float:left; clear:both; width:100%">
					<fieldset class="defaults">
						<legend id="lbl_tweek_def_allow">Default Allowances</legend>
						<div name="tweek[clb_allowance]" class="clb_allowance"><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="tweek[allowancefile][ALW-0000000000000009]" id="tweek_AllowanceFile_ALW-0000000000000009" value="ALW-0000000000000009" >
                                            </td>
                                            <td>
                                                <label for="tweek_AllowanceFile_ALW-0000000000000009" id="lbl_tweek_AllowanceFile_ALW-0000000000000009"> Allowance Setup</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="tweek[allowancefile][ALW-0000000000000008]" id="tweek_AllowanceFile_ALW-0000000000000008" value="ALW-0000000000000008" >
                                            </td>
                                            <td>
                                                <label for="tweek_AllowanceFile_ALW-0000000000000008" id="lbl_tweek_AllowanceFile_ALW-0000000000000008"> Allowance-1</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="tweek[allowancefile][ALW-0000000000000010]" id="tweek_AllowanceFile_ALW-0000000000000010" value="ALW-0000000000000010" >
                                            </td>
                                            <td>
                                                <label for="tweek_AllowanceFile_ALW-0000000000000010" id="lbl_tweek_AllowanceFile_ALW-0000000000000010"> Inactive Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="tweek[allowancefile][ALW-0000000000000004]" id="tweek_AllowanceFile_ALW-0000000000000004" value="ALW-0000000000000004" >
                                            </td>
                                            <td>
                                                <label for="tweek_AllowanceFile_ALW-0000000000000004" id="lbl_tweek_AllowanceFile_ALW-0000000000000004"> Internet Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="tweek[allowancefile][ALW-0000000000000006]" id="tweek_AllowanceFile_ALW-0000000000000006" value="ALW-0000000000000006" >
                                            </td>
                                            <td>
                                                <label for="tweek_AllowanceFile_ALW-0000000000000006" id="lbl_tweek_AllowanceFile_ALW-0000000000000006"> Load Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="tweek[allowancefile][ALW-0000000000000005]" id="tweek_AllowanceFile_ALW-0000000000000005" value="ALW-0000000000000005" >
                                            </td>
                                            <td>
                                                <label for="tweek_AllowanceFile_ALW-0000000000000005" id="lbl_tweek_AllowanceFile_ALW-0000000000000005"> Meal Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="tweek[allowancefile][ALW-0000000000000007]" id="tweek_AllowanceFile_ALW-0000000000000007" value="ALW-0000000000000007" >
                                            </td>
                                            <td>
                                                <label for="tweek_AllowanceFile_ALW-0000000000000007" id="lbl_tweek_AllowanceFile_ALW-0000000000000007"> OB Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_tweek_def_earn">Default Earnings</legend>
						<div name="tweek[clb_otherearnings]" class="clb_otherearnings"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="tweek[otherearnings][EAR-0000000000000003]" id="tweek_EarningsFile_EAR-0000000000000003" value="EAR-0000000000000003" >
                                                </td>
                                                <td>
                                                    <label for="tweek_EarningsFile_EAR-0000000000000003" id="lbl_tweek_EarningsFile_EAR-0000000000000003"> Inactive Earnings
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="tweek[otherearnings][EAR-0000000000000002]" id="tweek_EarningsFile_EAR-0000000000000002" value="EAR-0000000000000002" >
                                                </td>
                                                <td>
                                                    <label for="tweek_EarningsFile_EAR-0000000000000002" id="lbl_tweek_EarningsFile_EAR-0000000000000002"> Other Earnings Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="tweek[otherearnings][EAR-0000000000000001]" id="tweek_EarningsFile_EAR-0000000000000001" value="EAR-0000000000000001" >
                                                </td>
                                                <td>
                                                    <label for="tweek_EarningsFile_EAR-0000000000000001" id="lbl_tweek_EarningsFile_EAR-0000000000000001"> SAMPLE
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_tweek_def_ded">Default Deductions</legend>
						<div name="tweek[clb_otherdeductions]" class="clb_otherdeductions"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="tweek[otherdeductions][DED-0000000000000007]" id="tweek_DeductionsFile_DED-0000000000000007" value="DED-0000000000000007" >
                                                </td>
                                                <td>
                                                    <label for="tweek_DeductionsFile_DED-0000000000000007" id="lbl_tweek_DeductionsFile_DED-0000000000000007"> 1-Generic Data new
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="tweek[otherdeductions][DED-0000000000000004]" id="tweek_DeductionsFile_DED-0000000000000004" value="DED-0000000000000004" >
                                                </td>
                                                <td>
                                                    <label for="tweek_DeductionsFile_DED-0000000000000004" id="lbl_tweek_DeductionsFile_DED-0000000000000004"> DAMAGES LOSS
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="tweek[otherdeductions][DED-0000000000000008]" id="tweek_DeductionsFile_DED-0000000000000008" value="DED-0000000000000008" >
                                                </td>
                                                <td>
                                                    <label for="tweek_DeductionsFile_DED-0000000000000008" id="lbl_tweek_DeductionsFile_DED-0000000000000008"> Deduction Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="tweek[otherdeductions][DED-0000000000000009]" id="tweek_DeductionsFile_DED-0000000000000009" value="DED-0000000000000009" >
                                                </td>
                                                <td>
                                                    <label for="tweek_DeductionsFile_DED-0000000000000009" id="lbl_tweek_DeductionsFile_DED-0000000000000009"> Inactive Deduction
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_tweek_def_loan">Default Loan Amortizations</legend>
						<div name="tweek[clb_loans]" class="clb_loans"><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="tweek[loansfile][LON-0000000000000002]" id="tweek_LoansFile_LON-0000000000000002" value="LON-0000000000000002" >
                                        </td>
                                        <td>
                                            <label for="tweek_LoansFile_LON-0000000000000002" id="lbl_tweek_LoansFile_LON-0000000000000002"> Inactive Loans</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="tweek[loansfile][LON-0000000000000001]" id="tweek_LoansFile_LON-0000000000000001" value="LON-0000000000000001" >
                                        </td>
                                        <td>
                                            <label for="tweek_LoansFile_LON-0000000000000001" id="lbl_tweek_LoansFile_LON-0000000000000001"> sample1</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div></div>
					</fieldset>
				</div>
   			</div><div id="foweek">
   				<div class="contentdiv1" style="float:left; clear:both; width:100%">
					<fieldset style="text-align:left;padding-left:20px">
						<legend id="lbl_foweek_chkdefault">Check Defaults</legend>
						<table border="0">
							<tr>
								<td width="20px"><input type="checkbox" name="foweek[chk_computesss]" id="foweek[chk_computesss]" class="chk_computesss"></td>
								<td><label for="foweek[chk_computesss]" id="lbl_foweek_sss">SSS</label></td>	
								<td width="100px"></td>
								<td width="20px"><input type="checkbox" name="foweek[chk_autobasic]" id="foweek[chk_autobasic]" class="chk_autobasic"></td>
								<td colspan="4"><label for="foweek[chk_autobasic]" id="lbl_foweek_combasic">Auto Compute Basic (for Semi-Monthly and Monthly)</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="foweek[chk_computeph]" id="foweek[chk_computeph]" class="chk_computeph"></td>
								<td><label for="foweek[chk_computeph]" id="lbl_foweek_ph">PhilHealth</label></td>	
								<td></td>
								<td><input type="checkbox" name="foweek[chk_autopiece]" id="foweek[chk_autopiece]" class="chk_autopiece"></td>
								<td colspan="4"><label for="foweek[chk_autopiece]" id="lbl_foweek_piecerate">Auto Load Piece Rates</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="foweek[chk_computepi]" id="foweek[chk_computepi]" class="chk_computepi"></td>
								<td><label for="foweek[chk_computepi]" id="lbl_foweek_pagibig">Pag-Ibig</label></td>    
								<td></td>
								<td colspan="5" id="lbl_foweek_taxtable">Tax Table to Use</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="foweek[chk_computetax]" id="foweek[chk_computetax]" class="chk_computetax"></td>
								<td><label for="foweek[chk_computetax]" id="lbl_foweek_tax">Tax</label></td>	
								<td></td>
								<td colspan="2">
									<select name="foweek[cbo_taxtype]" class="cbo_taxtype" id="sel_foweek_taxtype">
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
										<option value="Semi-Monthly">Semi-Monthly</option>
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
									</select>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div class="contentdiv2" style="float:left; clear:both; width:100%">
					<fieldset class="defaults">
						<legend id="lbl_foweek_def_allow">Default Allowances</legend>
						<div name="foweek[clb_allowance]" class="clb_allowance"><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="foweek[allowancefile][ALW-0000000000000009]" id="foweek_AllowanceFile_ALW-0000000000000009" value="ALW-0000000000000009" >
                                            </td>
                                            <td>
                                                <label for="foweek_AllowanceFile_ALW-0000000000000009" id="lbl_foweek_AllowanceFile_ALW-0000000000000009"> Allowance Setup</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="foweek[allowancefile][ALW-0000000000000008]" id="foweek_AllowanceFile_ALW-0000000000000008" value="ALW-0000000000000008" >
                                            </td>
                                            <td>
                                                <label for="foweek_AllowanceFile_ALW-0000000000000008" id="lbl_foweek_AllowanceFile_ALW-0000000000000008"> Allowance-1</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="foweek[allowancefile][ALW-0000000000000010]" id="foweek_AllowanceFile_ALW-0000000000000010" value="ALW-0000000000000010" >
                                            </td>
                                            <td>
                                                <label for="foweek_AllowanceFile_ALW-0000000000000010" id="lbl_foweek_AllowanceFile_ALW-0000000000000010"> Inactive Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="foweek[allowancefile][ALW-0000000000000004]" id="foweek_AllowanceFile_ALW-0000000000000004" value="ALW-0000000000000004" >
                                            </td>
                                            <td>
                                                <label for="foweek_AllowanceFile_ALW-0000000000000004" id="lbl_foweek_AllowanceFile_ALW-0000000000000004"> Internet Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="foweek[allowancefile][ALW-0000000000000006]" id="foweek_AllowanceFile_ALW-0000000000000006" value="ALW-0000000000000006" >
                                            </td>
                                            <td>
                                                <label for="foweek_AllowanceFile_ALW-0000000000000006" id="lbl_foweek_AllowanceFile_ALW-0000000000000006"> Load Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="foweek[allowancefile][ALW-0000000000000005]" id="foweek_AllowanceFile_ALW-0000000000000005" value="ALW-0000000000000005" >
                                            </td>
                                            <td>
                                                <label for="foweek_AllowanceFile_ALW-0000000000000005" id="lbl_foweek_AllowanceFile_ALW-0000000000000005"> Meal Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="foweek[allowancefile][ALW-0000000000000007]" id="foweek_AllowanceFile_ALW-0000000000000007" value="ALW-0000000000000007" >
                                            </td>
                                            <td>
                                                <label for="foweek_AllowanceFile_ALW-0000000000000007" id="lbl_foweek_AllowanceFile_ALW-0000000000000007"> OB Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_foweek_def_earn">Default Earnings</legend>
						<div name="foweek[clb_otherearnings]" class="clb_otherearnings"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="foweek[otherearnings][EAR-0000000000000003]" id="foweek_EarningsFile_EAR-0000000000000003" value="EAR-0000000000000003" >
                                                </td>
                                                <td>
                                                    <label for="foweek_EarningsFile_EAR-0000000000000003" id="lbl_foweek_EarningsFile_EAR-0000000000000003"> Inactive Earnings
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="foweek[otherearnings][EAR-0000000000000002]" id="foweek_EarningsFile_EAR-0000000000000002" value="EAR-0000000000000002" >
                                                </td>
                                                <td>
                                                    <label for="foweek_EarningsFile_EAR-0000000000000002" id="lbl_foweek_EarningsFile_EAR-0000000000000002"> Other Earnings Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="foweek[otherearnings][EAR-0000000000000001]" id="foweek_EarningsFile_EAR-0000000000000001" value="EAR-0000000000000001" >
                                                </td>
                                                <td>
                                                    <label for="foweek_EarningsFile_EAR-0000000000000001" id="lbl_foweek_EarningsFile_EAR-0000000000000001"> SAMPLE
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_foweek_def_ded">Default Deductions</legend>
						<div name="foweek[clb_otherdeductions]" class="clb_otherdeductions"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="foweek[otherdeductions][DED-0000000000000007]" id="foweek_DeductionsFile_DED-0000000000000007" value="DED-0000000000000007" >
                                                </td>
                                                <td>
                                                    <label for="foweek_DeductionsFile_DED-0000000000000007" id="lbl_foweek_DeductionsFile_DED-0000000000000007"> 1-Generic Data new
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="foweek[otherdeductions][DED-0000000000000004]" id="foweek_DeductionsFile_DED-0000000000000004" value="DED-0000000000000004" >
                                                </td>
                                                <td>
                                                    <label for="foweek_DeductionsFile_DED-0000000000000004" id="lbl_foweek_DeductionsFile_DED-0000000000000004"> DAMAGES LOSS
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="foweek[otherdeductions][DED-0000000000000008]" id="foweek_DeductionsFile_DED-0000000000000008" value="DED-0000000000000008" >
                                                </td>
                                                <td>
                                                    <label for="foweek_DeductionsFile_DED-0000000000000008" id="lbl_foweek_DeductionsFile_DED-0000000000000008"> Deduction Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="foweek[otherdeductions][DED-0000000000000009]" id="foweek_DeductionsFile_DED-0000000000000009" value="DED-0000000000000009" >
                                                </td>
                                                <td>
                                                    <label for="foweek_DeductionsFile_DED-0000000000000009" id="lbl_foweek_DeductionsFile_DED-0000000000000009"> Inactive Deduction
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_foweek_def_loan">Default Loan Amortizations</legend>
						<div name="foweek[clb_loans]" class="clb_loans"><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="foweek[loansfile][LON-0000000000000002]" id="foweek_LoansFile_LON-0000000000000002" value="LON-0000000000000002" >
                                        </td>
                                        <td>
                                            <label for="foweek_LoansFile_LON-0000000000000002" id="lbl_foweek_LoansFile_LON-0000000000000002"> Inactive Loans</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="foweek[loansfile][LON-0000000000000001]" id="foweek_LoansFile_LON-0000000000000001" value="LON-0000000000000001" >
                                        </td>
                                        <td>
                                            <label for="foweek_LoansFile_LON-0000000000000001" id="lbl_foweek_LoansFile_LON-0000000000000001"> sample1</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div></div>
					</fieldset>
				</div>
   			</div><div id="fiweek">
   				<div class="contentdiv1" style="float:left; clear:both; width:100%">
					<fieldset style="text-align:left;padding-left:20px">
						<legend id="lbl_fiweek_chkdefault">Check Defaults</legend>
						<table border="0">
							<tr>
								<td width="20px"><input type="checkbox" name="fiweek[chk_computesss]" id="fiweek[chk_computesss]" class="chk_computesss"></td>
								<td><label for="fiweek[chk_computesss]" id="lbl_fiweek_sss">SSS</label></td>	
								<td width="100px"></td>
								<td width="20px"><input type="checkbox" name="fiweek[chk_autobasic]" id="fiweek[chk_autobasic]" class="chk_autobasic"></td>
								<td colspan="4"><label for="fiweek[chk_autobasic]" id="lbl_fiweek_combasic">Auto Compute Basic (for Semi-Monthly and Monthly)</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="fiweek[chk_computeph]" id="fiweek[chk_computeph]" class="chk_computeph"></td>
								<td><label for="fiweek[chk_computeph]" id="lbl_fiweek_ph">PhilHealth</label></td>	
								<td></td>
								<td><input type="checkbox" name="fiweek[chk_autopiece]" id="fiweek[chk_autopiece]" class="chk_autopiece"></td>
								<td colspan="4"><label for="fiweek[chk_autopiece]" id="lbl_fiweek_piecerate">Auto Load Piece Rates</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="fiweek[chk_computepi]" id="fiweek[chk_computepi]" class="chk_computepi"></td>
								<td><label for="fiweek[chk_computepi]" id="lbl_fiweek_pagibig">Pag-Ibig</label></td>    
								<td></td>
								<td colspan="5" id="lbl_fiweek_taxtable">Tax Table to Use</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="fiweek[chk_computetax]" id="fiweek[chk_computetax]" class="chk_computetax"></td>
								<td><label for="fiweek[chk_computetax]" id="lbl_fiweek_tax">Tax</label></td>	
								<td></td>
								<td colspan="2">
									<select name="fiweek[cbo_taxtype]" class="cbo_taxtype" id="sel_fiweek_taxtype">
										<option value="Daily">Daily</option>
										<option value="Weekly">Weekly</option>
										<option value="Semi-Monthly">Semi-Monthly</option>
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
									</select>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div class="contentdiv2" style="float:left; clear:both; width:100%">
					<fieldset class="defaults">
						<legend id="lbl_fiweek_def_allow">Default Allowances</legend>
						<div name="fiweek[clb_allowance]" class="clb_allowance"><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fiweek[allowancefile][ALW-0000000000000009]" id="fiweek_AllowanceFile_ALW-0000000000000009" value="ALW-0000000000000009" >
                                            </td>
                                            <td>
                                                <label for="fiweek_AllowanceFile_ALW-0000000000000009" id="lbl_fiweek_AllowanceFile_ALW-0000000000000009"> Allowance Setup</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fiweek[allowancefile][ALW-0000000000000008]" id="fiweek_AllowanceFile_ALW-0000000000000008" value="ALW-0000000000000008" >
                                            </td>
                                            <td>
                                                <label for="fiweek_AllowanceFile_ALW-0000000000000008" id="lbl_fiweek_AllowanceFile_ALW-0000000000000008"> Allowance-1</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fiweek[allowancefile][ALW-0000000000000010]" id="fiweek_AllowanceFile_ALW-0000000000000010" value="ALW-0000000000000010" >
                                            </td>
                                            <td>
                                                <label for="fiweek_AllowanceFile_ALW-0000000000000010" id="lbl_fiweek_AllowanceFile_ALW-0000000000000010"> Inactive Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fiweek[allowancefile][ALW-0000000000000004]" id="fiweek_AllowanceFile_ALW-0000000000000004" value="ALW-0000000000000004" >
                                            </td>
                                            <td>
                                                <label for="fiweek_AllowanceFile_ALW-0000000000000004" id="lbl_fiweek_AllowanceFile_ALW-0000000000000004"> Internet Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fiweek[allowancefile][ALW-0000000000000006]" id="fiweek_AllowanceFile_ALW-0000000000000006" value="ALW-0000000000000006" >
                                            </td>
                                            <td>
                                                <label for="fiweek_AllowanceFile_ALW-0000000000000006" id="lbl_fiweek_AllowanceFile_ALW-0000000000000006"> Load Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fiweek[allowancefile][ALW-0000000000000005]" id="fiweek_AllowanceFile_ALW-0000000000000005" value="ALW-0000000000000005" >
                                            </td>
                                            <td>
                                                <label for="fiweek_AllowanceFile_ALW-0000000000000005" id="lbl_fiweek_AllowanceFile_ALW-0000000000000005"> Meal Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div><div class="clb">
                                    <table>
                                        <tr>
                                            <td>
                        						<input type="checkbox" name="fiweek[allowancefile][ALW-0000000000000007]" id="fiweek_AllowanceFile_ALW-0000000000000007" value="ALW-0000000000000007" >
                                            </td>
                                            <td>
                                                <label for="fiweek_AllowanceFile_ALW-0000000000000007" id="lbl_fiweek_AllowanceFile_ALW-0000000000000007"> OB Allowance</label>
                                            </td>
                                        </tr>
                                    </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_fiweek_def_earn">Default Earnings</legend>
						<div name="fiweek[clb_otherearnings]" class="clb_otherearnings"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fiweek[otherearnings][EAR-0000000000000003]" id="fiweek_EarningsFile_EAR-0000000000000003" value="EAR-0000000000000003" >
                                                </td>
                                                <td>
                                                    <label for="fiweek_EarningsFile_EAR-0000000000000003" id="lbl_fiweek_EarningsFile_EAR-0000000000000003"> Inactive Earnings
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fiweek[otherearnings][EAR-0000000000000002]" id="fiweek_EarningsFile_EAR-0000000000000002" value="EAR-0000000000000002" >
                                                </td>
                                                <td>
                                                    <label for="fiweek_EarningsFile_EAR-0000000000000002" id="lbl_fiweek_EarningsFile_EAR-0000000000000002"> Other Earnings Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fiweek[otherearnings][EAR-0000000000000001]" id="fiweek_EarningsFile_EAR-0000000000000001" value="EAR-0000000000000001" >
                                                </td>
                                                <td>
                                                    <label for="fiweek_EarningsFile_EAR-0000000000000001" id="lbl_fiweek_EarningsFile_EAR-0000000000000001"> SAMPLE
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_fiweek_def_ded">Default Deductions</legend>
						<div name="fiweek[clb_otherdeductions]" class="clb_otherdeductions"><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fiweek[otherdeductions][DED-0000000000000007]" id="fiweek_DeductionsFile_DED-0000000000000007" value="DED-0000000000000007" >
                                                </td>
                                                <td>
                                                    <label for="fiweek_DeductionsFile_DED-0000000000000007" id="lbl_fiweek_DeductionsFile_DED-0000000000000007"> 1-Generic Data new
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fiweek[otherdeductions][DED-0000000000000004]" id="fiweek_DeductionsFile_DED-0000000000000004" value="DED-0000000000000004" >
                                                </td>
                                                <td>
                                                    <label for="fiweek_DeductionsFile_DED-0000000000000004" id="lbl_fiweek_DeductionsFile_DED-0000000000000004"> DAMAGES LOSS
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fiweek[otherdeductions][DED-0000000000000008]" id="fiweek_DeductionsFile_DED-0000000000000008" value="DED-0000000000000008" >
                                                </td>
                                                <td>
                                                    <label for="fiweek_DeductionsFile_DED-0000000000000008" id="lbl_fiweek_DeductionsFile_DED-0000000000000008"> Deduction Setup
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div><div class="clb">
                                        <table>
                                            <tr>
                                                <td>
                            						<input type="checkbox" name="fiweek[otherdeductions][DED-0000000000000009]" id="fiweek_DeductionsFile_DED-0000000000000009" value="DED-0000000000000009" >
                                                </td>
                                                <td>
                                                    <label for="fiweek_DeductionsFile_DED-0000000000000009" id="lbl_fiweek_DeductionsFile_DED-0000000000000009"> Inactive Deduction
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                				   </div></div>
					</fieldset>
					<fieldset class="defaults">
						<legend id="lbl_fiweek_def_loan">Default Loan Amortizations</legend>
						<div name="fiweek[clb_loans]" class="clb_loans"><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="fiweek[loansfile][LON-0000000000000002]" id="fiweek_LoansFile_LON-0000000000000002" value="LON-0000000000000002" >
                                        </td>
                                        <td>
                                            <label for="fiweek_LoansFile_LON-0000000000000002" id="lbl_fiweek_LoansFile_LON-0000000000000002"> Inactive Loans</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div><div class="clb">
                                <table>
                                    <tr>
                                        <td>
                    						<input type="checkbox" name="fiweek[loansfile][LON-0000000000000001]" id="fiweek_LoansFile_LON-0000000000000001" value="LON-0000000000000001" >
                                        </td>
                                        <td>
                                            <label for="fiweek_LoansFile_LON-0000000000000001" id="lbl_fiweek_LoansFile_LON-0000000000000001"> sample1</label>
                                        </td>
                                    </tr>
                                </table>
            				   </div></div>
					</fieldset>
				</div>
   			</div>		</div>
	</div>
</div>

</center>
 		
			<div style="height: 50px;"></div>
			</form>
			</div>
			<style>
				footer {

				}
				footer p {
					font-family: Calibri;
					font-weight: normal;
					text-align: center;
					font-size: 16px;
					padding: 10px 0;
					color: #111;
					margin: 0;
				}
				.ftr_containers {
					position: fixed;
					margin: 0 auto;
					bottom: 0;
					left: 0;
					right: 0;
					/*background: ;*/
					background: #fff;
					z-index: 999;

					box-shadow: 0 0 1px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,0.08), 0 0 20px rgba(0,0,0,0.05);
				}
				.ftr_containers a {
					color: #586949;
					text-align: center;
				}
				.ftr_containers span {
					position: absolute;
					top: 10px; left: 10px;
				}
			</style>
			<footer>
				<div class="ftr_containers" id="lbl_footer">
					<p>
						Copyright &copy; 2021 LEE Systems Technology Ventures Inc</p>
				</div>
			</footer>

			<script type='text/javascript'>
			
			function end_preloader()
			{
				jQuery('#preLoader').fadeOut('slow', function() {
					// Animation complete.
				});
			}
			function start_preloader()
			{
				jQuery('#preLoader').fadeIn('slow', function() {
					// Animation complete.
				});
			}
					
			end_preloader();

		</script>
		</form>
	</body>
</html>
