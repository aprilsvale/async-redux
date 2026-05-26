import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';



export default function Posts() {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    if (status === 'loading') return <p>Загрузка...</p>;
    if (status === 'failed') return <p>Ошибка: {error}</p>;

    return (
        <ul>
            {data.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}




