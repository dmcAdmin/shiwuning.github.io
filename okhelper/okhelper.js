(function() {
	console.warn('hello helper...');
	var addButton = function() {
      var addClassName = "";
      var $jq = jQuery.noConflict();
      $jq(".deal-box").append("<button onclick=\"buy('1', 'A')\" class='helper_btn'>开多/低成本</button>");
//$jq(".deal-box").append("<button onclick='' class='helper_btn'>开多/低成本</button>");
    };
	
	var buy = function(type, policy) {
			var amount = $('input .form-input-amount').val();
			console.log("buy " + type + ", " + amount);
						return;
			$.ajax({
				url: url + '/buy',
				timeout: 10000,
				type: 'post',
				data: {
					type: type,
					price: price,
					amount: amount,
					policy: policy
				},
				dataType: 'json',
				success: function(res) {
					console.log(JSON.stringify(res));
					$('#out').html(JSON.stringify(res))
				}
			});
	};
})();