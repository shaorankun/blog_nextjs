// pages/blog/[id].js
import Image from 'next/image';
import data from '../../data.json';
import styles from '../../styles/Blog.module.css'; // Tận dụng lại CSS

export default function BlogPost({ post }) {
    if (!post) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            {/* Nút quay lại */}
            <a href="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#0070f3' }}>
                &larr; Quay lại
            </a>

            {/* Ảnh Banner lớn */}
            <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '30px' }}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill // Tự động điền đầy khung chứa
                    style={{ objectFit: 'cover', borderRadius: '10px' }}
                    priority // Ưu tiên load ảnh này vì nó ở đầu trang
                />
            </div>

            <h1 className={styles.title}>{post.title}</h1>
            <p style={{ color: '#666', fontStyle: 'italic' }}>Ngày đăng: {post.date}</p>

            <div style={{ lineHeight: '1.8', fontSize: '1.1rem', marginTop: '20px' }}>
                {post.content}
            </div>
        </div>
    );
}

// Giữ nguyên getStaticPaths và getStaticProps như bài trước
export async function getStaticPaths() {
    const paths = data.map((post) => ({ params: { id: post.id } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = data.find((p) => p.id === params.id);
    return { props: { post } };
}