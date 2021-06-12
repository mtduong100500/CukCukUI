<template>
  <!--
    Custom Select với chức năng filter
    CreatedBy MTDUONG (12/06/2021)
  -->
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <!--
      ô in input để lọc dữ liệu
      CreatedBy MTDUONG (12/06/2021)
    -->
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <input type="text" class="input-field" v-model="option" autocomplete="off" @input="filterItem" >
    </div>
    <!--
      Hiển thị tất cả dữ liệu có sẵn
      CreatedBy MTDUONG (12/06/2021)
    -->
    <div v-if="filteredItems.length < 1" class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          setValue(option)
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
    <!--
      Hiển thị dữ liệu đã được filter
      CreatedBy MTDUONG (12/06/2021)
    -->
    <div v-if="filteredItems" class="filter-select" :class="{ selectHide: !open }">
      <div
        class=""
        v-for="(filteredItem,index) in filteredItems"
        :key="index"
        @click="
        open = false;
        setValue(filteredItem)"
      >
        {{filteredItem}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      option:'',
      filteredItems:[],
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
  methods:{
    // Lọc dữ liệu
    // CreatedBy MTDUONG (12/05/2021)
    filterItem(){
      this.filteredItems = this.options.filter(option => {
          return option.toLowerCase().startsWith(this.option.toLowerCase())
      })
    },

    // Hiển thị value khi chọn
    // CreatedBy MTDUONG (12/05/2021)
    setValue(option){
      this.option = option
    }
  }
};
</script>

<style>

.filter-select{
  color: #000000;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #BBBBBB;
  border-left: 1px solid #BBBBBB;
  position: absolute;
  background-color: #ffffff;
  z-index: 1;
  width: 213px;  
  cursor: pointer;
}
.filter-select div{
  padding-left: 16px;
}
.filter-select div:hover{
  background-color: #E9EBEE;
}
.input-field{
  position: relative;
  text-align: left;
  outline: none;
  border: none;
  
}
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 40px;
  line-height: 40px;
}

.custom-select .selected {
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #BBBBBB;
  color: #000000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #BBBBBB;
  border-radius: 4px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 18px;
  right: 1em;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: #000000 transparent  transparent transparent;
}

.custom-select .items {
  color: #000000;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #BBBBBB;
  border-left: 1px solid #BBBBBB;
  border-bottom: 1px solid #BBBBBB;
  position: absolute;
  background-color: #ffffff;
  width: 213px;  
  z-index: 1;
}

.custom-select .items div {
  color: #000000;
  padding-left: 16px;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #E9EBEE;
}

.selectHide {
  display: none;
}
</style>