import React from 'react'
export default function Day6() {
    
    var menu=[{id:1,name:"DOGS",BREED:"POMERIAN",image:<div id="animal1"><img src="https://cdn.britannica.com/42/233842-050-E64243D7/Pomeranian-dog.jpg" alt=" "/></div>},
               {id:2,name:"CATS",BREED:"PERSIAN CATS",image:<div id="animal2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3eaqXzl5SUHtyENZmCUqu6htXiPD-1UIA&usqp=CAU" alt=" "/></div>},
               {id:3,name:"BIRDS",BREED:"",image:<div id="animal3"><img src="https://i.pinimg.com/736x/79/75/44/7975443e2a38b32907e4da02045d318f--budgies-parrots.jpg" alt=" "/></div>}]
    var dispmenu=menu.map((fname)=>{return<li key={fname.id}>{fname.id} . PET!!!: {fname.name} <br/> BREED: {fname.BREED} <br/> IMAGE: <br/> {fname.image}<br/><br/></li>})
  return (
    <div>
    <h1> WANT ME!!!PET WORLD</h1><br/>
    <p>“Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection, they will think you are god. Whereas owners of cats are compelled to realize that, if you provide them with food and water and shelter and affection, they draw the conclusion that they are gods.”</p>
        {dispmenu}
    </div>
  )
}