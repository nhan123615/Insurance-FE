import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { InsuranceType } from "../../../entities/insurance-type.entity";
import { InsuranceTypeService } from "../../../services/insurance-type.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  insuranceTypes: InsuranceType[];

  constructor(private insuranceTypeService: InsuranceTypeService) {
    insuranceTypeService.findAll().then(res => this.insuranceTypes = res);
  }

  ngOnInit() {
    this.insuranceTypeService.findAll().then(res => this.insuranceTypes = res);
    this.loadScript();
  }

  loadScript() {
    // -- :: Navbar
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 10) {
        $('nav').addClass('scrolled');
      } else {
        $('nav').removeClass('scrolled');
      }
    });

    $('nav button').on('click', function () {
      $($(this).data('target')).fadeToggle();
    });

    $(document).ready(function () {
      if ($(document).width() < 974) {
        // Add slideDown animation to Bootstrap dropdown when expanding.
        $('.dropdown').on('show.bs.dropdown', function () {
          $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        });

        // Add slideUp animation to Bootstrap dropdown when collapsing.
        $('.dropdown').on('hide.bs.dropdown', function () {
          $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });
      } else {
        return false;
      }
    });
  }
}
