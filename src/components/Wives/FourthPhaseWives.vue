<template>
    <div>
        <div>
            <center>
                <v-container align="center">
                    <v-card
                            align="center"
                            class="mx-auto my-12"
                            max-width="374"
                    >
                        <v-img
                                height="250"
                                width="500"
                                contain="true"
                                src="https://firebasestorage.googleapis.com/v0/b/family-tree-ngonge.appspot.com/o/Idd%20Gonyodde%2Fuser-placeholder.jpg?alt=media&token=efd3e96e-0494-4049-8b19-030978397b4e"
                        ></v-img>
                        <v-card-title><i> <b>{{name}}</b></i></v-card-title>
                    </v-card>
                </v-container>
            </center>
            <center>
                <v-img
                        height="50"
                        src="../../assets/arrow.png"
                        width="50"
                />
            </center>

            <center>
                <v-text-field/>
                <h2 style="color: purple">WIFE/WIVES</h2>
            </center>
            <center>
                <v-container align="center" fill-height>
                    <v-row>
                        <v-col cols="12">
                            <v-row
                                    :align="center"
                                    :justify="center"
                                    class="grey lighten-5 mx-10 my-10"
                                    style="height: 300px;"
                            >
                                <v-card
                                        :key="n"
                                        elevation="30"
                                        outlined
                                        style="margin: 10px; align-items: center"
                                        tile
                                        v-for="(n , i) in allData"
                                        v-on:click="navigateToNextPage($event,i, n)"
                                >
                                    <v-img
                                            height="250"
                                            width="500"
                                            contain="true"
                                            :src="n.photo"
                                    ></v-img>
                                    <v-card-title><b>{{n.Name}}</b></v-card-title>
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </center>
        </div>
    </div>
</template>

<script>
    import {db} from "../../firebase/db";
    import router from "../../router";

    let export_path = ''
    let husbandName = ''

    export default {
        name: "FourthPhaseWives",
        props: ['name', 'photo', 'number', 'path','husbandName','wifeName'],
        data() {
            return {
                allData: {},
            }
        },
        mounted() {
            this.$rtdbBind('allData', db.ref(this.path))

            export_path = this.path
            husbandName = this.name

        },
        methods: {
            navigateToNextPage(ev, i, n) {
                let formatPath = db.ref(export_path).ref.toString().substr(41)
                if (n.c.toString().trim() === 'Yes') {

                    router.push({
                        name: 'FifthPhaseChildren', params:
                            {
                                name: n.Name,
                                photo: 'null',
                                path: formatPath + '/' + i + '/Children',
                                husbandName: husbandName,
                                wifeName: n.Name,
                            }
                    })

                } else if (n.w.toString().trim() === 'Yes') {
                    // eslint-disable-next-line no-console
                    let compute = i + 1;
                    let eachPersonNumber = '00' + compute;
                    router.push({
                        name: 'FifthPhaseWives', params: {
                            name: n.Name,
                            photo: 'null',
                            path: formatPath + '/' + eachPersonNumber + '/wives'
                        }
                    })
                } else {
                    // eslint-disable-next-line no-console
                    this.$noty.error("Sorry, this person has no thread yet.")
                }
            },
        }
    }
</script>

<style scoped>

</style>