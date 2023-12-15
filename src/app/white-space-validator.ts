import { AbstractControl } from '@angular/forms';

export function WhiteSpaceValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (control.value && /\s/.test(control.value)) {
    return { hasWhitespace: true };
  }
  return null;
}