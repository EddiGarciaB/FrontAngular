import {NgModule} from '@angular/core';
import {IconDefinition} from '@ant-design/icons-angular';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { HttpClientModule } from "@angular/common/http";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzAvatarModule,
    NzMenuModule,
    NzIconModule.forRoot(icons),
    NzDividerModule,
    NzNotificationModule,
    NzStepsModule,
    NzListModule,
    NzTableModule,
    NzTypographyModule,
    NzDropDownModule,
    NzProgressModule,
    NzSelectModule,
    NzToolTipModule,
    NzCollapseModule,
    NzRadioModule,
    NzModalModule,
    NzTimePickerModule,
    NzSwitchModule,
    NzUploadModule,
    NzDatePickerModule

  ],
  exports:[
    ReactiveFormsModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzAvatarModule,
    NzMenuModule,
    NzIconModule,
    NzDividerModule,
    NzNotificationModule,
    NzStepsModule,
    NzListModule,
    NzTableModule,
    NzTypographyModule,
    NzDropDownModule,
    NzProgressModule,
    NzSelectModule,
    NzToolTipModule,
    NzCollapseModule,
    NzRadioModule,
    NzModalModule,
    NzTimePickerModule,
    NzSwitchModule,
    NzUploadModule,
    NzDatePickerModule

  ]
})
export class NgZorroComponentsModule {
}
