import React from 'react';

import axios from 'axios';



import { Form, Icon, Button } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';



class FileUpload extends React.Component {



  constructor(props) {

    super(props);

    this.state ={

      file:null

    }

    this.onFormSubmit = this.onFormSubmit.bind(this)

    this.onChange = this.onChange.bind(this)

    this.fileUpload = this.fileUpload.bind(this)

  }

  onFormSubmit(e){

    e.preventDefault() // Stop form submit

    if (this.state.file === null) {

        return;

    }

    //this.uploadButton.ref.classList.add('loading'); // semantic ui 는 button에 loading icon 표시가능.

    this.fileUpload().then((response)=>{

      //this.uploadButton.ref.classList.remove('loading'); // semantic ui 는 button에 loading icon 표시 다시 없앰.

      console.log(response.data);

      alert("업로드완료 ^_^");

    })
  }

  onChange(e) {

    this.setState({file:e.target.files[0]});

    this.refs._userfileName.value = e.target.files[0].name;

  }

  fileUpload(){

    const url = '/api/csvFile'

    //var formData = new FormData(target);

    var formData = new FormData();

    formData.append('userfile',this.state.file);

    const config = {

        headers: {

            'content-type'  : 'multipart/form-data' // multer 사용시 multipart/form-data 형식이어야 한다.

        }

    }

    return axios.post(url, formData, config)

  }



  render() {

    return (

      <Form className="FileUpload" onSubmit={this.onFormSubmit}>

          <div class = "ui action input">

              <input placeholder='선택된파일...' type="text" ref="_userfileName" class="ui"/>

              <label for="userfile" class="ui icon button">

                 <Icon name="attach" />

              <input type="file" id="userfile"

                   accept=".xlsx, xls, csv"

                   style={{display: "none"}} onChange={this.onChange}/>

              </label>

              <Button basic ref={(param)=>this.uploadButton = param} color="primary" type="submit">올리기</Button>
         </div>
         
     </Form>

   )

  }

}



export default FileUpload;