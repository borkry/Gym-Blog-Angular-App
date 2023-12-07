import { CanActivateFn , Router} from '@angular/router';
import { UsersService } from './users.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticated = inject(UsersService).isAuthenticated();
  if (authenticated) {
    return true;
  }

  const router = inject(Router);
  return router.navigate(['/posts']);
};
