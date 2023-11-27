/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'
import BlogPublish from '../../../components/Blog/Blog-Publish.component';
import BlogEditor from '../../../components/Blog/Blog-Editor.component';

const BlogCreate = () => {
    const [ editorState, setEditorState ] = useState('editor');

  return (
    editorState == 'editor' ? <BlogEditor /> : <BlogPublish />
  )
}

export default BlogCreate