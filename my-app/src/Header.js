import React, { Component } from 'react';
import './Header.css';
import './Header2.css';
class Header extends Component{
    render(){
          return(
            <div>
                  <nav className="navbar navbar-inverse navbar-fixed-top">
                  <div class="navbar-header">

                <a href="javascript:void(0);" class="bars"></a>
                
            </div>
            
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"></button>
                            <a class="navbar-brand">Personal Finance For Kids</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav"></ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-log-in" ></span> Register</a></li>
                                <li><a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-log-in" ></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="myModal" className="modal fade" role="dialog">
                       <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                          <center>
                          <h4 className="modal-title">Login</h4>
                          </center>
                        </div>
                          <div className="modal-body">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                              <input id="username" type="text" className="form-control" name="username" placeholder="username" />
                            </div>
                            </div>
                            <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                              <input id="password" type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                  <center>
                    <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success">Login</button>
                    </center>
                  </div>
                </div>

              </div>
            </div>
                <div id="myModal2" className="modal fade" role="dialog">
                       <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                          <center>
                          <h4 className="modal-title">Register</h4>
                          </center>
                        </div>
                          <div className="modal-body">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                              <input id="username" type="text" className="form-control" name="username" placeholder="username" />
                            </div>
                            </div>
                            <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                              <input id="password" type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            </div>
                            <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                              <input id="cpassword" type="password" className="form-control" name="cassword" placeholder="Confirm Password" />
                            </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                  <center>
                    <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success">Register</button>
                    </center>
                  </div>
                </div>

              </div>
            </div>
            

            
        
        <aside id="leftsidebar" class="sidebar">
        <div class="user-info">
                <div class="image">
                    <img src="user.png" width="48" height="48" alt="User"/>
                </div>
                <div class="info-container">
                    <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                    <div class="email">john.doe@example.com</div>
                    <div class="btn-group user-helper-dropdown">
                        <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                        <ul class="dropdown-menu pull-right">
                            <li><a href="/Profile"><i class="material-icons">person</i>โปรไฟล์</a></li>
                            <li role="seperator" class="divider"></li>
                            <li><a href="/Re_password"><i class="material-icons">lock</i>แก้ไขรหัสผ่าน</a></li>
                            <li role="seperator" class="divider"></li>
                            <li><a href="index.html"><i class="material-icons">input</i>ออกจากระบบ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="menu">
                <ul class="list">
                    <li class="header">เมนู</li>
                    <li class="active">
                        <a href="/">
                        <i class="material-icons md-48">dashboard</i>
                            <div className="menu-list">  
                                <span>สรุปการเงิน</span>
                            </div>    
                        </a>
                        <a href="/Note">
                        <i class="material-icons md-48">event</i>
                            <div className="menu-list">  
                                <span>บันทึก</span>
                            </div> 
                        </a>
                        <a href="/Target">
                        <i class="material-icons md-48">star</i>
                        <div className="menu-list">  
                                <span>เป้าหมาย</span>
                            </div> 
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu-toggle">
                            <i class="material-icons md-48">expand_more</i>
                            <div className="menu-list">  
                                <span>อื่นๆ</span>
                            </div> 
                        </a>
                        <ul class="ml-menu">
                            <li>
                                <a href="/Setting">ตั้งค่า</a>
                            </li>
                            <li>
                                <a href="/How_to">วิธีใช้งาน</a>
                            </li>
                            <li>
                                <a href="/About_me">เกี่ยวกับเรา</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>

        </div>
    );
  }
}


  export default Header;