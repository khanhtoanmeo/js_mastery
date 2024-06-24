import React from 'react'
import PageLayout from '../../components/PageLayout'
import Lesson from '../../components/Lesson'


function LessonPage({lesson}) {
  return (
    <PageLayout>
        <Lesson lesson={lesson}/>
    </PageLayout>
  )
}

export default LessonPage