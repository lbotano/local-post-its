/*
 * ==============
 * MediaDisplayer
 * ==============
 *
 * Purpose:
 * Detect what kind of media does the given url have
 * and display it accordingly (image, video, audio)
 *
 * Props:
 *  - media: base64 code in the following format: datatype/format;base64
 *    that represents the media to be displayer
 */

import React from 'react'
import { CardMedia } from '@material-ui/core'

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

  const containerStyle = {
    height: 250
  }
  const mediaStyle = {
    maxHeight: '100%',
    objectFit: 'contain'
  }

  switch(mediaType) {
    case 'image':
      return (
        <div style={containerStyle}>
          <CardMedia component="img" image={media} style={mediaStyle} />
        </div>
      )
    case 'video':
      return (
        <div style={containerStyle}>
          <CardMedia component="video" controls style={mediaStyle}>
            <source src={media} type={mediaTypeSpecific} />
            Your browser does not support HTML video.
          </CardMedia>
        </div>
      )
    case 'audio':
      return (
        <div style={containerStyle}>
          <CardMedia component="audio" controls style={mediaStyle}>
            <source src={media} type={mediaTypeSpecific} />
            Your browser does not support HTML audio
          </CardMedia>
        </div>
      )
    default:
      return (
        <small>No media loaded</small>
      )
  }
}

export default MediaDisplayer
