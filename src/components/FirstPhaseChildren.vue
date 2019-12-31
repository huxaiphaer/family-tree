<!--suppress BadExpressionStatementJS -->
<template>
    <div class="ma-1">
        <v-container  >
            <v-spacer/>
            <v-row>
                <v-col cols="12">
                    <v-row
                            :align="center"
                            :justify="center"
                            class="grey lighten-5"
                            style="height: 300px;"
                    >

                        <v-card
                                v-for="(n, i) in allData"
                                :key="n"
                                max-width="500"
                                style="margin: 10px;"
                                v-on:click="navigateToNextPage($event, i, n)"
                        >
                            <v-img
                                    height="250"
                                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                            ></v-img>
                            <v-card-title> {{n.Name}}</v-card-title>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>
            <v-spacer/>
        </v-container>
        <v-snackbar
                v-model="snackbar"
        >
            No Thread Yet.
            <v-btn
                    color="pink"
                    text
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>

    import {db} from "../firebase/db";
    import router from "../router";

    export default {
        name: "Children",
        props: ['name', 'path', 'number'],
        data() {
            return {
                allData: [],
            }
        },
        mounted() {
            // eslint-disable-next-line no-console
            this.$rtdbBind('allData', db.ref(this.path + '/Children'))
        },
        navigateToNextPage(ev, i, n){

            if(n.Thread ===' Yes' && n.Children === 'Yes'){
                router.push({name: 'Children'})
            }
            else if(n.Thread === 'Yes' && n.Wives ==='Yes'){
                // eslint-disable-next-line no-console
                console.log('')
            }
            else{
                // eslint-disable-next-line no-console
                console.log('No thread yet')
            }
        },
    }
</script>


<style scoped>

    .space{
        margin: 20px;
    }
</style>