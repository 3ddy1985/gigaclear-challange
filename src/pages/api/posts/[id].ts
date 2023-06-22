import seedData from "../../../../seedData.json";
import { NextApiRequest, NextApiResponse } from "next";
import { Post, Posts } from "types";

const posts: Posts = seedData;

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query: { id } } = req;

    switch (method) {
        case "GET":
            const post = posts.find(post => post.id === id);

            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ message: "Post not found "});
            }
            break;

        default:
            res.status(405).end();
            break;
    }
};

