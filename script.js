var vue = new Vue({
	el: "#app",
	data: {
		result: '',
		numbers: [1,2,3,4,5,6,7,8,9,0],
		operations: ['+','-','*',':']
	},
	methods: {
		input: function(char){
			this.result = this.result.toString();
			this.result += char;
		},
		reset: function(){
			this.result = '';
		},
		del: function(){
			let str = this.result.toString();
			this.result = str.substring(0, str.length -1);
		},
		calc: function(){
			this.result = eval(this.result);
		}
	}
});