import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../elements/Input';
import SocialButtons from '../SocialButtons';
import Message from './Message';


const SignupForm = ({ ...props }) => {
  const {
    signup, inputs, handleSubmit, ...rest
  } = props;

  return (
    <div className=" ui raised very padded center aligned text container segment container-main">
      <h1 className="ui header">Sign Up</h1>
      {signup.success
             && Object.keys(signup.errors).length > 0
              && <Message {...rest} errors={signup.errors} status={signup.status} />
            }
      {!signup.success
             && Object.keys(signup.errors).length > 0
              && <Message errors={signup.errors} status={signup.status} />
            }
      <form onSubmit={handleSubmit} id="signup-form">
        { inputs.map(input => (
          <React.Fragment key={input.name}>
            <Input {...input} />
            <br />
          </React.Fragment>
        ))}
        <button className="ui large teal button" type="submit">Sign Up</button>
      </form>
      <SocialButtons />
      <p>
  Already have an account?
        <Link to="login"> Login</Link>
      </p>
    </div>
  );
};

export default SignupForm;
