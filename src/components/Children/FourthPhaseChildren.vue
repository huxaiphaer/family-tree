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
        name: "FourthPhaseChildren",
        props: ['name', 'path', 'number'],
        data() {
            return {
                allData: [],
            }
        },
        mounted() {

            let path = 'Wives/001/Children/005/wives/001/Children/003/wives/'+this.number+'/Children';

            // eslint-disable-next-line no-console
            console.log('-->' + this.number)
            this.$rtdbBind('allData', db.ref(''+path))
        },
        methods:{
            navigateToNextPage(ev, i, n){

                if(n.c.toString().trim() === 'Yes'){
                    let compute = i + 1;
                    let eachPersonNumber = '00' + compute;
                    router.push({name: 'SecondPhaseChildren', params:{name: n.Name, photo:'', number: eachPersonNumber}})
                }
                else if(n.w.toString().trim() ==='Yes'){
                    // eslint-disable-next-line no-console
                    let compute = i + 1;
                    let eachPersonNumber = '00' + compute;
                    router.push({name:'FourthPhaseWives', params:{name: n.Name, photo:'', number: eachPersonNumber}})
                }
                else{
                    // eslint-disable-next-line no-console
                    this.$noty.error("Sorry, this person has no thread yet.")
                }
            },
        }
    }
</script>

<style scoped>

</style>