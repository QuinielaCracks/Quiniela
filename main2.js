const _0x1a59 = ['focus', 'href', '<button\x20id=\x22undo\x22\x20onclick=\x22remove()\x22><ion-icon\x20name=\x22arrow-undo-outline\x22></ion-icon></button>', '<div>', 'getElementsByTagName', 'partido', 'style', 'setItem', 'includes', 'goles', 'querySelector', 'getElementsByClassName', '%20%20', 'rgb(48,\x20240,\x200)', 'costo', '</div>', 'lastIndexOf', 'quantity', 'substring', 'slice', '.quiniela\x20span', 'checked', 'random', 'https://wa.me/524437308169?text=', 'addEventListener', 'lastElementChild', 'results', 'total', 'split', 'getElementById', 'text', 'clear', 'getItem', 'Costo:\x20$', 'alias', 'log', 'childElementCount', 'value', 'removeChild', 'join', 'Se\x20borrará\x20todo', 'null', '\x20Quiniela(s)', 'Total:\x20$', 'load', 'height', '¿Desea\x20registrar\x20quinielas\x20multiples?', 'length', 'ceil', 'reload', '%0D', 'floor', 'span', 'numquinielas', 'display', '.botonenviar\x20span', 'querySelectorAll', '0\x20Quiniela(s)', 'checkcombinaciones', 'textContent', 'innerHTML', 'backgroundColor', 'Debes\x20llenar\x20todas\x20las\x20casillas\x20de\x20la\x20quiniela\x20regular'];


(function (_0x26c6bd, _0x1a59f0) {
	const _elefantec3 = function (_0x1fbe8d) {
		while (--_0x1fbe8d) {
			_0x26c6bd['push'](_0x26c6bd['shift']());
		}
	};
	_elefantec3(++_0x1a59f0);
}


	(_0x1a59, 0x107));


const _elefante = function (_0x26c6bd, _0x1a59f0) {
	_0x26c6bd = _0x26c6bd - 0x0;
	let _elefantec3 = _0x1a59[_0x26c6bd];
	return _elefantec3;
};


let res = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], quantity = localStorage[_elefante('0x15')](_elefante('0x6')), name = localStorage[_elefante('0x15')](_elefante('0x17')), combinations = ![];
var aux;


function start() {
	document[_elefante('0x12')](_elefante('0x2f'))[_elefante('0xa')] = ![], recovername(), display = document[_elefante('0x12')](_elefante('0x2b'));
	let _0x57c4a4 = document[_elefante('0x0')]('quiniela')[0x0]['offsetWidth'];
	document[_elefante('0x12')]('quiniela')[_elefante('0x3a')][_elefante('0x22')] = _0x57c4a4 * 2.15 + 'px';
	let _0x209a6f = document['getElementById'](_elefante('0x13'));
	_0x209a6f[_elefante('0x31')] = res[_elefante('0x1c')]('\u00a0\u00a0');
	if (quantity) document[_elefante('0x3e')]('.botonenviar\x20span')['textContent'] = quantity;
	let _0x50118b = localStorage[_elefante('0x15')](_elefante('0xf'));
	if (_0x50118b) {
		_0x50118b = _0x50118b[_elefante('0x9')]('*');
		for (var _0x4d9cf3 = 0x0; _0x4d9cf3 < quantity; _0x4d9cf3++) {
			if (_0x50118b[_0x4d9cf3] && _0x50118b[_0x4d9cf3] != undefined) display[_elefante('0x31')] += _elefante('0x37') + _0x50118b[_0x4d9cf3] + _elefante('0x4');
			else break;
		}
		document[_elefante('0x12')]('total')['innerHTML'] = _elefante('0x20') + quantity * 0x14 + '\x0a';
		if (display[_elefante('0x14')] > 0x0) display[_elefante('0xe')][_elefante('0x31')] += _elefante('0x36');
	}
}


