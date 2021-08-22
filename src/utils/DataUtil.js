import sec from 'crypto-js'
import axios from 'axios';

let devMode = false ;
let myKey = 'ALPHABETA';

export function save(key,val) {  
  if(key === 'token')axios.defaults.headers.common['Authorization'] = `Bearer ${val}`;
  var saveData;
  if(devMode) saveData= JSON.stringify(val);     
  else saveData = sec.AES.encrypt(JSON.stringify(val), myKey).toString();
  localStorage.setItem(key, saveData);
  return null;
}

export function get(key) {   
  try{
    var getData;
    let str = localStorage.getItem(key);
    if(devMode){
      getData = str ;
    }else{
      getData = sec.AES.decrypt(str, myKey).toString(sec.enc.Utf8);
    }
    let val = JSON.parse(getData);
    if(key === 'token')axios.defaults.headers.common['Authorization'] = `Bearer ${val}`;
    return val;
  }catch(e){
    return null;
  }
}

export function format() {   
  try{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }catch(e){
  }
}
