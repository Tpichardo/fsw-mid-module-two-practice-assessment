document.addEventListener("DOMContentLoaded", ()=>{
    const numberInput = document.querySelector("#story-length-input");
    const emojiStory = document.querySelector("emoji-story");
    const emojiStoryBtn = document.querySelector("#generate-story-btn");
    const emojis = [
        '😀','😆','😅','🤣','🙃','😍','😡','🥶','😱','👻',
        '👾','😻','💋','👅','🧵','👠','🥾','👑','🎓','🐔',
        '🐧','🦄','🦇','🌲','🎄','🌊','🍓','🍍','🥯','🌭',
        '🍕','🍣','🥡','🤸','🎯','🧨','🔮','💉','🦠','❤️',
        '🧡','💛','💗','💙','💜','☢️','🚫','💯','🔱','🎊',
        '🙏🏻','🤑','👩🏻‍💻','🧘🏻‍♀️','🥦','🥳','🧠','🌂','🌱','🌻'
    ]
    //When a user clicks the emojiStoryBtn
    //the p tag should display the same number of emojis as the value of the numberInput
    //depending on the value, im going to continue to push things into a new array that I will display

    let randomEmojiSelection = emojis[Math.floor(Math.random() * emojis.length)];
    emojiStoryBtn.addEventListener("click", ()=> {

    })
    


   let descriptionInput = document.querySelector("#description-input");
   let descriptionBtn = document.querySelector("#submit-description-btn");
   let headingTwo = document.querySelector("#history-title");
   let ul = document.createElement("ul");
   document.body.appendChild(ul);

   descriptionBtn.addEventListener("click", () =>{
    let li = document.createElement('li')
    li.textContent = descriptionInput.value;
    ul.appendChild(li);
    let numOfDescriptions = document.querySelectorAll('li');
    if(numOfDescriptions.length === 0){
        headingTwo.textContent = headingTwo.textContent;
    }else if(numOfDescriptions.length === 1){
        headingTwo.textContent = `${numOfDescriptions.length} Saved Story`;
    }else{
        headingTwo.textContent = `${numOfDescriptions.length} Saved Stories`;
    }
    
   })
   

})