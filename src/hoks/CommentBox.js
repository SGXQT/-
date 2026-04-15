import React, { useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [displayComment, setDisplayComment] = useState("");

  const handleSubmit = () => {

    setDisplayComment(comment);
  };

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h3 className="text-lg font-bold mb-2">User Feedback</h3>
      <textarea 
        className="w-full p-2 border rounded"
        placeholder="Tell us what you think..."
        onChange={(e) => setComment(e.target.value)}
      />
      <button 
        onClick={handleSubmit}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Post Comment
      </button>

      {displayComment && (
        <div className="mt-4 p-2 bg-gray-100 border-l-4 border-blue-500">
          <p dangerouslySetInnerHTML={{ __html: displayComment }} />
        </div>
      )}
    </div>
  );
};