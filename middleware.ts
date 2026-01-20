// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Chỉ áp dụng cho đường dẫn /api/secret
    if (request.nextUrl.pathname.startsWith('/api/secret')) {
        const apiKey = request.headers.get('x-api-key');

        // Kiểm tra key từ biến môi trường (hoặc hardcode để test nhanh)
        const validKey = process.env.MY_SECRET_KEY || 'my-secret-pass';

        if (apiKey !== validKey) {
            // Nếu sai key, trả về lỗi 401 [cite: 348]
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
    }

    return NextResponse.next();
}