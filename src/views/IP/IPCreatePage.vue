<template>
    <form>
        <div class="form-group">
            <label>IP Address</label>
            <input name="ip" v-model="input.ip" class="form-control" :class="{ 'is-invalid': errors.has('ip') }"
                v-validate="'required|ip'" placeholder="Enter Ip address" />
            <ErrorText v-show="errors.has('ip')">{{ errors.first("ip") }}</ErrorText>
        </div>
        <div class="form-group">
            <label>Comment</label>
            <input name="comment" v-model="input.comment" v-validate="'required'" type="text" class="form-control"
                :class="{ 'is-invalid': errors.has('comment') }" id="password" placeholder="Comment" />
            <ErrorText v-show="errors.has('comment')">{{ errors.first("comment") }}</ErrorText>
        </div>
        <div class="error-message" v-if="has_error">{{ error_message }}</div>

        <Button :is-submit="true" :is-disable="is_submit" @submit="createIP">Create</Button>
    </form>
</template>

<script>
import Button from "@/components/core/Button.vue"
import ErrorText from "@/components/core/ErrorText.vue"
import IPService from "@/services/api/IPService"

export default {
    name: 'IPCreatePage',
    components: {
        Button,
        ErrorText
    },
    data() {
        return {
            input: {
                ip: "",
                comment: ""
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
            this.input.ip = "";
            this.input.comment = "";
        },
        createIP() {
            this.$validator.validateAll().then((validate) => {
                if (validate) {
                    this.has_error = false;
                    this.isSubmit = true;
                    IPService.createIP(this.input).then(response => {
                        let response_status = response.success;
                        if (response_status && response.code == 201 ) {
                            this.$router.push({ name: 'Dashboard' });
                            this.resetForm()
                            this.is_submit = false
                        }
                    }).catch(error => {
                        let error_response = error.response
                        if (error_response && error_response.status == 422) {
                            this.$addLaravelErrors(error_response)
                        } else if (error_response && error_response.status == 401) {
                            this.has_error = true;
                            this.error_message = 'Unauthorized to perform this action';
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

<style scoped></style>