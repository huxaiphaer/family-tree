<template>

    <div>
        <v-container>
            <v-card
                    class="mx-auto my-12"
                    max-width="374"
                    align="center"
            >
                <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <v-card-title>Name Iddi Ganyodde</v-card-title>
            </v-card>
        </v-container>
        <v-container fill-height>
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
                                class="ma-1"
                                outlined
                                tile
                                elevation="30"
                                v-on:click="routeToNextPage($event,i, n)"
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
        </v-container>
    </div>
</template>

<script>

    import {db} from '../firebase/db'
    import router from "../router";

    let familyRoot = db.ref('001/Wives/');

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
                    let numberForEachPerson = i + 2;
                    let idForEachPerson = '00' + numberForEachPerson;
                    router.push({
                        name: 'Children',
                        params: {name: n.Name, path: '001/'+db.ref('001/Wives').key  + '/'+ idForEachPerson , number: numberForEachPerson}
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>