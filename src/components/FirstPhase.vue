<template>
    <div>
        <center>
            <v-container align="center">
                <v-card
                        class="mx-auto my-12"
                        max-width="374"
                        align="center"
                >
                    <v-img
                            height="250"
                            width="500"
                            contain="true"
                            src="https://firebasestorage.googleapis.com/v0/b/family-tree-ngonge.appspot.com/o/Idd%20Gonyodde%2Fuser-placeholder.jpg?alt=media&token=efd3e96e-0494-4049-8b19-030978397b4e"
                    ></v-img>
                    <v-card-title><i> <b>Iddi Ganyodde</b></i>  </v-card-title>
                </v-card>
            </v-container>
        </center>
        <center>
            <v-img
            src="../assets/arrow.png"
            height="50"
            width="50"
            />
        </center>

        <center>
            <v-text-field/>
            <h2 style="color: purple">WIFE/WIVES</h2>
        </center>
        <center>
            <v-container fill-height align="center">
                <v-row>
                    <v-col cols="12">
                        <v-row
                                :align="center"
                                :justify="center"
                                class="grey lighten-5 mx-10 my-10"
                                style="height: 300px;"
                        >
                            <v-card
                                    v-for="(n , i) in allData"
                                    :key="n"
                                    outlined
                                    style="margin: 10px; align-items: center"
                                    tile
                                    elevation="30"
                                    v-on:click="routeToNextPage($event,i, n)"
                            >
                                <v-img
                                        height="250"
                                        width="500"
                                        contain="true"
                                       :src="n.photo"
                                ></v-img>
                                <v-card-title> <b>{{n.Name}}</b></v-card-title>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </center>

    </div>
</template>

<script>

    import {db} from '../firebase/db'
    import router from "../router";

    let familyRoot = db.ref('/Wives/');

    export default {
        data() {
            return {
                allData: [],
            }
        },
        firebase: {
            allData: familyRoot
        },
        methods: {
            routeToNextPage: function (ev, i, n) {
                if (n.Thread === 'Yes') {
                    let numberForEachPerson = i + 1;
                    let idForEachPerson = '00' + numberForEachPerson;
                    router.push({
                        name: 'Children',
                        params: {
                            name: n.Name,
                            number: idForEachPerson,
                            photo:'hey',
                            path : familyRoot.ref.toString(),
                            husbandName:'Iddi Gonyodde',
                            wifeName:n.Name,
                        }
                    }).catch(err=>{
                        // eslint-disable-next-line no-console
                        console.log(err)
                    })
                }
            }
        },
    }
</script>

<style scoped>

</style>