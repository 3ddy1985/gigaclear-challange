import { Post as PostType } from "../../../../types";
import styles from "./Post.module.sass"

interface PostProps {
    post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
    const eventTime = post.eventDateTime
        ? new Date(post.eventDateTime).toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit', hour12: false })
        : undefined;

    const eventDate = post.eventDateTime 
        ? new Date(post.eventDateTime).toLocaleString("en-GB", { day: "2-digit", month: 'short', year: 'numeric' }) 
        : undefined;
        
    const createdDate = new Date(post.dateCreated).toLocaleString("en-GB", { day: "2-digit", month: 'short', year: 'numeric' });

    const displayDate = post.isEvent ? eventDate : createdDate;

    return (
        <div className={styles.postWrapper}>
            <h1 className="color-primary">{post.title}</h1>
            <p className="color-secondary">{post.summary}</p>
            <p className={`${styles.marginTopBottom} color-gray`}><strong>{displayDate}</strong></p>
            <img className={styles.postImage} src={post.image}></img>
            {post.isEvent && (
                <div className={styles.eventContainer}>
                    <div className={styles.eventDetails}>
                        <h2 className="color-secondary">{post.eventLocation}</h2>
                        <h2 className={`${styles.flexRow} color-primary`}>
                            <span className={styles.price}>£{post.price}</span>
                            <span>{eventTime} &nbsp;| &nbsp;</span>
                            <span>{displayDate}</span>
                        </h2>
                    </div>
                    <div className={styles.eventLink}>
                        <a className="background-primary color-white" href={post.registrationLink}>Sign up to this event</a>
                    </div>
                </div>
            )}
            <div className={`${styles.about} color-primary`}>
                {post.isEvent && <h2>About this event</h2>}
                <div className="color-black" dangerouslySetInnerHTML={{ __html: post.about }}></div>
            </div>

        </div>

    )
}

export default Post;
