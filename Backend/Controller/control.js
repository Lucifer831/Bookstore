const  Model = require('../DATABASE/DataSchema');


//500 - Internal server error



const getBook = async (req, res) => {
    try {
      const books = await Model.find();
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch books" });
    }
  };
const Home = async (req,res)=>{
    res.send("Hi this is Home");
}
const Hello = async (req,res)=>{
    res.send("Hi this is response from hello")
}

module.exports = {Home,Hello,getBook};
