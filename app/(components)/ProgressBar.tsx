
const ProgressBar = ({progress} : { progress : number }) => {
  return (
    <div className="progressBar">
        <div className="progress" style={{ width : `${progress*10}%` }}></div>
    </div>
  )
}

export default ProgressBar