
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img
        src="/images/error.png"
        width={400}
        height={400}
        alt="error"
      />

      <Link className="bg-primary p-2 rounded-lg text-white" href="/">
        Return Home
      </Link>
    </div>
  );
}
