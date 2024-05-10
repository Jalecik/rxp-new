import OrganizationsCard from 'components/organizations/organizations.component';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { commonServerSideProps, dataSerialize } from 'src/core/helpers/common';
import { showToast } from 'src/core/shared/notification/notification';
import Title from 'src/core/shared/title/title.component';
import { getAllOrganizations } from 'src/features/organizations/services/organization.service';
import { IOrganization } from 'src/features/organizations/types/organizations';


export async function getServerSideProps() {
  return commonServerSideProps(getAllOrganizations);
}

const Organizations: NextPage<{ data: IOrganization[], error: string }> = ({ data, error }) => {
  if (error) {
    showToast(error, 'error');
  }
  return (
    <section>
      <Head>
        <title>{'Ekologiya və təbii sərvətlər nazirliyi Qurumlar'}</title>
        <meta name='description' content={'Ekologiya və təbii sərvətlər nazirliyi tabeliyinde olan qurumlar'} key='desc' />
      </Head>
      <div className="container container-custom mt-40">
        <div className='row'>
          <div className="col-md-12 p-0">
            <Title text='Qurumlar' size='large' />
          </div>
          <OrganizationsCard data={data} />
        </div>
      </div>
    </section>
  );
}

export default Organizations;
