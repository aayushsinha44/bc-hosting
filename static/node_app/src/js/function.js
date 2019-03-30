App = {
	account: null,
	web3Provider: null,
	function_id: null,
	idCodeMap: {},
	idStartMap: {},
	idParentMap: {},
	idNameMap: {},
	function_code_id: null,
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
	App.idCodeMap = {};
	App.idStartMap = {};
	App.idParentMap = {};
	App.idNameMap = {};
	var url = "http://192.168.43.59:8000/function/"+id+"/";
	App.function_id = id;
	$.get(url, function(response) {
		console.log(response);
		var domainPortal = document.getElementById('domainPortal');
		domainPortal.innerHTML = '<div class="row" style="padding-top: 20px;"><div id="function_list" class="col-lg-2"></div><div class="col-lg-10 id="code_area"><textarea style="width:90%; height: 400px;" id="function_code_area"></textarea><br /><button onclick=update_function_code_area() class="btn btn-success">Save</button></div></div>';
		var function_list = document.getElementById('function_list');
		for(var i=0;i<response.data.length;i++) {
			App.idCodeMap[response.data[i].id] = response.data[i].code;
			App.idStartMap[response.data[i].id] = response.data[i].is_starting;
			App.idParentMap[response.data[i].id] = response.data[i].parent;
			App.idNameMap[response.data[i].id] = response.data[i].name;
			console.log("loop", App.idNameMap);
			if (i ==0 ) function_list.innerHTML = '<div class="boughtDomain" id='+ response.data[i].id+' onclick=showCode('+response.data[i].id+')>'+response.data[i].name+'</div>';
			else function_list.innerHTML += '<div class="boughtDomain" id='+ response.data[i].id+' onclick=showCode('+response.data[i].id+')>'+response.data[i].name+'</div>';
		}
		function_list.innerHTML += "<div><form href='#' method='GET'><input type='text' id='function_code_name' placeholder='new function name' /><input type='checkbox' id='is_start_check'><button onclick=addFunctionCode()>Add</button></form></div>";
	});
}

function addFunctionCode() {
	var input_text = document.getElementById('function_code_name');
	var is_start_check = document.getElementById('is_start_check');
	var function_code_name = input_text.value;
	var is_starting = is_start_check.checked;
	var body = {
		"id": App.function_id,
		"user_address": App.account,
		"function_code": [
			{
				"is_starting": is_starting,
				"name": function_code_name,
				"code": "",
				"parent": "/"
			}
		]
	};
	var url="http://192.168.43.59:8000/update_function/";
	$.post(url, JSON.stringify(body), function(result, data){
		console.log(result);
	});
}

function showCode(id) {
	var txtarea = document.getElementById('function_code_area');
	txtarea.textContent = App.idCodeMap[id];
	console.log("showing code", id, App.idCodeMap[id]);
	App.function_code_id = id;
}

function update_function_code_area() {
	var txtarea = document.getElementById('function_code_area');
	var code = txtarea.value;
	var body = {
		"id": App.function_id,
		"user_address": App.account,
		"function_code": [
			{
				"id": App.function_code_id,
				"is_starting": App.idStartMap[App.function_code_id],
				"name": App.idNameMap[App.function_code_id],
				"code": code,
				"parent": App.idParentMap[App.function_code_id]
			}
		]
	};
	console.log(body);
	var url="http://192.168.43.59:8000/update_function/";
	$.post(url, JSON.stringify(body), function(result, data){
		console.log(result);
		window.location.reload();
	});
	App.idCodeMap[App.function_code_id] = code;
	//document.location.reload();	
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