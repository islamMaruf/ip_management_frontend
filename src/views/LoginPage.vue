<template>
    <div class="container" style="min-height: 100vh; position: relative;">
        <div class="row">
            <div class="col-sm-12" style="position: absolute; top: 50%; transform: translateY(-50%);">
                <Card title="Login">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <Button>Login</Button>
                    </form>
                </Card>
            </div>
        </div>
    </div>
</template>
  
<script>
import Card from "../components/core/Card.vue"
import Button from "../components/core/Button.vue"
export default {
    name: 'LoginPage',
    components: {
        Card,
        Button
    }
}
</script>
  
<style scoped>
</style>
  