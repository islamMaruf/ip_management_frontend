<template>
    <div class="container" style="min-height: 100vh; position: relative;">
        <div class="row">
            <div class="col-sm-12" style="position: absolute; top: 50%; transform: translateY(-50%);">
                <Card title="Login">
                    <form>
                        <div class="form-group">
                            <label>Email address</label>
                            <input name="email" v-model="input.email" class="form-control"
                                :class="{ 'is-invalid': errors.has('email') }" v-validate="'required'"
                                placeholder="Enter email" />
                            <ErrorText v-show="errors.has('email')">{{ errors.first("email") }}</ErrorText>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input name="password" v-model="input.password" v-validate="'required'" type="password"
                                class="form-control" :class="{ 'is-invalid': errors.has('password') }" id="password"
                                placeholder="Password" />
                            <ErrorText v-show="errors.has('password')">{{ errors.first("password") }}</ErrorText>
                        </div>
                        <div class="error-message" v-if="has_error">{{ error_message }}</div>

                        <Button :is-submit="true" :is-disable="is_submit" @submit="login">Login</Button>
                    </form>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "@/components/core/Card.vue"
import Button from "@/components/core/Button.vue"
import ErrorText from "@/components/core/ErrorText.vue"
import AuthService from "@/services/api/AuthService"

export default {
    name: 'LoginPage',
    components: {
        Card,
        Button,
        ErrorText
    },
    data() {
        return {
            input: {
                email: "",
                password: ""
            },
            error_message: 'Something went wrong. Try again after some time',
            has_error: false,
            is_submit: false

        }
    },
    watch: {
        'input': {
            deep: true,
            handler() {
               this.has_error = false
            }
        },
    },
    methods: {
        resetForm() {
            this.input.email = "";
            this.input.password = "";
        },
        login() {
            this.$validator.validateAll().then((validate) => {
                if (validate) {
                    this.has_error = false;
                    this.isSubmit = true;
                    AuthService.login(this.input).then(response => {
                        let response_status = response.success;
                        let access_token = response.data.access_token;
                        if (response_status && response.code == 200 && access_token) {
                            this.$cookieService.setCookie('token', access_token, 1);
                            this.$store.commit('setAuthenticateUser', response.data.user);
                            this.$router.push({ name: 'Dashboard' }).catch(console.error);
                            this.resetForm()
                            this.is_submit = false
                        }
                    }).catch(error => {
                        let error_response = error.response
                        if (error_response && error_response.status == 422) {
                            this.$addLaravelErrors(error_response)
                        } else if (error_response && error_response.status == 401) {
                            this.has_error = true;
                            this.error_message = 'Email or Password not matched';
                            console.log(this.error_message)
                        } else {
                            this.has_error = true;
                        }
                        this.is_submit = false
                    })
                }
            });
        }
    }
}
</script>

<style scoped>
.error-message {
    display: block;
    width: 100%;
    margin: 1rem 0rem;
    font-size: 80%;
    color: #dc3545;
}
</style>