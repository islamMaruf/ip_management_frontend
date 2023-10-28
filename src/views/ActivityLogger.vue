<template>
    <div class="row">
        <div class="col-sm-6">
            <Button :sm="true" type="primary" @click="goBack">Back</Button>
        </div>
        <div class="col-sm-12 mt-2">
            <Table :sm="true" :responsive="true" :headers="tableHeaders">
                <tr v-for="(activity, key) in activities" :key="activity.id">
                    <td>
                        <SmallText>{{ key + 1 }}</SmallText>
                    </td>
                    <td>
                        <SmallText>{{ activity.description }}</SmallText>
                    </td>
                    <td>
                        <SmallText>{{ activity.userType }}</SmallText>
                    </td>
                    <td>
                        <SmallText>{{ activity.userId }}</SmallText>
                    </td>
                    <td>
                        <SmallText>{{ activity.route }}</SmallText>
                    </td>
                    <td>
                        <SmallText>{{ activity.ipAddress }}</SmallText>
                    </td>
                    <td>
                        <SmallText>{{ activity.userAgent }}</SmallText>
                    </td>
                    <td>
                        <SmallText>{{ activity.referer }}</SmallText>
                    </td>
                    <td>
                        <SmallText>{{ activity.methodType }}</SmallText>
                    </td>
                    <td>
                        <SmallText>{{ activity.payload }}</SmallText>
                    </td>
                </tr>
            </Table>
        </div>
    </div>
</template>

<script>
import ActivityLoggerService from "@/services/api/ActivityLoggerService"
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
            activities: [],
            tableHeaders: ['SL', 'Description', 'Type', 'Id', 'Route', 'IP', 'Agent', 'Referer', 'Method', 'Payload']

        }
    },
    methods: {
        async fetchActivities() {
            try {
                let data = await ActivityLoggerService.all();
                console.log(data)
                this.activities = data.data
            } catch (error) {
                this.activities = []
            }

        },
        goBack() {
            this.$router.push({
                name: "Dashboard"
            }).catch(console.error)
        }

    },
    mounted() {
        this.fetchActivities()

    }
}
</script>

<style scoped></style>