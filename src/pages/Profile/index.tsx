import React from "react";

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  const TabContent = () => {
    return <div className="content">
      <RepoIcon/>
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  }

  return (
    <Container>
      <Tab className='desktop'>
        <div className='wrapper'>
          <span className="offset"/>
          <TabContent/>
        </div>
        <span className='line'/>

      </Tab>
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
          <Tab className="mobile">
            <TabContent />
            <span className='line'/>
          </Tab>
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
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar/>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
