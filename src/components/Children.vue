<!--suppress BadExpressionStatementJS -->
<template>
    <div>
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
                                v-for="(n, i) in allData"
                                :key="n"
                                class="ma-1"
                                outlined
                                tile
                                elevation="30"
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
        </v-container>
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
</style>