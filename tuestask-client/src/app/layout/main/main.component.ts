import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit, Output, ViewChild } from "@angular/core";
import { Observable, map, tap, shareReplay } from "rxjs";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  isMenuOpen = true;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closesidenav() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    this.isMenuOpen = true; // Open side menu by default
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
