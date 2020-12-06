import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
// import { slideInAnimation } from 'src/core/animations';

@Component({
  selector: 'app-outlet-router',
  templateUrl: './outlet-router.component.html',
  styleUrls: ['./outlet-router.component.less'],
  // animations: [slideInAnimation]
})
export class OutletRouterComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  // getAnimationData(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  //   // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['routeAnimation']
  // }
  openPopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: ['compose',{foo:'foo'}] }}],
    // { relativeTo: this.activatedRoute}
    );
  }

}
