import axios from "axios";

axios.get("/api").then(res => console.log(res.data));

console.log(process.env.NAME);
