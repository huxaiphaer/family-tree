<template>
    <div>
        <v-container align="center">
            <v-card
                    align="center"
                    class="mx-auto my-12"
                    max-width="374"
            >
                <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <v-card-title>{{name}}</v-card-title>
            </v-card>
        </v-container>
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
                                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                            ></v-img>
                            <v-card-title><b>{{n.Name}}</b></v-card-title>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {db} from "../../firebase/db";
    import router from "../../router";

    export default {
        name: "ThirdPhaseWives",
        props: ['name', 'photo', 'number'],
        data() {
            return {
                allData: {},
            }
        },
        mounted() {
            // eslint-disable-next-line no-console
            this.$rtdbBind('allData', db.ref('/Wives/001/Children/005/wives/001/Children/' + this.number + '/wives'))
        },
        methods: {
            navigateToNextPage(ev, i, n) {

                if (n.c.toString().trim() === 'Yes') {

                    router.push({
                        name: 'ThirdPhaseChildren', params:
                            {
                                name: n.Name,
                                photo: 'null',
                                number: i
                            }
                    })
                } else if (n.w.toString().trim() === 'Yes') {
                    // eslint-disable-next-line no-console
                    let compute = i + 1;
                    let eachPersonNumber = '00' + compute;
                    router.push({
                        name: 'ThirdPhaseWives', params:
                            {
                                name: n.Name,
                                photo: 'null',
                                number: eachPersonNumber
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