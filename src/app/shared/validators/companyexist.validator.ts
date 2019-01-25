import { AbstractControl, ValidatorFn } from '@angular/forms';

export function CompanyExist(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return typeof control.value === 'object' ? null : { 'valid': false };
    };
}

