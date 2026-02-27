import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const sessionExistsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const id = route.paramMap.get('id');

  if (!id || isNaN(Number(id))) {
    router.navigate(['/sessions']);
    return false;
  }
  return true;
};