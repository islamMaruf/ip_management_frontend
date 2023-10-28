import CookieService from "./CookieService"

const userIsAuthenticate = () => {
    return CookieService.getCookie('token')
}

export { userIsAuthenticate }