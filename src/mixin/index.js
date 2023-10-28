import AuthService from "../services/api/AuthService";

export default {
    data() {
        return {
        }
    },
    methods: {
        setAuthenticateUser: function () {
            return AuthService.getLoggedInUser().then(response => {
                this.$store.commit('setAuthenticateUser', response.data.data );
            }).catch(console.error);
        },

        getAuthenticateUserName: function () {
            let authenticate_user_name = this.$store.state.authenticate_user.name;
            if (!authenticate_user_name) {
                 this.setAuthenticateUser();
            }
            return this.$store.state.authenticate_user.name;
        }
    }
}
