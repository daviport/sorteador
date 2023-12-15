let friendsRegistered = [];

const formRegister = document.querySelector("#formRegister");
const listFriends = document.querySelector("#registeredFriend");
const sortButton = document.querySelector("#sortButton");

formRegister.addEventListener("submit",(e)=>{
    e.preventDefault()

    const friendName = formRegister["friendName"].value;
    const friendPassword = formRegister["friendPassword"].value;
    
    const newFriend = {
        name: friendName,
        password: friendPassword,
        id: generateUniqueId(),
        myFriend:""
    }

    console.info("newFriend",newFriend)

    friendsRegistered.push(newFriend);

    formRegister.reset();

    const elevenDots = "•••••••••••" 
    //const newFriendNameWithDots = newFriend.name.replaceAll(/./g,"•") In case you wanna use regex;
    
    const friendElement = `<p class="friendListItem">${elevenDots} </p>`

    listFriends.innerHTML += friendElement;

    if(friendsRegistered.length>1){
        sortButton.style.display = "block";
    }
    
})