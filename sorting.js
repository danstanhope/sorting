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
			var j = 0, _tmp = [];

			for(var gap = Math.ceil(arr.length / 2); gap > 0; Math.ceil(gap /= 2)){
				for(var i = gap; i < arr.length; i++){
					_tmp = arr[i];

					for(j = i ; j >= gap && _tmp < arr[j - gap]; j -= gap){
						arr[j] = arr[j - gap];
						console.log(j -= gap)
					}
					arr[j] = _tmp;
				}
			}
			return arr;
		}
	};
}(this));