const navigation = document.querySelector('.navigation');
const toggleMenu = document.querySelector('.toggleMenu');

toggleMenu.onclick = function (params) {
  navigation.classList.toggle('active');
};
