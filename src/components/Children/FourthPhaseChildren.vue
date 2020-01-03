<template>
    <v-container fill-height>
        <v-spacer/>
        <center>
            <h1> <span class="husbandText">{{husbandName}}</span>  <span class="uppersand">&</span> <span class="wifeText">{{wifeName}}</span>  <span class="childrenText">Children</span></h1>
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
                            <v-card-title><b>{{n.Name}}</b></v-card-title>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>
        </center>

        <v-spacer/>
    </v-container>
</template>

<script>
    import {db} from "../../firebase/db";
    import router from "../../router";

    export default {
        name: "FourthPhaseChildren",
        props: ['name', 'path', 'number','husbandName','wifeName'],
        data() {
            return {
                allData: [],
            }
        },
        mounted() {

            this.$rtdbBind('allData', db.ref(this.path))
        },
        methods:{
            navigateToNextPage(ev, i, n){

                if(n.c.toString().trim() === 'Yes'){
                    let compute = i + 1;
                    let eachPersonNumber = '00' + compute;
                    router.push({name: 'SecondPhaseChildren', params:
                            {
                                name: n.Name,
                                photo:'null',
                                number: eachPersonNumber
                            }})
                }
                else if(n.w.toString().trim() ==='Yes'){
                    // eslint-disable-next-line no-console
                    let compute = i + 1;
                    let eachPersonNumber = '00' + compute;
                    router.push({name:'FourthPhaseWives',
                        params:{
                            name: n.Name,
                            photo:'null',
                            number: eachPersonNumber}
                    })
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
    .space {
        margin: 20px;
    }
    .childrenText{
        color: purple;
    }
    .wifeText{
        color: crimson;
    }

    .husbandText{
        color: blueviolet;
    }

    .uppersand{
        color: chocolate;
    }
</style>