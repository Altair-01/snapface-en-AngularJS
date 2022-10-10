import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-fs',
  templateUrl: './single-fs.component.html',
  styleUrls: ['./single-fs.component.scss']
})
export class SingleFsComponent implements OnInit {

 
     
  buttonText!: string;
 facesnap!: FaceSnap;
  

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(){
     this.buttonText = 'Like';
     const faceSnapId = +this.route.snapshot.params['id'];
     this.facesnap = this.faceSnapsService.getFaceSnapById(faceSnapId)
  }

  onSnap() {
    if (this.buttonText === 'Like') {
      this.faceSnapsService.snapFaceSnapById(this.facesnap.id, "snap")
      this.buttonText = 'Dislike'
    } else {
      this.faceSnapsService.snapFaceSnapById(this.facesnap.id, "unsnap")
      this.buttonText = 'Like'
    }
  }
  

}
