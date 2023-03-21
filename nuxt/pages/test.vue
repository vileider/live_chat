<template>
  <div>{{data}}</div>
</template>

<script>
export default {
    data() {
        return {
            data: 'test page'
        }
    },

    async created () {
        setInterval(async()=>{
            await fetch('http://localhost:8000/test', {mode: 'cors'})
            .then(res=> res.json())
            .then(res => {
            //this.data = res
            this.data = Math.floor(Math.random() *10)
            })
            .catch(err => console.log(err))
        },1000)
        
    }

}
</script>

<style>

</style>

