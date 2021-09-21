import { LandingTemplate } from "layout";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
function CreateTokkenForm() {
  return (
    <LandingTemplate>
      <div className="p-4">
         <iframe src="https://ramlogics.com/create-token/create-token.html#" title="Buy GAJ" height='1000px' width="100%"/>
      </div>
    </LandingTemplate>
  );
}
export default CreateTokkenForm;
