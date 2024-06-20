import {recipes} from "@/data";

export async function GET(
  request: Request,
  { params }: { params: { recipeName: string } }
) {
    console.log(params.recipeName, "params.recipeName");
}
