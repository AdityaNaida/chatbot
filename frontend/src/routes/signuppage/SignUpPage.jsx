import { SignUp } from "@clerk/clerk-react";
import "./signuppage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <SignUp
        path="/sign-up"
        signInUrl="/sign-in"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SignUpPage;
