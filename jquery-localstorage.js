(function ( $ ) {
  $.store = function(obj, key) {
    if(key) {
      localStorage.setItem(key, JSON.stringify(obj))
      return [ obj, key ]
    } else {
      var key = Math.random().toString(36).substring(0, 15)
      localStorage.setItem(key, JSON.stringify(obj))
      return key
    }
  }

  $.get = function(str) {
    return JSON.parse(localStorage.getItem(str))
  }
} (jQuery) )
