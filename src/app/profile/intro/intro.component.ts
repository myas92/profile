import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {
  name = 'Angular';
  @ViewChild('tw', { static: true }) typewriterElement;
  @ViewChild('tw2', { static: true }) typewriterElement2;
  @ViewChild('tw3', { static: true }) typewriterElement3;

  ngOnInit() {
    const target = this.typewriterElement.nativeElement
    const writer = new Typewriter(target, {
      loop: true, 
      typeColor: 'white',
      removeCursor:false
    })
    
    writer
      .strings(
        600,
        "Yaser Ahmadi",
        "Full Stack Developer"
      )
      .start()
    }

}
