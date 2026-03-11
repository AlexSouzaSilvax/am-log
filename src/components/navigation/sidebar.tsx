import { tabs } from '@/config/tabs-navigation';
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="hidden md:block border-b">
      <nav className="flex gap-8">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className="relative pb-3 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? "text-primary" : ""}>
                  {tab.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="tabs-line"
                    className="absolute left-0 right-0 -bottom-px h-0.5 bg-primary"
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
        ))}
      </nav>
    </div>
  );
}
