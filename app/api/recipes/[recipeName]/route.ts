import {recipes} from "@/data";

export async function GET(
  request: Request,
  { params }: { params: { recipeName: string } }
) {
    console.log(params.recipeName, "params.recipeName");
    const index = recipes.findIndex(
        (food) => food.name.toLowerCase().replace(/ /g, '-') === params.recipeName
    )
    console.log(recipes[index]);
    if(index !== -1) {
        return new Response(JSON.stringify(recipes[index]), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 200
        })
    }
    else {
        return new Response("Food not found.", {
            headers: {
                "Content-Type": "application/json"
            },
            status: 404
        });
    } 
}
