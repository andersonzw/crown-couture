import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CategoryItem.scss"

const CategoryItem = ({category}) => {
  const {title, imageUrl} = category
  const navigate = useNavigate()

  const onClickHandler = ()=> navigate(`/shop/${title}`)
  return (
    <div onClick = {onClickHandler} className="category-container">
    <div className="background-image"  style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
}

export default CategoryItem