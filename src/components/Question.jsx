import React from 'react'

export const Question = (props) => {
  const openQuestion = () => {
    if (props.questionId === 2) {
      return true
    }

    return false
  }

  return (
    <>
      <details open={openQuestion()} className='faq__card-content_faq'>
        <summary className='faq__card-content_faq_question'>
          {props.question}
        </summary>
        <p className='faq__card-content_faq_answer'>
          {props.answer}
        </p>
      </details>
      <hr />
    </>
  )
}
