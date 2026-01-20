// app/dashboard/layout.tsx
import styles from './dashboard.module.css'; // <--- Import CSS

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.wrapper}>
            <nav className={styles.sidebar}>
                <h2 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>My App</h2>
                <div className={styles.sidebarItem}>Home</div>
                <div className={styles.sidebarItem}>Analytics</div>
                <div className={styles.sidebarItem}>Settings</div>
            </nav>
            <main className={styles.main}>{children}</main>
        </div>
    );
}