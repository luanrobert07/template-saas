import { handleAuth } from "@/app/actions/handle-auth"

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold">Login</h1>
      <form action={handleAuth}>
        <button type="submit" className="border rounded-md px-2 py-2 cursor-pointer">
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
