import styles from "./Card.module.sass";
import { Post } from "../../../../types";
import React from "react";

interface CardProps {
    post: Post;
}

export const Card: React.FC<CardProps> = ({ post }) => {
    const eventDate = post.eventDateTime 
        ? new Date(post.eventDateTime).toLocaleString("default", { month: 'short', year: 'numeric' }) 
        : undefined;
    const createdDate = new Date(post.dateCreated).toLocaleString("default", { month: 'short', year: 'numeric' });

    const displayDate = post.isEvent ? eventDate : createdDate;
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={post.image} />
            <h2 className={`${styles.postTitle} ${styles.marginSides} color-secondary`}>{post.title}</h2>
            <div className={styles.row}>
                    <p className={`${styles.highlight} background-alternative color-primary`}>{post.topic}</p>
                    <p className={`${styles.highlight} background-alternative color-primary`}>{post.author}</p>
                    <p className={`${styles.highlight} background-alternative color-primary`}>{displayDate}</p>
            </div>
            <p className={`${styles.marginSides} color-secondary`}>{post.summary}</p>

        </div>
    )
}