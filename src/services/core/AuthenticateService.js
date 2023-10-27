import AuthService from "../api/AuthService"
import CookieService from "./CookieService"


const userIsAuthenticate = () => {
    return CookieService.getCookie('token')
}
const setAuthenticateUser = () => {
    return AuthService.getLoggedInUser().then(response => {
        console.log(response)
        this.$store.commit('setAuthenticateUser', response.data);
    });
}
const getAuthenticateUserName = () => {
    let user_name = this.$store.state.authenticate_user.name;
    if (!user_name) {
        this.setAuthenticateUser();
    }
    return this.$store.state.authenticate_user.name;

}
export { userIsAuthenticate, setAuthenticateUser, getAuthenticateUserName }