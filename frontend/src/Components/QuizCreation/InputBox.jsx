import { FormControl,FormLabel,Input, Typography, Box } from "@mui/joy";

const InputBox = (props)=>{
    return(<>
   <FormControl>
            <FormLabel>
                {props.label}
            </FormLabel>

                <Input type={props.type} onBlur={props.onBlurHandler}  placeholder={props.placeholder} /> 
                     
        </FormControl> 
    </>
    )
}
export default InputBox;