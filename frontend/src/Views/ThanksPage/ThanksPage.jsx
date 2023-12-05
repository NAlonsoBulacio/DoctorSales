import React, {useEffect} from 'react'
import Thanks from '../../Componentes/Thanks/Thanks';
import Footer from '../../Componentes/Footer/Footer';
const ThanksPage = () => {

  useEffect(() => {
        window.fbq('trackCustom', 'ThanksPage');
  }, []);

  return (
    <div>
        <Thanks />
      <Footer />
    </div>
  )
}

export default ThanksPage
