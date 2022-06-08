import React, {useEffect} from 'react'
import _document from './docs/_descarga.pdf'
import document from './docs/descarga.pdf'

const Component = ({ usuario }) => {

    useEffect(() => {
        if (usuario === 'manuel'){
            window.location.href = document;
        }
        if (usuario === 'iracema'){
            window.location.href = _document;
        }
    }, [])

  return (
    <div></div>
  )
}

export default Component