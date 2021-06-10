<template>
  <div class="d-flex flex-direction-col sidebar">
    <div class="d-flex w-full logo-site align-center">
      <div class="ml-16 mr-10 mt-12 mb-12">
        <img src="../assets/img/toggle.png" class="w-full ico-w-24" />
      </div>
      <div class="w-full logo-box">
        <img src="../assets/img/cukcuk-logo.png" class="w-full logo" />
      </div>
    </div>
    <div>
      <router-link to="/" class="d-flex align-center nav-items px-16">
        <div class="dashboard-img sidebar-img">
        </div>
        <div class="px-12">Tổng quan</div>
      </router-link>
    </div>
    <div>
      <router-link to="/" class="d-flex align-center nav-items px-16">
        <div class="report-img sidebar-img">
        </div>
        <div class="px-12">Báo cáo</div>
      </router-link>
    </div>
    <div class="nav-container">
      <router-link to="/" class="d-flex align-center nav-items px-16">
        <div class="buying-img sidebar-img">
        </div>
        <div class="px-12">Mua hàng</div>
      </router-link>
    </div>
    <div>
      <router-link to="/" class="d-flex align-center nav-items px-16">
        <div class="employee-img sidebar-img">
        </div>
        <div class="px-12">Danh mục nhân viên</div>
      </router-link>
    </div>
    <div>
      <router-link to="/danhmuckhachhang" class="d-flex align-center nav-items px-16">
        <div class="customer-img sidebar-img">
        </div>
        <div class="px-12">Danh mục khách hàng</div>
      </router-link>
    </div>
    <div>
      <router-link to="/" class="d-flex align-center nav-items px-16" >
        <div class="setting-img sidebar-img"></div>
        <div class="px-12">Thiết lập hệ thống</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.report-img{
  background-image: url('../assets/icon/report.png');
}
.buying-img{
  background-image: url('../assets/icon/dashboard.png');
}
.dashboard-img{
  background-image: url('../assets/icon/dashboard.png');
}
.employee-img{
  background-image: url('../assets/icon/dic-employee.png');
}
.customer-img{
  background-image: url('../assets/icon/dic-employee.png');
}
.setting-img{
  background-image: url('../assets/icon/setting.png');
  
}
.sidebar-img{
  background-size: contain;
  background-position: center;
  width: 20px;
  height: 20px;
  
}
a {
  text-decoration: none;
  color: #000000;
  height: 40px;
}

a:hover {
  background-color: #e5e5e5;
  color: #000000;
}

a:focus {
  background-color: #019160;
  color: #ffffff;
}
.logo-site {
  height: 60px;
}

.logo-box {
  width: 130px;
  height: 30px;
  background-size: contain;
}

.sidebar {
  border-right: 1px solid #bbbbbb;
  width: 220px;
  height: 100vh;
}
.nav-items {
  font-size: 13px;
  font-family: "GoogleSans-Regular";
}

.nav-container {
  height: 44px;
}
</style>