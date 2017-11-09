import React from 'react';
import { FormGroup, Label, Button, Input } from 'reactstrap';

class AddQuestion extends React.Component {
constructor(props) {
        super(props);
        this.state = {
          visibility: false,
        }
        this.toggleQuestion = this.toggleQuestion.bind(this)
      }

  toggleQuestion() {
    this.setState({
      visibility: !this.state.visibility
    })
    console.log('Question Button Toggled')
  }

  render() {
    return (
      <div>
        <div isopen={this.state.visibility}>
          <FormGroup className="a-form">
          <div className="d-flex flex-column">
            
            <div className="p-2">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <img className="q-img"
                   src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/23131549_1353917711402597_7611592203340357848_n.jpg?_nc_eui2=v1%3AAeHsypBzm0ED8dMyrSiwclyi6HW3Tp2AWr7OSmkuebEq93nC3G2FVoitBa2YH508jZNZ5F_wUpoPr5RPoyGpwSnLLEs4FtmEz4UUsbGpI3UV0A&oh=23baf059c5d698813c4c118f2506d17e&oe=5AA88727" alt="m"
                  />
                </div>
                <div className="p-2">
                  <Label for="exampleText">username</Label>
                </div>
              </div>
            </div>
            
            <div className="p-2">
              <Input type="textarea" cols="10" rows="5" charswidth="23" name="text" id="exampleText" />
            </div>

            <div className="d-flex">
              <div className="p-2">
                <Button color="primary">Submit Question</Button>{' '}
              </div>
              <div className="ml-auto p-2">
                <Input type="file" name="file" id="exampleFile" />
              </div>
            </div>
            </div>
          </FormGroup>
      </div>
      </div>
    )
  }
}

export default AddQuestion
