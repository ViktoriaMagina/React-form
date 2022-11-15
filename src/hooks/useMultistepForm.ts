import React, { ReactElement } from "react";

export function useMultistepForm(steps: ReactElement[]){
    const [currentStepIndex, setCurrentStepIndex] = React.useState(0)
    function next(){
        setCurrentStepIndex(i=>{
            if(i >= steps.length - 1) return i
            return i+ 1
        })
    }
    function prev(){
        setCurrentStepIndex(i=>{
            if( i <=0) return i
            return i - 1
        })
    }
    return {
        setCurrentStepIndex,
        currentStepIndex,
        currentStep: steps[currentStepIndex],
        next,
        prev,
        steps,
        ifFirstStep: currentStepIndex===0,
        ifLastStep: currentStepIndex + 2 === steps.length,
        ifFinishStep: currentStepIndex + 1 === steps.length,
    }
}