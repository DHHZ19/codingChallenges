function sevenAte9(str){
  while (true) {
    if ( str.search('797') != -1 ) {
      str = str.replace('797', '77');
    } else {
      break;
    }
  }
  return str;
}