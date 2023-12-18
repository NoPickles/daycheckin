
<template>
  
<div>
    <h1 class="text-center">Check List</h1>
    <div class="center">
        {{ new Date().toLocaleString().slice(0, 9) }}
    </div>

    <form @submit.prevent="handleSubmit">
        <div>
            <input type="checkbox" v-model="code">
            <label> Code </label>
        </div>
        <div>
            <input type="checkbox" v-model="check">
            <label> Gym</label>
        </div>
        <button>Submit</button>
    </form>
</div>

</template>

<script>
import { toHandlers } from 'vue';

import axios from 'axios';

export default {
    mounted(){
    },
    data() {
        return {
        date: null,
        check: false,
        code: false,
        data: ''
        };
    },
    beforeMount(){
        this.getData(); 
    },
    methods: {
        handleSubmit(){

            let that = this

            axios({
                method: 'post',
                url: 'http://localhost:3000/user',
                data: {
                    code: that.code,
                    gym: that.check,
                    date: new Date().toLocaleString().slice(0, 9)
                }
            })
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            });
        },
        async getData(){

            try {
                const response = await axios.get('http://localhost:3000/user', {responseType: 'json'})
                let dat = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    }
};


</script>

<style>

link {
  margin: 100px;
  font-size: large;
}

</style>