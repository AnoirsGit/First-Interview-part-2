import PostMessage from "../models/postMessage.js"

export const getPosts  = async (req, res) => {
    try{
        const postMessage = await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);
    }catch (error){ 
        res.status(404).json({message: error})
    }
}

export const createPosts  = async (req, res) => {
    const body = req.body;
    try {
        await PostMessage.findByIdAndUpdate("60eb4c11d846b820b30537d3", body, { new: true });
        res.status(201).json(body );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    res.json(body);
}