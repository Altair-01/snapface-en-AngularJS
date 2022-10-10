import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id:1,
          title:'Le titre',
          description:'La description',
        imgUrl:'https://images.ctfassets.net/47rphfgl53ju/2fjkfUsFt66TjWE3JK3wtZ/6ea8339715e6c0821af378599cec2c7b/IMG_5877.jpeg',
        createdDate: new Date(),
        snaps:0,
        location:'Dakar'
        },
        {
          id:2,
          title:'Le deuxieme titre',
          description:'La  deuxieme description',
        imgUrl:'https://images.ctfassets.net/47rphfgl53ju/2fjkfUsFt66TjWE3JK3wtZ/6ea8339715e6c0821af378599cec2c7b/IMG_5877.jpeg',
       createdDate:new Date(),
        snaps:0,
        }
      ]

      getAllSnaps(): FaceSnap[]{
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId:number) : FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap=> faceSnap.id === faceSnapId);
        if (!faceSnap) {
          throw new Error("FaceSnap Not found");

        } else {
          return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId:number, snapType: 'snap'|'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId)
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps-- ;
      }
}