<!--suppress BadExpressionStatementJS -->
<template>
        <v-container  fill-height>
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
                            <v-card-title> <b>{{n.Name}}</b> </v-card-title>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>
            <v-spacer/>
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
        </v-container>
</template>

<script>

    import {db} from "../../firebase/db";
    import router from "../../router";

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
            this.$rtdbBind('allData', db.ref('/Wives/'+this.number + '/Children'))
        },
        methods:{
            navigateToNextPage(ev, i, n){

                if(n.Thread ===' Yes' && n.c === 'Yes'){
                    router.push({name: 'SecondPhaseChildren'})
                }
                else if(n.Thread === 'Yes' && n.w ==='Yes'){
                    // eslint-disable-next-line no-console
                    console.log('')
                }
                else{
                    // eslint-disable-next-line no-console
                    this.$noty.success("Sorry, this person has no thread yet.")
                }
            },
        }
    }


</script>

<style scoped>

    .space{
        margin: 20px;
    }
</style>