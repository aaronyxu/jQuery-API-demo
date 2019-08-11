window.jQuery = function(nodeOrSelector) {
	let nodes = {}
	if (typeof nodeOrSelector === 'string') {
		let temp = document.querySelectorAll(nodeOrSelector)  
		for (let i = 0; i < temp.length; i++) {
			nodes[i] = temp[i]
		}
		nodes.length = temp.length
	} else if (nodeOrSelector instanceof Node) {
		nodes = {
			0: nodeOrSelector,
			length: 1
		}
	}

	nodes.addClass = function(classes) {
		if (classes instanceof Array) {
			classes.forEach((value) => {
				for (let i = 0; i < nodes.length; i++) {
					nodes[i].classList.add(value)
				}
			})
		} else if (typeof classes === 'string') {
			for (let i = 0; i < nodes.length; i++) {
				nodes[i].classList.add(classes)
			}
		}

	}

	nodes.setText = function(text) {
		for (let i = 0; i < nodes.length; i++) {
			nodes[i].textContent = text
		}
	}

	return nodes
}
window.$ = jQuery

