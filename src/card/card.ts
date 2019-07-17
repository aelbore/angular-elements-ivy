import { Component, ViewEncapsulation, Input } from '@angular/core'
import { renderCustomElement } from 'ngx-elements'

export class Profile {
  name?: string;
  profession?: string;
  motto?: string;
  photo?: string
}

@Component({
  selector: 'ar-card',
  templateUrl: './card.html',
  styleUrls: [ './card.css' ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent {

  @Input() profile: Profile

  constructor() {
    this.profile = {
      name: '', profession: '', motto: '',
      photo: 'https://pymwoqn637.codesandbox.io/default.png'
    }
  }

}

renderCustomElement(CardComponent)