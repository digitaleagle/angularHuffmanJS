angular.module("demo", ["HuffmanJS"]).controller("demoCtrl", function($scope, hjEncodeDecode) {
	$scope.textToEncode = "some text to encode with huffman";
	$scope.textToDecode = "";
	$scope.treeText = hjEncodeDecode.getTreeText();
	$scope.lastTreeText = $scope.treeText;
	$scope.defaultTreeText = $scope.treeText;

	$scope.encode = function() {
		if($scope.treeText !== $scope.lastTreeText) {
			hjEncodeDecode.setTreeText($scope.treeText);
			$scope.lastTreeText = $scope.treeText;
		}
		$scope.encodeOutput = hjEncodeDecode.encode($scope.textToEncode);
	};

	$scope.decode = function() {
		if($scope.treeText !== $scope.lastTreeText) {
			hjEncodeDecode.setTreeText($scope.treeText);
			$scope.lastTreeText = $scope.treeText;
		}
		$scope.decodeOutput = hjEncodeDecode.decode($scope.textToDecode);
	};

	$scope.encodetoDecode = function() {
		$scope.textToDecode = $scope.encodeOutput;
	};

	$scope.resetTreeText = function() {
		$scope.treeText = $scope.defaultTreeText;
	};

});
