import { Container } from '../../Container';
function Item() {
  return (
    <>
      <Container className="flex justify-center items-center w-32 h-w-32 p-4 border border-[#EBEBEB] shadow-none">
        <img src="img/presto.svg" draggable={false} alt="img" />
      </Container>
      <Container className="flex justify-center items-center w-32 h-w-32 p-4 border border-[#EBEBEB] shadow-none">
        <img src="img/powerBi.svg" draggable={false} alt="img" />
      </Container>
      <Container className="flex justify-center items-center w-32 h-w-32 p-4 border border-[#EBEBEB] shadow-none">
        <img src="img/looker.svg" draggable={false} alt="img" />
      </Container>
      <Container className="flex justify-center items-center w-32 h-w-32 p-4 border border-[#EBEBEB] shadow-none">
        <img src="img/metabase.svg" draggable={false} alt="img" />
      </Container>
      <Container className="flex justify-center items-center w-32 h-w-32 p-4 border border-[#EBEBEB] shadow-none">
        <img src="img/tableu.svg" draggable={false} alt="img" />
      </Container>
    </>
  );
}
export function BottomLoopMobile() {
  return (
    <>
      <div className="grid place-items-center overflow-hidden relative w-full after:content-[' '] after:bg-gradient-to-l after:from-[rgba(255,255,255,0)] after:to-[rgba(255,255,255,1)] after:absolute after:h-full after:w-[10%] after:z-10 after:left-0 after:top-0 before:right-0 before:top-0 before:rotate-180 before:content-[' '] before:bg-gradient-to-l before:from-[rgba(255,255,255,0)] before:to-[rgba(255,255,255,1)] before:absolute before:h-full before:w-[10%] before:z-10">
        <div className="flex w-[calc(250px * 6)] animate-slideSlow gap-10">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
}
