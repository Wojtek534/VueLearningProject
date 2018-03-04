<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 mx-auto">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input v-model.lazy="userData.email" type="text" id="email" class="form-control" placeholder="Email address">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model.lazy="userData.password" type="password" id="password" class="form-control" placeholder="Passwrd">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input v-model.lazy="userData.age" type="number" id="age" class="form-control" placeholder="Age">
                    </div>
    
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 mx-auto form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea v-model="message" id="message" rows="5" class="form-control"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 mx-auto">
                    <div class="form-group">
                        <label for="sendmail">
                                            <input
                                                    type="checkbox"
                                                    id="sendmail"
                                                    value="SendMail"
                                                    v-model="sendMail"> Send Mail
                                        </label>
                        <label for="sendInfomail">
                                            <input
                                                    type="checkbox"
                                                    id="sendInfomail"
                                                    value="SendInfoMail"
                                                    v-model="sendMail"> Send Infomail
                                        </label>
                    </div>
    
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 mx-auto form-group">
                    <label for="male">
                                        <input
                                                type="radio"
                                                id="male"
                                                value="Male"
                                                v-model="gender"> Male
                                    </label>
                    <label for="female">
                                        <input
                                                type="radio"
                                                id="female"
                                                value="Female"
                                                v-model="gender"> Female
                                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 mx-auto from-group">
                    <label for="priority">Priority</label>
                    <select id="priority" class="form-control" v-model="selectedPriority">
                                        <option v-for="(item,index) in priorities" :key="index">{{item}}</option>
                                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <button @click.prevent="submited" class="btn btn-primary">Submit!
                                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div v-if="isSubmitted" class="row">
            <div class="col-xs-12 col-sm-8 col-md-6 mx-auto">
                <div class="card ">
                    <div class="card-title">
                        <h4>Your Data</h4>
                    </div>
                    <div class="card-block">
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Age: {{userData.age}}</p>
                        <p style="white-space: pre">Message: {{message}}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="(item, index) in sendMail" :key="index">{{item}}</li>
                        </ul>
                        <p>Gender: {{gender}}</p>
                        <p>Priority: {{selectedPriority}}</p>
                        <p>Switched:</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: ''
                },
                message: 'Default message',
                sendMail: [],
                gender: 'Male',
                priorities: ['high', 'medium', 'low'],
                selectedPriority: 'low',
                isSubmitted: false
            }
        },
        methods: {
            submited() {
                this.isSubmitted = true
            }
        }
    }
</script>

<style>
    
</style>
