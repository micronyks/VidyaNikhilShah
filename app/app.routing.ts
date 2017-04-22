import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homeModule/home.component';
import { CoupleComponent } from './coupleModule/couple.component';
import { EventsComponent } from './eventsModule/event.component';
import { ParentsComponent } from './parentsModule/parent.component';
import { GalleryComponent } from './galleryModule/gallery.component';
import { ContactComponent } from './contactModule/contact.component';
import { EngagementComponent } from './engagementModule/engagement.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: "home",
    component: HomeComponent
  },
  { path: 'couple', component: CoupleComponent },
  { path: 'events', component: EventsComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'engagement', component: EngagementComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }