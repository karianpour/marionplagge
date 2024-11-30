function showMenu() {
  const index = document.body.className.indexOf(' nav-open');
  if(index > 0){
    document.body.className = document.body.className.substring(0, index);
  }else{
    document.body.className = document.body.className + ' nav-open';
  }
}

function hideMenu() {
  console.log(document.body.className);
  const index = document.body.className.indexOf(' nav-open');
  if(index > 0){
    document.body.className = document.body.className.substring(0, index);
  }
}


// $('label.hamburger').on('click', function() {
//   $('body').toggleClass('nav-open');
// });
