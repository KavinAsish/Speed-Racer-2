class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
getCount(){
  database.ref("playerCount").on("value",function(data){
    playerCount=data.val();
  })
}
updateCount(count){
database.ref('/').update({playerCount:count})
}

addPlayer(){
  database.ref('players/player'+this.index).set({name:this.name})

}

 }
