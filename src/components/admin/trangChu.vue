<template>
<div>
<vue-headful
            title="Quản trị Website"
        />
<navBar/>
<b-container>
  <b-row>
    <b-col cols="12">
        <p style="text-align:center;font-size:30px;font-weight:600;margin-top:20px;">HỆ THỐNG THÀNH VIÊN</p>
        <b-btn variant="info" @click="addUser" style="border-radius:0px;margin-bottom:20px;cursor:pointer">THÊM THÀNH VIÊN</b-btn>
        <b-table bordered hover :items="items" :fields="fields">
         <template slot="function" slot-scope="row">
      <b-button variant="info" size="sm" @click="editUser(row.item)" class="mr-2">
        Sửa
      </b-button>
      <b-button variant="danger" size="sm" @click="delUser(row.item)" class="mr-2">
        Xóa
      </b-button>
    </template>
        </b-table>
         
         </b-col>
  </b-row>
  </b-container>
</div>
</template>

<script>

import axios from 'axios'
import navBar from '@/components/layout/admin/navbarAdmin'
export default {

  name: 'indexCpanel',
  components: {
  navBar
  },
  data () {
    return {
      name: '',
      fields: [
        {
          key: 'email',
          label: 'Email',
          sortable: false
        },
        {
          key: 'name',
          sortable: false,
          label: 'Họ và tên'
        },
        {
          key: 'phone',
          label: 'Số điện thoại',
          sortable: false
        },
        {
          key: 'touchid',
          label: 'Vân Tay',
          sortable: true
        },
        {
          key: 'rfid',
          label: 'RFID',
          sortable: true
        },
        {
          key: 'function',
          label: 'Chức năng',
          sortable: false
        }
      ],
      items: []
    }
  },
  created(){
    var authLogin = this.$session.get('auth');
    console.log(authLogin);
    if(!authLogin){
      location.href = "#/dang-nhap"
    }else{
      var authLoginRole = this.$session.get('auth').role_id;
      if(authLoginRole == '0'){
        location.href = "#/dashboard"
      }
    }
    axios.get('http://localhost:3000/auth/getAuth')
      .then((result) => {
        this.items = result.data;
      })
      .catch(e => {
        this.errors.push(e)
      })
    this.name = this.$session.get('auth')[0].name;
  },
  methods: {
    editUser(items){
      this.$router.push(`/cpanel/sua-thanh-vien/${items._id}`)
    },
    delUser(items) {
      axios.delete(`http://localhost:3000/auth/delAuth/${items._id}`)
      .then((result) => {
        this.$router.push('/cpanel/infoSuccess');
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    addUser(){
      this.$router.push('/cpanel/them-thanh-vien');
    }
  }
}
</script>

<style>

</style>
