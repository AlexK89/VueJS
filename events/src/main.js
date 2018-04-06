new Vue({
	el: '#app',
	data: {
		counter: 0,
		x: 0,
		y:0
	},
	methods: {
		increase: function(step = 1) {
			this.counter += step;
		},
		randomNum: function (event) {
			this.x = event.clientX;
			this.y = event.clientY;

		},
		deadSpot: function (event) {
			event.stopPropagation();
		},
		alertMessage: function () {
			alert('Submited!');
		}
	}
});

new Vue({
	el: '#exercise',
	data: {
		value: ''
	},
	methods: {
		grebValue: function (event) {
			this.value = event.target.value;
		},
		showAlert: function () {
			alert('Alert');
		}
	}
});