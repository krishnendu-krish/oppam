import AuthSidebar from "../../components/auth/AuthSidebar";
import LoginForm from "../../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <div className="grid min-h-screen lg:grid-cols-[31%_69%]">

        <AuthSidebar />

        <div className="flex items-center justify-center px-12">
          <LoginForm />
        </div>

      </div>
    </div>
  );
}