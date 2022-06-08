import React, {useEffect} from 'react'
import _document from './docs/_descarga.pdf'
import document from './docs/descarga.pdf'

import _document_ from './docs/_descarga_.pdf'
import document_ from './docs/descarga_.pdf'

const Component = ({ usuario }) => {

    useEffect(() => {
        if (usuario === 'manuel'){
            window.location.href = document;
        }
        if (usuario === 'iracema'){
            window.location.href = _document;
        }
        if (usuario === 'jose'){
            window.location.href = _document_;
        }
        if (usuario === 'maria'){
            window.location.href = document_;
        }
    })

  return (
    <div></div>
  )
}

export default Component