import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  DownloadOutline,
  UserOutline,
  SearchOutline,
  AudioOutline,
  MessageOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  DownloadOutline,
  UserOutline,
  SearchOutline,
  AudioOutline,
  MessageOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
