import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Input, Form } from 'reactstrap';
import axios from "axios"
import helpers from '../../helpers'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common["Authorization"] = helpers.getToken()

class AskQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      askTextarea: ""
    };

    this.toggle = this.toggle.bind(this);
  }

   handleInput = event => {
    this.setState({
      askTextarea: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()

    const payload = {
      title: this.state.askTextarea,
      user: this.props.passUser
    }
    console.log(payload)

    axios
      .post(`/api/questions`, payload)
      .then(response => {
        // NOTIFY ASKER
        console.log(response.data)
        alert(`Asking success!`)
        // REDIRECT TO HOME
        this.props.fromParent
      })
      .catch(error => {
        console.log(error)
        alert(`${error}`)
      })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return(
        <div>
          <Button color="danger" onClick={this.toggle}>Ask</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <Form onSubmit={this.handleSubmit}>
                
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    <Input type="textarea" cols="10" rows="5" charswidth="23" id="exampleText" 
                            value={this.state.input}
                            onChange={this.handleInput}
                            onKeyDown={e => {
                              if (e.keyCode === 13 && !e.shiftKey) {
                                e.preventDefault()
                              }
                            }}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <input type="submit" value="Submit Question" onClick={this.toggle}/>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Form>
              </Modal>
        </div>
      )
  }
  
}

export default AskQuestion