import { tabs } from "@/config/tabs-navigation";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background">
      <div className="flex justify-around py-2">
        {tabs.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.to}
              to={link.to}
              className="relative flex flex-col items-center text-xs"
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={20}
                    className={
                      isActive ? "text-primary" : "text-muted-foreground"
                    }
                  />

                  <span
                    className={
                      isActive ? "text-primary" : "text-muted-foreground"
                    }
                  >
                    {link.label}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="bottom-indicator"
                      className="absolute -top-1 h-1 w-6 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
