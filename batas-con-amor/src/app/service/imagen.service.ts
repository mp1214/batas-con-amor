import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes, list, getDownloadURL,deleteObject } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private storage:Storage) { }
  getImages(file:any){
   
    const imagesRef=ref(this.storage,'imagen/');
    list(imagesRef)
    .then(async response=>{
      for(let item of response.items){
        
      } 
    })
    .catch(error=> console.log(error))
  }
}
