/*
克隆实现的级别
1. 只复制当前对象属性的值的指向
2. 不仅复制指向，也对当前对象中的引用类型属性，进行克隆
3. 考虑整个对象继承链条，不仅考虑当前对象，对整个链条上的所有对象想进行克隆（实现如下）

*/



function cloneAll(obj){
	var clone;

	if(obj.constructor == Array) {
		clone = []
		for(var i; i<obj.length; i++){
			clone[i] = obj[i]
		}
	}else if(typeof obj === 'object' && obj.constructor != Function){

		clone = new obj.constructor()  //考虑整个对象继承链

		// 只考虑当前对象
		// clone = {
		// 	__proto__: obj.__proto__,
			// constructor: obj.constructor
		// }

		// 从当前对象开始，对继承链上的每一个节点克隆
		var origin = obj
		var target = clone

		while(!(origin.__proto__ === null)){
			//可以获得不可枚举的属性和方法
			var propertys = Object.getOwnPropertyNames(origin)
			var property = null
			for(var propertyIndex in propertys){
					//防止有人在Object.prototype添加了可枚举的方法
					if(!(Number(propertyIndex) >= 0)) continue
					property = propertys[propertyIndex]
					if(property === 'constructor') continue
					//深克隆还是浅克隆
					if(typeof origin[property] == "object" && origin[property].constructor != Function){
						target[property] = cloneAll(origin[property])
					}else{
						target[property] = origin[property]
					}			
			}
			if(origin.hasOwnProperty('toString'))
				target.toString = origin.toString
			if(origin.hasOwnProperty('valueOf'))
				target.valueOf = origin.valueOf

			origin = origin.__proto__
			target = target.__proto__
		}		
	}


	return clone
}
