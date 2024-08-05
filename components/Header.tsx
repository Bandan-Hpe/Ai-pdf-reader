"use client";

import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

function Header() {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between p-3">
      {user && (
        <h1 className="text-xl text-bold">
          {user?.firstName} Space
        </h1>
      )}
      {/* BredCrumb */}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
