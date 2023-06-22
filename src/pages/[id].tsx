import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Post as PostType } from '../../types';
import { Layout } from 'src/components/layout';
import PostPage from 'src/components/layout/Post/Post';

const FullPostPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const [post, setPost] = useState<PostType | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/api/posts/${id}`).then((res) => {
                setPost(res.data);
            });
        }
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <PostPage post={post} />
        </Layout>
    );
};

export default FullPostPage;

