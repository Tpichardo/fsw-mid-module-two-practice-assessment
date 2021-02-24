document.addEventListener("DOMContentLoaded", ()=>{
    const numberInput = document.querySelector("#story-length-input");
    const emojiStory = document.querySelector("#emoji-story");
    const emojiStoryBtn = document.querySelector("#generate-story-btn");
    const emojis = [
        '😀','😆','😅','🤣','🙃','😍','😡','🥶','😱','👻',
        '👾','😻','💋','👅','🧵','👠','🥾','👑','🎓','🐔',
        '🐧','🦄','🦇','🌲','🎄','🌊','🍓','🍍','🥯','🌭',
        '🍕','🍣','🥡','🤸','🎯','🧨','🔮','💉','🦠','❤️',
        '🧡','💛','💗','💙','💜','☢️','🚫','💯','🔱','🎊',
        '🙏🏻','🤑','👩🏻‍💻','🧘🏻‍♀️','🥦','🥳','🧠','🌂','🌱','🌻'
    ]
    let newArr = []

    emojiStoryBtn.addEventListener("click", ()=> {
        for(let i = 0; i < numberInput.value ;i++){
            let randomEmojiSelection = emojis[Math.floor(Math.random() * emojis.length)];
                newArr.push(randomEmojiSelection);
        }
        emojiStory.textContent = newArr.join('');
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
