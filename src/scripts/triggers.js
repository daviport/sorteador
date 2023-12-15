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
        id: "",
        myFriend:""
    }

    console.info("newFriend",newFriend)

})