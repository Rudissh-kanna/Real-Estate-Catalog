import React, {useState, useContext, useRef} from "react";
import './Addprop.css'
import { Container, Typography, Step, Stepper, StepLabel, Button} from '@mui/material'
import BasicInfo from './BasicInfo';
import PropertyDetials from './PropertyDetail';
import GeneralInfo from './GeneralInfo';
import LocationInfo from './LocationInfo';
import { PropertyContext } from "../context";

const Addprop = () => {

    const {formData, setFormData, data} = useContext(PropertyContext);

    const [page, setPage] = useState(0);


    function handleNext() {
        if (page === 2) {
    
            setFormData({...formData, totalArea: data});
        }
        setPage(page + 1);
       
    }


    function handlePrev() {
        if (page >= 1) {
            setPage (page - 1);
        }
    }

    function PageDisplay() {
        if (page === 0) {
            return (<BasicInfo/>)
        }
        else if (page === 1) {
            return (<PropertyDetials/>)
        }
        else if (page === 2) {
            return (<GeneralInfo/>)
        }
        else {
            return (<LocationInfo/>)
        }
    }


    return (
        <>
        <Container
        sx={{marginLeft: 5,
             marginTop: 6}}
        >
        <Typography variant="h6" component="h1" 
        fontFamily="Montserrat, sans-serif"
        fontSize = "1.25rem"
        fontWeight= "600"
        color = "text.secondary"
        p = {0}
        lineHeight = "2rem"
        >ADD NEW PROPERTY</Typography>
        </Container>
        
        <div className="step-container">
            <Stepper connector={null} 
             sx={{display: "flex",
                  justifyContent: "space-between"}}
                  activeStep={page}
            >
                <Step className={(page === 0)?"":"hidden"}>
                    <StepLabel>Basic Info</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Property Info</StepLabel>
                </Step>
                <Step>
                    <StepLabel>General Info</StepLabel>
                </Step>
                <Step>
                    <StepLabel >Locaion Info</StepLabel>
                </Step>
            </Stepper>
        </div>

        <div className="form-container">
            <div className="form-body">{PageDisplay()}</div>
            <div className="form-actions">
                <Button variant="contained" sx={{padding: "10px 40px", borderRadius: "1.5rem", marginBottom: 2}} 
                onClick={handlePrev}>{(page===0)?"Cancel":"Prev"}</Button>
                <Button variant="contained" sx={{marginLeft: "2%", padding: "10px 40px", borderRadius: "1.5rem", marginBottom: 2}} 
                onClick={handleNext}>{(page === 3)?"Submit":"Next"}</Button>
            </div>
        </div>
        </>
    )
}

export default Addprop;