async function getPosts() {
  const res = await fetch(
    "https://backend.0xppl.com/api/0xppl/post?id=7126&pusher_channel_id=322d3c16-fb2d-4e63-a489-3589967b2c0d"
  );
  const posts = await res.json();
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  // console.log(posts);

  const RenderBreaksInPost = ({ post }: { post: string }) => {
    return post.split("{{break_line}}").map((str, index) => {
      return (
        <p key={index}>
          {str}
          <br />
        </p>
      );
    });
  };

  const RenderTagsInPost = ({
    post,
    identities,
  }: {
    post: string;
    identities: any;
  }) => {
    const identityNumber = post.split("{{identity||")[1].split("}}")[0];
    return (
      <>
        <p>{identities[identityNumber].display_name}</p>
      </>
    );
  };

  // <RenderTagsInPost post={"{{identity||21}}"} identities={posts.data.identities} />

  return (
    <>
      {/* <RenderBreaksInPost post={posts.data.post.contents as string} /> */}
      <RenderTagsInPost
        post={"{{identity||21}}"}
        identities={posts.data.identities}
      />
    </>
  );
}
