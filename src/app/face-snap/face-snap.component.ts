import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  
  buttonText!: string;
  @Input() facesnap!: FaceSnap;
  

  constructor(private faceSnapsService: FaceSnapsService,
    private router : Router){}

  ngOnInit(){
     this.buttonText = 'Like'
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
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
}
}