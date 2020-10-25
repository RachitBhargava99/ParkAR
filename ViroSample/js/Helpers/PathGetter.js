import axios from "axios";
import { AsyncStorage } from 'react-native';


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


const getPath = (pathState) => {
    let path = "";
    axios.put("https://7291404a8501.ngrok.io/path/genPath", {})
        .then(data => {
            path = data.data.path.split("");
            pathState.data = path;
        })
        .catch(err => console.log(err));
    return path;
}

module.exports = {getPath};
