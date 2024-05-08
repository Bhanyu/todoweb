// let text = document.querySelector("input")
// let btn = document.querySelector(".plus");
// let button = document.querySelector(".add-btn")
// let noteContainer = document.querySelector(".note-field")
// let reset = document.querySelector(".clean")
// let sort = document.querySelector(".icon_part")
// let notes = []



// button.addEventListener("click", () => {
//     let value1 = text.value 
//     if (value1!== "") {
//         notes.push(text.value);
//         addNote(notes)
//         text.value = "";
//     } else {
//         alert("elave edin")
//     }

// });
// function addNote(arr) {
//     noteContainer.innerHTML = "";
//     arr.forEach((element) => {
//         let noteDiv = document.createElement("div");
//         noteDiv.classList.add("note-part");
//         let note = document.createElement("p");
//         note.textContent = element;
//         let removeBtn = document.createElement("span")
       
//         let image = document.createElement("img");
//         image.src = "./images/Group 77.png"
//         image.classList = "delete-btn"
//          removeBtn.append(image)
      
//         noteDiv.append(note, removeBtn);
//         noteContainer.append(noteDiv)
//         removeBtn.addEventListener("click", () => {
//             notes = notes.filter((value) => element !== value);
//             addNote(notes);
//         });
//     });
// }



// reset.addEventListener("click", () => {
//     text.value = "";
// });

// let sorted = false;
// sort.addEventListener("click", () => {
//     if (sorted === false) {
//         notes.sort((a, b) => {
//             return a.localeCompare(b);

//         })
//         sorted = true;
//         sort.firstElementChild.classList.add(".hide")
//         sort.firstElementChild.classList.remove(".show")
//         console.log(sorted)
//     }else if(sorted === true){
//         notes.sort((a, b) => {
//             return b.localeCompare(a); 
//         })
//         sorted = false;
//         sort.firstElementChild.classList.add(".show")
//         sort.firstElementChild.classList.remove(".hide")
//         console.log(sorted)

//     }
//     addNote(notes);
//     console.log(sorted)
// }); 

let text = document.querySelector("input")
let btn = document.querySelector(".plus");
let button = document.querySelector(".add-btn")
let noteContainer = document.querySelector(".note-field")
let reset = document.querySelector(".clean")
let sort = document.querySelector(".icon_part")
let hidden = document.querySelector(".hidden");
let icon = document.querySelector(".icon");
let notes = []


icon.addEventListener("mouseover", ()=>{
    icon.src = "./images/Group 73.svg"
})
icon.addEventListener("mouseleave", ()=>{
    icon.src = "./images/Group 34.svg"
})

hidden.addEventListener("mouseover", ()=>{
    hidden.src = "./images/Group 91.svg"
})
hidden.addEventListener("mouseleave", ()=>{
    hidden.src = "./images/Group 90 (1).png"
})


button.addEventListener("click", () => {
    let value1 = text.value 
    if (value1!== "") {
        notes.push(text.value);
        addNote(notes)
        text.value = "";
        noteContainer.style.display = "block"
    } else {
        alert("elave edin")
    }

});
function addNote(arr) {
    noteContainer.innerHTML = "";
    arr.forEach((element) => {
        let noteDiv = document.createElement("div");
        noteDiv.classList.add("note-part");
        let note = document.createElement("p");
        note.textContent = element;
        let removeBtn = document.createElement("span")
       
        let image = document.createElement("img");
        image.src = "./images/Group 77.svg"
        image.classList = "delete-btn"
         removeBtn.append(image)
      removeBtn.addEventListener("mouseover",()=>{
        image.src = "./images/Group 70.svg"
      }) 
      removeBtn.addEventListener("mouseleave",()=>{
        image.src = "./images/Group 77.svg"
        
      }) 

        
      
        noteDiv.append(note, removeBtn);
        noteContainer.append(noteDiv)
        removeBtn.addEventListener("click", () => {
            notes = notes.filter((value) => element !== value);
            addNote(notes);
           
        });
    });
}



reset.addEventListener("click", () => {
    text.value = "";
});

let sorted = false;
sort.addEventListener("click", () => {
    if (sorted === false) {
        notes.sort((a, b) => {
            return a>b ? 1 : -1;

        })
        sorted = true;
    
    hidden.style.display = "none"

    icon.style.display = "block"
  
       
    }
    else if(sorted === true){
        notes.sort((a, b) => {
            return a<b ? 1 : -1;
        })
        sorted = false;
     
        hidden.style.display = "block"
        
        icon.style.display = "none"
      

    }
    addNote(notes);
   
});