import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.end('OK');
  return {
    props: {
    },
  };
};

export default (): React.ReactNode => null;