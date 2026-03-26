import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center items-center gap-1 group">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
          <div className="flex items-baseline">
            <span className="text-[28px] font-normal tracking-tight text-[#191919]">Degree</span>
            <span className="text-[28px] font-bold tracking-tight text-[#191919]">FYD</span>
          </div>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#191919]">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#ed923d] hover:text-[#d87d2a] transition-colors">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-2xl sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-[#191919] placeholder-gray-400 shadow-sm focus:border-[#0d3b59] focus:outline-none focus:ring-[#0d3b59] sm:text-sm transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-[#191919] placeholder-gray-400 shadow-sm focus:border-[#0d3b59] focus:outline-none focus:ring-[#0d3b59] sm:text-sm transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-[#191919] placeholder-gray-400 shadow-sm focus:border-[#0d3b59] focus:outline-none focus:ring-[#0d3b59] sm:text-sm transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-[#0d3b59] focus:ring-[#0d3b59]"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{" "}
                <Link href="/terms-and-conditions" className="font-semibold text-[#0d3b59] hover:underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="font-semibold text-[#0d3b59] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl bg-[#0d3b59] py-3.5 px-4 text-sm font-bold text-white shadow-lg hover:bg-[#14304f] focus:outline-none focus:ring-2 focus:ring-[#0d3b59] focus:ring-offset-2 transition-all active:scale-[0.98]"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm font-medium text-gray-500 hover:text-[#0d3b59] transition-colors inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
