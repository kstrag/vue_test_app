<template>
    <div class="mx-auto task-list">
        <v-alert type="error" v-if="removed">
           Zadanie zostało pomyślnie usunięte
            <v-icon class="pos-right" v-on:click="closeAlert">mdi-close</v-icon>
        </v-alert>
        <router-link to="/" class="">
            <v-icon>mdi-arrow-left</v-icon>
            powrót do strony głównej
        </router-link>
        <v-row>
            <v-col cols="12">
                <h2>Lista zadań</h2>

            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(task, index) in tasks" v-bind:key="index" cols="6">
                <v-card>
                    <v-card-text>
                        <h3 class="mb-3">Nazwa zadania: {{task.title}}</h3>
                        <p class="mb-0"><strong>Numer zadania: </strong> {{index + 1}}</p>
                        <p><strong>Zadanie zostało ukończone:</strong> {{task.completed}}</p>
                        <v-btn color="error" large v-on:click="removeTask(task, index)">
                           Usuń zadanie
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </div>
</template>

<script>

    export default {
        components: {},
        data: () => ({
            tasks: null,
            removed: false
        }),
        created() {
            this.$http
                .get('https://jsonplaceholder.typicode.com/todos?_start=192&_limit=15')
                .then(response => (this.tasks = response.data))
        },
        methods: {
            removeTask: function (tasks, id) {
                this.$http
                    .delete('https://jsonplaceholder.typicode.com/todos/' + id)
                    .then(() => this.tasks.splice(id, 1));

                this.removed = true;
            },
            closeAlert: function () {
                this.removed = false
            }
        }
    };
</script>
<style lang="scss" scoped>
.pos-right{
    position: absolute;
    right: 15px;
    cursor: pointer;
}

.v-application {
    a {
        text-decoration: none;
        color: #222
    }
}

</style>