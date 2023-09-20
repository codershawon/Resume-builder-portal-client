import { useParams } from "react-router-dom";
import ResumeBody from "../ResumeBody/ResumeBody";


const ResumeBuilder = () => {
    const {name} = useParams();
    return (
        <div>
            <ResumeBody
            name={name}
            ></ResumeBody>
        </div>
    );
};

export default ResumeBuilder;