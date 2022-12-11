import PostSummary from './PostSummary';

const PostList = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center">
      {props.products.map((p) => (
        <PostSummary Post={p} key={p._id} />
      ))}
    </div>
  );
};

export default PostList;
