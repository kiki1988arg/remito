import { SpinnerService } from './shared/services/spinner.service';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { UserLoggedService } from '@shared/services/user-logged.service';

@Injectable()
export class InterceptorToken implements HttpInterceptor {

    constructor(private Spinner: SpinnerService, private ul: UserLoggedService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request to add the new header.
        const authReq = req.clone({
            setHeaders: {
                SupplierMr: this.ul.supplierMr,
                Culture: this.ul.culture,
                InternalId: this.ul.internalId
            }
        });

        this.Spinner.displayLoader(true);
        // send the newly created request
        return next.handle(authReq)
            .pipe(
                map(event => {
                    return event;
                }),
                catchError(error => {
                    return throwError(error);

                }),
                finalize(() => {
                    this.Spinner.displayLoader(false);
                })
            );
    }
}


