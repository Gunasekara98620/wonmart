import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-red-600">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Page Not Found
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        
        <div className="mt-8">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto flex items-center justify-center">
            <span className="text-gray-500">Product Image</span>
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-gray-600">
            The page you&apos;re looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <div className="mt-8">
          <Link href="/">
            <Button variant="primary" size="large">
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}