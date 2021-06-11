<template>
<div class="overlay">
    <div class="popup d-flex flex-direction-col">
            <div class="exit-btn" @click="$store.commit('changeDialogState')"></div>
        <div class="content text-left">
            <h4 class="p-24">{{title}}</h4>
            <p class="pb-24 pl-24">{{message}}</p>
        </div>
        <div class="button-group d-flex flex-1 align-center justify-end">
            <button class="btn-secondary d-flex align-center justify-center mr-16" @click="$store.commit('changeDialogState')" >{{button1}}</button>
            <button class="btn-primary d-flex align-center justify-center"  @click="$store.commit('changeDialogState'), $store.commit('changeFormState')">{{button2}}</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "DeleteDialog",
    props:{
        title:{
            type: String,
            required: true
        },
        message:{
            type: String,
            required: true
        },
        button1:{
            type: String,
            required: false
        },
        button2:{
            type:String,
            required: false
        },

    },
    methods:{
       
    }
}
</script>

<style scoped>
.btn-primary{
    background-color: #F65454;
    color: #ffffff;
}

.btn-primary, .btn-secondary, .btn-error{
    height: 40px;
    border-radius: 4px;
    min-width: 100px;
}
.btn-primary:hover{
    background-color: #2FBE8E;
}

.btn-secondary:hover{
    background-color: #bbbbbb;

}
.button-group {
    padding: 0 16px;
    background-color: #e9ebee;
}
.exit-btn:hover{
    background-color: #bbbbbb;
}
.exit-btn{
    width: 30px;
    height: 30px;
    background-image: url("../assets/icon/x.svg");
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    right: 0;
}
.popup{
    background-color:#ffffff;
    position: fixed;
    height: 200px;
    width: 400px;
    top: 400px;
    left: 760px;
    z-index: 1;
    border-radius: 5px;
    font-family: "GoogleSans-Regular";
    color: #000000;
} 

.overlay{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
}
</style>