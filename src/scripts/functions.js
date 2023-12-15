function generateUniqueId(){
    return Math.random().toString(36).substring(2,9)
}

function sortFriends(oldList = []){
    const indexesBasedinOldListLenghtAtRandomOrder = oldList.map((_, index) => index).sort(() => Math.random() - 0.5);

    const friendsWithMyFriendId = []

    for(let i=0; i < oldList.length; i++){
        if(i>0){

        } else if(i===0){
            friendsWithMyFriendId.push(oldList[indexesBasedinOldListLenghtAtRandomOrder[i]])
        }
    }


}
