function countBs(word){
    var count=0;
    for(var i=0; i < word.length; i++){
        if(word.charAt(i)==="B") {
            count +=1;
    }
  }
    console.log(count);
}


countBs("Barbiturate");//в идеале здесь нужно привести все буквы к одному регистру
