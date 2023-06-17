import React, { Component } from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-imput.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
// import FormInput from '../../components/form-input/form-input.component';

export class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password:''

      }
    }
    // handleSubmit=e=>{
    //     e.preventDefault()

    //     this.setState({email:'',password:''})
    // }
     handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then((res)=>{
          console.log(res.user)
        })
        .catch((err)=>{
          // console.error(err)
          alert(err.message)
        })
      }
    handleChange=e=>{
        const {value,name}=e.target
        this.setState({[name]:value})
        console.log('Done')
    }
  render() {
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    name="email"
                    type="email" 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                    required
                 />
                {/* <label>Email</label> */}
                <FormInput
                 name="password"
                 type="password" 
                 value={this.state.password} 
                 handleChange={this.handleChange}
                 label='password'
                 required
                 />
                {/* <label>Password</label> */}

                <CustomButton type="submit" value='submit'>SIGN IN</CustomButton>
                <CustomButton type="submit" onClick={signInWithGoogle} value='submit'>
                    {''}
                    SIGN IN WITH GOOGLE {''}
                </CustomButton>


            </form>
        </div>
    )
  }
}

export default SignIn