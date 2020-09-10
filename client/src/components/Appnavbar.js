import React,{Component,Fragment} from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModel from './auth/registerModel';
import LoginModal from './auth/LoginModal'
import Logout from './auth/Logout'
class AppNavbar extends Component{
    
        state={
            isOpen:false
        }
        static propTypes={
            auth:PropTypes.object.isRequired
        }
        toggle=()=>{
            this.setState({
                isOpen:!this.state.isOpen
            });

        }

        render(){
            const {isAuthenticated,user}=this.props.auth;
            const authLinks=(
                <Fragment>
                    <NavItem>
                        <spin className="navbar-text mr-3">
                            <strong>{user?`Welcome ${user.name}`: ''}</strong>
                        </spin>
                    </NavItem>
                        <NavItem>
                                     <Logout/>
                        </NavItem>
                </Fragment>
            );
            const guestLinks=(
                <Fragment>
                    <NavItem>                               
                                    <RegisterModel/>
                            </NavItem>
                            <NavItem>
                                     <LoginModal/>
                    </NavItem>
                </Fragment>
            )
            return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">
                        ShoppingList
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" nabvar>
                            {isAuthenticated? authLinks:guestLinks}
                        </Nav>
                    </Collapse>
                </Container>
                </Navbar>
            </div>
            )}
        

}

const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,null)(AppNavbar)