function selection(_0x5c2485) {
	let _0x1436c9 = parseInt(_0x5c2485['id'][_elefante('0x8')](0x1)) - 0x1, _0x31a3fa = document['getElementById'](_elefante('0x13'));
	if (!_0x5c2485[_elefante('0x3a')][_elefante('0x32')]) !combinations ? (validation(_0x5c2485), res[_0x1436c9] = _0x5c2485['id'][_elefante('0x8')](0x0, 0x1)) : (res[_0x1436c9] += _0x5c2485['id'][_elefante('0x8')](0x0, 0x1), res[_0x1436c9] = res[_0x1436c9][_elefante('0x9')]('_')['join']('')), _0x5c2485[_elefante('0x3a')][_elefante('0x32')] = _elefante('0x2');
	else {
		if (combinations) {
			_0x5c2485[_elefante('0x3a')][_elefante('0x32')] = '', console[_elefante('0x18')](res[_0x1436c9][_elefante('0x24')]);
			if (res[_0x1436c9] != '_' && res[_0x1436c9][_elefante('0x24')] > 0x1) res[_0x1436c9] = res[_0x1436c9]['split'](_0x5c2485['id']['slice'](0x0, 0x1))[_elefante('0x1c')]('');
			else res[_0x1436c9] = '_';
		}
	}
	costoactual(), _0x31a3fa['innerHTML'] = res[_elefante('0x1c')]('\u00a0\u00a0');
}


function validation(_0x5b9846) {
	let _0x292e5b = parseInt(_0x5b9846['id'][_elefante('0x8')](0x1));
	document[_elefante('0x12')]('L' + _0x292e5b)[_elefante('0x3a')][_elefante('0x32')] = null, document[_elefante('0x12')]('E' + _0x292e5b)['style'][_elefante('0x32')] = null, document[_elefante('0x12')]('V' + _0x292e5b)[_elefante('0x3a')][_elefante('0x32')] = null;
}


function number() {
	quantity = localStorage[_elefante('0x15')]('quantity');
	if (quantity) localStorage[_elefante('0x3b')](_elefante('0x6'), ++quantity);
	else localStorage['setItem']('quantity', 0x1), quantity = localStorage[_elefante('0x15')](_elefante('0x6'));
	document[_elefante('0x3e')](_elefante('0x2c'))[_elefante('0x30')] = quantity, localStorage[_elefante('0x3b')]('alias', name);
}


function result() {
	results = localStorage[_elefante('0x15')](_elefante('0xf')), name = document[_elefante('0x12')](_elefante('0x3d'))['value'], name = name[_elefante('0x9')]('*')[_elefante('0x1c')]('');
	if (results) {
		if (aux > 0x1) localStorage[_elefante('0x3b')](_elefante('0xf'), results + '\x0a' + res[_elefante('0x1c')]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '\x20(' + aux + ')' + '*');
		else localStorage[_elefante('0x3b')](_elefante('0xf'), results + '\x0a' + res[_elefante('0x1c')]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '*');
	}
	else {
		if (aux > 0x1) localStorage[_elefante('0x3b')](_elefante('0xf'), res[_elefante('0x1c')]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '\x20(' + aux + ')' + '*');
		else localStorage[_elefante('0x3b')](_elefante('0xf'), res['join']('\u00a0\u00a0') + '\u00a0\u00a0' + name + '*');
	}
}


function send() {
	if (!quantity || quantity < 0x1) save();
	if (quantity > 0x0) {
		let _0x5563b0 = res[_elefante('0x1c')](_elefante('0x1'));
		_0x5563b0 = encodeURI(localStorage[_elefante('0x15')](_elefante('0xf'))), _0x5563b0 = _0x5563b0[_elefante('0x9')]('*')[_elefante('0x1c')](_elefante('0x27')), window['location'][_elefante('0x35')] = _elefante('0xc') + _0x5563b0;
	}
}


