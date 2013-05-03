(function(root){
	root['sorting'] = root['sorting'] || {};

	sorting = {
		insertionSort : function(arr){

			var j = 0, _tmp = [];

			for(var p = 1; p < arr.length; p++){
				_tmp = arr[p];

				for(j = p; j > 0 && _tmp < arr[j - 1]; j--){
					arr[j] = arr[j - 1];
				}
				arr[j] = _tmp;
			}

			return arr;
		},
		shellSort : function(arr){

			return arr;
		}
	};
}(this));