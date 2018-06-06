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
      $jq(".deal-box").append("<button onclick=\"window.buy('1', 'A')\" class='helper_btn'>开多/低成本</button>");
//$jq(".deal-box").append("<button onclick='' class='helper_btn'>开多/低成本</button>");
    };
	
	window.buy = function(type, policy) {
			var amount = $jq('input.form-input-amount').val();
      if (amount == '') {
        alert('请先输入张数');
        return;
      }
			console.log("buy " + type + ", " + amount);
      var url = 'https://btc.52star.top';
//						return;
			$jq.ajax({
				url: url + '/buy',
				timeout: 10000,
				type: 'post',
				data: {
					type: type,
					//price: price,
					amount: amount,
					policy: policy
				},
				dataType: 'json',
				success: function(res) {
					console.log(JSON.stringify(res));
					//$('#out').html(JSON.stringify(res));
				}
			});
	};
	
	addButton();
})();
