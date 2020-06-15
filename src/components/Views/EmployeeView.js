import React from "react";
import { useDispatch, useSelector } from "react-redux";

const EmployeeView = () => {
    const dispatch = useDispatch();
    const jobSeekers = useSelector((state) => state.jobSeekers);
    // console.log("jobSeekers", jobSeekers);
    return (
        <>
            <h1>this is the employee view</h1>
            {jobSeekers.map((jobSeeker) => (
                <div>{jobSeeker}</div>
            ))}
        </>
    );
};

export default EmployeeView;
