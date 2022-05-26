function defineSuit(card) {
    let cardType;
      card.split('').forEach((x,i)=> {
        console.log(x)
          if( '♣' == x ){
            cardType = 'clubs'
          }else if('♦' == x ){
            cardType = 'diamonds'
          }else if( '♥' == x ){
            cardType = 'hearts'
          }else if('♠' == x){
            cardType =  'spades'
        }
      })
     return(cardType)
    }