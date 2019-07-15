// session保存obj
function sessionSetObj(key, value) {
	if(!value){
		let obj = {};
		window.sessionStorage.setItem(key, JSON.stringify(obj));
	}
	window.sessionStorage.setItem(key, JSON.stringify(value));
}

// session获取 obj
function sessionGetObj(key) {
	let sessionItem = window.sessionStorage.getItem(key);
	if (sessionItem) {
		if(sessionItem === ''){
			return {}
		}
		return JSON.parse(sessionItem || '{}');
	} else {
		return {}
	}
}

export default {
	install(Vue, options) {
		Vue.prototype.sessionSetObj = sessionSetObj;
		Vue.prototype.sessionGetObj = sessionGetObj;
	},

}
