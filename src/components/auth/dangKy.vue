<template>
<b-container>
  <b-row>
  <vue-headful
            title="Đăng ký tài khoản"
        />
    <b-col md="6" offset-md="3">
       <h1 
    style="background: #2dc032;
    padding: 10px 20px;
    text-align: center;
    color: #FFF;"> ĐĂNG KÝ </h1>
    
        <div style="border:1px solid #CCC;padding:20px;">
                <b-form @submit="dangKy" >
                <b-form-group id="exampleInputGroup1"
                                label="Địa chỉ email:"
                                label-for="exampleInput1"
                               >
                <b-form-input id="exampleInput1"
                                type="email"
                                required
                                v-model="email"
                                placeholder="Nhập địa chỉ email">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="Họ và tên:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="name"
                                placeholder="Nhập họ và tên">
                    </b-form-input>
                </b-form-group>
                 <b-form-group id="exampleInputGroup2"
                                label="Ngày sinh:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="date"
                                required
                                v-model="birthday"
                                placeholder="Nhập ngày sinh">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="Số điện thoại:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="phone"
                                placeholder="Nhập số điện thoại của bạn">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="Địa chỉ:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="address"
                                placeholder="Nhập địa chỉ">
                    </b-form-input>
                </b-form-group>
               <b-form-group id="exampleInputGroup2"
                                label="Mã vân tay :"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="touchid"
                                placeholder="Nhập mã vân tay">
                </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="RFID:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                required
                                v-model="rfid"
                                placeholder="Nhập RFID">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="Mật khẩu:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="password"
                                required
                                v-model="password"
                                placeholder="Nhập mật khẩu">
                    </b-form-input>
                </b-form-group>
                <p style="text-align: center;
    color: red;
    text-transform: uppercase;
    font-weight: 600;">{{imesInfo}}</p>
                <b-button type="submit" variant="success" 
                style="background:#2dc032;cursor:pointer;
                border-color:#2dc032;border-radius:0px">ĐĂNG KÝ</b-button>
                <b-button @click="dangNhapRef" variant="secondary" style="cursor:pointer;
               border-radius:0px">ĐĂNG NHẬP</b-button>
                </b-form>
        </div>
    </b-col>
  </b-row>
  </b-container>
</template>

<script>

import axios from 'axios'
import md5 from 'md5'
export default {
  name: 'dangKy',
  data () {
    return {
        email:'',
        name:'',
        phone:'',
        address:'',
        birthday:'',
        touchid:'',
        rfid: '',
        password: '',
        imesInfo: ''
    }
  },
  methods: {
    dangNhapRef(){
          this.$router.push('/dang-nhap')
      },
    dangKy (evt) {
     evt.preventDefault();
     const email = this.email;
     const name = this.name;
     const address = this.address;
     const birthday = this.birthday;
     const touchid = this.touchid;
     const rfid = this.rfid;
     const password = md5(this.password);
     const phone = this.phone;

      axios.post('http://localhost:3000/auth/dangKy',{email, name, phone, address , birthday , touchid , rfid , password})
      .then((result) => {
              //==== LẤY THÔNG BÁO THÀNH CÔNG HAY THẤT BẠI ====//
              if(result.data.imes == 0){
                  this.imesInfo = 'Đăng ký thất bại'
              }else{
                  this.$router.push('/dang-nhap')
              }

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
