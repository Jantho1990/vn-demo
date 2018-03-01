/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/

// Forgive me, this code is disgusting. :(

/**
 * Listen to the data-ui-text scroll.
 */
(function listenToScroll(document) {
	console.log('i ran');
	document.addEventListener('DOMContentLoaded', function () {
		ooo()
	})

	function ooo() {
		document.querySelector('[data-ui="text"]').addEventListener('scroll', function (ev) {
			bottomBar(ev)
		})
		document.querySelector('[data-ui="text"]').addEventListener('mousedown', function (ev) {
			console.log('bongos');
            // window.setTimeout(bottomBar(ev, true), 200)
            bottomBarClick(ev)
			console.log('sniggers')
		})
	}

	function bottomBarClick(ev) {
        let bottom = ev.target.scrollHeight
        let height = ev.target.clientHeight
        let pos = ev.target.scrollTop
        let p = height + pos
        console.log('bongos', 'bottom', bottom, 'height', height, 'pos', pos, 'p', p)
        // if (bottom > height) {
			document.querySelector('[data-ui="text"').classList.add('unread')
		// }
	}

	function bottomBar(ev) {
		// console.log(ev);
		let bottom = ev.target.scrollHeight
		let height = ev.target.clientHeight
		let pos = ev.target.scrollTop
		let p = height + pos
        console.log('bottom', bottom, 'height', height, 'pos', pos, 'p', p)
        if (bottom > height) {
			if (p === bottom && ev.target.classList.contains('unread')) {
				ev.target.classList.remove('unread')
			} else if (p !== bottom && ev.target.classList.contains('unread') === false) {
				console.log('chimichangas')
				ev.target.classList.add('unread')
			}
		}
	}

})(document)