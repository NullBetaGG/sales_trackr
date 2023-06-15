import React, { useEffect } from "react";
import { useRouter } from "next/router";

export function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn != "true") {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}
