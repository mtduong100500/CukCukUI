<template>
  <div class="d-flex flex-direction-col flex-1">
      <!-- Phần thanh công cụ tìm kiếm, combobox và tải lại bảng
      // CreatedBy : MTDUONG(21/6/2021)
      -->

    <div class="title d-flex justify-between regular">
      <div class="mt-12 mb-12 ml-16">
        <p class="title" >Danh sách nhân viên</p>
      </div>
      <div
        class="primary btn-default d-flex align-center mt-12 mb-12 ml-16 mr-16"
         @click="$store.commit('changeFormState')"
      >
        <div class="btn-icon-add"></div>
        <button class="w-full pr-16 add-employee"><p>Thêm nhân viên</p></button>
      </div>
    </div>
    <div class="toolbar regular f-13 d-flex justify-between">
      <div class="d-flex align-center" >
        <div class="ml-16 mr-16">
          <input
            type="text"
            placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
            class="input-search-icon"
          />
        </div>
        <CustomSelect
          :options="['Tất cả phòng ban']"
          :default="'Tất cả phòng ban'"
          class="select mr-16"
        />
        <CustomSelect
          :options="['Tất cả vị trí']"
          :default="'Tất cả vị trí'"
          class="select"
        />  
      </div>
      <div class="reload-btn mr-16">
      </div>
    </div>

    <!-- Phần nội dung chính của bản
     // CreatedBy : MTDUONG(21/6/2021)
    -->
    <div class="table mt-12 ml-16 mr-16">
      <table class="w-full">
        <thead>
          <tr class="regular table-header ml-16 mr-16 py-12 text-left px-12">
            <th
              v-for="(header, index) in headers"
              :key="index"
              class="px-12 py-12"

            >
              {{ header.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="regular f-13 ml-16 mr-16 py-12 text-left px-12 data-row"
            v-for="employee in employees" 
            :key="employee.EmployeeCode"
            @dblclick="$store.commit('changeFormState')" 
            :class='{"active-item": currentItem === employee.EmployeeCode}'
            @keyup='nextItem'
          >
            <td class="px-12 py-12">{{ employee.EmployeeCode }}</td>
            <td class="px-12 py-12">{{ employee.FullName }}</td>
            <td class="px-12 py-12">{{ employee.PositionName }}</td>
            <td class="px-12 py-12">{{ formatDate(employee.DateOfBirth) }}</td>
            <td class="px-12 py-12">{{ formatGender(employee.Gender) }}</td>
            <td class="px-12 py-12">{{ formatMoney(employee.Salary) }}</td>
            <td class="px-12 py-12">{{ employee.DepartmentName }}</td>
            <td class="px-12 py-12">{{ employee.PhoneNumber }}</td>
            <td class="px-12 py-12">{{ employee.Email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Phần phân chia trang
     // CreatedBy : MTDUONG(21/6/2021)
    -->
    <div class="pagenation mr-16 ml-16 d-flex justify-between align-center">
      <div class="data-number">
        <p class="f-13">Hiển thị 1-10/1000 nhân viên</p>
      </div>
      <div class="page d-flex justify-between align-center">
        <button class="first-page-arrow page-direction"></button>
        <button class="previous-page-arrow page-direction"></button>
        <button class="page-number">1</button>
        <button class="page-number">2</button>
        <button class="page-number">3</button>
        <button class="next-page-arrow page-direction"></button>
        <button class="last-page-arrow page-direction"></button>
      </div>
      <div class="record-number f-13">
        <p>10 nhân viên/trang</p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "../components/CustomSelect.vue";
const axios = require("axios").default;
import moment from "moment";

export default {

  name: "danh-muc-nhan-vien",
  components: {
    CustomSelect,
  },
  data() {
    return {
      currentItem: 1,
      headers: [
        { text: "Mã nhân viên" },
        { text: "Họ và tên" },
        { text: "Chức vụ" },
        { text: "Ngày sinh" },
        { text: "Giới tính" },
        { text: "Lương" },
        { text: "Phòng ban" },
        { text: "Điện thoại" },
        { text: "Email" },
      ],
      employees: [],
    };
  },

  // Sử dụng phím lên xuống để di chuyển trong table (chưa hoàn thiện)
   // CreatedBy : MTDUONG(21/6/2021)
  mounted(){
    document.addEventListener("keyup", this.nextItem);
  },

  methods: {
    // Định dạng giới tính: 0 là Nữ, 1 là Nam, 2 là Khác
    // CreatedBy : MTDUONG(21/6/2021)
    formatGender(value) {
      return value === 0 ? "Nữ" : value === 1 ? "Nam" : "Khác";
    },

    // Thêm dấu chấm mỗi 3 chữ số
    // CreatedBy : MTDUONG(21/6/2021)
    formatMoney(money) {
      return money === null
        ? "0"
        : !isNaN(money)
        ? money.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")
        : money;
    },

    // Định dạng ngày tháng theo chuẩn VN (VD: 10/05/2000)
    // CreatedBy : MTDUONG(21/6/2021)
    formatDate(date) {
      return moment(String(date)).format("DD/MM/YYYY");
    },
    nextItem (e) {
    	if (e.keyCode == 38 && this.currentItem > 1) {
      	this.currentItem--
      } else if (e.keyCode == 40 && this.currentItem < this.employees.length) {
      	this.currentItem++
      }
    }
    
  },
  // Lấy dữ liệu tren API
  // CreatedBy : MTDUONG(21/6/2021)
  created: async function () {
    var data = await axios.get("http://cukcuk.manhnv.net/v1/Employees");
    this.employees = data.data;
  },
};
</script>

<style scoped>
tr.active-item {
  background-color: red;
}
.reload-btn{
  background-image: url('../assets/icon/refresh.png');
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  width: 36px;
  height: 36px;
}
.reload-btn:hover{
  background-color: #bbbbbb;
  cursor: pointer;
}
.page-number {
  width: 30px;
  height: 30px;
  margin: 0 4px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #e9ebee;
  cursor: pointer !important;
}
.page-number:hover {
  background-color: #ffffff;
  cursor: pointer;
}
.first-page-arrow {
  background-image: url("../assets/icon/btn-firstpage.svg");
}
.previous-page-arrow {
  background-image: url("../assets/icon/btn-prev-page.svg");
}

.last-page-arrow {
  background-image: url("../assets/icon/btn-lastpage.svg");
}

.next-page-arrow {
  background-image: url("../assets/icon/btn-next-page.svg");
}
.page-direction:hover {
  opacity: 1;
  border: 0.2px solid;
}
.page-direction {
  opacity: 0.7;
  width: 30px;
  height: 30px;
  margin: 0 4px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  cursor: pointer;
  background-color: #ffffff;
}


.page-number:focus {
  background-color: #019160;
  color: #ffffff;
}
.input-search-icon {
  height: 40px;
  width: 350px;
  background-image: url("../assets/icon/search.png");
  background-repeat: no-repeat;
  background-position: 16px center;
  padding-left: 16px;
  padding-right: 8px;
  text-indent: 24px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
}
.add-employee {
  background-color: inherit;
  color: white;
}
.select {
  width: 213px;
}
.btn-default {
  background-color: #019160;
  border-radius: 4px;
  height: 40px;
  font-size: 13px;
  font-family: "GoogleSans-Regular";
  text-align: left;
}

.btn-icon-add {
  height: 40px;
  width: 40px;
  background-image: url("../assets/icon/add.png");
  background-repeat: no-repeat;
  background-position: center;
  padding-left: 16px;
  padding-right: 8px;
}

.btn-default:hover {
  cursor: pointer;
  background-color: #2fbe8e;
}

.table-header {
  border-bottom: 1px solid #bbbbbb;
  font-size: 13px;
}
table {
  border-collapse: collapse;
}
th,
td {
  border-bottom: 1px solid #bbbbbb;
  color: #000000;
}

.data-row:hover {
  background-color: #ebebeb;
  cursor: pointer;
}
.title {
  font-size: 20px;
  font-weight: 700;
}

.pagenation {
  border-top: 1px solid #bbbbbb;
  flex: 1;
  color: #000000;
}

.table {
  min-height: 75vh;
}

.page {
    color: #000000;
}
</style>