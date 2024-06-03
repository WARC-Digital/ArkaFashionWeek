import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { HomeHeroSectionComponent } from './home-hero-section/home-hero-section.component';
import { HomeOrganizersImageComponent } from './home-organisers-image/home-organizers-image.component';
import { HomeOrganizerAndPartnerComponent } from './home-organizer-and-partner/home-organizer-and-partner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    HomeHeroSectionComponent,
    HomeOrganizersImageComponent,
    HomeOrganizerAndPartnerComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
