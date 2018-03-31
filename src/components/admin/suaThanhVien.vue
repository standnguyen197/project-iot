<template>
<div>
<navBar/>
<b-container>
  <b-row>
  <vue-headful
            title="SỬA THÀNH VIÊN"
        />
    <b-col md="6" offset-md="3">
       <h1 
    style="
    padding: 10px 20px;
    text-align: center;"> SỬA THÀNH VIÊN </h1>
    
        <div style="border:1px solid #CCC;padding:20px;">
                <b-form @submit="Update" >
                <b-form-group id="exampleInputGroup1"
                                label="Địa chỉ email:"
                                label-for="exampleInput1"
                               >
                <b-form-input id="exampleInput1"
                                type="email"
                                required
                                v-model="authKing.email"
                                placeholder="Nhập địa chỉ email">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="Họ và tên:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="authKing.name"
                                placeholder="Nhập họ và tên">
                    </b-form-input>
                </b-form-group>
                 <b-form-group id="exampleInputGroup2"
                                label="Ngày sinh:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="authKing.birthday"
                                placeholder="Nhập ngày sinh">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="Số điện thoại:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="authKing.phone"
                                placeholder="Nhập số điện thoại của bạn">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="Địa chỉ:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="authKing.address"
                                placeholder="Nhập địa chỉ">
                    </b-form-input>
                </b-form-group>
               <b-form-group id="exampleInputGroup2"
                                label="Mã vân tay :"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="authKing.touchid"
                                placeholder="Nhập mã vân tay">
                </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="RFID:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="authKing.rfid"
                                placeholder="Nhập RFID">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="Mật khẩu:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="password"
                                required
                                v-model="authKing.password"
                                placeholder="Nhập mật khẩu">
                    </b-form-input>
                </b-form-group>
                <p style="text-align: center;
    color: red;
    text-transform: uppercase;
    font-weight: 600;">{{imesInfo}}</p>
                <b-button type="submit" variant="info" 
                style="cursor:pointer;border-radius:0px">CẬP NHẬT</b-button>
                <b-button @click="cpanelRef" variant="secondary" style="cursor:pointer;
               border-radius:0px">QUAY VỀ</b-button>
                </b-form>
        </div>
    </b-col>
  </b-row>
  </b-container>
  </div>
</template>

<script>

import axios from 'axios'
import md5 from 'md5'
import navBar from '@/components/layout/admin/navbarAdmin'
export default {
  name: 'addUserCpanel',
  components: {
  navBar
  },
  data () {
    return {
        authKing: {}
    }
  },
   created () {
    var authLogin = this.$session.get('auth');
    var authLoginRole = this.$session.get('auth').role_id;
    console.log(authLogin);
    if(!authLogin){
      location.href = "#/dang-nhap"
    }else{
      if(authLoginRole == '0'){
        location.href = "#/dashboard"
      }
    }
    axios.get(`http://localhost:3000/auth/getAuth/` + this.$route.params.id)
    .then(response => {
      this.authKing = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    cpanelRef(){
          this.$router.push('/cpanel')
      },
    Update(evt) {
     evt.preventDefault();
      axios.put(`http://localhost:3000/auth/update/`+ this.$route.params.id, this.authKing)
      .then((result) => {
              //==== LẤY THÔNG BÁO THÀNH CÔNG HAY THẤT BẠI ====//
            this.$router.push('/cpanel')

      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>

</style>
