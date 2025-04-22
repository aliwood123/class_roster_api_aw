const dataSource = "https://assets.codepen.io/16425/Spring-2025-Roster.json";

const container = document.querySelector(".grid ul");

fetch(dataSource )
.then(res => res.json() )
.then(students => {
  
  students.forEach(student => {
    
  const template = `
    <li>
        
        <div class="polaroid-container">
        <div class="polaroid">
        <img src="${student.imageUrl}" alt="${student.name}" class="polaroid-img" />
        <div class="polaroid-caption">${student.name}</div>
        </div>
        </div>
        
        <p>
        <b>What makes me weird:</b> ${student.funFact}
       </p>
       
       <p>
       <b>Words to live by:</b> ${student.motto}
       </p>
       
       <p>
       <b>Favorite band:</b> ${student.favoriteBand}
       </p>
       
       <p>
       <b>Comfort food of choice:</b> ${student.favoriteFood}
       </p>
        
        <p> 
          <b>Go-to karaoke song:</b> ${student.favoriteSong}
        </p>
    </li>
    `;
  
  container.insertAdjacentHTML("afterbegin", template);

  });  
  
});

/* Randomizing Background Color */

const cssBodyClasses = [
  "bg0",
  "bg1", 
  "bg2",
  "bg3",
  "bg4"
]

const maxNumOfBodyClasses = cssBodyClasses.length;
randomNumber = Math.floor(Math.random() * maxNumOfBodyClasses);

const elemToChange = document.querySelector("body");

elemToChange.classList.add(`bg${randomNumber}`);
