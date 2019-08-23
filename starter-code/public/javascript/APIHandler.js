class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }




//Get full character list
 getFullList () {

  //Get list from local host
   axios.get('http://localhost:8000/characters')
    .then ( response => {
      console.log(response.data);
      console.log(response.data.length);
      
      //Loop through character list
      let characters = ``;
      for(let i=0; i<response.data.length; i++){
        
        //Put each character info in HTML format
        characters += `<div class="character-info">
        <div class="name">${response.data[i].name}</div>
        <div class="occupation">${response.data[i].occupation} Occupation</div>
        <div class="cartoon">${response.data[i].cartoon}</div>
        <div class="weapon">${response.data[i].weapon}</div>
        </div>`;
        
        //Add characters to HTML
        document.querySelector("body > section:nth-child(1) > div").innerHTML = characters;
      }

    })
  }








  //Get one character by ID
  getOneRegister (id) {
  
    //Get character info from local host
    axios.get(`http://localhost:8000/characters/${id}`)
      .then ( response => {

        //Put character info in HTML format
        let character = `<div class="character-info">
        <div class="name">${response.data.name}</div>
        <div class="occupation">${response.data.occupation}</div>
        <div class="cartoon">${response.data.cartoon}</div>
        <div class="weapon">${response.data.weapon}</div>
        </div>`; 

        //Add characters to HTML
        document.querySelector("body > section:nth-child(1) > div").innerHTML = character;
      })
  }








  //Create new character
  createOneRegister (newCharacter) {

    //Add new character to list
    axios.post('http://localhost:8000/characters', newCharacter)
      .then( response => {})
  }









  //Edit character
  updateOneRegister (updatedCharacter, id) {

    axios.put(`http://localhost:8000/characters/${id}`, updatedCharacter)
    .then( response => {})
  }










  //Delete character
  deleteOneRegister (id) {

    axios.delete(`http://localhost:8000/characters/${id}`)
      .then( response => {})
  }
}
