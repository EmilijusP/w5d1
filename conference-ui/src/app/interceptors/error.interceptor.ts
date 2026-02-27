import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Unexpected error occurred';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Server error Code: ${error.status}, Message: ${error.message}`;
      }

      console.error('--- HTTP Interceptor caught an error ---');
      console.error(errorMessage);

      return throwError(() => new Error(errorMessage));
    })
  );
};