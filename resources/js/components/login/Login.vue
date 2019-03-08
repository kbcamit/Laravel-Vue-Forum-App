<template>
    <v-container>
        <v-form @submit.prevent="login">
            <v-text-field
                v-model="form.email"
                label="E-mail"
                required
                type="email"
            ></v-text-field>
            <v-text-field
                v-model="form.password"
                label="Password"
                required
                type="password"
            ></v-text-field>

            <v-btn type="submit">Submit</v-btn>

            <router-link to="/signup">
                <v-btn flat>Sign Up</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
        created() {
            if (User.loggedIn()) {
                this.$router.push({name: 'forum'})
            }
        },
        methods: {
            login() {
                User.login(this.form)
            }
        }
    }
</script>
