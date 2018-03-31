<template>
<div>
<vue-headful
            title="LỊCH SỬ QUÉT"
        />
<navBar/>
<b-container>
  <b-row>
    <b-col cols="12">
        <p style="text-align:center;font-size:30px;font-weight:600;margin-top:20px;">LỊCH SỬ QUÉT</p>
        <b-table bordered hover :items="items" :fields="fields">
        
      <template slot="created_date" slot-scope="row">
        {{ row.item.created_date | moment( "L , h:mm:ss a") }}
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

  name: 'historyScan',
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
          key: 'created_date',
          label: 'Thời gian',
          sortable: false
        }
      ],
      items: []
    }
  },
  created(){
    var authLogin = this.$session.get('auth');
    if(!authLogin){
      location.href = "#/dang-nhap"
    }else{
      var authLoginRole = this.$session.get('auth').role_id;
      if(authLoginRole == '0'){
        location.href = "#/dashboard"
      }
    }
    axios.get('http://localhost:3000/apiHistory/getHistory')
      .then((result) => {
        this.items = result.data;
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
}
</script>

<style>

</style>
