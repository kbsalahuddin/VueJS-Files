var one= new Vue({
	el:'#vue-app-one',
	
	data:{

		title:'One'
	},
	methods:{



	},
	computed:{
		greet:function(){
			return 'Hello One!';
		}
	}



});

var two= new Vue({
	el:'#vue-app-two',
	
	data:{
		title:'Two'

	},
	methods:{
		changeTitle:function(){
			one.title="Title Changed";
			//by click it changes the title of the other instance,
			//in this case it's app one.
		}


	},
	computed:{
		greet:function(){
			return 'Hello Two!';
		}
	}



});

two.title="changed from outside";