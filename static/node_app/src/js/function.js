App = {
	account: null,
	web3Provider: null
};

function initweb3() {
	if (typeof web3 !== undefined) {
		App.web3Provider = web3.currentProvider;
		web3 = new Web3(web3.currentProvider);
		App.account = web3.eth.accounts[0];
		console.log(App.account);
		mainLoadingHide();
		$("#accountNumber").html(App.account)
		getAllFunctions();
		$("#file_upload_form").hide();
	} else {
		alert('Please Log In To MetaMask');
	}
}

function getAllFunctions(){
	var url = "http://192.168.43.59:8000/get_all_function/"+App.account+"/";
	$.get(url, function(response) {
		console.log(response);
		response = response.function;
		var existing_length = response.length;
		console.log("length", response.length);
		for(var i=0;i<existing_length;i++){
			var fn = "<div class='boughtDomain' val='"+response[i].name+"' id='boughtDomainItem' onclick=loadFunction('"+response[i].id+"',this)>"+response[i].name +"</div>";
			$("#domainsList").append(fn);
			console.log(response[i]);
		}
	});

}

function loadFunction(id, e) {
	var url = "http://192.168.43.59:8000/function/"+id+"/";
	$.get(url, function(response) {
		console.log(response);
	});
}


function mainLoadingHide(){
	$("#mainLoading").hide();
	$("#portal").show();
	$("#creatWebsiteForm").show();
}

function openModal() {
	$('.modale1').addClass('opened1');
}

function closeModal() {
	$('.modale1').removeClass('opened1');
}

function checkFunctionAvailability(){
	console.log("called");
	$("#functionCheckLoading").show();
	var function_name = $('#functionName').val().toLowerCase().trim();
	var check_url = "http://192.168.43.59:8000" + '/check_function/' + App.account + '/' + function_name;
	console.log(check_url);
	// var isFunctionExist = get_response_https(check_url);
	// console.log(isFunctionExist,"a");
	$.get(check_url, function(response) {
		console.log(response,"b");
		$("#functionCheckLoading").hide();
		console.log(response.message);
		if(response.message === "does not exists"){
			$("#functionIsAvailable").show();
			$("#functionIsUnavailable").hide();
			$('#functionName').attr('readonly', true);
			$('#createButton').prop('disabled', false);
		}
		else{
			$("#functionIsAvailable").hide();
			$("#functionIsUnavailable").show();
			$('#functionName').attr('readonly', false);
			
		}

  	});
}

/*{
	"name": "",
	"user_address": "",
	"function_code": []
}*/

function createFunction(){
	$('#createButton').prop('disabled', true);
	$("#mainLoading").show();
	$("#portal").hide();
	$('.modale1').removeClass('opened1');
	//$("#createWebsiteForm").hide();
	var function_name = $('#functionName').val().toLowerCase().trim();
	console.log(function_name);
	var url = "http://192.168.43.59:8000/add_function/";
	$.post(url, JSON.stringify({"name": function_name, "user_address": App.account}), function(result){
	     console.log(result);
	     $("#mainLoading").hide();
		$("#portal").show();
	  });

}

function get_response_https(url){
	$.get("https://cors-anywhere.herokuapp.com/"+url, function(response) {
		console.log(response,"b");
		return response;
  	});
}

$(function() {
  $(window).load(function() {
    initweb3();
  })
});