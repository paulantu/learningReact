import React from 'react'

function Card({postTitle, authorName, rating, publishedYear, imageSource}) {
  return (
    <>
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl mt-4">
        <div>
          <img
            className="size-48 shadow-xl rounded-md object-cover"
            alt="test"
            src={imageSource}
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl font-medium">{postTitle}</span>
          <span className="font-medium text-sky-500">{authorName}</span>
          <span className="flex flex-col items-start font-medium text-gray-600 dark:text-gray-400">
            <span>Rating. {rating}/10</span>
            <span>{publishedYear}</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Card