function save() {
	name = document['getElementById'](_elefante('0x3d'))[_elefante('0x1a')];
	if (res[_elefante('0x1c')]('\u00a0\u00a0')['includes']('_')) alert(_elefante('0x33'));
	else {
		if (!name) return alert('Debes\x20escribir\x20el\x20total\x20de\x20goles'), document['getElementById'](_elefante('0x3d'))[_elefante('0x34')](), 0x0;
		else {
			if (combinations) calculate();
			else number();
			result(), updatedisplay(), clean();
		}
	}
}


function deleteall() {
	confirm(_elefante('0x1d')) && (localStorage[_elefante('0x14')](), location[_elefante('0x26')]());
}

function clean() {
	res = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];
	let _0x5c054a = document['getElementById'](_elefante('0x13'));
	_0x5c054a[_elefante('0x31')] = res[_elefante('0x1c')]('\u00a0\u00a0'), spans = document[_elefante('0x2d')](_elefante('0xa'));
	for (var _0x47f039 = 0x0; _0x47f039 < 0x1e; _0x47f039++)spans[_0x47f039][_elefante('0x3a')][_elefante('0x32')] = '';
	document['getElementById']('costo')['innerHTML'] = 'Costo:\x20$0', document[_elefante('0x12')](_elefante('0x2a'))[_elefante('0x31')] = _elefante('0x2e');
}


function updatedisplay() {
	if (aux == undefined) aux = 0x0;
	let _0x51de69 = document[_elefante('0x12')](_elefante('0x2b'));
	if (_0x51de69[_elefante('0x14')] > 0x0) _0x51de69['lastElementChild'][_elefante('0x1e')](_0x51de69['lastElementChild'][_elefante('0xe')]);
	if (aux > 0x1) _0x51de69[_elefante('0x31')] += _elefante('0x37') + res[_elefante('0x1c')]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '\x20(' + aux + ')' + '*\u00a0\u00a0' + _elefante('0x4');
	else _0x51de69[_elefante('0x31')] += '<div>' + res[_elefante('0x1c')]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '*\u00a0\u00a0' + '</div>';
	document['getElementById'](_elefante('0x10'))['innerHTML'] = 'Total:\x20$' + quantity * 0x14;
	if (_0x51de69['childElementCount'] > 0x0) _0x51de69[_elefante('0xe')][_elefante('0x31')] += _elefante('0x36');
	aux = 0x1;
}


function recovername() {
	name = localStorage[_elefante('0x15')](_elefante('0x17'));
	if (name != null && name != _elefante('0x1e')) document[_elefante('0x12')](_elefante('0x3d'))['value'] = name;
}


function clearname() {
	document[_elefante('0x12')](_elefante('0x3d'))['value'] = '';
}


function allowcombination() {
	if (!combinations) combinations = confirm(_elefante('0x23'));
	else combinations = ![];
	document[_elefante('0x12')]('checkcombinaciones')[_elefante('0xa')] = combinations, clean();
}


function calculate() {
	aux = 0x1;
	for (var _0x9b72dd = 0x0; _0x9b72dd < 0xa; _0x9b72dd++) {
		aux *= res[_0x9b72dd]['length'];
	}
	quantity = localStorage[_elefante('0x15')](_elefante('0x6')), quantity ? (localStorage[_elefante('0x3b')](_elefante('0x6'), parseInt(quantity) + aux), quantity = localStorage[_elefante('0x15')]('quantity')) : (localStorage['setItem'](_elefante('0x6'), aux), quantity = localStorage[_elefante('0x15')](_elefante('0x6'))), document[_elefante('0x3e')](_elefante('0x2c'))[_elefante('0x30')] = quantity, localStorage[_elefante('0x3b')](_elefante('0x17'), name);
}


