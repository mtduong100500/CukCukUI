<template>
  <div class="d-flex justify-between header regular f-13">
    <div class="select-wrapper">
        <CustomSelect 
            :options="['Nhà hàng biển Đông', 'Nhà hàng biển Tây', 'Nhà hàng biển Nam', 'Nhà hàng biển Bắc']"
            :default="'Nhà hàng biển Đông'"
            class="select ml-16 mt-12 mb-12 mr-10"
        />
    </div>
    <div class="info d-flex justify-center align-center">
        <div class="avatar mr-16"><img src="../assets/icon/avatar-default.png" class="w-full"></div>
        <div class="account-name mr-16">Mai Thái Dương</div>
        <div class="option mr-16"></div>
    </div>
  </div>
</template>

<script>
import CustomSelect from './CustomSelect.vue';

export default {
  name: "Header",
  components:{
      CustomSelect
  }
};
</script>

<style scoped>
.select-wrapper{
    width: 213px;
}

.avatar{
    width: 36px;
}
.option{
    background-image: url('../assets/icon/option.png');
    background-repeat: no-repeat;
    background-position: center;
    width: 30px;
    height: 30px;
}
.option:hover{
    cursor: pointer;
}
.header{
    border-bottom: 1px solid #bbbbbb;
    font-family: "GoogleSans-Medium";
}
</style>