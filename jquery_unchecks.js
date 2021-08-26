
$('#chkdocnum0').prop('checked', false); // Unchecks it
$('.ui-button.ui-widget')[5].click();
setTimeout(() => { $('.ajs-button.print')[0].click(); },3000);
document.querySelectorAll('.vScrollTable')[0].scrollTo(0, 100000);
document.querySelectorAll('.vScrollTable')[1].scrollIntoView({ behavior: 'smooth', block: 'end' });


document.querySelector('#txtcashref').checked = true; 

document.querySelector('#chk_dirpay').checked = false; 
$('#btn_salesorderp1t')[0].click(); 
$('#btn_salesinvoicep1')[0].click(); 
$('#btn_gljournalentryp1 ')[0].click(); 
$('#btn_salesreturnp1')[0].click(); 
$('#btn_liquidationp1')[0].click(); 
$('#btn_otherreceivablesp1')[0].click(); 
$('#btn_receiptscollectionp1')[0].click(); 
$('#btn_purchaseorderp1')[0].click(); 
$('#btn_purchasesreceivingp1')[0].click(); 
$('#btn_purchasereturnp1')[0].click(); 
$('#btn_provisionalreceiptp1')[0].click(); 
$('#btn_interbanktransferp1')[0].click(); 
$('#btn_disbursementp1')[0].click(); 
$('#btn_cashadvancesp1')[0].click(); 
$('#btn_quotationp1')[0].click(); 
$('#btn_banktransactionp1')[0].click(); 
$('#btn_otherpayablesp1')[0].click(); 
$('#btn_disbursementdebitmemop1')[0].click(); 
$('#btn_receiptscreditmemop1')[0].click(); 
























