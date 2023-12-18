<template>
    <div>
        <div class="stages">
            <div id="leftbox"   :class="{ active: pomoActive  }">Pomodoro</div>
            <div id="middlebox" :class="{ active: breakActive }">Short Break</div>
            <div id="rightbox"  :class="{ active: longbActive }">Long Break</div>
        </div>
        <br>
        <div id="timer" >{{ timeOutput }}</div>
        <br>
        <button class="controls" @click="startCountdown">Start</button>
        <button class="controls" @click="pauseCountdown">Pause</button>

        <div id="bucket">{{ pomos }}</div>
        

    </div>
</template>

<script>
export default {
    data(){
        return {
            time: 15000,
            timeOutput: '25:00',
            studyTime: 0,
            breakTime: 0,
            stage: 'pomo',
            interval: '',
            pomos: 0,
            pomoScore: 0,
            pomoActive: false,
            breakActive: false,
            longbActive: false
        };
    },
    methods: {
        SubmitEvent(){
            this.$emit('someEvent', 1)
        },
        startCountdown(){

            console.log(this.pomoActive)

            if(this.pomoActive === false){
                this.interval = setInterval(this.myCallback, 1000, "param 1", "param 2"); 
                this.pomoActive = true;
                console.log(this.pomoActive)
            }       
        },
        myCallback(a){

            this.time= this.time - 1000;

            var days = Math.floor(this.time / (1000 * 60 * 60 * 24));
            var hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((this.time % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"

            if(minutes<10){
                minutes = '0' + minutes;
            }

            if(seconds<10){
                seconds = '0' + seconds;
            }

            this.timeOutput =  minutes + ":" + seconds;

            if(minutes === '00' & seconds === '00'){
                this.pomoScore++

                //this.pauseCountdown()

                this.setStage(this.pomoScore)
            }
            
        },
        pauseCountdown(){
            clearInterval(this.interval)
            this.pomoActive = false;
        },
        setStage(score){
            
            if (score == 9) {
                this.time = 20000
                this.breakTime = this.breakTime + this.time
                this.stage= 'longbreak'
                this.timeOutput = '15:00'
                this.pomoScore = -1
                this.pomos++
                this.breakActive = false
                this.longbActive = true


                this.SubmitEvent()
                console.log(this.stage)
                console.log(this.studyTime)
                console.log(this.pomos)


                
            } else if (score % 2 === 1){
                this.time = 5000
                this.breakTime = this.breakTime + this.time

                this.stage = 'break'
                this.timeOutput = '05:00'

                this.breakActive = true
                this.longbActive = false

                console.log(this.stage)
            } else {
                this.time = 10000
                this.studyTime = this.studyTime + this.time
                

                this.stage= 'pomo'
                this.timeOutput = '25:00'

                this.breakActive = false
                this.longbActive = false

                console.log(this.stage)
            }
        }

    }
}
</script>

<style scoped>

    .stages {
        margin: auto;
        border: 5px solid black;
        overflow: auto;
        width: 100%;
    }

    .active {
        color: red;
    }

    div {
        display: inline-block;
        margin: 10px
    }

    #timer {
        color: red;
        font-size:xx-large;
    }

    button{
        margin:  5px;
    }


</style>