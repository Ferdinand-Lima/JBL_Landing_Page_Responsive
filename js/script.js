function menuMobile(){
	const btn_menu = document.querySelector('.btn_menu');
	const nav_menu = document.querySelector('.nav_menu ul')
	function handleClick(){
	 	this.classList.toggle('active');
	 	nav_menu.classList.toggle('active');
	}
	btn_menu.addEventListener('click', handleClick)
}
  menuMobile()
