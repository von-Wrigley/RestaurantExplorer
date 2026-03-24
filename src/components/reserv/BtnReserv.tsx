import Av from './Av';

async function BtnReserv({ id }: { id: string }) {
  return (
    <div className="self-center ">
      <Av id={id} />
    </div>
  );
}

export default BtnReserv;