function random() {
	clean();
	let _0x3b5ef5 = document[_elefante('0x12')]('text'), _0x3b9514 = document[_elefante('0x0')](_elefante('0x39'));
	for (var _0x1fe1e7 = 0x0; _0x1fe1e7 < 0x10; _0x1fe1e7++) {
		var _0x59a8e5 = getRandomInt(0x0, 0x2);
		_0x3b9514[_0x1fe1e7][_elefante('0x38')](_elefante('0x29'))[_0x59a8e5][_elefante('0x3a')][_elefante('0x32')] = _elefante('0x2'), res[_0x1fe1e7] = ['L', 'E', 'V'][_0x59a8e5];
	}
	_0x3b5ef5[_elefante('0x31')] = res['join']('\u00a0\u00a0'), costoactual();
}


function getRandomInt(_0x3cc205, _0x82159) {
	return _0x3cc205 = Math[_elefante('0x25')](_0x3cc205), _0x82159 = Math['floor'](_0x82159), Math[_elefante('0x28')](Math[_elefante('0xb')]() * (_0x82159 - _0x3cc205 + 0x1)) + _0x3cc205;
}


function costoactual() {
	if (!res['join']('\u00a0\u00a0')[_elefante('0x3c')]('_')) {
		let _0xe99c55 = 0x1;
		for (var _0x123851 = 0x0; _0x123851 < 0xa; _0x123851++) {
			_0xe99c55 *= res[_0x123851][_elefante('0x24')];
		}
		document[_elefante('0x12')](_elefante('0x3'))[_elefante('0x31')] = _elefante('0x16') + _0xe99c55 * 0x14, document[_elefante('0x12')](_elefante('0x2a'))[_elefante('0x31')] = _0xe99c55 + _elefante('0x1f');
	}
}


function remove() {
	if (quantity > 0x0) {
		x = localStorage[_elefante('0x15')](_elefante('0xf')), x = removeLastLine(x), localStorage[_elefante('0x3b')](_elefante('0xf'), x), results = x['split']('*');
		let _0x47fec5 = document[_elefante('0x12')](_elefante('0x2b'));
		last = _0x47fec5[_elefante('0xe')]['textContent'], last = last[_elefante('0x9')]('\u00a0\u00a0'), last[0x0] = last[0x0][_elefante('0x9')]('\x0a')[_elefante('0x1c')]('');
		let _0x33a518 = 0x1;
		for (var _0x1c726a = 0x0; _0x1c726a < 0xa; _0x1c726a++) {
			_0x33a518 *= last[_0x1c726a][_elefante('0x24')];
		}
		quantity -= _0x33a518;
		if (_0x47fec5[_elefante('0x14')] < 0x2) localStorage[_elefante('0x3b')](_elefante('0xf'), '');
		_0x47fec5[_elefante('0x1e')](_0x47fec5['lastElementChild']), document[_elefante('0x3e')](_elefante('0x2c'))[_elefante('0x30')] = quantity, document[_elefante('0x12')](_elefante('0x10'))[_elefante('0x31')] = _elefante('0x20') + quantity * 0x14 + '\x0a', localStorage['setItem'](_elefante('0x6'), quantity);
		if (_0x47fec5[_elefante('0xe')] != null && _0x47fec5[_elefante('0x14')] > 0x0) _0x47fec5[_elefante('0xe')][_elefante('0x31')] += _elefante('0x36');
	}
}


function removeLastLine() {
	return x['lastIndexOf']('\x0a') > 0x0 ? x[_elefante('0x7')](0x0, x[_elefante('0x5')]('\x0a')) : x;
}


window[_elefante('0xd')](_elefante('0x21'), start, ![]);


	var modal = document.querySelector(".ventana");
	var trigger = document.querySelector(".trigger");
	var closeButton = document.querySelector(".boton-cerrar");

	function toggleModal() {
		modal.classList.toggle("mostrar-ventana");
	}

	function windowOnClick(event) {
		if (event.target === modal) {
			toggleModal();
		}
	}

	trigger.addEventListener("click", toggleModal);
	closeButton.addEventListener("click", toggleModal)
	window.addEventListener("click", windowOnClick);

