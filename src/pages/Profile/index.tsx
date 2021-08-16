import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"ingriderci"}
            name={"Ingrid Erci"}
            avatarUrl={"https://avatars.githubusercontent.com/u/8032317?v=4"}
            followers={1000}
            following={9}
            company={"Labenu"}
            location={"Porto Alegre, Brazil"}
            email={"ingrid_flack@hotmail.com"}
            blog={"www.linkedin.com/in/ingrid-flack"}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  reponame={"Meu repositório"}
                  username={"ingridflack"}
                  description={"Este é um repositório show de bola"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
