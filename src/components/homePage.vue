<template>
    <div class="home-page">
        <v-row class="justify-center">
            <v-col cols="3">
                <router-link to="/add">
                    <v-card class="lime lighten-2 pa-7">
                        <v-card-text class="display-1 text-center">
                        Dodaj zadanie
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-col>

            <v-col cols="3">
                <router-link to="/list">
                    <v-card class="lime lighten-2 pa-7">
                        <v-card-text class="display-1 text-center">
                        Lista zadań
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>


    </div>
</template>

<script>

    export default {
        components: {

        },
        data: () => ({
            //
        }),
    };
</script>
<style lang="scss" scoped>
    a {  text-decoration: none;}
</style>