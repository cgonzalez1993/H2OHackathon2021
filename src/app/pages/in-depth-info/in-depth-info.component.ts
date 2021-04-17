import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-depth-info',
  templateUrl: './in-depth-info.component.html',
  styleUrls: ['./in-depth-info.component.css']
})
export class InDepthInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  wikiLink1(){
    window.location.href = "https://en.wikipedia.org/wiki/Akashiwo_sanguinea"
  }
  wikiLink2(){
    window.location.href = "https://en.wikipedia.org/wiki/Alexandrium_catenella"
  }
  wikiLink3(){
    window.location.href = "https://en.wikipedia.org/wiki/Cochlodinium_polykrikoides"
  }
  wikiLink4(){
    window.location.href = "https://en.wikipedia.org/wiki/Dinophysis"
  }
  wikiLink5(){
    window.location.href = "https://en.wikipedia.org/wiki/Lingulodinium_polyedra"
  }
  wikiLink6(){
    window.location.href = "https://en.wikipedia.org/wiki/Phaeocystis"
  }
  wikiLink7(){
    window.location.href = "https://en.wikipedia.org/wiki/Prorocentrales"
  }
  wikiLink8(){
    window.location.href = "https://en.wikipedia.org/wiki/Pseudo-nitzschia"
  }

}
