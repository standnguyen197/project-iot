<template>
<div>
<vue-headful
            title="Quản trị Website"
        />
<navBar/>
<b-container>
  <b-row>
    <b-col cols="12">
        <p style="text-align:center;font-size:30px;font-weight:600;margin-top:20px;">THÔNG TIN CỦA BẠN</p>
            <b-col md="6" offset-md="3">
                <b-list-group>
                    <b-list-group-item active 
                    style="background: #17a2b8;
                    border-color: #17a2b8;">HỌ VÀ TÊN : {{items.name}}</b-list-group-item>
                    <b-list-group-item >EMAIL : {{items.email}}</b-list-group-item>
                    <b-list-group-item>ĐIỆN THOẠI: {{items.phone}}</b-list-group-item>
                    <b-list-group-item>NGÀY SINH: {{items.birthday}}</b-list-group-item>
                    <b-list-group-item>ĐỊA CHỈ: {{items.address}}</b-list-group-item>
                    <b-list-group-item>MÃ VÂN TAY: {{items.touchid}}</b-list-group-item>
                    <b-list-group-item>RFID: {{items.rfid}}</b-list-group-item>
                    </b-list-group>
            </b-col>
         </b-col>
  </b-row>
  </b-container>
</div>
</template>

<script>

import axios from 'axios'
import navBar from '@/components/layout/member/navbarMember'
export default {

  name: 'indexDashboard',
  components: {
  navBar
  },
  data () {
    return {
      items: []
    }
  },
  created(){
    var _this = this
    var authLogin = this.$session.get('auth');
    if(!authLogin){
      location.href = "#/dang-nhap"

    }else{
      
      axios.get(`http://localhost:3000/auth/getAuth/` + _this.$session.get('auth')._id)
      .then((result) => {
        _this.items = result.data;
      })
      .catch(e => {
        _this.errors.push(e)
      })
      var authLoginRole = _this.$session.get('auth').role_id;

      if(authLoginRole == '1'){
        location.href = "#/cpanel"
      }
    }
   
   
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
    // addUser(){
    //   this.$router.push('/cpanel/them-thanh-vien');
    // }
  }
}
</script>

<style>

</style>
