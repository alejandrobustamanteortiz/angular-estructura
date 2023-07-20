import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { IonicModule } from '@ionic/angular';





import { NotFoundComponent } from './components/not-found/not-found.component';






@NgModule({
  declarations: [NotFoundComponent],
  imports: [HttpClientModule, RouterModule, CommonModule, MatButtonModule,MatIconModule, MatTabsModule, MatCardModule, IonicModule

  ],
  exports: [HttpClientModule, RouterModule, CommonModule, MatButtonModule, MatIconModule, MatTabsModule,  MatCardModule, NotFoundComponent, IonicModule],
})
export class SharedModule { }
