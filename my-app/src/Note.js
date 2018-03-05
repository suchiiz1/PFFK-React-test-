import React, { Component } from 'react';
import './Note.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
class Note extends Component {


    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleCalendar = this.toggleCalendar.bind(this);
      }
     

      handleChange (date) {
        this.setState({startDate: date})
        this.toggleCalendar()
      }
      
      toggleCalendar (e) {
        e && e.preventDefault()
        this.setState({isOpen: !this.state.isOpen})
      }
      

/////////////////////////////////////////    JAVASCRIPT    /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


    render(){
        return (
            <section class="content">
                <div class="topnav">
                    <center>
                        <div>
                            <button
                                className="example-custom-input"
                                onClick={this.toggleCalendar}>
                                {this.state.startDate.format("DD-MM-YYYY")}
                            </button>
                            {
                                this.state.isOpen && (
                                <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                withPortal
                                inline />
                                )
                            }
                        </div>
                    </center>
                </div>
                        <center>
                                <a href="#">
                                    <button class="button button3">รายจ่าย</button>
                                </a>    
                                <a href="#">
                                    <button class="button button2">รายรับ</button>
                                </a>
                        </center>

            </section>
        )
    }
}

export default Note;