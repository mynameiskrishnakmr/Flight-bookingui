import { Injectable , Injector} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  

  constructor(private injector:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authService= this.injector.get(AuthenticationService);
    if(authService.getToken()!=null){
      let  tokenReqHeader = req.clone({
         setHeaders: {
           Authorization: `Bearer ${authService.getToken()}`,
        }
      });
      return next.handle(tokenReqHeader);
    }

    return next.handle(req);
  }
}
