const allNav = document.getElementById('allnav')
const newNav = document.getElementById('newnav')
const allPosts = document.getElementById('all-posts')
const newPosts = document.getElementById('new-posts')
const menuBtn = document.getElementById('menu-btn')
const menuClose = document.getElementById('menu-close')
const menuBox = document.getElementById('menu-box')
const categoryBtn = document.getElementById('category-btn')
const head = document.getElementById('head')
const categoryList = document.getElementById('category-list')

categoryBtn.addEventListener("click", function(){
if(categoryBtn.style.background == 'cyan'){
  categoryList.style.display = 'none'
categoryBtn.style.background = 'transparent'
}
else{
  categoryBtn.style.background = 'cyan'
  categoryList.style.display = 'block'
}
})

menuBtn.addEventListener("click", function(){
  menuBox.style.top = '0'
  head.style.top = '-10%'
})
menuClose.addEventListener("click", function(){
  menuBox.style.top = '-100%'
  head.style.top = '0'
  categoryList.style.display = 'none'
categoryBtn.style.background = 'transparent'
})


function newBtn(){
  allPosts.style.display = 'none'
  newPosts.style.display = 'block'
}
function allBtn(){
  allPosts.style.display = 'block'
  newPosts.style.display = 'none'
}