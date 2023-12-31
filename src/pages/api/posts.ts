import seedData from "../../../seedData.json";
import { NextApiRequest, NextApiResponse } from "next";
import { Post, Posts } from "types";

const posts: Posts = seedData;

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
        case "GET":
            res.status(200).json(posts);
            break;

        default:
            res.status(405).end();
            break;
    }
};
