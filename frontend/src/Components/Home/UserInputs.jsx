import axios from 'axios';
import { useEffect, useState } from 'react';

const UserInputs = () => {
    const [userInput, setUserInput] = useState("");

    return <div className="main-input">
        <label htmlFor="riskInput" className="heading-2">Enter Your Text :</label>
        <textarea name="riskInput" id="" cols="30" rows="10"></textarea>
        <button type="submit" className="button-56">Submit</button>
    </div>
}

export default UserInputs;