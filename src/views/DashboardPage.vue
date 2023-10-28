<template>
    <div>
        <Navbar>
            <div>
                <Button @click="logout" type="danger">Logout</Button>
            </div>
        </Navbar>
        <div class="container mt-5">
            <Card title="IP Management">
                <template v-slot:header>
                    <div class="col-sm-6">
                        <Button style="float: right;" :sm="true" type="info" @click="goToActivityLoggerPage">Activity Logger</Button>
                    </div>
                </template>
                <div class="row">
                    <div class="col-sm-12">
                        <router-view></router-view>
                    </div>
                </div>

            </Card>
        </div>

    </div>
</template>

<script>
import Card from "@/components/core/Card.vue";
import Navbar from "@/components/Navbar.vue"
import Button from '@/components/core/Button.vue';
import AuthService from '@/services/api/AuthService'


export default {
    name: "DashboardPage",
    components: {
        Navbar,
        Button,
        Card
    },
    methods: {
        logout() {
            AuthService.logout().then(response => {
                if (response.status == 200 && response.data.success) {
                    this.$cookieService.deleteCookie('token')
                    this.$router.push({ name: 'Login' }).catch(console.error)
                }
            }).catch(console.error)

        },
        goToActivityLoggerPage() {
            this.$router.push({
                name: 'activityLogger'
            }).catch(console.error)
        }
    }

}
</script>

<style scoped></style>