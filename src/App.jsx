import React from 'react'
import { Question } from './components/Question.jsx'
import { questions } from './data.js'

import boxIllustration from './images/illustration-box-desktop.svg'
import womanDesktop from './images/illustration-woman-online-desktop.svg'

function App () {
  return (
    <div className='faq'>
      <img className='faq__box' src={boxIllustration} alt='' />
      <article className='faq__card'>
        <img className='faq__card-image' src={womanDesktop} alt='' />
        <div className='faq__card-content'>
          <h1 className='faq__card-content_title'>FAQ</h1>
          <div className='faq__card-content_container'>
            {questions.map((q, index) =>
              <Question
                key={index}
                questionId={q.id}
                question={q.question}
                answer={q.answer}
              />
            )}
          </div>
        </div>
      </article>
    </div>
  )
}

export default App
