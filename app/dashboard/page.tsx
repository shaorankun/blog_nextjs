// app/dashboard/page.tsx
import Link from 'next/link'; // <--- Import Link
import SettingsToggle from './SettingsToggle';
import styles from './dashboard.module.css';

async function getUserProfile() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { name: "Anh Tuấn", role: "Data Scientist" };
}

export default async function DashboardPage() {
    const user = await getUserProfile();

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h1 style={{ marginBottom: 0 }}>Xin chào, {user.name} 👋</h1>
                <Link href="/" className={styles.homeBtn}>
                    &larr; Về trang Blog
                </Link>
            </div>

            <p style={{ color: '#666', marginBottom: '30px' }}>Role: <strong>{user.role}</strong></p>

            <div style={{ paddingTop: '20px', borderTop: '1px solid #eee' }}>
                <SettingsToggle />
            </div>
        </div>
    );
}