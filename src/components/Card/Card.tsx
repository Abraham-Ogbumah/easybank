interface CardProps {
    image: string,
    author: string,
    title: string,
    post: string,
}
const Card = ({image, author, title, post}: CardProps) => {
  return (
    <div className='card-container'>
        <img src={image} alt="Blog post image" />
        
    </div>
  )
}

export default Card