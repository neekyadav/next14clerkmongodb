import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
