function PostCard(Props) {
    const { post } = Props;
    return (
        <>
            <article>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </article>
        </>
    )
}

export default PostCard