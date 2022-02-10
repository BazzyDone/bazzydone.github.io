function menuFunc() {
	var list = document.getElementById('list');
	var num = document.getElementById('num');
    var head = document.getElementById('header')

	if (list.className === "nav_list" && num.className === 'nav_number' && 
    head.className === 'header_nav') {
		list.className += ' responsive';
		num.className += ' responsive';
        head.className += ' responsive'
	} else {
		list.className = 'nav_list';
		num.className = 'nav_number';
        head.className = 'header_nav'
	}
}