<template>
    <div class="form">
        <v-alert type="success" v-if="created">
            Zadanie zostało dodane.
        </v-alert>
        <router-link to="/" class="">
            <v-icon>mdi-arrow-left</v-icon>
            powrót do strony głównej
        </router-link>
        <div v-if="!created">
            <v-row>
                <v-col cols="3" class="mx-auto">
                    <h2>Dodaj zadanie</h2>
                </v-col>
            </v-row>
            <v-row>

                <v-col cols="3" class="mx-auto">
                    <v-form class="add-form">

                        <v-text-field class=""
                                      v-model="title"
                                      label="Task name"
                                      required
                        ></v-text-field>
                        <v-btn class="mr-4" v-on:click.prevent="addTask">submit</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </div>

    </div>
</template>

<script>


    export default {
        components: {},
        data: () => ({
            userId: '1',
            title: '',
            completed: false,
            created: false
        }),
        methods: {
            addTask: function () {
                this.$http
                    .post('https://jsonplaceholder.typicode.com/todos/', {
                        userId: this.userId,
                        title: this.title,
                        completed: this.complete
                    })
                this.created = true
            },

        }
    };
</script>
<style lang="scss" scoped>
    .v-application {
        a {
            text-decoration: none;
            color: #222
        }
    }
</style>