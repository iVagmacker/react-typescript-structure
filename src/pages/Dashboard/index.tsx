import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/50815749?s=460&u=956ffe3f410d2ee440edc2f85e8ba4c8b255d547&v=4"
            alt="Raul Vagmacker"
          />
          <div>
            <strong>iVagmacker/react-typescript-structure</strong>
            <p>ReactJs, Typescript, Structure and Standards</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/50815749?s=460&u=956ffe3f410d2ee440edc2f85e8ba4c8b255d547&v=4"
            alt="Raul Vagmacker"
          />
          <div>
            <strong>iVagmacker/react-typescript-structure</strong>
            <p>ReactJs, Typescript, Structure and Standards</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/50815749?s=460&u=956ffe3f410d2ee440edc2f85e8ba4c8b255d547&v=4"
            alt="Raul Vagmacker"
          />
          <div>
            <strong>iVagmacker/react-typescript-structure</strong>
            <p>ReactJs, Typescript, Structure and Standards</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
