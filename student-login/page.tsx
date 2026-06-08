export default function StudentLogin() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Student Login
        </h1>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-xl p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl p-3 mb-6"
        />

        <button
          className="w-full bg-cyan-500 text-white py-3 rounded-xl font-semibold"
        >
          Login
        </button>

      </div>

    </main>
  );
}