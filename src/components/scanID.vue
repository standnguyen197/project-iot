<template>
<div><vue-headful
            title="Kiểm tra ID"
        />
    <div style="background: #f6f6f6;min-height:100vh">
    <center>
    <div v-if="imesIsActive == false">
        <h2 style="background: #CCC;">TRẠNG THÁI CHỜ</h2>
        <img src="@/assets/touchid.jpg" style="width: 300px;margin-top: 50px;"/>
    </div>
    <div v-else>

        <h2 style="background: #CCC;">THÔNG BÁO KẾT QUẢ</h2>
        <div style="border: 1px solid rgb(204, 204, 204);
    padding: 10px;
    width: 300px;
    margin-top: 100px;
    background: #FFF;">
                <div v-if="moreInfo" style="text-align: left;">
                   <p>Tên nhân viên : {{ iMessage.name }}</p>
                   <p>Email : {{ iMessage.email }}</p>
                   <p>Số điện thoại : {{ iMessage.phone }}</p>
                   <p>Sinh ngày : {{ iMessage.birthday }}</p>
                   <p>Địa chỉ : {{ iMessage.address }}</p>
                   <p>Mã vân tay : {{ iMessage.touchid }}</p>
                   <p>RFID : {{ iMessage.rfid }}</p>
                </div>
                <div v-else>
                <h5 style=" text-align: center;color:red"> {{ iMessage }} </h5>
                </div>
       
        </div>
    </div>
    </center>
    </div>
</div>
</template>
<script>
    export default {
        name:'scanID',
        data(){
            return{
                imesIsActive: false,
                imesIsActiveTrue: null,
                iMessage: '',
                moreInfo: false
            }
        },
    sockets:{
    connect: function(){
      console.log('socket connected')
    },
    updateSocket(value){
      this.imesIsActive = true;
      var _this = this;
      var imesStatus = value.imes;

      if(imesStatus !== 0){
          _this.moreInfo = true;
          
          _this.iMessage = value.user[0];
          
      }else{
          _this.moreInfo = false;
          _this.iMessage = 'KẾT QUẢ KHÔNG TRÙNG TRONG DỮ LIỆU!'
      }
      console.log(value)
    }
  },
    }
</script>