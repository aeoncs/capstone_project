import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";

import styles from "./RootLayout.module.css";

export default function RootLayout() {

    // Health check to backend server

     useEffect(() => {
  fetch("http://localhost:5000/api/health")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);


    return (
        <div className={styles.root}>
            <header className={styles.rootLayoutHeader}>
                <nav className={styles.rootLayoutNav}>
                
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.rootLayoutLink} ${styles.rootLayoutLinkActive}`
                                : styles.rootLayoutLink
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="leaderboards"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.rootLayoutLink} ${styles.rootLayoutLinkActive}`
                                : styles.rootLayoutLink
                        }
                    >
                        Leaderboards
                    </NavLink>

                    <NavLink
                        to="heroes"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.rootLayoutLink} ${styles.rootLayoutLinkActive}`
                                : styles.rootLayoutLink
                        }
                    >
                        Heroes
                    </NavLink>

                    <NavLink
                        to="items"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.rootLayoutLink} ${styles.rootLayoutLinkActive}`
                                : styles.rootLayoutLink
                        }
                    >
                        Items
                    </NavLink>

                    <NavLink
                        to="patchnotes"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.rootLayoutLink} ${styles.rootLayoutLinkActive}`
                                : styles.rootLayoutLink
                        }
                    >
                        Patch Notes
                    </NavLink>
{/* 
                    <NavLink
                        to="login"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.rootLayoutLink} ${styles.rootLayoutLinkActive}`
                                : styles.rootLayoutLink
                        }
                    >
                        Login
                    </NavLink> */}
                </nav>
            </header>

            <main className={styles.rootLayoutMain}>
                <Outlet />
            </main>
        </div>
    );
}