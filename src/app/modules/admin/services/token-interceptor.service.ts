import { Injectable , Injector} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  

  constructor(private injector:Injector, private auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  // let authService= this.injector.get(AuthenticationService);
   
    const authReq = req.clone({ setHeaders: { Authorization:  `Bearer ${this.auth.getToken()}` } });
      return next.handle(authReq);

      
   

    
  }
}
