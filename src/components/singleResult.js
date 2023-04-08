import './singleResult.css'
function singleResult({ name }) {
  console.log(name)
  return <p className='list'>{name}</p>
}

export default singleResult
