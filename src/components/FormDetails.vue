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
              <input type="text" />
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Họ và tên(*)</label>
              <input type="text" />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Ngày sinh</label>
              <input type="text" />
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Giới tính</label>
              <CustomSelect 
                :options="['Nam', 'Nữ', 'Khác']"
                :default="'Nhà hàng biển Đông'"
              />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left"
                >Số CMTND/ Căn cước <span>(*)</span></label
              >
              <input type="text" />
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Ngày cấp</label>
              <input type="text" />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Nơi cấp</label>
              <input type="text" />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Email <span>(*)</span></label>
              <input type="text" placeholder="example@domain.com"/>
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Số điện thoại <span>(*)</span></label>
              <input type="text" />
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
              <input type="text" />
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Phòng ban</label>
              <input type="text" />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Mã số thuế cá nhân</label>
              <input type="text" />
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Mức lương cơ bản</label>
              <input type="text" placeholder="(VNĐ)" />
            </div>
          </div>
          <div class="row-input d-flex justify-between f-13">
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Ngày gia nhập</label>
              <input type="text" />
            </div>
            <div class="input-field d-flex flex-direction-col">
              <label class="text-left">Tình trạng công việc</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div class="button-group d-flex flex-1 align-center justify-end">
          <button class="cancel-btn d-flex align-center justify-center mr-16" @click="$store.commit('changeFormState')">Hủy</button>
          <button class="save-btn d-flex align-center justify-center">Lưu</button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from './CustomSelect.vue'

export default {
  name: "FormDetails",
  data() {
    return {};
  },
  components:{
    CustomSelect
  },
  methods: {},
};
</script>

<style scoped>
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
input {
  height: 40px;
  width: 250px;
  padding-left: 16px;
  padding-right: 8px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
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
  z-index: 2;
  cursor: pointer;
}
.main-form {
  background-color: #ffffff;
  position: absolute;
  height: 820px;
  width: 800px;
  top: 46.75px;
  left: 560px;
  z-index: 101;
  border-radius: 5px;
  font-family: "GoogleSans-Regular";
  color: #000000;
}

</style>
