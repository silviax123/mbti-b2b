import ResultData from "../data/results.json";

interface TagProps {
  labels: [string]
  id: string
}

const ShowTags = (props:TagProps) => {
  return (
    <div className="label-container">
      {props.labels.map((label, index) => (
        <li key={index}>{label}</li>
      ))}
    </div>
  )
}

export default ShowTags