import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
// Xác thực
import dangKy from '@/components/auth/dangKy'
import dangNhap from '@/components/auth/dangNhap'

// Quản trị admin
import indexCpanel  from '@/components/admin/trangChu'
import editUserCpanel from '@/components/admin/suaThanhVien'
import deleteUserCpanel from '@/components/admin/xoaThanhVien'
import addUserCpanel from '@/components/admin/themThanhVien'
// Meber
import indexDashboard from '@/components/member/trangChu'
import infoSuccess from '@/components/layout/infoSuccess'
// ScanID
import scanID from '@/components/scanID'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scanID',
      component: scanID
    },
    {
      path: '/dang-ky',
      name: 'dangKy',
      component: dangKy
    },
    {
      path: '/dang-nhap',
      name: 'dangNhap',
      component: dangNhap
    },
    {
      path: '/cpanel',
      name: 'indexCpanel',
      component: indexCpanel
    },
    {
      path: '/cpanel/sua-thanh-vien/:id',
      name: 'editUserCpanel',
      component: editUserCpanel
    },
    {
      path: '/cpanel/them-thanh-vien',
      name: 'addUserCpanel',
      component: addUserCpanel
    },
    {
      path: '/cpanel/infoSuccess',
      name: 'infoSuccess',
      component: infoSuccess
    },
    {
      path: '/dashboard',
      name: 'indexDashboard',
      component: indexDashboard
    },
    {
      path: '/scanID',
      name: 'scanID',
      component: scanID
    }
    
  ]
})
