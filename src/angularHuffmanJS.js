angular.module("HuffmanJS", []).service("hjEncodeDecode", function() {
	var huffman = undefined;
	var treeText = "abcdefghijklmnopqrstuvwxyz0123456789 abcdefghijklmnopqrstuvwxyz;";

   var createHuffman = function() {
		huffman = Huffman.treeFromText(treeText);
		console.log(huffman);
	};

	this.encode = function(text) {
		if(huffman === undefined) {
			createHuffman();
		}
		return huffman.encode(text);
	};

	this.decode = function(text) {
		if(huffman === undefined) {
			createHuffman();
		}
		return huffman.decode(text);
	};

	this.getTreeText = function() {
		return treeText;
	}

	this.setTreeText = function(newTreeText) {
		treeText = newTreeText;
		createHuffman();
	};
});
