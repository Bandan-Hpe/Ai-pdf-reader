import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentBtn";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Sidebar() {
  const menuOptions = (
    <>
      <NewDocumentButton />
      {/* My Document */}
      {/* List... */}

      {/* Shared With Me */}
      {/* List... */}
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-gray-200">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon size={40} className="p-2 hover:opacity-30 rounded-lg" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>{menuOptions}</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
}

export default Sidebar;
