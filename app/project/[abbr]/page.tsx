import { projectData } from "@/data"

export default function ProductList({
    params,
  }: {
    params: { abbr: string };
  }) {
    const project = projectData.find(obj=>{return obj.abbr === params.abbr})
  
    return <h1>{project?.title}</h1>
}