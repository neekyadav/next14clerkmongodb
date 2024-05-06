import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <SignIn path="/sign-in" />
      </div>
    </div>
  );
}
