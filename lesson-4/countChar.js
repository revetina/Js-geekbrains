function countChar(word, str){
    var count=0;
    for(var i=0; i < word.length; i++){
        if(word.charAt(i)===str) {
            count +=1;
    }
  }
    console.log(count);
}


countChar("innovation", "n");