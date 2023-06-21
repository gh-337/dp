var menuItems = document.querySelectorAll('#weeks li');

menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    if (this.classList.contains('open')) {
      this.classList.remove('open');
    } else {
      closeAllMenus();
      this.classList.add('open');
      var dropdownMenu = this.querySelector('.custom-dropdown-menu');
      var rect = this.getBoundingClientRect();
      dropdownMenu.style.top = rect.bottom + 'px';
      dropdownMenu.style.left = rect.left + 'px';
    }
  });
});

function closeAllMenus() {
  menuItems.forEach(function(item) {
    item.classList.remove('open');
  });
}
