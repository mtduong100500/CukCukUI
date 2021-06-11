<template>
  <div class="form-details">
    <div class="main-form d-flex flex-direction-col">
      <div class="d-flex justify-between" >
        <div class="ml-16 mt-12 title">THÔNG TIN NHÂN VIÊN</div>
        <div class="btn-exit" @click="$store.commit('changeFormState')"></div>
      </div>
      <div class="form-container d-flex">
        <div class="avatar-upload">
          <div class="avatar-holder"></div>
          <p>(Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif)</p>
        </div>
        <div class="form-input">
          <div class="row-input d-flex text-left flex-direction-col pl-12">
              <div class="input-field">
                 <p>A. THÔNG TIN CHUNG:</p>
                <div class="horizontal-line"></div>
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Mã nhân viên<span>(*)</span></label>
              <input type="text" class="input" v-model="EmployeeCode" :class="applyInputStyle(EmployeeCode)" ref="employeeCodeInput" tabindex="0"/>
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Họ và tên(*)</label>
              <input type="text"  class="input" v-model="FullName" :class="applyInputStyle(FullName)"/>
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Ngày sinh</label> 
              <date-picker v-model="dob" :formatter="momentFormat"></date-picker>
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Giới tính</label>
              <CustomSelect 
                :options="['Nam', 'Nữ', 'Khác']"
                :default="'Nam'"
                class="customSelect"
              />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left"
                >Số CMTND/ Căn cước <span>(*)</span></label
              >
              <input type="text"  class="input" v-model="ID" :class="applyInputStyle(ID)"/>
            </div>
            <div class="input-field d-flex flex-direction-col flex-1">
              <label class="text-left">Ngày cấp</label>
              <date-picker v-model="receivedDate" :formatter="momentFormat" ></date-picker>
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Nơi cấp</label>
              <input type="text" class="input success-input" />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Email <span>(*)</span></label>
              <input type="text" placeholder="example@domain.com" class="input" v-model="email" :class="applyInputStyle(email)"/>
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Số điện thoại <span>(*)</span></label>
              <input type="text" class="input" v-model="PhoneNumber" :class="applyInputStyle(PhoneNumber)"/>
            </div>
          </div>
          <div class="row-input d-flex text-left flex-direction-col">
              <div class="input-field">
            <p>B. THÔNG TIN CÔNG VIỆC:</p>
            <div class="horizontal-line"></div>
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Vị trí</label>
              <CustomSelect 
                :options="['Giám đốc', 'Nhân viên']"
                :default="'Giám đốc'"
                class="customSelect"
              />
              
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Phòng ban</label>
              <CustomSelect 
                :options="['Phòng nhân sự', 'Phòng đào tạo']"
                :default="'Phòng nhân sự'"
                class="customSelect"
              />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Mã số thuế cá nhân</label>
              <input type="text"  class="input success-input" />
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Mức lương cơ bản</label>
              <input type="text" placeholder="(VNĐ)" class="input success-input" />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Ngày gia nhập</label>
              <date-picker v-model="enrollDate" :formatter="momentFormat"></date-picker>
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Tình trạng công việc</label>
              <CustomSelect 
                :options="['Đang làm việc', 'Đang thử việc', 'Nghỉ việc']"
                :default="'Đang làm việc'"
                class="customSelect"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="button-group d-flex flex-1 align-center justify-end">
          <button 
          class="cancel-btn d-flex align-center justify-center mr-16" 
          @click="$store.commit('changeCloseState')
                  
           ">Hủy</button>
          <button class="save-btn d-flex align-center justify-center" @click="$store.commit('changeSaveState')">Lưu</button>
      </div>
    </div>
    <CloseDialog 
    v-if="$store.state.isClose"
    title="Đóng Form thông tin chung" 
    message='Bạn có chắc muốn đóng form nhập "Thông tin chung của thủ tục 603" hay không'
    button1="Tiếp tục nhập"
    button2="Đóng"
    />

    <DeleteDialog 
    v-if="$store.state.isDelete"
    title="Xóa bản ghi A" 
    message='Bạn có chắc muốn đóng form nhập "Thông tin chung của thủ tục 603" hay không'
    button1="Hủy"
    button2="Xóa"
    />

    <SaveDialog 
    v-if="$store.state.isSave"
    title="Lưu thông tin" 
    message='Bạn có chắc muốn đóng lưu thông tin "Thông tin chung của thủ tục 603" hay không'
    button1="Không"
    button2="Đồng ý"
    />
    
  </div>
</template>

<script>
import CustomSelect from './CustomSelect.vue'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import moment from "moment";
import CloseDialog from './CloseDialog.vue'
export default {
  name: "FormDetails",
  data() {
    return {
      receivedDate: null,
      dob: null,
      enrollDate: null,
      EmployeeCode: '',
      FullName: '',
      ID: '',
      email: '',
      PhoneNumber: '',
      editedItem:[],
      momentFormat: {
      // Date to String
        stringify: (date) => {
          return date ? moment(String(date)).format("DD/MM/YYYY") : ''
        },
        //[optional]  String to Date
        parse: (value) => {
          return value ? moment(value, 'LL').toDate() : null
        },

    }
    };
  },
  components:{
    CustomSelect,
    DatePicker,
    CloseDialog
  },
  methods: {
    applyInputStyle(targetInput) { 
      // bind with one method and return Array
      if(targetInput && targetInput.length > 0){
        return ['success-input']
      }else{
        return ['error-input']
      }
    },
    focusInput() {
      this.$refs.employeeCodeInput.focus()
    }
  },
  mounted() {
    this.focusInput()
  }
};
</script>

<style>
custom-select:focus{
  outline: none;
  border: 1px solid #019160;
}
.customSelect input{
  width: 242px;
}
.error-input:focus{
  outline: none;
  border: 1px solid #F65454;
}

.success-input:focus{
  outline: none;
  border: 1px solid #019160;
}
.avatar-upload{
    padding: 24px 0 24px 24px;
}
.save-btn{
    background-color: #019160;
    color: #ffffff;
}
.save-btn, .cancel-btn{
    height: 40px;
    border-radius: 4px;
    min-width: 100px;
}
.save-btn:hover{
    background-color: #2FBE8E;
}

.cancel-btn:hover{
    background-color: #bbbbbb;

}
.button-group {
    padding: 0 24px;
  background-color: #e9ebee;
}
.horizontal-line {
  height: 4px;
  width: 70px;
  background-color: #019160;
}
.title {
  font-size: 20px;
  font-weight: 700;
}

.input {
  height: 40px;
  width: 250px;
  padding-left: 16px;
  padding-right: 8px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
}

.mx-input-wrapper{
  width: 276px;
}

.mx-input{
  height: 42px;
  font-size: 13px;
}

.input-field {
    padding: 9px;
}
.form-container {
  width: 100%;
}
.form-input {
  width: 100%;
  padding: 24px 24px 0 24px;
}
.avatar-holder {
  background-image: url("../assets/img/default-avatar.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 150px;
  height: 150px;
}
.btn-exit {
    width: 30px;
    height: 30px;
    background-image: url("../assets/icon/x.svg");
    background-repeat: no-repeat;
    background-position: center;
}
.btn-exit:hover{
    background-color: #bbbbbb;
}
.form-details {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  cursor: pointer;
}
.main-form {
  background-color: #ffffff;
  position: fixed;
  height: 820px;
  width: 800px;
  top: 46.75px;
  left: 560px;
  z-index: 2;
  border-radius: 5px;
  font-family: "GoogleSans-Regular";
  color: #000000;
}

</style>
