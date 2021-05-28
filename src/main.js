import main from './style/main.sass'

import tool from './script/tool.js'
import login from './script/login.js'
import sendMessage from './script/sendMessage.js'
import control from './script/control.js'

// Get permission

if (Notification && Notification.requestPermission){
  Notification.requestPermission()
}




document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
