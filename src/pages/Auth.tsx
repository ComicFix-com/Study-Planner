import { SignIn } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8">Study Planner</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Welcome to Study Planner</DialogTitle>
              <DialogDescription>
                Sign in or create an account to start organizing your studies
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <SignIn routing="virtual" afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard" />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Auth;