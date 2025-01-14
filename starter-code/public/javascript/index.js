const charactersAPI = new APIHandler("http://localhost:8000")



$(document).ready( () => {



  //Get full character list
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  



  //Get character using ID
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector("body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]").value;
    charactersAPI.getOneRegister(id);
  }
  




  //Delete character using ID
  document.getElementById('delete-one').onclick = function(){
    
    let id = document.querySelector("body > section:nth-child(1) > section > div.operation.delete > input[type=text]").value;
    charactersAPI.deleteOneRegister(id);
  }
  




  //Edit character using ID
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();    
    let updatedCharacter = {
      id: document.querySelector("#edit-character-form > div:nth-child(1) > input[type=text]").value,
      name: document.querySelector("#edit-character-form > div:nth-child(2) > input[type=text]").value,
      occupation: document.querySelector("#edit-character-form > div:nth-child(3) > input[type=text]").value,
      cartoon: document.querySelector("#edit-character-form > div:nth-child(5) > input[type=checkbox]").checked,
      weapon: document.querySelector("#edit-character-form > div:nth-child(4) > input[type=text]").value
    }



    console.log(updatedCharacter.cartoon);
    charactersAPI.updateOneRegister(updatedCharacter, updatedCharacter.id);
  }
  





  //Create new character
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()
    let newCharacter = {
      name: document.querySelector("#new-character-form > div:nth-child(1) > input[type=text]").value,
      occupation: document.querySelector("#new-character-form > div:nth-child(2) > input[type=text]").value,
      cartoon: document.querySelector("#new-character-form > div:nth-child(4) > input[type=checkbox]").checked,
      weapon: document.querySelector("#new-character-form > div:nth-child(3) > input[type=text]").value
    }

    console.log(newCharacter);

    charactersAPI.createOneRegister(newCharacter);      
  }
})


