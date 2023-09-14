import { useParams } from "react-router-dom";
import ResumeBody from "../ResumeBody/ResumeBody";


const ResumeBuilder = () => {
    const {name} = useParams();
    // console.log(name);
    return (
        <div>
            <ResumeBody
            name={name}
            ></ResumeBody>
        </div>
    );
};

export default ResumeBuilder;