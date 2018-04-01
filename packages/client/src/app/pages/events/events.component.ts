import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  title = 'Eventos';
  public events = [{
    description: 'Amet velit exercitation elit fugiat. Pariatur dolor aliquip excepteur nulla officia. Ex non ea deserunt quis dolore qui reprehenderit officia aute ad nulla labore. Labore dolor proident tempor ut irure laboris consectetur pariatur sunt. Cillum culpa aute nostrud Lorem exercitation occaecat do voluptate magna proident sint officia proident.Laboris tempor amet consequat adipisicing commodo eu pariatur esse nulla adipisicing labore.Eu ipsum aliquip pariatur occaecat Lorem veniam minim laboris.Nulla proident exercitation qui cillum labore tempor mollit veniam.Cillum ea enim tempor ad est excepteur eiusmod id ea dolor.Sit consectetur commodo in officia fugiat do irure aliqua ea minim est deserunt.Quis anim ut reprehenderit aute eiusmod ullamco exercitation in ullamco Lorem non eu.In duis quis laborum do.Laborum commodo sit in nisi ipsum adipisicing qui nisi anim velit.Nostrud occaecat aliqua irure amet anim pariatur ipsum tempor magna Lorem.Cupidatat quis veniam veniam occaecat reprehenderit in.Nostrud minim anim adipisicing proident.Duis consequat proident magna nulla deserunt aliqua.Ad ad cillum elit aliqua culpa ex reprehenderit ullamco laboris irure anim anim.',
    title: 'Event Title',
    time: '30 min',
    speakers: [
      {
        name: 'Name',
        position: 'Position',
        bio: 'Excepteur cupidatat anim qui magna culpa proident eiusmod eu veniam labore. Mollit duis sit fugiat do. Dolor est non aliqua proident velit quis incididunt officia dolor laborum laboris cupidatat. Ex amet deserunt amet proident non nostrud. Ea incididunt nostrud Lorem ex pariatur non est commodo non ad ullamco est laboris aliquip. Non irure mollit fugiat deserunt incididunt amet officia amet veniam voluptate sunt duis aliquip Lorem.Aliqua qui ipsum veniam aliqua cupidatat exercitation ipsum proident veniam et. Aliquip labore laboris ea fugiat. Deserunt consectetur consectetur excepteur laboris est minim esse ad elit excepteur reprehenderit consequat nostrud. Ea in voluptate ad amet reprehenderit mollit non cupidatat labore ea aliqua magna aute. Sunt adipisicing in incididunt nisi elit aute aute ipsum. Enim ut cillum pariatur irure consectetur fugiat consequat amet veniam. Sint nulla do ipsum Lorem cupidatat.'
      }
    ]
  },
  {
    description: 'Amet velit exercitation elit fugiat. Pariatur dolor aliquip excepteur nulla officia. Ex non ea deserunt quis dolore qui reprehenderit officia aute ad nulla labore. Labore dolor proident tempor ut irure laboris consectetur pariatur sunt. Cillum culpa aute nostrud Lorem exercitation occaecat do voluptate magna proident sint officia proident.Laboris tempor amet consequat adipisicing commodo eu pariatur esse nulla adipisicing labore.Eu ipsum aliquip pariatur occaecat Lorem veniam minim laboris.Nulla proident exercitation qui cillum labore tempor mollit veniam.Cillum ea enim tempor ad est excepteur eiusmod id ea dolor.Sit consectetur commodo in officia fugiat do irure aliqua ea minim est deserunt.Quis anim ut reprehenderit aute eiusmod ullamco exercitation in ullamco Lorem non eu.In duis quis laborum do.Laborum commodo sit in nisi ipsum adipisicing qui nisi anim velit.Nostrud occaecat aliqua irure amet anim pariatur ipsum tempor magna Lorem.Cupidatat quis veniam veniam occaecat reprehenderit in.Nostrud minim anim adipisicing proident.Duis consequat proident magna nulla deserunt aliqua.Ad ad cillum elit aliqua culpa ex reprehenderit ullamco laboris irure anim anim.',
    title: 'Event Title',
    time: '30 min',
    speakers: [
      {
        name: 'Name',
        position: 'Position',
        bio: 'Excepteur cupidatat anim qui magna culpa proident eiusmod eu veniam labore. Mollit duis sit fugiat do. Dolor est non aliqua proident velit quis incididunt officia dolor laborum laboris cupidatat. Ex amet deserunt amet proident non nostrud. Ea incididunt nostrud Lorem ex pariatur non est commodo non ad ullamco est laboris aliquip. Non irure mollit fugiat deserunt incididunt amet officia amet veniam voluptate sunt duis aliquip Lorem.Aliqua qui ipsum veniam aliqua cupidatat exercitation ipsum proident veniam et. Aliquip labore laboris ea fugiat. Deserunt consectetur consectetur excepteur laboris est minim esse ad elit excepteur reprehenderit consequat nostrud. Ea in voluptate ad amet reprehenderit mollit non cupidatat labore ea aliqua magna aute. Sunt adipisicing in incididunt nisi elit aute aute ipsum. Enim ut cillum pariatur irure consectetur fugiat consequat amet veniam. Sint nulla do ipsum Lorem cupidatat.'
      },
      {
        name: 'Name',
        position: 'Position',
        bio: 'Excepteur cupidatat anim qui magna culpa proident eiusmod eu veniam labore. Mollit duis sit fugiat do. Dolor est non aliqua proident velit quis incididunt officia dolor laborum laboris cupidatat. Ex amet deserunt amet proident non nostrud. Ea incididunt nostrud Lorem ex pariatur non est commodo non ad ullamco est laboris aliquip. Non irure mollit fugiat deserunt incididunt amet officia amet veniam voluptate sunt duis aliquip Lorem.Aliqua qui ipsum veniam aliqua cupidatat exercitation ipsum proident veniam et. Aliquip labore laboris ea fugiat. Deserunt consectetur consectetur excepteur laboris est minim esse ad elit excepteur reprehenderit consequat nostrud. Ea in voluptate ad amet reprehenderit mollit non cupidatat labore ea aliqua magna aute. Sunt adipisicing in incididunt nisi elit aute aute ipsum. Enim ut cillum pariatur irure consectetur fugiat consequat amet veniam. Sint nulla do ipsum Lorem cupidatat.'
      }
    ]
  }];

}
