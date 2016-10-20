'use strict'

var servMain = angular.module("servMain", []);

servMain.service("servMain", function($http){
	return {
		getConfig: function(){
			return {
				name: "Restaurante",
				serverUrl: "10.10.22.88:3000/",
				apiKey: "AIzaSyC-2k8TN8QETgAsWXg3IAn4bap_Sz811AM"
			};
		},
		exampleGet: function(){
			return $http.get("address");
		},
		exampleGetHeaders: function(){
			return $http.get("address");
		}
	};

});