h1. Angular Huffman JS

Angular Huffman JS is an adaptation of Wilker Lúcio da Silva's Huffman JS as an Angular Service.

h2. Source

Wilker Lúcio da Silva

From:
https://github.com/wilkerlucio/huffman_js

As an alternative, I had thoughts of pulling from the implementation at Rosetta Code.

From:
http://rosettacode.org/wiki/Huffman_coding#JavaScript

h2. Usage

For now, you have to include both scripts:

bc. <script type="text/javascript" src="src/lib/huffman-0.9.0.min.js"></script>
<script type="text/javascript" src="src/angularHuffmanJS.js"></script>

Next, you need to include HuffmanJS as a dependecy module to your angular app:

bc.  angular.module("demo", ["HuffmanJS"]).controller("demoCtrl", function($scope, hjEncodeDecode) {

You can encode like this:
bc.		$scope.encodeOutput = hjEncodeDecode.encode($scope.textToEncode);

You can decode like this:
bc.		$scope.decodeOutput = hjEncodeDecode.decode($scope.textToDecode);


See the Demo app for more information.

h2. Additional Resources

http://stackoverflow.com/questions/21802866/how-to-compress-url-parameters

h2. Authors

Stephen Phillips
