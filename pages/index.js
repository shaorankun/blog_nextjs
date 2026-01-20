// pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import data from '../data.json';
import styles from '../styles/Blog.module.css';

export default function Home({ posts }) {
    return (
        <div className={styles.container}>
            {/* --- PHẦN THÊM MỚI: Header chứa Tiêu đề và Nút Dashboard --- */}
            <div className={styles.header}>
                <h1 className={styles.title}>Blog Công Nghệ</h1>
                <Link href="/dashboard" className={styles.dashboardBtn}>
                    Đến Dashboard &rarr;
                </Link>
            </div>
            {/* ----------------------------------------------------------- */}

            <ul className={styles.list}>
                {posts.map((post) => (
                    <li key={post.id} className={styles.card}>
                        <Link href={`/blog/${post.id}`} className={styles.link}>
                            <div className={styles.thumbnailWrapper}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={150}
                                    height={100}
                                    className={styles.thumbnail}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div className={styles.contentWrapper}>
                                <h3 className={styles.postTitle}>{post.title}</h3>
                                <small className={styles.date}>{post.date}</small>
                                <p className={styles.excerpt}>
                                    {post.content.substring(0, 80)}...
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    return { props: { posts: data } };
}