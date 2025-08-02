import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Notfound } from './components/notfound/notfound';
import { Portfolio } from './components/portfolio/portfolio';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:"full"},
    {path:'home', component:Home, title:'Start Framework'},
    {path:'about', component:About, title:'About - Start Framework'},
    {path:'contact', component:Contact, title:'Contact - Start Framework'},
    {path:'portfolio', component:Portfolio, title:'Portfolio - Start Framework'},
    {path:'**', component:Notfound, title:'Not Found Page'},

];
