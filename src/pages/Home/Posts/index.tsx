/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../../components/layouts/Home";
import Post from "../../../components/molecules/Post";
import { MockedPosts } from "../../../mock/posts";
import { Container, Content } from "./styles";

const Posts = () => {
  const navigate = useNavigate();
  const handleNavigate = (post: any) => {
    navigate("/details/" + post.id, { state: post });
  };
  return (
    <HomeLayout>
      <Container>
        <Content>
          {MockedPosts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              subtitle={post.subtitle}
              title={post.title}
              createdAt={post.createdAt}
              createdBy={post.createdBy}
              imageUrl={post.imageUrl}
              isRestaurant={post.isRestaurant}
              isAdvertising={post.isAdvertising}
              location={{
                address: post.location.address,
                number: post.location.number,
                zipcode: post.location.zipcode,
              }}
              onClick={() => handleNavigate(post)}
            />
          ))}
        </Content>
      </Container>
    </HomeLayout>
  );
};

export default Posts;
