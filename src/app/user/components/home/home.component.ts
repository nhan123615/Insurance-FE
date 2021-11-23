import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  constructor() {
  }

  ngOnInit() {
    // this.loadScript();
  }

  loadScript() {
    // -- :: Index Page

    // Hosting Section
    $('#index-page .hosting .host-taps li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('.host-item').hide();
      $($(this).data('show')).show();
      return false;
    });

    $('#index-page .hosting .host-taps .s-toggler .check').on('click', function () {
      $(this).parents('.s-toggler').find('.toggler').toggleClass('toggler--is-active');
      $('#index-page .hosting .host-items-contain').toggleClass('active--section');
    });

    // Section IX ( Boxes Nav )
    $('.se-ix ul.boxes-nav li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      $($(this).data('box')).fadeIn().siblings().hide();
    });
    // ----------------------------------
  }


}
