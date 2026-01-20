// app/dashboard/SettingsToggle.tsx
'use client'; // Bắt buộc
import { useState } from 'react';

export default function SettingsToggle() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div style={{ background: isDark ? '#333' : '#fff', color: isDark ? '#fff' : '#000', padding: '10px' }}>
            <p>Chế độ hiện tại: {isDark ? 'Tối' : 'Sáng'}</p>
            <button onClick={() => setIsDark(!isDark)}>Chuyển chế độ</button>
        </div>
    );
}