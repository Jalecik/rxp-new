import { environment } from '../configs/app.config';

export const getToken = (): string | null => {
    return typeof window !== "undefined" ? 
    localStorage.getItem(`${environment.applicationName}-token`) : null;
};

// export const setToken = (token: string) => {
//     localStorage.setItem(`${environment.applicationName}-token`, token);
// };

// export const removeToken = () => {
//     localStorage.removeItem(`${environment.applicationName}-token`);
// };

export const getBaseUrl = (): string | null => {
    return typeof window !== "undefined"? 
     localStorage.getItem(`sima-access-base-url`) : '';
};