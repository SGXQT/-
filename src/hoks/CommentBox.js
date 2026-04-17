import React, { useState } from 'react';
export default function CommentBox() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div className="p-4 border rounded w-full max-w-lg mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">用户评论 (有XSS漏洞)</h2>
      <form onSubmit={handleSubmit}>
        <textarea className="w-full p-2 border rounded" rows="3" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit" className="mt-2 text-white bg-blue-500 px-4 py-2 rounded">提交</button>
      </form>
      <div className="mt-4">
        {comments.map((c, i) => (
          <div key={i} className="p-2 mb-2 bg-gray-100 rounded" dangerouslySetInnerHTML={{ __html: c }} />
        ))}
      </div>
    </div>
  );
}
