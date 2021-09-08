import React from 'react'

const MediaDisplayer = ({ media }) => {
  const getMediaType = (base64) => (
    base64.substring(
      base64.indexOf(':') + 1,
      base64.indexOf(';')
    )
  )

  if (!media) {
    return <small>No media loaded</small>
  }

  const mediaTypeSpecific = getMediaType(media)
  const mediaType = mediaTypeSpecific.substring(0, mediaTypeSpecific.indexOf('/'))

  switch(mediaType) {
    case 'image':
      return <img src={media} />
    case 'video':
      return (
        <video controls width="250">
          <source src={media} type={mediaTypeSpecific} />
          Your browser does not support HTML video.
        </video>
      )
    case 'audio':
      return (
        <audio controls>
          <source src={media} type={mediaTypeSpecific} />
          Your browser does not support HTML audio
        </audio>
      )
    default:
      return (
        <small>No media loaded</small>
      )
  }
}

export default MediaDisplayer
