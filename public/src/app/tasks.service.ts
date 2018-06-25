import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
//   {
//   providedIn: 'root',
// })
export class TasksService {

  constructor(private _http: HttpClient) {
  
   }
   getPet(){
    return this._http.get('/all')
  };
   addPet(newPet){
     console.log(newPet)
    return this._http.post('/addPet', newPet)
  }
  showPet(id){
    console.log(id)
    return this._http.get('/show/' + id)
  }
  adoptPet(id){
    console.log(id)
    return this._http.delete('/delete/' + id)
  }
  editPet(id, ePet){
    console.log(id, ePet)
    return this._http.put('/edit/' + id, ePet)
  }

  likePet(body){
    console.log(body)
    return this._http.post('/like/' + body.id, body)
  }
  // deleteTask(_id){
  //   return this._http.delete('/remove/'+_id)
  // }
  // editTask(_id, addComment){
  //   console.log(addComment)
  //   return this._http.put('/edit/'+_id, addComment)
  // }
  // addComment(newComment){

  //   return this._http.post('/comment', newComment)

  // }

  // showTask(_id){
    
  //   return this._http.get('/show/'+_id)
    
  // }
}
