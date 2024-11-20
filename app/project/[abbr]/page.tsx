import { projectData } from "@/data"
import { Dropdown } from "@/components/Dropdown"

export default function ProductList({
    params,
  }: {
    params: { abbr: string };
  }) {
    const project = projectData.find(obj=>{return obj.abbr === params.abbr})
  
    return (
      <div>
        <Dropdown home={false} />
        <h1>{project?.title}</h1>
      </div>
    )
}