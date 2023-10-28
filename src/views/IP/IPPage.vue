<template>
    <div class="row">
        <div class="col-sm-12 mb-2">
            <Button type="info" @click="goToCreateIpPage">New</Button>
        </div>
        <div class="col-sm-12 mt-1">
            <Table :headers="tableHeaders">
                <tr v-for="(ip, key) in ips" :key="ip.id">
                    <td>{{ key + 1 }}</td>
                    <td>{{ ip.ip }}</td>
                    <td>
                        <SmallText>{{ ip.comment }}</SmallText>
                    </td>
                    <td>
                        <Button type="warning" :sm="true" @click="goToSpecificIp(ip.id)">Edit</Button> 
                    </td>
                </tr>
            </Table>
        </div>
    </div>
</template>

<script>
import IPService from "@/services/api/IPService"
import Table from "@/components/core/Table.vue";
import Button from '@/components/core/Button.vue';
import SmallText from '@/components/core/SmallText.vue';


export default {
    name: 'IPPage',
    components: {
        Table,
        Button,
        SmallText
    },
    data() {
        return {
            ips: [],
            tableHeaders: ['SL', 'IP', 'Comment', 'Action']

        }
    },
    methods: {
        async fetchIPList() {
            try {
                let data = await IPService.all();
                this.ips = data.data
            } catch (error) {
                this.ips = []
            }

        },
        goToSpecificIp(ipId) {
            this.$router.push({
                name: "EditIP",
                params: { id: ipId }
            })
        },
        goToCreateIpPage() {
            this.$router.push({
                name: 'CreateIP'
            })
        }
    },
    mounted() {
        this.fetchIPList()

    }
}
</script>

<style scoped></style>