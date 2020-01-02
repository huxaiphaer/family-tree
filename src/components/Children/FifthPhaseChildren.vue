<template>
    <v-container fill-height>
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
                            :key="n"
                            max-width="500"
                            style="margin: 10px;"
                            v-for="(n, i) in allData"
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
        <v-spacer/>
        <v-snackbar
                v-model="snackbar"
        >
            No Thread Yet.
            <v-btn
                    @click="snackbar = false"
                    color="pink"
                    text
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
    import {db} from "../../firebase/db";
    import router from "../../router";

    let export_path = ''

    export default {
        name: "FifthPhaseChildren",
        props: ['name', 'path', 'number'],
        data() {
            return {
                allData: [],
            }
        },
        mounted() {

            this.$rtdbBind('allData', db.ref(this.path))
            export_path = this.path;
        },
        methods: {
            navigateToNextPage(ev, i, n) {

                let formatPath = db.ref(export_path).ref.toString().substr(41)

                if (n.c.toString().trim() === 'Yes') {
                    let compute = i + 1;
                    let eachPersonNumber = '00' + compute;
                    router.push({
                        name: 'SixthPhaseChildren', params:
                            {
                                name: n.Name,
                                photo: '',
                                number: formatPath + '/' + eachPersonNumber + '/Children',
                            }
                    })
                } else if (n.w.toString().trim() === 'Yes') {
                    // eslint-disable-next-line no-console
                    let compute = i + 1;
                    let eachPersonNumber = '00' + compute;
                    router.push({
                        name: 'SixthPhaseWives',
                        params:
                            {
                                name: n.Name,
                                photo: '',
                                number: formatPath + '/' + eachPersonNumber + '/wives'
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