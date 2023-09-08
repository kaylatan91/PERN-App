import { useState } from "react";
import { createInstructions } from "../../fetching";

export default function CreateInstructionsForm({instructionsList, setInstructionsList}) {
    const [steps, setSteps] = useState("");
    const [error, setError] = useState(null);

    async function Instructions () {
        const APIData = await createInstructions(steps)
        if (APIData.success) {
            console.log("New Instructions List: ", APIData.data.newInstructions)

            const newInstructions = APIData.data.newInstructions;
            setInstructionsList((prevInstructions) => [...prevInstructions,newInstructions]);

            setSteps("");
        } else {
            setError(APIData.error.message)
        }
    }

    return (
        <form className="recipe-container">
            {error && <p>{error}</p>}
            <input
            value={steps}
            type="text"
            name="steps"
            placeholder="Insert instructions here"
            onChange={(e) => setSteps(e.target.value)}
            />
            <br />
        </form>
    )
}