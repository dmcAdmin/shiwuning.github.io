(function() {
	console.warn('hello helper 2 ...');
	      var $jq = jQuery.noConflict();
		      $jq.ajaxSetup({
        converters: {
          "text script": function( text ) {
           // jQuery.globalEval( text );
            return text;
          }
        },
        cache: false
      });
	
	var addButton = function() {
//console.warn($jq(".deal-box").html());
      $jq(".deal-box").append("<button onclick=\"bbb('1', 'A')\" class='helper_btn'>开多/低成本1</button>");
//$jq(".deal-box").append("<button onclick='' class='helper_btn'>开多/低成本</button>");
    };
	
	window.buy = function(type, policy) {
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
	
	addButton();
})();
