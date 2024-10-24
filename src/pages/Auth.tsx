import { SignIn } from "@clerk/clerk-react";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">StudyMentor Pro</h1>
        <SignIn />
      </div>
    </div>
  );
};

export default Auth;