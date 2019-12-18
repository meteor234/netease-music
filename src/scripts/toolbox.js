// log 函数
var log = function() {
  console.log.apply(console, arguments)
}

// find 函数
// 可以查找 element 的所有子元素
var find = function(element, selector) {
  return element.querySelector(selector)
}

// 选择器
var e = function(selector) {
  return document.querySelector(selector)
}

/*
appendHtml 函数
element 是一个标签
html 是一段 html 字符串
把 html 作为子元素插入到 element 的末尾

实例:
var b = document.querySelector('body')
appendHtml(b, '<h1>hello</h1>')
*/
var appendHtml = function(element, html) {
  element.insertAdjacentHTML("beforeend", html)
}

/*
append 函数
selector 是一个 string, 选择器, 有如下三种取值
    1, 标签选择器, 如 'div'
    2, class 选择器, 如 '.red'
    3, id 选择器, 如 '#id-input-name'
html 是一段 html 字符串

作用:
把 html 作为子元素插入到 selector 选中的所有元素的末尾
*/
var append = function(selector, html) {
  var elements = document.querySelectorAll(selector)
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i]
    e.insertAdjacentHTML("beforeend", html)
  }
}

/*
bindEvent 函数
element 是一个标签
eventName 是一个 string, 表示事件的名字
callback 是一个函数

实例: 假设 button 是一个标签
bindEvent(button, 'click', function(){
	log('click 事件')
})
*/
var bindEvent = function(element, eventName, callback) {
  element.addEventListener(eventName, callback)
}

/*
bindAll 函数
selector 是一个 string, 选择器, 有如下三种取值
    1, 标签选择器, 如 'div'
    2, class 选择器, 如 '.red'
    3, id 选择器, 如 '#id-input-name'
eventName 是一个 string, 表示事件的名字
callback 是一个函数, 给出事件的具体内容

该函数的作用:
	给 selector 选中的所有元素绑定 eventName 事件
*/

var bindAll = function(selector, eventName, callback) {
  var elements = document.querySelectorAll(selector)
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i]
    bindEvent(e, eventName, callback)
  }
}

var toggleClass = function(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    element.classList.add(className)
  }
}

var removeClassAll = function(className) {
  var selector = "." + className
  var elements = document.querySelectorAll(selector)
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i]
    e.classList.remove(className)
  }
}

// find 函数可以查找 element 的子元素
var find = function(element, selector) {
  return element.querySelector(selector)
}

// find 函数可以查找 element 的所有子元素
var findAll = function(element, selector) {
  return element.querySelectorAll(selector)
}
