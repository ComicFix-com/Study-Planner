import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const Index = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Navigate to="/auth" replace />;
};

export default Index;