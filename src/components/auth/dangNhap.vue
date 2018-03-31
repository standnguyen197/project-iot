<template>
<b-container>
  <b-row>
  <vue-headful
            title="Đăng nhập tài khoản"
        />
    <b-col md="6" offset-md="3">
       <h1 
    style="background: #2dc032;
    padding: 10px 20px;
    text-align: center;
    color: #FFF;"> ĐĂNG NHẬP </h1>
        <div style="border:1px solid #CCC;padding:20px;">
                <b-form @submit="dangNhap" >
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
    font-weight: 600;">{{iMessage}}</p>
                <b-button type="submit" variant="success" 
                style="background:#2dc032;cursor:pointer;
                border-color:#2dc032;border-radius:0px">ĐĂNG NHẬP</b-button>
                <b-button @click="dangKyRef" variant="secondary" style="cursor:pointer;
               border-radius:0px">ĐĂNG KÝ</b-button>
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
  name: 'dangNhap',
  data () {
    return {
      email:'',
      password:'',
      res: '',
      iMessage:''
    }
  },
  methods: {
     dangKyRef(){
          this.$router.push('/dang-ky')
      },
     dangNhap (evt) {
      evt.preventDefault();
      const email = this.email;
      const password = md5(this.password);
      var _this = this;
      this.$session.start();
      axios.post('http://localhost:3000/auth/dangNhap',{email,password})
      .then((res) => {
        if(res.data.imes == 1){
            _this.$session.set('auth', res.data.results[0]);
          if(res.data.results[0].role_id == 1){
            _this.$router.push('/cpanel')
          }else{
            _this.$router.push('/dashboard')
          }
          }else{
            _this.iMessage = 'ĐĂNG NHẬP KHÔNG THÀNH CÔNG!'
        }
      })
      .catch((e) => {
        _this.errors.push(e);
      })
    }
  }
}
</script>

<style>

</style>
