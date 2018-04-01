import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsic-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title = 'Nuestro Equipo';
  public team = [
    {
      'name': 'Diego Ferreiro',
      'image': '/assets/images/team/diego.jpg',
      'position': 'Presidente',
      'social': [
        {
          'href': 'https://twitter.com/diervo',
          'icon': 'fa fa-twitter'
        }
      ]
    },
    {
      'name': 'Arturo Silvelo',
      'image': 'https://s.gravatar.com/avatar/2a9686e837b16d4d051ae3ad1972e842',
      'position': 'Vicepresidente',
      'social': [
        {
          'href': 'https://twitter.com/arturosilvelo',
          'icon': 'fa fa-twitter'
        }
      ]
    },
    {
      'name': 'José Manuel Ferreiro',
      'image': '/assets/images/speakers/avatar.png',
      'position': 'Secretario/Tesorero',
      'social': []
    },
    {
      'name': 'Jose Eulogio Cribeiro',
      'image': '/assets/images/speakers/avatar.png',
      'position': 'Vocal',
      'social': []
    },
    {
      'name': 'Jesús Pérez',
      'image': '/assets/images/team/jesusprubio.png',
      'position': 'Vocal',
      'social': [
        {
          'href': 'https://twitter.com/jesusprubio',
          'icon': 'fa fa-twitter'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
