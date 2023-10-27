<template>
    <div>
        <Navbar>
            <div>
                <Button type="danger">Logout</Button>
            </div>
        </Navbar>
        <div class="container mt-5">
            <Card title="IP Management">
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Card>
        </div>
        
    </div>
</template>

<script>
import Card from "../components/core/Card.vue";
import Navbar from "../components/Navbar.vue"
import Button from '../components/core/Button.vue';
import Table from "../components/core/Table.vue";

export default {
    name: "DashboardPage",
    components: {
        Navbar,
        Button,
        Card,
        Table
    }

}
</script>

<style scoped></style>