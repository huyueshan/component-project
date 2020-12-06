import { ActivatedRoute } from '@angular/router';

export class Utils {
    static findRoute(name: string, activatedRoute: ActivatedRoute) {
        let snapshot = activatedRoute.snapshot;
        let v = snapshot.params[name] || snapshot.queryParams[name];
        while (!v) {
            snapshot = snapshot.parent;
            v = snapshot.params[name] || snapshot.params[name];
        }
        return v;
    }
}