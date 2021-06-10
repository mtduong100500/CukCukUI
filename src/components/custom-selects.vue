<template>
  <div>
      <input v-model="gender" autocomplete="off" @input="filterGender">
      <div v-if="filteredGenders" class="lists">
          <ul >
              <li v-for="(filteredGender,index) in filteredGenders"
                :key="index"
                @click="setGender(filteredGender)"
                class="list-item"
              >
              {{filteredGender}}
              </li>
          </ul>
      </div>
  </div>
</template>


<script>
export default {
    name: "CustomSelects",
    data(){
        return{
            gender: '',
            genders:[
                'Nam', 'Nu', 'Khac'
            ],
            filteredGenders:[],
        }
    },
    methods:{
        filterGender(){
            this.filteredGenders = this.genders.filter(gender => {
                return gender.toLowerCase().startsWith(this.gender.toLowerCase())
            })
        },
        setGender(gender){
            this.gender = gender
        }
    }
}
</script>

<style scoped>
.lists{
    width: 48px;
    height: 40px;
    background-color: #ffffff;
    color: white;
}
.list-item{
    padding: 3px;
    border: 1px solid;
    cursor: pointer;
}
</style>


