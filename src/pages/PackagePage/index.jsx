import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';
import { PackagesOne } from './Packages/PackagesOne';
import { PackagesTwo } from './Packages/PackagesTwo';
import {PackagesThree} from './Packages/PackagesThree'

export const PackagePage = () => {
  return (
    <>
      <ButtonBack />
      <main>
        <Title label="Svatební zájezdy" />
        <PackagesOne />
        <PackagesTwo/>
        <PackagesThree />
      </main>
      <ButtonUp />
    </>
  );
};
