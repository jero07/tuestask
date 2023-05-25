import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit,Output,EventEmitter } from "@angular/core";
import { Observable, map, shareReplay } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output("toggle") toggle: EventEmitter<any> = new EventEmitter();
  //@Input() IsmenuOpen: boolean = false;

  OnMenuChange() {
      this.toggle.emit();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
