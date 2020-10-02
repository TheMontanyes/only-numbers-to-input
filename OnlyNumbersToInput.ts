const floatFormat = (value: string | number): string => {
	let float: string = value
		.toString()
		.replace(/[^\d.]/g, '')
		.replace(/^0+/g, '0')

	if (float.match(/\./)) {
		let arrStr: string[] = float.split('.')

		if (!arrStr[0].length) {
			arrStr[0] = '0'
		} else {
			arrStr[0] = arrStr[0].replace(/^0+/g, '0')
		}

		let newArrStr: string[] = arrStr.slice(1)

		arrStr[1] = newArrStr.reduce((a, b) => a + b)
		float = arrStr[0] + '.' + arrStr[1]
		float = float.substr(0, float.indexOf('.') + 8)
	}

	return float
}

const spaceFormat = (value: string | number): string => {
	let float: string = value.toString()
	let regWithSpaces: RegExp = /(\d)(?=(\d{3})+([^\d.]|$))/g

	if (float.match(/\./)) {
		let arrStr: string[] = float.split('.')

		arrStr[0] = arrStr[0].replace(regWithSpaces, '$1 ')
		float = arrStr[0] + '.' + arrStr[1]
	} else {
		float = float.replace(regWithSpaces, '$1 ').replace(/^0+/g, '')
	}

	return float
}

export { floatFormat, spaceFormat }
