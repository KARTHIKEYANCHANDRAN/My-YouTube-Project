import React from "react";

const CommentsData = [
  {
    name: "Karthik",
    text: "created comment ",
    replies: [
      {
        name: "Karthikeyan",
        text: "created comment ",
        replies: [
          { name: "C Karthikeyan", text: "created comment ", replies: [] },
        ],
      },
      {
        name: "Karthikeyan",
        text: "created comment ",
        replies: [],
      },
      {
        name: "Karthikeyan",
        text: "created comment ",
        replies: [],
      },
      {
        name: "Karthikeyan",
        text: "created comment ",
        replies: [],
      },
    ],
  },
  {
    name: "Karthik",
    text: "created comment ",
    replies: [],
  },
  {
    name: "Karthik",
    text: "created comment ",
    replies: [],
  },
  {
    name: "Karthik",
    text: "created comment ",
    replies: [],
  },
  {
    name: "Karthik",
    text: "created comment ",
    replies: [],
  },
  {
    name: "Karthik",
    text: "created comment ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-50 my-2">
      <img
        className="w-12 h-8"
        alt="userLogo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaqtAkvphSGdnA_nFeGW9valNUy_bs3dqgQ&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="ml-20 w-1/2 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
