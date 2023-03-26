import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

const PostContainer = styled.div`
  border-radius: 12px;
  border: 2px solid transparent; 
  padding: 12px;

  &:hover {
    border: 2px solid #6ce1cc; 
    box-shadow: 0px 2px 10px rgb(0 0 0 / 24%); 
  }
`;

const PostDate = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
`;

const PostTitle = styled.h3`
  margin-bottom: 8px;
  margin-top: 0;
`;

const PostDescription = styled.p`
  margin-bottom: 0;
  font-weight: 400;
`;

const PostArrowContainer = styled.div`
  margin-top: 16px;
`;

const Arrow = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.secondary};
`;

function PostTile({
  link, date, title, description,
}) {
  return (
    <PostContainer>
      <Link to={link}>
        <article>
          <header>
            <PostDate>{date}</PostDate>
            <PostTitle>{title}</PostTitle>
          </header>
          <section>
            <PostDescription>{description}</PostDescription>
          </section>
          <PostArrowContainer>
            <Arrow icon={faArrowRightLong} />
          </PostArrowContainer>
        </article>
      </Link>
    </PostContainer>
  );
}

export default PostTile;
