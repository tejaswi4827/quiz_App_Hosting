import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private login: LoginService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        let authReq = req;
        // add the jwt token that is available in local storage
        const token = this.login.getToken();
        if (token != null) {
            authReq = authReq.clone({ setHeaders: { Authorization: `${token}` } });
        }
        return next.handle(authReq);
    }
}
export const AuthInterceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
},];